import React from 'react';
import { Button, View } from 'react-native';
import { useRouter } from 'react-native-auto-route';

const Tab1 = () => {
  const router = useRouter();

  return (
    <View>
      <Button title="Go Tab 4" onPress={() => router.navigate('tab4')} />
      <Button
        title="Go to Detail"
        onPress={() => router.navigate('detail/22')}
      />
      <Button
        title="Go to Edit Detail"
        onPress={() => router.navigate('detail/22/edit')}
      />
      <Button title="Go to Add" onPress={() => router.navigate('detail/add')} />
      <Button title="Open Modal" onPress={() => router.navigate('modal_1')} />
      <Button title="Open Modal 2" onPress={() => router.navigate('modal_2')} />
      <Button title="Not found" onPress={() => router.navigate('abc123')} />
    </View>
  );
};

export default Tab1;
