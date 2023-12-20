# react-native-auto-route

React Native Auto Route is a file-based router for React Native CLI. Built on top of [Expo Router](https://docs.expo.dev/router/introduction/) and [React Navigation](https://reactnavigation.org/)

[![npm version](https://badge.fury.io/js/react-native-auto-route.svg)](https://badge.fury.io/js/react-native-auto-route)
[![npm](https://img.shields.io/npm/dt/react-native-auto-route.svg)](https://www.npmjs.com/package/react-native-auto-route)
![GitHub license](https://img.shields.io/github/license/howljs/react-native-auto-route.svg)

> Check out our [documentation page](https://howljs.github.io/react-native-auto-route/docs/getting-started) for more information

![intro](./__assets__/intro.gif)

## Installation

```sh
yarn add react-native-auto-route
```

### Peer Dependencies

```sh
yarn add react-native-screens react-native-safe-area-context
```

If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking.
  
```sh
npx pod-install ios
```
`react-native-screens` package requires one additional configuration step to properly work on Android devices. Edit `MainActivity.kt` or `MainActivity.java` file which is located under `android/app/src/main/java/<your package name>/`.

Add the highlighted code to the body of MainActivity class:

- with Kotlin:

```kt
import android.os.Bundle;

class MainActivity: ReactActivity() {
  // ...
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
  }
  // ...
}
```

Or

- with Java:

```java
import android.os.Bundle;

public class MainActivity extends ReactActivity {
  // ...
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
  }
  // ...
}
```

### Add Auto Route plugin

Add `react-native-auto-route/plugin` plugin to your `babel.config.js`
    
```js
module.exports = {
  presets: [
    ... // don't add it here :)
  ],
  plugins: [
    ...
    ['react-native-auto-route/plugin'],
  ],
};
```

### Enable require.context

Add `unstable_allowRequireContext` transformer option to your `metro.config.js`
    
```js
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    unstable_allowRequireContext: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

### Clear Metro bundler cache (recommended)

```sh
yarn start --reset-cache
```

## Usage

```js
import RouterRoot from 'react-native-auto-route';

<RouterRoot />
```

## Basic usage

### Create screens

When a file is created in the screens directory (default is: `app`), it will be automatically added to the routes. For example, the following files will create the following routes:

- `app/index.tsx` matches `/`
- `app/home.tsx` matches `/home`
- `app/settings/index.tsx` matches `/settings`
- `app/[user].tsx` matches dynamic paths like `/userId1` or `/userId2`
- `app/(group)/tab1.tsx` matches `/tab1`

> Supported extensions: `.tsx`, `.ts`, `.jsx`, `.js`

### Example

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

### Dynamic routes

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

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
