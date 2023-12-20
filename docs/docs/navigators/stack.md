---
sidebar_position: 1
---

# Stack

The `Stack` Layout in `react-native-auto-route` is inherited from the [Native Stack Navigator](https://reactnavigation.org/docs/native-stack-navigator) of React Navigation, so the props will be similar to the Native Stack Navigator.

## Example Usage

```
📂 app
┃ ┣ 📜 _layout.tsx
┃ ┣ 📜 sign-in.tsx
┃ ┣ 📜 home.tsx
```

To create a Stack layout with two screens as shown in the file structure above:

```tsx title="app/_layout.tsx"
import { Stack } from 'react-native-auto-route';

export default function Layout() {
  return (
    <Stack />
  );
}
```

Or

```tsx title="app/_layout.tsx"
import { Stack } from 'react-native-auto-route';

export default function Layout() {
  return (
    <Stack
      initialRouteName="home" // initialRouteName is directory name or filename
      screenOptions={{
        // https://reactnavigation.org/docs/native-stack-navigator#props
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/** The screen will be included automatically. Just need declare if you need to add custom configuration */}
      <Stack.Screen
        name="home" // name prop is directory name or filename
        options={{
          // https://reactnavigation.org/docs/native-stack-navigator#options
          title: "Home"
        }} 
      />
    </Stack>
  );
}
```


## Custom Stack Navigator:

```tsx title="navigator/stack.tsx"
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

```

### use `CustomStack` as Default Layout

```tsx title="App.tsx"
import * as React from 'react';

import RouterRoot from 'react-native-auto-route';
import CustomStack from './navigator/stack';

export default function App() {
  return <RouterRoot DefaultLayout={CustomStack} />;
}
```

### use with `_layout.tsx`

Example:

```tsx title="app/home/_layout.tsx"
import React from 'react';
import CustomStack from '../../src/navigator/stack';

const HomeLayout = () => {
  return (
    <CustomStack
      initialRouteName="home" // initialRouteName is directory name or filename
      screenOptions={{
        // https://reactnavigation.org/docs/stack-navigator#props
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/** The screen will be included automatically. Just need declare if you need to add custom configuration */}
      <CustomStack.Screen
        name="home" // name prop is directory name or filename
        options={{
          // https://reactnavigation.org/docs/stack-navigator#options
          title: 'Home',
        }}
      />
    </CustomStack>
  );
};

export default HomeLayout;
```
