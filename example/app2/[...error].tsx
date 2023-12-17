import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PageError = () => {
  return (
    <View style={styles.container}>
      <Text>Page Not Found</Text>
    </View>
  );
};

export default PageError;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
