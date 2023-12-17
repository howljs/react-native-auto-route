import React from 'react';
import { Button, View } from 'react-native';
import { useRouter } from 'react-native-auto-route';

const Tab1 = () => {
  const router = useRouter();

  return (
    <View>
      <Button title="Go Tab 4" onPress={() => router.push('/tab4')} />
      <Button title="Go to Detail" onPress={() => router.push('detail/22')} />
      <Button
        title="Go to Edit Detail"
        onPress={() => router.push('detail/22/edit')}
      />
      <Button title="Go to Add" onPress={() => router.push('detail/add')} />
      <Button title="Open Modal" onPress={() => router.push('modal_1')} />
      <Button title="Not found" onPress={() => router.push('abc123')} />
    </View>
  );
};

export default Tab1;
