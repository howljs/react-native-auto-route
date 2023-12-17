import React, { useMemo } from 'react';
import { useRouteNode, type DynamicConvention, type RouteNode } from '../Route';
import type { ScreenProps } from '../navigator/createNavigatorFactory';
import { Screen } from '../navigator/primitives';
import { buildRouter } from '../routeBuilder';
import { matchGroupName } from '../utils/matchers';

function getSortedChildren(
  children: RouteNode[],
  order?: ScreenProps[],
  initialRouteName?: string
): { route: RouteNode; props: Partial<ScreenProps> }[] {
  if (!order?.length) {
    return children
      .sort(sortRoutesWithInitial(initialRouteName))
      .map((route) => ({ route, props: {} }));
  }
  const entries = [...children];

  const ordered = order
    .map(({ name, initialParams, listeners, options, getId }) => {
      if (!entries.length) {
        console.warn(
          `[Layout children]: Too many screens defined. Route "${name}" is extraneous.`
        );
        return null;
      }
      const matchIndex = entries.findIndex((child) => child.route === name);
      if (matchIndex === -1) {
        console.warn(
          `[Layout children]: No route named "${name}" exists in nested children:`,
          children.map(({ route }) => route)
        );
        return null;
      } else {
        // Get match and remove from entries
        const match = entries[matchIndex];
        entries.splice(matchIndex, 1);

        return {
          route: match,
          props: { initialParams, listeners, options, getId },
        };
      }
    })
    .filter(Boolean) as {
    route: RouteNode;
    props: Partial<ScreenProps>;
  }[];

  // Add any remaining children
  ordered.push(
    ...entries
      .sort(sortRoutesWithInitial(initialRouteName))
      .map((route) => ({ route, props: {} }))
  );

  return ordered;
}

/**
 * @returns React Navigation screens sorted by the `route` property.
 */
export function useSortedScreens(order: ScreenProps[]): React.ReactNode[] {
  const node = useRouteNode();

  const sorted = useMemo(() => {
    const sortedChildren = node?.children?.length
      ? getSortedChildren(node.children, order, node.initialRouteName)
      : [];

    return sortedChildren.map((value) =>
      routeToScreen(value.route, value.props)
    );
  }, [node?.children, node?.initialRouteName, order]);

  return sorted;
}

export function createGetIdForRoute(
  route: Pick<RouteNode, 'dynamic' | 'route'>
) {
  if (!route.dynamic?.length) {
    return undefined;
  }
  return ({ params }: { params?: Record<string, any> }) => {
    const getPreferredId = (segment: DynamicConvention) => {
      // Params can be undefined when there are no params in the route.
      const preferredId = params?.[segment.name];
      // If the route has a dynamic segment, use the matching parameter
      // as the screen id. This enables pushing a screen like `/[user]` multiple times
      // when the user is different.
      if (preferredId) {
        if (!Array.isArray(preferredId)) {
          return preferredId;
        } else if (preferredId.length) {
          // Deep dynamic routes will return as an array, so we'll join them to create a
          // fully qualified string.
          return preferredId.join('/');
        }
        // Empty arrays...
      }
      return segment.deep ? `[...${segment.name}]` : `[${segment.name}]`;
    };
    return route.dynamic?.map((segment) => getPreferredId(segment)).join('/');
  };
}

function routeToScreen(
  route: RouteNode,
  { options, ...props }: ScreenProps = {}
) {
  return (
    <Screen
      getId={createGetIdForRoute(route)}
      {...props}
      name={route.route}
      key={route.route}
      options={(args) => {
        const defaultOptions: Record<string, any> = {
          headerBackTitleVisible: false,
          headerBackButtonMenuEnabled: false,
        };

        let customOptions = {};
        if (typeof options === 'function') {
          customOptions = options(args);
        } else if (options) {
          customOptions = options;
        }

        return { ...defaultOptions, ...customOptions };
      }}
      getComponent={() => buildRouter(route)}
    />
  );
}

export function sortRoutesWithInitial(initialRouteName?: string) {
  return (a: RouteNode, b: RouteNode): number => {
    if (initialRouteName) {
      if (a.route === initialRouteName) {
        return -1;
      }
      if (b.route === initialRouteName) {
        return 1;
      }
    }
    return sortRoutes(a, b);
  };
}

export function sortRoutes(a: RouteNode, b: RouteNode): number {
  if (a.dynamic && !b.dynamic) {
    return 1;
  }
  if (!a.dynamic && b.dynamic) {
    return -1;
  }
  if (a.dynamic && b.dynamic) {
    if (a.dynamic.length !== b.dynamic.length) {
      return b.dynamic.length - a.dynamic.length;
    }
    for (let i = 0; i < a.dynamic.length; i++) {
      const aDynamic = a.dynamic[i];
      const bDynamic = b.dynamic[i];
      if (aDynamic?.deep && !bDynamic?.deep) {
        return 1;
      }
      if (!aDynamic?.deep && bDynamic?.deep) {
        return -1;
      }
    }
    return 0;
  }

  const aIndex = a.route === 'index' || matchGroupName(a.route) != null;
  const bIndex = b.route === 'index' || matchGroupName(b.route) != null;

  if (aIndex && !bIndex) {
    return -1;
  }
  if (!aIndex && bIndex) {
    return 1;
  }

  return a.route.length - b.route.length;
}
