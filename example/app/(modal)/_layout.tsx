import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'react-native-auto-route';

const ModalLayout = () => {
  const router = useRouter();
  const _renderHeaderRight = () => (
    <TouchableOpacity
      onPress={() => {
        router.back();
      }}
    >
      <Text>Close</Text>
    </TouchableOpacity>
  );

  return (
    <Stack
      screenOptions={{
        headerRight: _renderHeaderRight,
      }}
    />
  );
};

export default ModalLayout;
