---
sidebar_position: 7
---

# Error handling

When a route is unmatched, the app will display a 404 page. You can customize the 404 page by creating a file named `[...unmatched].tsx` or `[...unmatched].js` in the `app` directory.

``` tsx title="app/[...unmatched].tsx"
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Unmatched = () => {
  return (
    <View style={styles.container}>
      <Text>Page Not Found</Text>
    </View>
  );
};

export default Unmatched;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});

```