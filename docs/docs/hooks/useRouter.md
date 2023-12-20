---
sidebar_position: 1
---

# useRouter

- router
  - router.navigate - Navigate to another screen. If the route name is exist, navigate to that.
  - router.push - Push a screen on top of the stack, can push a screen multiple times
  - router.replace - Replace the current screen with a new one
  - router.canGoBack - Check if we can go back
  - router.isFocused - Check if the current screen is focused
  - router.setParams - Update the params of the current screen
  - router.setOptions - Update the options of the current screen
  - router.pop - The pop action takes you back to a previous screen in the stack. It takes one optional argument (count), which allows you to specify how many screens to pop back by.
  - router.popToTop - Pop to the first screen in the stack, dismissing all other screens.