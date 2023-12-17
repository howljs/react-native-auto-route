import React from 'react';
import { Stack } from 'react-native-auto-route';

const RootLayout = () => {
  return (
    <Stack initialRouteName="(tabs)">
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)"
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen name="[...error]" options={{ headerTitle: '404 Error' }} />
    </Stack>
  );
};

export default RootLayout;
