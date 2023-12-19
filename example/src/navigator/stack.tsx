import type {
  ParamListBase,
  StackNavigationState,
} from '@react-navigation/native';
import {
  createStackNavigator,
  type StackNavigationEventMap,
  type StackNavigationOptions,
} from '@react-navigation/stack';
import { createNavigator } from 'react-native-auto-route';

const StackNavigator = createStackNavigator().Navigator;

export const CustomStack = createNavigator<
  StackNavigationState<ParamListBase>,
  StackNavigationOptions,
  StackNavigationEventMap,
  Omit<React.ComponentProps<typeof StackNavigator>, 'id' | 'children'> & {
    children?: React.ReactNode;
  }
>(StackNavigator);

export default CustomStack;
