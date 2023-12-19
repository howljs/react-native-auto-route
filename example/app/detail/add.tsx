import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Add = () => {
  return (
    <View style={styles.container}>
      <Text>Add screen</Text>
    </View>
  );
};

export default Add;

export const screenOptions = { headerTitle: 'Add' };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
