import {
  NavigationContainer,
  type NavigationState,
  type Theme,
} from '@react-navigation/native';
import React, { useMemo, type ReactNode } from 'react';
import { appContext } from '../_context';
import PageNotFound from './components/PageNotFound';
import { navigationRef } from './navigator/RootNavigation';
import { buildRouter } from './routeBuilder';
import { getLinkingConfig } from './utils/getLinkingConfig';
import { getRoutes } from './utils/getRoutes';

export interface RouterRootProps {
  theme?: Theme;
  fallback?: ReactNode;
  onReady?: () => void;
  onStateChange?: (state: NavigationState | undefined) => void;
  prefixes?: string[];
}

const RouterRoot = ({
  theme,
  fallback,
  onReady,
  onStateChange,
  prefixes = [],
}: RouterRootProps) => {
  const router = useMemo(() => {
    const routes = getRoutes(appContext);
    if (!routes) {
      return { Router: PageNotFound, linking: { prefixes: [] } };
    }

    const linking = getLinkingConfig(routes);
    const Router = buildRouter(routes);
    return { Router, linking };
  }, []);

  const Router = router.Router;

  return (
    <NavigationContainer
      onStateChange={onStateChange}
      onReady={onReady}
      ref={navigationRef}
      theme={theme}
      fallback={fallback}
      linking={{ ...router.linking, prefixes: prefixes }}
    >
      <Router />
    </NavigationContainer>
  );
};

export default RouterRoot;
