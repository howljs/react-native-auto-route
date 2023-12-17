import React from 'react';
import { View } from 'react-native';
import { Route, type RouteNode } from './Route';
import ErrorBoundary from './components/ErrorBoundary';
import PageNotFound from './components/PageNotFound';

const importModule = (
  route: RouteNode
): Promise<{ default: React.ComponentType<any> }> => {
  const component = route.loadRoute();
  if (component instanceof Promise) {
    return component;
  }
  const response = { default: component.default || PageNotFound };
  return new Promise((resolve) => resolve(response));
};

const routeStored = new WeakMap<RouteNode, React.ComponentType<any>>();

export function buildRouter(value: RouteNode, fallback?: React.ReactNode) {
  if (routeStored.has(value)) {
    return routeStored.get(value)!;
  }

  let getLoadable: (props: any, ref: any) => JSX.Element;

  if (process.env.IMPORT_MODE === 'lazy') {
    const AsyncComponent = React.lazy(() => importModule(value));
    getLoadable = (props: any, ref: any) => {
      return (
        <ErrorBoundary name={value.contextKey}>
          <React.Suspense fallback={fallback || <View />}>
            <AsyncComponent
              {...{
                ...props,
                ref,
                segment: value.route,
              }}
            />
          </React.Suspense>
        </ErrorBoundary>
      );
    };
  } else {
    const SyncComponent = React.forwardRef((props, ref) => {
      const Component = value.loadRoute().default;
      if (Component) {
        return <Component {...props} ref={ref} />;
      }
      return <PageNotFound />;
    });

    getLoadable = (props: any, ref: any) => (
      <SyncComponent
        {...{
          ...props,
          ref,
          segment: value.route,
        }}
      />
    );
  }

  const RouteWithRef = React.forwardRef((props: any, ref: any) => {
    return <Route node={value}>{getLoadable(props, ref)}</Route>;
  });

  RouteWithRef.displayName = `Route(${value.route})`;
  routeStored.set(value, RouteWithRef);
  return RouteWithRef;
}
