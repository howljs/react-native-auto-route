"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[86],{8962:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(5893),o=a(1151),r=a(2004),i=a.n(r);const s={sidebar_position:1},c="Tabs",l={id:"navigators/tab",title:"Tabs",description:"The Tabs Layout in react-native-auto-route is inherited from the Bottom Tabs Navigator of React Navigation, so the props will be similar to the Bottom Tabs Navigator.",source:"@site/docs/navigators/tab.mdx",sourceDirName:"navigators",slug:"/navigators/tab",permalink:"/react-native-auto-route/docs/navigators/tab",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Stack",permalink:"/react-native-auto-route/docs/navigators/stack"},next:{title:"Drawer",permalink:"/react-native-auto-route/docs/navigators/drawer"}},d={},u=[];function p(t){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...t.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"tabs",children:"Tabs"}),"\n",(0,n.jsxs)(e.p,{children:["The ",(0,n.jsx)(e.code,{children:"Tabs"})," Layout in ",(0,n.jsx)(e.code,{children:"react-native-auto-route"})," is inherited from the ",(0,n.jsx)(e.a,{href:"https://reactnavigation.org/docs/bottom-tab-navigator",children:"Bottom Tabs Navigator"})," of React Navigation, so the props will be similar to the Bottom Tabs Navigator."]}),"\n",(0,n.jsx)(i(),{playing:!0,controls:!0,url:"/react-native-auto-route/img/bottom-tabs.mp4"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{children:"\ud83d\udcc2 app\n\u2503 \u2523 \ud83d\udcdc _layout.tsx\n\u2503 \u2523 \ud83d\udcc2 (tabs)\n\u2503 \u2503 \u2523 \ud83d\udcdc home.tsx\n\u2503 \u2503 \u2523 \ud83d\udcdc profile.tsx\n"})}),"\n",(0,n.jsx)(e.p,{children:"To create a Stack layout with two screens as shown in the file structure above:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:'import { Stack } from \'react-native-auto-route\';\n\nexport default function Layout() {\n  return (\n    <Stack initialRouteName="(tabs)">\n      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />\n    </Stack>\n  );\n}\n'})}),"\n",(0,n.jsx)(e.p,{children:"Or"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",metastring:'title="app/(tabs)/_layout.tsx"',children:'import { Tabs } from \'react-native-auto-route\';\n\nexport default function Layout() {\n  return (\n    <Tabs\n      initialRouteName="home" // initialRouteName is directory name or filename\n      screenOptions={{\n        // https://reactnavigation.org/docs/native-stack-navigator#props\n        headerStyle: {\n          backgroundColor: \'#f4511e\',\n        },\n        headerTintColor: \'#fff\',\n        headerTitleStyle: {\n          fontWeight: \'bold\',\n        },\n      }}>\n      {/** The screen will be included automatically. Just need declare if you need to add custom configuration */}\n      <Tabs.Screen\n        name="home" // name prop is directory name or filename\n        options={{\n          // https://reactnavigation.org/docs/native-stack-navigator#options\n          title: "Home"\n        }} \n      />\n      <Tabs.Screen\n        name="profile" // name prop is directory name or filename\n        options={{\n          // https://reactnavigation.org/docs/native-stack-navigator#options\n          title: "Profile"\n        }} \n      />\n    </Tabs>\n  );\n}\n'})})]})}function h(t={}){const{wrapper:e}={...(0,o.a)(),...t.components};return e?(0,n.jsx)(e,{...t,children:(0,n.jsx)(p,{...t})}):p(t)}}}]);