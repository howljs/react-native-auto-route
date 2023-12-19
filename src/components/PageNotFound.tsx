import React, { type FC } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const PageNotFound: FC = ({}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Page Not Found</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  subtitle: { textAlign: 'center' },
  dirText: {
    fontWeight: 'bold',
  },
});

export default PageNotFound;
