"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[427],{984:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>h});var o=n(5893),i=n(1151);const r={sidebar_position:6},s="Configuring the header bar",a={id:"headers",title:"Configuring the header bar",description:"Setting the header title",source:"@site/docs/headers.md",sourceDirName:".",slug:"/headers",permalink:"/docs/headers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Passing parameters to routes",permalink:"/docs/params"},next:{title:"Error handling",permalink:"/docs/error-handling"}},c={},h=[{value:"Setting the header title",id:"setting-the-header-title",level:2},{value:"Method 1: Export <code>screenOptions</code> property",id:"method-1-export-screenoptions-property",level:3},{value:"Method 2: <code>options</code> property in the <code>Stack</code> component",id:"method-2-options-property-in-the-stack-component",level:3},{value:"Using params in the title",id:"using-params-in-the-title",level:2},{value:"Method 1: Export <code>screenOptions</code> property",id:"method-1-export-screenoptions-property-1",level:3},{value:"Method 2: <code>options</code> property in the <code>Stack</code> component",id:"method-2-options-property-in-the-stack-component-1",level:3},{value:"Updating <code>options</code> with <code>setOptions</code>",id:"updating-options-with-setoptions",level:2},{value:"Adjusting header styles",id:"adjusting-header-styles",level:2},{value:"Sharing common options across screens",id:"sharing-common-options-across-screens",level:2},{value:"Replacing the title with a custom component",id:"replacing-the-title-with-a-custom-component",level:2},{value:"Additional configuration",id:"additional-configuration",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"configuring-the-header-bar",children:"Configuring the header bar"}),"\n",(0,o.jsx)(t.h2,{id:"setting-the-header-title",children:"Setting the header title"}),"\n",(0,o.jsxs)(t.h3,{id:"method-1-export-screenoptions-property",children:["Method 1: Export ",(0,o.jsx)(t.code,{children:"screenOptions"})," property"]}),"\n",(0,o.jsxs)(t.p,{children:["You can set the header title by exporting the ",(0,o.jsx)(t.code,{children:"screenOptions"})," property from the screen component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="app/home.tsx"',children:"import React from 'react';\nimport {Text, View} from 'react-native';\n\nexport default function Home() {\n  return (\n    <View>\n      <Text>Home</Text>\n    </View>\n  );\n}\n\nexport const screenOptions = { title: 'Home' };\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: This method is not available when you set importMode to ",(0,o.jsx)(t.code,{children:"lazy"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.h3,{id:"method-2-options-property-in-the-stack-component",children:["Method 2: ",(0,o.jsx)(t.code,{children:"options"})," property in the ",(0,o.jsx)(t.code,{children:"Stack"})," component"]}),"\n",(0,o.jsxs)(t.p,{children:["You can also set the header title by using the ",(0,o.jsx)(t.code,{children:"options"})," property in the screen component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nconst AppLayout = () => {\n  return (\n    <Stack initialRouteName=\"home\">\n      // highlight-next-line\n      <Stack.Screen name=\"home\" options={{ title: 'Home' }} />\n    </Stack>\n  );\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"using-params-in-the-title",children:"Using params in the title"}),"\n",(0,o.jsxs)(t.h3,{id:"method-1-export-screenoptions-property-1",children:["Method 1: Export ",(0,o.jsx)(t.code,{children:"screenOptions"})," property"]}),"\n",(0,o.jsxs)(t.p,{children:["You can set the header title by exporting the ",(0,o.jsx)(t.code,{children:"screenOptions"})," property from the screen component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"//...code\n\nexport const screenOptions = ({ route }) => ({ title: route.params.name })\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Note: This method is not available when you set importMode to ",(0,o.jsx)(t.code,{children:"lazy"}),"."]}),"\n"]}),"\n",(0,o.jsxs)(t.h3,{id:"method-2-options-property-in-the-stack-component-1",children:["Method 2: ",(0,o.jsx)(t.code,{children:"options"})," property in the ",(0,o.jsx)(t.code,{children:"Stack"})," component"]}),"\n",(0,o.jsxs)(t.p,{children:["You can also set the header title by using the ",(0,o.jsx)(t.code,{children:"options"})," property in the screen component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nconst AppLayout = () => {\n  return (\n    <Stack initialRouteName=\"home\">\n      // highlight-next-line\n      <Stack.Screen name=\"home\" options={({ route }) => ({ title: route.params.name })} />\n    </Stack>\n  );\n};\n"})}),"\n",(0,o.jsxs)(t.h2,{id:"updating-options-with-setoptions",children:["Updating ",(0,o.jsx)(t.code,{children:"options"})," with ",(0,o.jsx)(t.code,{children:"setOptions"})]}),"\n",(0,o.jsxs)(t.p,{children:["It's often necessary to update the options configuration for the active screen from the mounted screen component itself. We can do this using ",(0,o.jsx)(t.code,{children:"router.setOptions"})]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"<Button\n  title=\"Update the title\"\n  onPress={() => router.setOptions({ title: 'Updated!' })}\n/>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"adjusting-header-styles",children:"Adjusting header styles"}),"\n",(0,o.jsx)(t.p,{children:"Similar to the previous ways to update the title, you can further customize."}),"\n",(0,o.jsxs)(t.p,{children:["Example: You can adjust the header styles by using the ",(0,o.jsx)(t.code,{children:"headerStyle"})," property"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"export const screenOptions = {\n  title: 'My home',\n  headerStyle: {\n    backgroundColor: '#f4511e',\n  },\n  headerTintColor: '#fff',\n  headerTitleStyle: {\n    fontWeight: 'bold',\n  },\n};\n\n// or\n\n<Stack.Screen\n  name=\"home\" \n  // highlight-start\n  options={{\n    title: 'My home',\n    headerStyle: {\n      backgroundColor: '#f4511e',\n    },\n    headerTintColor: '#fff',\n    headerTitleStyle: {\n      fontWeight: 'bold',\n    },\n  }}\n  // highlight-end\n/>\n"})}),"\n",(0,o.jsx)(t.h2,{id:"sharing-common-options-across-screens",children:"Sharing common options across screens"}),"\n",(0,o.jsxs)(t.p,{children:["You can share common options across screens by using the ",(0,o.jsx)(t.code,{children:"screenOptions"})," property in the ",(0,o.jsx)(t.code,{children:"Stack"})," component."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nconst AppLayout = () => {\n  return (\n    <Stack\n      initialRouteName=\"home\"\n      // highlight-start\n      screenOptions={{\n        headerStyle: {\n          backgroundColor: '#f4511e',\n        },\n        headerTintColor: '#fff',\n        headerTitleStyle: {\n          fontWeight: 'bold',\n        },\n      }}\n      // highlight-end\n    />\n  );\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"replacing-the-title-with-a-custom-component",children:"Replacing the title with a custom component"}),"\n",(0,o.jsxs)(t.p,{children:["You can replace the title with a custom component by using the ",(0,o.jsx)(t.code,{children:"headerTitle"})," property."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nconst AppLayout = () => {\n  return (\n    <Stack initialRouteName=\"home\">\n      // highlight-next-line\n      <Stack.Screen name=\"home\" options={{ headerTitle: (props) => <Logo {...props} /> }} />\n    </Stack>\n  );\n};\n"})}),"\n",(0,o.jsx)(t.h2,{id:"additional-configuration",children:"Additional configuration"}),"\n",(0,o.jsxs)(t.p,{children:["You can find more information about the configuration in the ",(0,o.jsx)(t.a,{href:"https://reactnavigation.org/docs/native-stack-navigator/#options",children:"official documentation"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var o=n(7294);const i={},r=o.createContext(i);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);