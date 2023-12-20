---
sidebar_position: 2
---

# useParams

Get params which is defined while navigating

```tsx title="app/detail/[id].tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useParams} from 'react-native-auto-route';

export default function Detail() {
  const params = useParams();
  return (
    <View>
      <Text>Detail: {params.id}</Text>
    </View>
  );
}
```