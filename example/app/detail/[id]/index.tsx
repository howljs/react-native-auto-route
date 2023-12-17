import { View, Text, Button } from 'react-native';
import React from 'react';
import { useRoute, type RouteProp, useRouter } from 'react-native-auto-route';

const Detail = () => {
  const router = useRouter();
  const route = useRoute<RouteProp<any>>();
  return (
    <View>
      <Text>Detail: {route.params?.id}</Text>
      <Button
        title="Set params to 211"
        onPress={() => router.setParams({ id: '211' })}
      />
    </View>
  );
};

export default Detail;
