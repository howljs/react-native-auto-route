import React, { useContext, type ReactNode } from 'react';

import type { ParamListBase, RouteProp } from '@react-navigation/native';
import { getContextKey } from './utils/matchers';

export type DynamicConvention = { name: string; deep: boolean };

export type LoadedRoute = {
  default?: React.ComponentType<any>;
  screenOptions?:
    | RouteProp<ParamListBase, string>
    | ((props: {
        route: any;
        navigation: any;
      }) => RouteProp<ParamListBase, string>);
  initialParams?: Record<string, any>;
};

export type RouteNode = {
  /** Load a route into memory. Returns the exports from a route. */
  loadRoute: () => Partial<LoadedRoute>;
  /** Loaded initial route name. */
  initialRouteName?: string;
  /** nested routes */
  children: RouteNode[];
  /** Is the route a dynamic path */
  dynamic: null | DynamicConvention[];
  /** `index`, `error-boundary`, etc. */
  route: string;
  /** Context Module ID, used for matching children. */
  contextKey: string;
  /** Added in-memory */
  generated?: boolean;
  /** Internal screens like the directory or the auto 404 should be marked as internal. */
  internal?: boolean;
};

const CurrentRouteContext = React.createContext<RouteNode | null>(null);

/** Return the RouteNode at the current contextual boundary. */
export function useRouteNode(): RouteNode | null {
  return useContext(CurrentRouteContext);
}

export function useContextKey(): string {
  const node = useRouteNode();
  if (node == null) {
    throw new Error('No filename found');
  }
  return getContextKey(node.contextKey);
}

/** Provides the matching routes and filename to the children. */
export function Route({
  children,
  node,
}: {
  children: ReactNode;
  node: RouteNode;
}) {
  return (
    <CurrentRouteContext.Provider value={node}>
      {children}
    </CurrentRouteContext.Provider>
  );
}
