import React, { useLayoutEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { useRoute, useRouter, type RouteProp } from 'react-native-auto-route';

const Detail = () => {
  const router = useRouter();
  const route = useRoute<RouteProp<any>>();

  useLayoutEffect(() => {
    router.setOptions({ headerTitle: `Detail: ${route.params?.id}` });
  }, [route.params?.id, router]);

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

export const screenOptions = { headerTitle: 'Detail' };

export default Detail;
