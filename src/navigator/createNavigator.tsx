import type {
  DefaultNavigatorOptions,
  EventMapBase,
  NavigationState,
  ParamListBase,
  RouteProp,
  ScreenListeners,
} from '@react-navigation/native';
import React from 'react';
import { useContextKey } from '../Route';
import { useFilterScreenChildren } from '../hooks/useFilterScreenChildren';
import { useSortedScreens } from '../hooks/useSortedScreens';
import { Screen } from './primitives';

export type ScreenProps<
  TOptions extends Record<string, any> = Record<string, any>,
  State extends NavigationState = NavigationState,
  EventMap extends EventMapBase = EventMapBase
> = {
  /** Name of screen */
  name?: string;

  /**
   * Navigator options for this screen.
   */
  options?:
    | TOptions
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => TOptions);

  /**
   * Event listeners for this screen.
   */
  listeners?:
    | ScreenListeners<State, EventMap>
    | ((props: {
        route: RouteProp<ParamListBase, string>;
        navigation: any;
      }) => ScreenListeners<State, EventMap>);

  /**
   * Function to return an unique ID for this screen.
   * Receives an object with the route params.
   * For a given screen name, there will always be only one screen corresponding to an ID.
   * If `undefined` is returned, it acts same as no `getId` being specified.
   */
  getId?: ({
    params,
  }: {
    params: Record<string, any> | undefined;
  }) => string | undefined;

  /**
   * Initial params object for the route.
   */
  initialParams?: Record<string, any>;
};

const CustomNavigator = <
  State extends NavigationState,
  ScreenOptions extends {},
  EventMap extends EventMapBase,
  NavigatorProps extends Record<string, any>
>(
  Navigator: React.ComponentType<
    Omit<NavigatorProps, keyof DefaultNavigatorOptions<any, any, any, any>> &
      DefaultNavigatorOptions<ParamListBase, State, ScreenOptions, EventMap>
  >,
  processor?: (screens: React.ReactNode[]) => React.ReactNode[]
) => {
  return React.forwardRef(({ children, ...props }: any, ref) => {
    const contextKey = useContextKey();
    const { screens } = useFilterScreenChildren(children, {
      contextKey,
    });

    const processed = processor ? processor(screens ?? []) : screens;

    const sorted = useSortedScreens(processed ?? []);
    if (!sorted.length) {
      return null;
    }

    return <Navigator {...props} id={contextKey} ref={ref} children={sorted} />;
  });
};

export const createNavigator = <
  State extends NavigationState,
  ScreenOptions extends {},
  EventMap extends EventMapBase,
  NavigatorProps extends Record<string, any>
>(
  Nav: React.ComponentType<
    Omit<NavigatorProps, keyof DefaultNavigatorOptions<any, any, any, any>> &
      DefaultNavigatorOptions<ParamListBase, State, ScreenOptions, EventMap>
  >,
  processor?: (screens: React.ReactNode[]) => React.ReactNode[]
): React.ForwardRefExoticComponent<NavigatorProps> & {
  Screen: (props: ScreenProps<ScreenOptions, State, EventMap>) => null;
} => {
  const Navigator = CustomNavigator<
    State,
    ScreenOptions,
    EventMap,
    NavigatorProps
  >(Nav, processor) as any;
  Navigator.Screen = Screen;
  return Navigator;
};
