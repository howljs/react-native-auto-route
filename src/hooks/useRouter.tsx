import {
  LinkingContext,
  NavigationContainerRefContext,
  NavigationContext,
  StackActions,
  type LinkingOptions,
  type NavigationAction,
  type NavigationContainerRef,
  type NavigationState,
  type ParamListBase,
} from '@react-navigation/native';
import { useContext } from 'react';
import getStateFromPath, { type ResultState } from '../utils/getStateFromPath';

type Keyof<T extends {}> = Extract<keyof T, string>;

export type To<
  ParamList extends ReactNavigation.RootParamList = ReactNavigation.RootParamList,
  RouteName extends keyof ParamList = Keyof<ParamList>
> =
  | RouteName
  | (undefined extends ParamList[RouteName]
      ? {
          screen: Extract<RouteName, string>;
          params?: ParamList[RouteName];
          merge?: boolean;
        }
      : {
          screen: Extract<RouteName, string>;
          params: ParamList[RouteName];
          merge?: boolean;
        });

export type Router<
  ParamList extends ParamListBase,
  RouteName extends Keyof<ParamList> = Keyof<ParamList>,
  ScreenOptions extends {} = {}
> = {
  /**
   * Navigate to another screen. If the route name is exist, navigate to that.
   */
  navigate: <T extends ParamList = ParamList>(to: To<T>) => void;

  /**
   * The push action adds a route on top of the stack and navigates forward to it.
   * This differs from navigate in that navigate will pop back to earlier in the stack if a route of the given name
   * is already present there. push will always add on top, so a route can be present multiple times.
   */
  push: <T extends ParamList = ParamList>(to: To<T>) => void;

  /**
   * Replace with another screen
   */
  replace: <T extends ParamList = ParamList>(to: To<T>) => void;
  /**
   * Check if dispatching back action will be handled by navigation.
   * Note that this method doesn't re-render screen when the result changes. So don't use it in `render`.
   */
  canGoBack: () => boolean;

  /**
   * Check if the screen is focused. The method returns `true` if focused, `false` otherwise.
   * Note that this method doesn't re-render screen when the focus changes. So don't use it in `render`.
   * To get notified of focus changes, use `addListener('focus', cb)` and `addListener('blur', cb)`.
   * To conditionally render content based on focus state, use the `useIsFocused` hook.
   */
  isFocused: () => boolean;
  /**
   * Go back to the previous route in history.
   */
  back: () => void;

  /**
   * The pop action takes you back to a previous screen in the stack.
   * It takes one optional argument (count), which allows you to specify how many screens to pop back by.
   */
  pop: (count: number) => void;

  /**
   * The popToTop action takes you back to the first screen in the stack, dismissing all the others.
   * It's functionally identical to StackActions.pop({n: currentIndex}).
   */
  popToTop: () => void;
  /**
   * Update the param object for the route.
   * The new params will be shallow merged with the old one.
   *
   * @param params Params object for the current route.
   */
  setParams(
    params: ParamList[RouteName] extends undefined
      ? undefined
      : Partial<ParamList[RouteName]>
  ): void;

  /**
   * Update the options for the route.
   * The options object will be shallow merged with default options object.
   *
   * @param options Options object for the route.
   */
  setOptions(options: Partial<ScreenOptions>): void;
};

const useRouter = <
  ParamList extends ParamListBase,
  RouteName extends Keyof<ParamList> = Keyof<ParamList>,
  ScreenOptions extends {} = {}
>(): Router<ParamList, RouteName, ScreenOptions> => {
  const navigationContainer = useContext(NavigationContainerRefContext);
  const navigation = useContext(NavigationContext);
  const linking = useContext(LinkingContext);

  const navigate = <T extends ParamList = ParamList>(to: To<T>) => {
    if (!navigationContainer || !linking.options) {
      throw Error("Couldn't find a navigation object");
    }
    let merge = false;
    if (typeof to !== 'string') {
      merge = to.merge ?? false;
    }
    const path = resolveTo(to);
    linkTo(path, {
      navigation: navigationContainer,
      linkingOptions: linking.options,
      type: 'NAVIGATE',
      merge,
    });
  };

  const push = <T extends ParamList = ParamList>(to: To<T>) => {
    if (!navigationContainer || !linking.options) {
      throw Error("Couldn't find a navigation object");
    }
    const path = resolveTo(to);
    linkTo(path, {
      navigation: navigationContainer,
      linkingOptions: linking.options,
      type: 'PUSH',
    });
  };

  const replace = <T extends ParamList = ParamList>(to: To<T>) => {
    if (!navigationContainer || !linking.options) {
      throw Error("Couldn't find a navigation object");
    }
    const path = resolveTo(to);
    linkTo(path, {
      navigation: navigationContainer,
      linkingOptions: linking.options,
      type: 'REPLACE',
    });
  };

  const canGoBack = () => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    return navigation.canGoBack() ?? false;
  };

  const isFocused = () => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    return navigation.isFocused() ?? false;
  };

  const back = () => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    navigation.goBack();
  };

  const setParams = (
    params: ParamList[Keyof<ParamList>] extends undefined
      ? undefined
      : Partial<ParamList[Keyof<ParamList>]>
  ) => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    navigation.setParams(params);
  };

  const setOptions = (options: ScreenOptions) => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    navigation.setOptions(options);
  };

  const pop = (count: number) => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    navigation.dispatch(StackActions.pop(count));
  };

  const popToTop = () => {
    if (!navigation) {
      throw Error("Couldn't find a navigation object");
    }
    navigation.dispatch(StackActions.popToTop());
  };

  return {
    push,
    replace,
    canGoBack,
    back,
    setParams,
    setOptions,
    isFocused,
    pop,
    popToTop,
    navigate,
  };
};

export default useRouter;

const resolveTo = <ParamList extends ParamListBase>(
  to: To<ParamList>
): string => {
  if (typeof to === 'string') {
    return resolveTo<Record<string, any>>({ screen: to });
  }
  const screen = to.screen ?? '';
  if (!to?.params) {
    return screen;
  }

  const { pathname, params } = createPathname(screen, {
    ...to.params,
  });

  return (
    pathname +
    (Object.keys(params).length ? `?${createQueryParams(params)}` : '')
  );
};

const createPathname = (
  pathname: string,
  params: Record<string, any>
): Omit<
  Required<{
    pathname: string;
    params?: Record<string, any>;
  }>,
  'query'
> => {
  for (const [key, value = ''] of Object.entries(params)) {
    const dynamicKey = `[${key}]`;
    const deepDynamicKey = `[...${key}]`;
    if (pathname.includes(dynamicKey)) {
      pathname = pathname.replace(
        dynamicKey,
        Array.isArray(value) ? value.join('/') : value
      );
    } else if (pathname.includes(deepDynamicKey)) {
      pathname = pathname.replace(
        deepDynamicKey,
        Array.isArray(value) ? value.join('/') : value
      );
    } else {
      continue;
    }

    delete params[key];
  }
  return { pathname, params };
};

const createQueryParams = (params: Record<string, any>): string => {
  return Object.entries(params)
    .map((props) => props.join('='))
    .join('&');
};

type LinkToOptions = {
  type: 'NAVIGATE' | 'PUSH' | 'REPLACE';
  navigation: NavigationContainerRef<ParamListBase>;
  linkingOptions: LinkingOptions<ParamListBase>;
  merge?: boolean;
};

const linkTo = (to: string, options: LinkToOptions) => {
  const { navigation, type, linkingOptions } = options;
  if (to === '..' || to === '../') {
    options.navigation.goBack();
    return;
  }

  if (to.startsWith('.')) {
    throw new Error('Failed to parse the path to a navigation state.');
  }

  if (!to.startsWith('/')) {
    to = `/${to}`;
  }

  const state = linkingOptions?.getStateFromPath
    ? linkingOptions.getStateFromPath(to, linkingOptions.config)
    : getStateFromPath(to, linkingOptions.config);

  if (state) {
    const rootState = navigation.getRootState();
    switch (type) {
      case 'REPLACE':
        return navigation.dispatch(getNavigateReplaceAction(state, rootState));
      default:
        return navigation.dispatch(
          getNavigatePushAction(state, rootState, type, options.merge)
        );
    }
  } else {
    throw new Error('Failed to parse the path to a navigation state.');
  }
};

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

function getNavigatePushAction(
  state: ResultState,
  rootState: NavigationState,
  type: 'NAVIGATE' | 'PUSH' = 'PUSH',
  merge?: boolean
) {
  const { screen, params } = rewriteNavigationStateToParams(state);

  return {
    type: type,
    target: rootState.key,
    payload: {
      name: screen,
      params,
      merge,
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
