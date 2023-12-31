import React from 'react';
import Stack from '../../src/navigator/Stack';

const RootLayout = () => {
  return (
    <Stack initialRouteName="(drawer)">
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modal)"
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="[...error]"
        options={{ headerTitle: 'Page not found' }}
      />
    </Stack>
  );
};

export default RootLayout;
