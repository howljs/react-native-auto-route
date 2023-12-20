---
sidebar_position: 1
---

# Getting Started

`react-native-auto-route` is a file-based router for React Native CLI (iOS, Android). It is build on top of [React Navigation](https://reactnavigation.org/) and [Expo Router](https://docs.expo.dev/router/introduction/)

It allow you to manage your routes in a simple and intuitive way. When a file is added, removed or renamed, the router is automatically updated. Every screen in your app is automatically deep linkable, for example, you can open the screen `app/home.tsx` with the url `myapp://home`.

## Minimum requirements

- `react-native` >= 0.63.0
- `typescript` >= 4.1.0 (if you use TypeScript)

## Installation

### Install `react-native-auto-route`:

```bash npm2yarn
npm install react-native-auto-route
```

### Installing peer dependencies:

> If you already have these libraries installed and at the latest version, you can skip this step.

```bash npm2yarn
npm install react-native-screens react-native-safe-area-context
```

If you're on a Mac and developing for iOS, you need to install the pods (via [Cocoapods](https://cocoapods.org)) to complete the linking.

```bash
npx pod-install ios
```


`react-native-screens` package requires one additional configuration step to properly
work on Android devices. Edit `MainActivity.kt` or `MainActivity.java` file which is located under `android/app/src/main/java/<your package name>/`.

Add the highlighted code to the body of `MainActivity` class:

<Tabs>
  <TabItem value='kotlin' label='Kotlin' default>
    ```kotlin
    // highlight-next-line
    import android.os.Bundle;

    class MainActivity: ReactActivity() {
      //...code
      // highlight-start
      override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(null)
      }
      // highlight-end
      //...code
    }
    ```
  </TabItem>
  <TabItem value='java' label='Java'>
    ```java
    // highlight-next-line
    import android.os.Bundle;

    public class MainActivity extends ReactActivity {
      //...code
      // highlight-start
      @Override
      protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(null);
      }
      // highlight-end
      
      public static class MainActivityDelegate extends ReactActivityDelegate {
        //...code
      }
    }
    ```
  </TabItem>
</Tabs>

### Add Auto Route plugin

Add `react-native-auto-route/plugin` plugin to your `babel.config.js`. You can customize the plugin options, `appDirectory` is the directory where your screens are located, and importMode is the import mode (`sync` or `lazy`) for your screens (Default: `sync`).

<Tabs>
  <TabItem value='normal' label='Normal' default>
    ```js title="babel.config.js"
        module.exports = {
          presets: [
            //...
          ],
          plugins: [
            //...
            // highlight-next-line
            "react-native-auto-route/plugin",
          ],
        };
    ```

  </TabItem>
  <TabItem value='custom' label='Custom Configs'>
    ```js title="babel.config.js"
        module.exports = {
          presets: [
            //...
          ],
          plugins: [
            //...
            // highlight-next-line
            ["react-native-auto-route/plugin", { appDirectory: "app", importMode: "sync" }],
          ],
        };
    ```
  </TabItem>
</Tabs>

### Update metro.config.js

Enable `unstable_allowRequireContext` in your `metro.config.js` file.

```js title="metro.config.js"
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    // highlight-next-line
    unstable_allowRequireContext: true,
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

### Update your `App.tsx` file

Import `react-native-auto-route` and use the `RouterRoot` component. It's similar to `NavigationContainer` from `react-navigation`.

```tsx title="App.tsx"
import React from 'react';
import RouterRoot from 'react-native-auto-route';

const App = () => {
  return <RouterRoot />;
};

export default App;
```
