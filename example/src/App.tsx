import * as React from 'react';

import RouterRoot, { DefaultTheme } from 'react-native-auto-route';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#7B61C1',
  },
};

export default function App() {
  return (
    <RouterRoot linking={{ prefixes: ['autoroute://'] }} theme={MyTheme} />
  );
}
