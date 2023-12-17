import type { LinkingOptions } from '@react-navigation/native';
import type { RouteNode } from '../Route';
import getPathFromState, { type State } from './getPathFromState';
import getStateFromPath from './getStateFromPath';
import { matchDeepDynamicRouteName, matchDynamicName } from './matchers';

export type Screen =
  | string
  | {
      path: string;
      screens: Record<string, Screen>;
      _route?: RouteNode;
      initialRouteName?: string;
    };

export const getLinkingConfig = (route: RouteNode): LinkingOptions<any> => {
  const config = getConfig(route);
  return {
    prefixes: [],
    config: getConfig(route),
    getStateFromPath: getStateFromPathMemoized,
    getPathFromState(
      state: State,
      options: Parameters<typeof getPathFromState>[1]
    ) {
      return (
        getPathFromState(state, {
          ...config,
          ...options,
        }) ?? '/'
      );
    },
  };
};

export const stateCache = new Map<string, any>();

/** We can reduce work by memoizing the state by the pathname. This only works because the options (linking config) theoretically never change.  */
function getStateFromPathMemoized(
  path: string,
  options: Parameters<typeof getStateFromPath>[1]
) {
  const cached = stateCache.get(path);
  if (cached) {
    return cached;
  }
  const result = getStateFromPath(path, options);
  stateCache.set(path, result);
  return result;
}

export function getConfig(route: RouteNode): {
  initialRouteName?: string;
  screens: Record<string, Screen>;
} {
  const screens = getReactNavigationScreensConfig(route.children);
  let initialRouteName = route.initialRouteName;
  if (!initialRouteName) {
    initialRouteName = Object.keys(screens)[0];
  }
  return {
    initialRouteName: initialRouteName,
    screens: screens,
  };
}

function getReactNavigationScreensConfig(
  nodes: RouteNode[]
): Record<string, Screen> {
  return Object.fromEntries(
    nodes.map((node) => [node.route, convertRouteNodeToScreen(node)] as const)
  );
}

// `[page]` -> `:page`
// `page` -> `page`
function convertDynamicRouteToReactNavigation(segment: string): string {
  // NOTE(EvanBacon): To support shared routes we preserve group segments.
  if (segment === 'index') {
    return '';
  }

  const rest = matchDeepDynamicRouteName(segment);
  if (rest != null) {
    return '*' + rest;
  }
  const dynamicName = matchDynamicName(segment);

  if (dynamicName != null) {
    return `:${dynamicName}`;
  }

  return segment;
}

function parseRouteSegments(segments: string): string {
  return (
    // NOTE(EvanBacon): When there are nested routes without layouts
    // the node.route will be something like `app/home/index`
    // this needs to be split to ensure each segment is parsed correctly.
    segments
      .split('/')
      // Convert each segment to a React Navigation format.
      .map(convertDynamicRouteToReactNavigation)
      // Remove any empty paths from groups or index routes.
      .filter(Boolean)
      // Join to return as a path.
      .join('/')
  );
}

function convertRouteNodeToScreen(node: RouteNode): Screen {
  const path = parseRouteSegments(node.route);
  if (!node.children.length) {
    return path;
  }
  const screens = getReactNavigationScreensConfig(node.children);

  const screen: Screen = {
    path,
    screens,
    // NOTE(EvanBacon): This is bad because it forces all Layout Routes
    // to be loaded into memory. We should move towards a system where
    // the initial route name is either loaded asynchronously in the Layout Route
    // or defined via a file system convention.
    initialRouteName: node.initialRouteName,
  };

  return screen;
}
