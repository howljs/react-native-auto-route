import {
  createDrawerNavigator,
  type DrawerNavigationEventMap,
  type DrawerNavigationOptions,
} from '@react-navigation/drawer';
import type {
  DrawerNavigationState,
  ParamListBase,
} from '@react-navigation/native';
import { createNavigatorFactory } from 'react-native-auto-route';

const DrawerNavigator = createDrawerNavigator().Navigator;

export const Drawer = createNavigatorFactory<
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  Omit<React.ComponentProps<typeof DrawerNavigator>, 'id' | 'children'> & {
    children?: React.ReactNode;
  }
>(DrawerNavigator);

export default Drawer;
