---
sidebar_position: 6
---

# Configuring the header bar

## Setting the header title

### Method 1: Export `screenOptions` property

You can set the header title by exporting the `screenOptions` property from the screen component.

```tsx title="app/home.tsx"
import React from 'react';
import {Text, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

export const screenOptions = { title: 'Home' };
```

> Note: This method is not available when you set importMode to `lazy`.

### Method 2: `options` property in the `Stack` component

You can also set the header title by using the `options` property in the screen component.

```tsx title="app/_layout.tsx"
import React from 'react';
import { Stack } from 'react-native-auto-route';

const AppLayout = () => {
  return (
    <Stack initialRouteName="home">
      // highlight-next-line
      <Stack.Screen name="home" options={{ title: 'Home' }} />
    </Stack>
  );
};
```

## Using params in the title

### Method 1: Export `screenOptions` property

You can set the header title by exporting the `screenOptions` property from the screen component.

```tsx
//...code

export const screenOptions = ({ route }) => ({ title: route.params.name })
```

> Note: This method is not available when you set importMode to `lazy`.

### Method 2: `options` property in the `Stack` component

You can also set the header title by using the `options` property in the screen component.

```tsx title="app/_layout.tsx"
import React from 'react';
import { Stack } from 'react-native-auto-route';

const AppLayout = () => {
  return (
    <Stack initialRouteName="home">
      // highlight-next-line
      <Stack.Screen name="home" options={({ route }) => ({ title: route.params.name })} />
    </Stack>
  );
};
```

## Updating `options` with `setOptions`

It's often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using `router.setOptions`

```tsx
<Button
  title="Update the title"
  onPress={() => router.setOptions({ title: 'Updated!' })}
/>
```

## Adjusting header styles

Similar to the previous ways to update the title, you can further customize.

Example: You can adjust the header styles by using the `headerStyle` property

```tsx
export const screenOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

// or

<Stack.Screen
  name="home" 
  // highlight-start
  options={{
    title: 'My home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  // highlight-end
/>
```

## Sharing common options across screens

You can share common options across screens by using the `screenOptions` property in the `Stack` component.

```tsx title="app/_layout.tsx"
import React from 'react';
import { Stack } from 'react-native-auto-route';

const AppLayout = () => {
  return (
    <Stack
      initialRouteName="home"
      // highlight-start
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      // highlight-end
    />
  );
};
```

## Replacing the title with a custom component

You can replace the title with a custom component by using the `headerTitle` property.

```tsx title="app/_layout.tsx"
import React from 'react';
import { Stack } from 'react-native-auto-route';

const AppLayout = () => {
  return (
    <Stack initialRouteName="home">
      // highlight-next-line
      <Stack.Screen name="home" options={{ headerTitle: (props) => <Logo {...props} /> }} />
    </Stack>
  );
};
```

## Additional configuration

You can find more information about the configuration in the [official documentation](https://reactnavigation.org/docs/native-stack-navigator/#options).