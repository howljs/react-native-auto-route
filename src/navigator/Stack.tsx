import type {
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  type NativeStackNavigationEventMap,
  type NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { createNavigatorFactory } from './createNavigatorFactory';

const StackNavigator = createNativeStackNavigator().Navigator;

export const Stack = createNavigatorFactory<
  StackNavigationState<ParamListBase>,
  NativeStackNavigationOptions,
  NativeStackNavigationEventMap,
  Omit<React.ComponentProps<typeof StackNavigator>, 'id' | 'children'> & {
    children?: React.ReactNode;
  }
>(StackNavigator);

export default Stack;
