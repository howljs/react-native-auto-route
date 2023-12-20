"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[618],{7950:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var s=t(5893),o=t(1151),r=t(2004),a=t.n(r);const i={sidebar_position:1},c="Authentication flows",u={id:"guides/auth-flows",title:"Authentication flows",description:"By default, all routes are always defined and accessible. You can use runtime logic to redirect users away from specific screens depending on whether they are authenticated.",source:"@site/docs/guides/auth-flows.mdx",sourceDirName:"guides",slug:"/guides/auth-flows",permalink:"/react-native-auto-route/docs/guides/auth-flows",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Drawer",permalink:"/react-native-auto-route/docs/navigators/drawer"},next:{title:"Opening a modal",permalink:"/react-native-auto-route/docs/guides/modal"}},d={},l=[{value:"Use global state and Route Groups",id:"use-global-state-and-route-groups",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"authentication-flows",children:"Authentication flows"}),"\n",(0,s.jsx)(n.p,{children:"By default, all routes are always defined and accessible. You can use runtime logic to redirect users away from specific screens depending on whether they are authenticated."}),"\n",(0,s.jsx)(a(),{playing:!0,controls:!0,url:"/react-native-auto-route/img/auth-flow.mp4"}),"\n",(0,s.jsx)(n.h2,{id:"use-global-state-and-route-groups",children:"Use global state and Route Groups"}),"\n",(0,s.jsx)(n.p,{children:"Consider the following project structure that has a /sign-in route that is always accessible and a (app) group that requires authentication:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\ud83d\udcc2 app\n\u2503 \u2523 \ud83d\udcdc _layout.tsx\n\u2503 \u2523 \ud83d\udcdc sign-in.tsx\n\u2503 \u2523 \ud83d\udcc2 (app)\n\u2503 \u2503 \u2517 \ud83d\udcdc _layout.tsx\n\u2503 \u2503 \u2517 \ud83d\udcdc home.tsx\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a global state that stores the authentication status. This can be done with React Context or Redux."}),"\n"]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsxs)("summary",{children:["Example ",(0,s.jsx)(n.code,{children:"SessionProvider.tsx"})]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="context/SessionProvider.tsx"',children:"import AsyncStorage from '@react-native-async-storage/async-storage';\nimport React, {createContext, useEffect, useMemo, useReducer} from 'react';\n\ninterface AuthState {\n  isLoading: boolean;\n  userToken?: string;\n}\n\ninterface AuthAction {\n  type: string;\n  payload?: string;\n}\n\ninterface AuthContextProps {\n  state: AuthState;\n  signIn: () => void;\n  signOut: () => void;\n}\n\nconst SessionContext = createContext<AuthContextProps>({\n  state: {isLoading: true},\n  signIn: () => {},\n  signOut: () => {},\n});\n\nexport const useSession = () => {\n  const context = React.useContext(SessionContext);\n  if (!context) {\n    throw new Error('useSession must be used within a SessionProvider');\n  }\n  return context;\n};\n\nconst authReducer = (state: AuthState, action: AuthAction) => {\n  switch (action.type) {\n    case 'RESTORE_TOKEN':\n      return {\n        ...state,\n        userToken: action.payload,\n        isLoading: false,\n      };\n    case 'SIGN_IN':\n      return {\n        ...state,\n        userToken: action.payload,\n        isLoading: false,\n      };\n    case 'SIGN_OUT':\n      return {\n        ...state,\n        userToken: undefined,\n        isLoading: false,\n      };\n    default:\n      return state;\n  }\n};\n\nconst SessionProvider = ({children}: {children: React.ReactNode}) => {\n  const [state, dispatch] = useReducer(authReducer, {\n    isLoading: true,\n  });\n\n  useEffect(() => {\n    AsyncStorage.getItem('token').then(token => {\n      setTimeout(() => {\n        dispatch({type: 'RESTORE_TOKEN', payload: token ? token : undefined});\n      }, 1000);\n    });\n  }, []);\n\n  const value = useMemo(\n    () => ({\n      state,\n      signIn: () => {\n        AsyncStorage.setItem('token', 'dummy-auth-token');\n        dispatch({type: 'SIGN_IN', payload: 'dummy-auth-token'});\n      },\n      signOut: () => {\n        AsyncStorage.removeItem('token');\n        dispatch({type: 'SIGN_OUT'});\n      },\n    }),\n    [state],\n  );\n  return (\n    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>\n  );\n};\n\nexport default SessionProvider;\n"})})]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Wrap your app with the global state provider"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import React from 'react';\nimport RouterRoot from 'react-native-auto-route';\nimport SessionProvider from './context/SessionProvider';\n\nexport default function App() {\n  return (\n    <SessionProvider>\n      <RouterRoot />\n    </SessionProvider>\n  );\n}\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsxs)(n.li,{children:["Create a root layout with ",(0,s.jsx)(n.code,{children:"initialRouteName"})," set to ",(0,s.jsx)(n.code,{children:"(app)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport {Stack} from 'react-native-auto-route';\n\nconst RootLayout = () => {\n  return (\n    <Stack initialRouteName=\"(app)\">\n      <Stack.Screen name=\"(app)\" options={{headerShown: false}} />\n    </Stack>\n  );\n};\n\nexport default RootLayout;\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:["Create a ",(0,s.jsx)(n.code,{children:"sign-in"})," screen."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/sign-in.tsx"',children:"import {View, Text, Button} from 'react-native';\nimport React from 'react';\nimport {useRouter} from 'react-native-auto-route';\nimport {useSession} from '../src/context/SessionProvider';\n\nconst SignIn = () => {\n  const session = useSession();\n  const router = useRouter();\n\n  return (\n    <View>\n      <Text>Sign In</Text>\n      <Button\n        title=\"Sign in\"\n        onPress={() => {\n          session.signIn();\n          router.replace('home');\n        }}\n      />\n    </View>\n  );\n};\n\nexport default SignIn;\n\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Create ",(0,s.jsx)(n.code,{children:"Layout"})," component for the ",(0,s.jsx)(n.code,{children:"(app)"})," group."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="app/(app)/_layout.tsx"',children:"import React from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\nimport {Redirect, Stack} from 'react-native-auto-route';\nimport {useSession} from '../../src/context/SessionProvider';\n\nconst AppLayout = () => {\n  const session = useSession();\n\n  // Show loading screen while checking authentication status\n  if (session.state.isLoading) {\n    return (\n      <View style={styles.container}>\n        <Text>Loading...</Text>\n      </View>\n    );\n  }\n\n  // Redirect to sign-in if user is not authenticated\n  if (!session.state.userToken) {\n    return <Redirect to=\"sign-in\" />;\n  }\n\n  // Render stack if user is authenticated\n  return <Stack screenOptions={{headerShown: false}} />;\n};\n\nexport default AppLayout;\n\nconst styles = StyleSheet.create({\n  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},\n});\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"References"}),": ",(0,s.jsx)(n.a,{href:"https://docs.expo.dev/router/reference/authentication/",children:"Authentication in Expo Router"})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}}}]);