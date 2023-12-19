/**
 * This file is a fork of Expo's getRoutes.ts
 * https://github.com/expo/router/blob/main/packages/expo-router/src/getRoutes.ts
 */

import type { DynamicConvention, RouteNode } from '../Route';
import {
  getNameFromFilePath,
  matchDeepDynamicRouteName,
  matchDynamicName,
  matchGroupName,
  removeSupportedExtensions,
  stripGroupSegmentsFromPath,
  stripInvisibleSegmentsFromPath,
} from './matchers';

export type FileNode = Pick<RouteNode, 'contextKey' | 'loadRoute'> & {
  /** Like `(tab)/index` */
  normalizedName: string;
};

type TreeNode = {
  name: string;
  children: TreeNode[];
  parents: string[];
  /** null when there is no file in a folder. */
  node: FileNode | null;
};

type Options = {
  ignore?: RegExp[];
  DefaultLayout?: React.ComponentType<any>;
};

/** Convert a flat map of file nodes into a nested tree of files. */
export function getRecursiveTree(files: FileNode[]): TreeNode {
  const tree = {
    name: '',
    children: [],
    parents: [],
    node: null,
  };

  for (const file of files) {
    // ['(tab)', 'settings', '[...another]']
    const parts = file.normalizedName.split('/');
    let currentNode: TreeNode = tree;
    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]!;

      if (i === parts.length - 1 && part === '_layout') {
        if (currentNode.node) {
          const overwritten = currentNode.node.contextKey;
          throw new Error(
            `Higher priority Layout Route "${file.contextKey}" overriding redundant Layout Route "${overwritten}". Remove the Layout Route "${overwritten}" to fix this.`
          );
        }
        continue;
      }

      const existing = currentNode.children.find((item) => item.name === part);
      if (existing) {
        currentNode = existing;
      } else {
        const newNode: TreeNode = {
          name: part,
          children: [],
          parents: [...currentNode.parents, currentNode.name],
          node: null,
        };
        currentNode.children.push(newNode);
        currentNode = newNode;
      }
    }
    currentNode.node = file;
  }

  if (__DEV__) {
    assertDeprecatedFormat(tree);
  }

  return tree;
}

function assertDeprecatedFormat(tree: TreeNode) {
  for (const child of tree.children) {
    if (
      child.node &&
      child.children.length &&
      !child.node.normalizedName.endsWith('_layout')
    ) {
      const ext = child.node.contextKey.split('.').pop();
      throw new Error(
        `Using deprecated Layout Route format: Move \`./app/${child.node.normalizedName}.${ext}\` to \`./app/${child.node.normalizedName}/_layout.${ext}\``
      );
    }
    assertDeprecatedFormat(child);
  }
}

function getTreeNodesAsRouteNodes(nodes: TreeNode[]): RouteNode[] {
  return nodes
    .map((node) => treeNodeToRouteNode(node))
    .flat()
    .filter(Boolean) as RouteNode[];
}

export function generateDynamicFromSegment(
  name: string
): DynamicConvention | null {
  const deepDynamicName = matchDeepDynamicRouteName(name);
  const dynamicName = deepDynamicName ?? matchDynamicName(name);

  return dynamicName ? { name: dynamicName, deep: !!deepDynamicName } : null;
}

export function generateDynamic(name: string): RouteNode['dynamic'] {
  const description = name
    .split('/')
    .map((segment) => generateDynamicFromSegment(segment))
    .filter(Boolean) as DynamicConvention[];
  return description.length === 0 ? null : description;
}

function collapseRouteSegments(route: string) {
  return stripGroupSegmentsFromPath(route.replace(/\/index$/, ''));
}

/**
 * Given a route node and a name representing the group name,
 * find the nearest child matching the name.
 *
 * Doesn't support slashes in the name.
 * Routes like `explore/(something)/index` will be matched against `explore`.
 *
 */
function getDefaultInitialRoute(node: RouteNode, name: string) {
  return node.children.find(
    (child) => collapseRouteSegments(child.route) === name
  );
}

function applyDefaultInitialRouteName(node: RouteNode): RouteNode {
  const groupName = matchGroupName(node.route);
  if (!node.children?.length) {
    return node;
  }

  let initialRouteName = groupName
    ? getDefaultInitialRoute(node, groupName)?.route
    : undefined;

  return {
    ...node,
    initialRouteName,
  };
}

function folderNodeToRouteNode({
  name,
  children,
}: TreeNode): RouteNode[] | null {
  // Empty folder, skip it.
  if (!children.length) {
    return null;
  }

  // When there's a directory, but no layout route file (with valid export), the child routes won't be grouped.
  // This pushes all children into the nearest layout route.
  return getTreeNodesAsRouteNodes(
    children.map((child) => {
      return {
        ...child,
        name: [name, child.name].filter(Boolean).join('/'),
      };
    })
  );
}

function fileNodeToRouteNode(tree: TreeNode): RouteNode[] | null {
  const { name, node, children } = tree;

  if (!node) throw new Error('node must be defined');

  const dynamic = generateDynamic(name);

  const clones = extrapolateGroupRoutes(name, node.contextKey);
  clones.delete(name);

  const output = {
    loadRoute: node.loadRoute,
    route: name,
    contextKey: node.contextKey,
    children: getTreeNodesAsRouteNodes(children),
    dynamic,
  };

  if (clones.size) {
    return [...clones].map((clone) =>
      applyDefaultInitialRouteName({
        ...output,
        contextKey: node.contextKey.replace(output.route, clone),
        route: clone,
      })
    );
  }

  return [
    applyDefaultInitialRouteName({
      loadRoute: node.loadRoute,
      route: name,
      contextKey: node.contextKey,
      children: getTreeNodesAsRouteNodes(children),
      dynamic,
    }),
  ];
}

function extrapolateGroupRoutes(
  route: string,
  contextKey: string,
  routes: Set<string> = new Set()
): Set<string> {
  const match = matchGroupName(route);

  if (!match) {
    routes.add(route);
    return routes;
  }

  const groups = match?.split(',');
  const groupsSet = new Set(groups);

  if (groupsSet.size !== groups.length) {
    throw new Error(
      `Array syntax cannot contain duplicate group name "${groups}" in "${contextKey}".`
    );
  }

  if (groups.length === 1) {
    routes.add(route);
    return routes;
  }

  for (const group of groups) {
    extrapolateGroupRoutes(
      route.replace(match, group.trim()),
      contextKey,
      routes
    );
  }

  return routes;
}

function treeNodeToRouteNode(tree: TreeNode): RouteNode[] | null {
  if (tree.node) {
    return fileNodeToRouteNode(tree);
  }

  return folderNodeToRouteNode(tree);
}

interface RequireContext {
  /** Return the keys that can be resolved. */
  keys(): string[];
  (id: string): any;
  <T>(id: string): T;
  /** **Unimplemented:** Return the module identifier for a user request. */
  resolve(id: string): string;
  /** **Unimplemented:** Readable identifier for the context module. */
  id: string;
}

function contextModuleToFileNodes(
  contextModule: RequireContext,
  files: string[] = contextModule.keys()
): FileNode[] {
  const nodes = files.map((key) => {
    try {
      const node: FileNode = {
        loadRoute() {
          return contextModule(key);
        },
        normalizedName: getNameFromFilePath(key),
        contextKey: key,
      };

      return node;
    } catch (error) {
      // Probably this won't stop metro from freaking out but it's worth a try.
      console.warn('Error loading route "' + key + '"', error);
    }
    return null;
  });

  return nodes.filter(Boolean) as FileNode[];
}

function hasCustomRootLayoutNode(routes: RouteNode[]) {
  if (routes.length !== 1) {
    return false;
  }
  // This could either be the root _layout or an app with a single file.
  const route = routes[0];

  if (
    route?.route === '' &&
    route.contextKey.match(/^\.\/_layout\.([jt]sx?)$/)
  ) {
    return true;
  }
  return false;
}

function treeNodesToRootRoute(
  treeNode: TreeNode,
  DefaultLayout?: React.ComponentType<any>
): RouteNode | null {
  const routes = treeNodeToRouteNode(treeNode);
  return withOptionalRootLayout(routes, DefaultLayout);
}

function processKeys(files: string[], options: Options): string[] {
  const { ignore } = options;

  return files.filter((file) => {
    return !ignore?.some((pattern) => pattern.test(file));
  });
}

/**
 * Asserts if the require.context has files that share the same name but have different extensions. Exposed for testing.
 * @private
 */
export function assertDuplicateRoutes(filenames: string[]) {
  if (!__DEV__) {
    return;
  }

  const duplicates = filenames
    .map((filename) => removeSupportedExtensions(filename))
    .reduce((acc, filename) => {
      acc[filename] = acc[filename] ? acc[filename]! + 1 : 1;
      return acc;
    }, {} as Record<string, number>);

  Object.entries(duplicates).forEach(([filename, count]) => {
    if (count > 1) {
      throw new Error(`Multiple files match the route name "${filename}".`);
    }
  });
}

/** Given a Metro context module, return an array of nested routes. */
export function getRoutes(
  contextModule: RequireContext,
  options?: Options
): RouteNode | null {
  const route = getExactRoutes(contextModule, options);

  // If there is no route, return an empty route.
  if (!route) {
    return null;
  }

  // Auto add not found route if it doesn't exist
  appendUnmatchedRoute(route);

  return route;
}

function getIgnoreList(options?: Options) {
  const ignore: RegExp[] = [
    /^\.\/\+html\.[tj]sx?$/,
    ...(options?.ignore ?? []),
  ];
  return ignore;
}

/** Get routes without unmatched or sitemap. */
export function getExactRoutes(
  contextModule: RequireContext,
  options?: Options
): RouteNode | null {
  const treeNodes = contextModuleToTree(contextModule, options);
  const route = treeNodesToRootRoute(treeNodes, options?.DefaultLayout);
  return route || null;
}

function contextModuleToTree(contextModule: RequireContext, options?: Options) {
  const allowed = processKeys(contextModule.keys(), {
    ...options,
    ignore: getIgnoreList(options),
  });
  assertDuplicateRoutes(allowed);
  const files = contextModuleToFileNodes(contextModule, allowed);
  return getRecursiveTree(files);
}

function appendUnmatchedRoute(routes: RouteNode) {
  // Auto add not found route if it doesn't exist
  const userDefinedDynamicRoute = getUserDefinedDeepDynamicRoute(routes);
  if (!userDefinedDynamicRoute) {
    routes.children.push({
      loadRoute() {
        return { default: require('../components/PageNotFound').default };
      },
      route: '[...404]',
      contextKey: './[...404].tsx',
      dynamic: [{ name: '404', deep: true }],
      children: [],
      generated: true,
      internal: true,
    });
  }
  return routes;
}

/**
 * Exposed for testing.
 * @returns a top-level deep dynamic route if it exists, otherwise null.
 */
export function getUserDefinedDeepDynamicRoute(
  routes: RouteNode
): RouteNode | null {
  // Auto add not found route if it doesn't exist
  for (const route of routes.children ?? []) {
    if (route.generated) continue;
    const opaqueRoute = stripInvisibleSegmentsFromPath(route.route);
    const isDeepDynamic = matchDeepDynamicRouteName(opaqueRoute);
    if (isDeepDynamic) {
      return route;
    }
    // Recurse through group routes
    if (matchGroupName(route.route)) {
      const child = getUserDefinedDeepDynamicRoute(route);
      if (child) {
        return child;
      }
    }
  }
  return null;
}

function withOptionalRootLayout(
  routes: RouteNode[] | null,
  DefaultLayout?: React.ComponentType<any>
): RouteNode | null {
  if (!routes?.length) {
    return null;
  }

  if (hasCustomRootLayoutNode(routes)) {
    return routes[0]!;
  }

  return {
    loadRoute: () => ({
      default:
        DefaultLayout ||
        (require('../navigator/Stack') as typeof import('../navigator/Stack'))
          .default,
    }),
    contextKey: './_layout.tsx',
    route: '',
    generated: true,
    dynamic: null,
    children: routes,
  };
}
