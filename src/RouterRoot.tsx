import {
  NavigationContainer,
  createNavigationContainerRef,
  type LinkingOptions,
  type NavigationContainerRef,
  type NavigationState,
  type Theme,
} from '@react-navigation/native';
import React, { forwardRef, useMemo, type ReactNode } from 'react';
import { appContext } from '../_context';
import PageNotFound from './components/PageNotFound';
import { buildRouter } from './routeBuilder';
import { getLinkingConfig } from './utils/getLinkingConfig';
import { getRouteInfo, type UrlObject } from './utils/getRouteInfo';
import { getRoutes } from './utils/getRoutes';

export interface RouterRootProps {
  theme?: Theme;
  fallback?: ReactNode;
  onReady?: () => void;
  onStateChange?: (
    state?: UrlObject,
    navigationState?: NavigationState
  ) => void;
  linking?: Omit<
    LinkingOptions<any>,
    'config' | 'getInitialURL' | 'getStateFromPath' | 'getPathFromState'
  >;
}

const navigationRef = createNavigationContainerRef();

const RouterRoot = (
  {
    theme,
    fallback,
    onReady,
    onStateChange,
    linking: customLinking,
  }: RouterRootProps,
  ref: React.Ref<NavigationContainerRef<ReactNavigation.RootParamList>>
) => {
  const router = useMemo(() => {
    const routes = getRoutes(appContext);
    if (!routes) {
      return { Router: PageNotFound };
    }

    const linking = getLinkingConfig(routes);
    const Router = buildRouter(routes);
    return { Router, linking };
  }, []);

  const Router = router.Router;

  const _onStateChange = (state?: NavigationState) => {
    if (state && router.linking?.config) {
      onStateChange?.(getRouteInfo(state, router.linking.config), state);
    } else {
      onStateChange?.(undefined, state);
    }
  };

  return (
    <NavigationContainer
      onStateChange={onStateChange ? _onStateChange : undefined}
      onReady={onReady}
      ref={ref || navigationRef}
      theme={theme}
      fallback={fallback}
      linking={
        customLinking ? { ...router.linking, ...customLinking } : undefined
      }
    >
      <Router />
    </NavigationContainer>
  );
};

export default forwardRef(RouterRoot);
