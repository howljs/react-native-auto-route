import React from 'react';
import { Button, Text, View } from 'react-native';
import { useRouter } from 'react-native-auto-route';

const Edit = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Edit</Text>
      <Button
        title="Replace with detail screen"
        onPress={() => router.navigate('detail/22')}
      />
    </View>
  );
};

export const screenOptions = { headerTitle: 'Edit' };

export default Edit;
