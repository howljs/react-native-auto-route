import {
  NavigationContainerRefContext,
  StackActions,
  getStateFromPath,
  type NavigationAction,
  type NavigationState,
} from '@react-navigation/core';
import { LinkingContext } from '@react-navigation/native';
import * as React from 'react';
import type { ResultState } from '../utils/getStateFromPath';

export type To<
  ParamList extends ReactNavigation.RootParamList = ReactNavigation.RootParamList,
  RouteName extends keyof ParamList = keyof ParamList
> =
  | string
  | (undefined extends ParamList[RouteName]
      ? {
          screen: Extract<RouteName, string>;
          params?: ParamList[RouteName];
        }
      : {
          screen: Extract<RouteName, string>;
          params: ParamList[RouteName];
        });

export default function useLinkTo<
  ParamList extends ReactNavigation.RootParamList
>() {
  const navigation = React.useContext(NavigationContainerRefContext);
  const linking = React.useContext(LinkingContext);

  const linkTo = React.useCallback(
    (to: To<ParamList>, type: 'PUSH' | 'REPLACE') => {
      if (navigation === undefined) {
        throw new Error(
          "Couldn't find a navigation object. Is your component inside NavigationContainer?"
        );
      }

      if (typeof to !== 'string') {
        if (type === 'REPLACE') {
          // @ts-expect-error: This is fine
          navigation.dispatch(StackActions.replace(to.screen, to.params));
        } else {
          // @ts-expect-error: This is fine
          navigation.navigate(to.screen, to.params);
        }
        return;
      }

      if (to === '..' || to === '../') {
        navigation.goBack();
        return;
      }

      if (to.startsWith('.')) {
        throw new Error('Not implemented');
      }

      if (!to.startsWith('/')) {
        to = `/${to}`;
      }

      const { options } = linking;

      const state = options?.getStateFromPath
        ? options.getStateFromPath(to, options.config)
        : getStateFromPath(to, options?.config);

      if (state) {
        const rootState = navigation.getRootState();
        switch (type) {
          case 'REPLACE':
            return navigation.dispatch(
              getNavigateReplaceAction(state, rootState)
            );
          default:
            return navigation.dispatch(getNavigatePushAction(state, rootState));
        }
      } else {
        throw new Error('Failed to parse the path to a navigation state.');
      }
    },
    [linking, navigation]
  );

  return linkTo;
}

type NavigationParams = Partial<{
  screen: string;
  params: NavigationParams;
}>;

function rewriteNavigationStateToParams(
  state?: { routes: ResultState['routes'] },
  params: NavigationParams = {}
) {
  if (!state) return params;
  // We Should always have at least one route in the state
  const lastRoute = state.routes[state.routes.length - 1]!;
  params.screen = lastRoute.name;
  // Weirdly, this always needs to be an object. If it's undefined, it won't work.
  params.params = lastRoute.params
    ? JSON.parse(JSON.stringify(lastRoute.params))
    : {};

  if (lastRoute.state) {
    rewriteNavigationStateToParams(lastRoute.state, params.params);
  }

  return JSON.parse(JSON.stringify(params));
}

function getNavigatePushAction(state: ResultState, rootState: NavigationState) {
  const { screen, params } = rewriteNavigationStateToParams(state);
  return {
    type: 'NAVIGATE',
    target: rootState.key,
    payload: {
      name: screen,
      params,
    },
  };
}

function getNavigateReplaceAction(
  state: ResultState,
  parentState: NavigationState,
  lastNavigatorSupportingReplace: NavigationState = parentState
): NavigationAction {
  // We should always have at least one route in the state
  const route = state.routes[state.routes.length - 1]!;

  // Only these navigators support replace
  if (parentState.type === 'stack' || parentState.type === 'tab') {
    lastNavigatorSupportingReplace = parentState;
  }

  const currentRoute = parentState.routes.find(
    (parentRoute) => parentRoute.name === route.name
  );
  const routesAreEqual = parentState.routes[parentState.index] === currentRoute;

  // If there is nested state and the routes are equal, we should keep going down the tree
  if (route.state && routesAreEqual && currentRoute?.state) {
    return getNavigateReplaceAction(
      route.state,
      currentRoute.state as any,
      lastNavigatorSupportingReplace
    );
  }

  // Either we reached the bottom of the state or the point where the routes diverged
  const { screen, params } = rewriteNavigationStateToParams(state);

  return {
    type:
      lastNavigatorSupportingReplace.type === 'stack' ? 'REPLACE' : 'JUMP_TO',
    target: lastNavigatorSupportingReplace?.key,
    payload: {
      name: screen,
      params,
    },
  };
}
