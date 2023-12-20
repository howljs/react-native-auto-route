---
sidebar_position: 5
---

# Passing parameters to routes

## Use `useRouter` hook

To pass parameters to a route, we can use `navigate`, `push` or `replace` methods from the `useRouter` hook.

Example: I want to pass the `id` parameter to the `detail` route.

```tsx title="app/home.tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRouter} from 'react-native-auto-route';

export default function Home() {
  const router = useRouter();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to detail"
        // highlight-next-line
        onPress={() => router.navigate('detail/23')}
      />
      <Button
        title="Go to detail"
        onPress={() =>
          // highlight-next-line
          router.navigate({ screen: 'detail/[id]', params: { id: 23 } })
        }
      />
    </View>
  );
}
```

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

> Note: To make deep linking available to all screens in your project, the params will be transformed to string automatically. If you want to pass a number, you can use `Number(params.id)` to convert it.

## Initial params

You can pass some initial params to a screen. If you didn't specify any params when navigating to this screen, the initial params will be used. They are also shallow merged with any params that you pass.

### Method 1: Export `initialParams` from the screen component.

```tsx title="app/detail/[id].tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useParams} from 'react-native-auto-route';

export default function Detail() {
  const params = useParams();
  return (
    <View>
      <Text>Detail: {params.id} - {params.otherId}</Text>
    </View>
  );
}

// highlight-start
export const initialParams = {
  otherId: 23,
};
// highlight-end
```

> Note: This method is not available when you set importMode to `lazy`.

### Method 2: `initialParams` property in the `Stack` component.

```tsx title="app/_layout.tsx"
import React from 'react';
import { Stack } from 'react-native-auto-route';

const AppLayout = () => {
  return (
    <Stack initialRouteName="index">
      // highlight-next-line
      <Stack.Screen name="detail/[id]" initialParams={{ otherId: 23 }} />
    </Stack>
  );
};

export default AppLayout;
```

## Updating params

You can update params of the current screen by using `setParams` method from the `useRouter` hook.

```tsx title="app/detail/[id].tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useParams, useRouter} from 'react-native-auto-route';

export default function Detail() {
  const params = useParams();
  const router = useRouter();
  return (
    <View>
      <Text>Detail: {params.id}</Text>
      <Button
        title="Update params"
        // highlight-next-line
        onPress={() => router.setParams({ id: 24 })}
      />
    </View>
  );
}
```

## Passing params to a previous screen

To achieve this, you can use the `navigate` method, which acts like goBack if the screen already exists. You can pass the params with `navigate` to pass the data back:

```tsx title="app/home.tsx"
import React from 'react';
import { Button, View } from 'react-native';
import { useParams, useRouter } from 'react-native-auto-route';

export default function Home() {
  const router = useRouter();
  const params = useParams();

  React.useEffect(() => {
    if (params?.post) {
      // Post updated, do something with `params.post`
      // For example, send the post to the server
    }
  }, [params?.post]);

  return (
    <View>
      <Button
        title="Create post"
        onPress={() => router.navigate('create-post')}
      />
    </View>
  );
}
```

```tsx title="app/create-post.tsx"
import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {useParams, useRouter} from 'react-native-auto-route';

export default function Detail() {
  const router = useRouter();
  const [postText, setPostText] = React.useState('');

  return (
    <View>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass and merge params back to home screen
          // highlight-next-line
          router.navigate({ screen: 'home', params: { post: postText }, merge: true })
        }}
      />
    </View>
  );
}
```

## What should be in params

It's important to understand what kind of data should be in params. Params are like options for a screen. They should only contain information to configure what's displayed in the screen. Avoid passing the full data which will be displayed on the screen itself (e.g. pass a user id instead of user object). Also avoid passing data which is used by multiple screens, such data should be in a global store.

- More detail: [React Navigation docs](https://reactnavigation.org/docs/params/#what-should-be-in-params)
