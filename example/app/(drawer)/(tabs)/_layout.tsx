import React from 'react';
import { Tabs } from 'react-native-auto-route';

const RootLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="tab1" options={{ tabBarLabel: 'Tab 1' }} />
      <Tabs.Screen name="tab2" options={{ tabBarLabel: 'Tab 2' }} />
      <Tabs.Screen name="tab3" options={{ tabBarLabel: 'Tab 3' }} />
      <Tabs.Screen name="tab4" options={{ tabBarLabel: 'Tab 4' }} />
    </Tabs>
  );
};

export default RootLayout;
