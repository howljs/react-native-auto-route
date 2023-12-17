import React from 'react';
import Drawer from '../../src/navigator/drawer';

import {
  getFocusedRouteNameFromRoute,
  type ParamListBase,
  type RouteProp,
} from '@react-navigation/native';

function getHeaderTitle(route: RouteProp<ParamListBase, string>) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'tab1';
  switch (routeName) {
    case 'tab2':
      return 'Tab 2';
    case 'tab3':
      return 'Tab 3';
    case 'tab4':
      return 'Tab 4';
    default:
      return 'Tab 1';
  }
}

export default function DrawerLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={({ route }) => ({
          title: 'Home',
          headerTitle: getHeaderTitle(route),
        })}
      />
    </Drawer>
  );
}
