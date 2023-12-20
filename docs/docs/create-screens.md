---
sidebar_position: 2
---
import ReactPlayer from 'react-player'

# Create screens

When a file is created in the screens directory (default is: `app`), it will be automatically added to the routes. For example, the following files will create the following routes:

- `app/index.tsx` matches `/`
- `app/home.tsx` matches `/home`
- `app/settings/index.tsx` matches `/settings`
- `app/[user].tsx` matches dynamic paths like `/userId1` or `/userId2`
- `app/(group)/tab1.tsx` matches `/tab1`

> Supported extensions: `.tsx`, `.ts`, `.jsx`, `.js`

<ReactPlayer playing controls url='/react-native-auto-route/img/create-screens.mp4' />

## Example

```tsx title="app/index.tsx"
import React from 'react';
import {Text, View} from 'react-native';

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
```

## Dynamic routes

You can create dynamic routes by using square brackets in the file name. For example, the following files will create the following routes:

- `app/[user].tsx` matches dynamic paths like `/userId1`
- `app/[user]/[post].tsx` matches dynamic paths like `/userId1/postId1`
- `app/detail/[postId].tsx` matches dynamic paths like `/detail/postId1`
- `app/detail/[...postId].tsx` matches dynamic paths like `/detail/postId1/edit`

Routes with higher specificity will be matched before a dynamic route. For example, `/detail/post` will match `detail/post.tsx` before `detail/[id].tsx`.

Multiple slugs can be matched in a single route by using the rest syntax (...). For example, `app/detail/[...postId].tsx` matches `/detail/postId1/edit`.

You can get params from the route by using the `useParams` hook.

```tsx title="app/[user]/[post].tsx"
import React from 'react';
import {Text, View} from 'react-native';

export default function UserPost() {
  const params = useParams();
  return (
    <View>
      <Text>Detail: {params.user} - {params.post}</Text>
    </View>
  );
}
```