import type {
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';

import {
  createBottomTabNavigator,
  type BottomTabNavigationEventMap,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import { createNavigator } from './createNavigator';

const BottomTabNavigator = createBottomTabNavigator().Navigator;

export const Tabs = createNavigator<
  TabNavigationState<ParamListBase>,
  BottomTabNavigationOptions,
  BottomTabNavigationEventMap,
  Omit<React.ComponentProps<typeof BottomTabNavigator>, 'id' | 'children'> & {
    children?: React.ReactNode;
  }
>(BottomTabNavigator);

export default Tabs;
