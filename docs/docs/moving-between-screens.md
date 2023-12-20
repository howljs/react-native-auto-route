---
sidebar_position: 3
---

# Moving between screens

## Navigating to a new screen

To navigate to a new screen, use the `useRouter` hook. This hook returns a navigation object that contains methods to navigate between screens.

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
        title="Go to Settings"
        // highlight-next-line
        onPress={() => router.navigate('settings')}
      />
    </View>
  );
}
```

## Navigate to a route multiple times

To do this, we can change `navigate` to `push`. This allows us to express the intent to add another route regardless of the existing navigation history.

```tsx title="app/home.tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRouter} from 'react-native-auto-route';

export default function Home() {
  const route = useRouter();
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Settings"
        // highlight-next-line
        onPress={() => route.navigate('settings')}
      />
    </View>
  );
}
```

```tsx title="app/settings.tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRouter} from 'react-native-auto-route';

export default function Settings() {
  const route = useRouter();
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go to Settings ...again"
        // highlight-next-line
        onPress={() => route.push('settings')}
      />
    </View>
  );
}
```

## Going back

To go back to the previous screen

```tsx title="app/settings.tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRouter} from 'react-native-auto-route';

export default function Settings() {
  const router = useRouter();
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go back"
        // highlight-next-line
        onPress={() => router.back()}
      />
    </View>
  );
}
```

## Going back to the first screen in the stack.

```tsx title="app/settings.tsx"
import React from 'react';
import {Button, Text, View} from 'react-native';
import {useRouter} from 'react-native-auto-route';

export default function Settings() {
  const route = useRouter();
  return (
    <View>
      <Text>Settings</Text>
      <Button
        title="Go back"
        // highlight-next-line
        onPress={() => route.popToTop()}
      />
    </View>
  );
}
```

## Other properties of the `router`
- `router`
  - `router.canGoBack` - Check if we can go back
  - `router.isFocused` - Check if the current screen is focused
  - `router.setParams` - Update the params of the current screen
  - `router.setOptions` - Update the options of the current screen
  - `router.pop` - The pop action takes you back to a previous screen in the stack. It takes one optional argument (count), which allows you to specify how many screens to pop back by.
