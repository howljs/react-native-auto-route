import {
  createDrawerNavigator,
  type DrawerNavigationEventMap,
  type DrawerNavigationOptions,
} from '@react-navigation/drawer';
import type {
  DrawerNavigationState,
  ParamListBase,
} from '@react-navigation/native';
import { createNavigator } from 'react-native-auto-route';

const DrawerNavigator = createDrawerNavigator().Navigator;

export const Drawer = createNavigator<
  DrawerNavigationState<ParamListBase>,
  DrawerNavigationOptions,
  DrawerNavigationEventMap,
  Omit<React.ComponentProps<typeof DrawerNavigator>, 'id' | 'children'> & {
    children?: React.ReactNode;
  }
>(DrawerNavigator);

export default Drawer;
