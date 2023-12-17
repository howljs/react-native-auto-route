# react-native-auto-route

React Native Auto Route is a file-based router for React Native CLI. Built on top of [Expo Router](https://docs.expo.dev/router/introduction/) and [React Navigation](https://reactnavigation.org/)

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

## Documentation

> In the process of updating, you can refer to the instructions from [Expo Router](https://docs.expo.dev/router/create-pages/)

### Create pages

When a file is created in the app directory, it automatically becomes a route in the app. For example, the following files will create the following routes:

- app/index.tsx matches /
- app/home.tsx matches /home
- app/settings/index.tsx matches /settings
- app/[user].tsx matches dynamic paths like /userId1 or /userId2

For example, create the app directory in root project and then create a file index.tsx inside it. Then, add the following snippet:

```tsx
import React from 'react';
import { Text } from 'react-native';

const Home = () => {
  return <Text>Home</Text>;
};

export default Home;
```


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
