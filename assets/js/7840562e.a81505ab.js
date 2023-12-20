"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[178],{4056:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=r(5893),t=r(1151),i=r(4866),s=r(5162);const l={sidebar_position:3},o="Drawer",c={id:"navigators/drawer",title:"Drawer",description:"Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures.",source:"@site/docs/navigators/drawer.mdx",sourceDirName:"navigators",slug:"/navigators/drawer",permalink:"/react-native-auto-route/docs/navigators/drawer",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tabs",permalink:"/react-native-auto-route/docs/navigators/tab"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Create drawer navigator",id:"create-drawer-navigator",level:2},{value:"Example usage:",id:"example-usage",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"drawer",children:"Drawer"}),"\n",(0,n.jsx)(a.p,{children:"Drawer Navigator renders a navigation drawer on the side of the screen which can be opened and closed via gestures."}),"\n",(0,n.jsx)(a.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npm install @react-navigation/drawer\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn add @react-navigation/drawer\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"pnpm add @react-navigation/drawer\n"})})})]}),"\n",(0,n.jsx)(a.p,{children:"Then, you need to install and configure the libraries that are required by the drawer navigator:"}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["First, install ",(0,n.jsx)(a.a,{href:"https://docs.swmansion.com/react-native-gesture-handler/docs/",children:(0,n.jsx)(a.code,{children:"react-native-gesture-handler"})})," and ",(0,n.jsx)(a.a,{href:"https://docs.swmansion.com/react-native-reanimated/",children:(0,n.jsx)(a.code,{children:"react-native-reanimated"})}),"."]}),"\n"]}),"\n",(0,n.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(s.Z,{value:"npm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"npm install react-native-gesture-handler react-native-reanimated\n"})})}),(0,n.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"yarn add react-native-gesture-handler react-native-reanimated\n"})})}),(0,n.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-bash",children:"pnpm add react-native-gesture-handler react-native-reanimated\n"})})})]}),"\n",(0,n.jsxs)(a.ol,{start:"2",children:["\n",(0,n.jsxs)(a.li,{children:["Update ",(0,n.jsx)(a.code,{children:"babel.config.js"})," to include the reanimated plugin:"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n      ... \n    ],\n    plugins: [\n      ... \n      'react-native-reanimated/plugin',\n    ],\n};\n"})}),"\n",(0,n.jsx)(a.h2,{id:"create-drawer-navigator",children:"Create drawer navigator"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",metastring:'title="navigator/drawer.tsx"',children:"import {\n  createDrawerNavigator,\n  type DrawerNavigationEventMap,\n  type DrawerNavigationOptions,\n} from '@react-navigation/drawer';\nimport type {\n  DrawerNavigationState,\n  ParamListBase,\n} from '@react-navigation/native';\nimport { createNavigator } from 'react-native-auto-route';\n\nconst DrawerNavigator = createDrawerNavigator().Navigator;\n\nexport const Drawer = createNavigator<\n  DrawerNavigationState<ParamListBase>,\n  DrawerNavigationOptions,\n  DrawerNavigationEventMap,\n  Omit<React.ComponentProps<typeof DrawerNavigator>, 'id' | 'children'> & {\n    children?: React.ReactNode;\n  }\n>(DrawerNavigator);\n\nexport default Drawer;\n\n"})}),"\n",(0,n.jsx)(a.h2,{id:"example-usage",children:"Example usage:"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{children:"\ud83d\udcc2 app\n\u2503 \u2523 \ud83d\udcdc _layout.tsx\n\u2503 \u2523 \ud83d\udcc2 (drawer)\n\u2503 \u2503 \u2523 \ud83d\udcdc _layout.tsx\n\u2503 \u2503 \u2523 \ud83d\udcdc home.tsx\n\u2503 \u2503 \u2523 \ud83d\udcdc settings.tsx\n"})}),"\n",(0,n.jsxs)(i.Z,{children:[(0,n.jsx)(s.Z,{value:"_layout",label:"_layout",default:!0,children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nexport default function Layout() {\n  return <Stack initialRouteName=\"(drawer)\" />;\n}\n"})})}),(0,n.jsx)(s.Z,{value:"(drawer)/_layout",label:"(drawer)/_layout",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",metastring:'title="app/(drawer)/_layout.tsx"',children:"import React from 'react';\nimport Drawer from '../../src/navigator/drawer';\n\nconst DrawerLayout = () => {\n  return (\n    <Drawer>\n      {/** The screen will be included automatically. Just need declare if you need to add custom configuration */}\n      <Drawer.Screen\n        name=\"home\" // name prop is directory name or filename\n        options={{\n          // https://reactnavigation.org/docs/stack-navigator#options\n          title: 'Home',\n        }}\n      />\n    </Drawer>\n  );\n};\n\nexport default DrawerLayout;\n"})})}),(0,n.jsx)(s.Z,{value:"(drawer)/home",label:"(drawer)/home",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",metastring:'title="app/(drawer)/home.tsx"',children:"import { View, Text } from 'react-native';\nimport React from 'react';\n\nconst Home = () => {\n  return (\n    <View>\n      <Text>Home</Text>\n    </View>\n  );\n};\n\nexport default Home;\n"})})}),(0,n.jsx)(s.Z,{value:"(drawer)/settings",label:"(drawer)/settings",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-tsx",metastring:'title="app/(drawer)/settings.tsx"',children:"import { View, Text } from 'react-native';\nimport React from 'react';\n\nconst Settings = () => {\n  return (\n    <View>\n      <Text>Settings</Text>\n    </View>\n  );\n};\n\nexport default Profile;\n"})})})]})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},5162:(e,a,r)=>{r.d(a,{Z:()=>s});r(7294);var n=r(512);const t={tabItem:"tabItem_Ymn6"};var i=r(5893);function s(e){let{children:a,hidden:r,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(t.tabItem,s),hidden:r,children:a})}},4866:(e,a,r)=>{r.d(a,{Z:()=>y});var n=r(7294),t=r(512),i=r(2466),s=r(6550),l=r(469),o=r(1980),c=r(7392),u=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:r}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:r,attributes:n,default:t}}=e;return{value:a,label:r,attributes:n,default:t}}))}(r);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function h(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const t=(0,s.k6)(),i=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const a=new URLSearchParams(t.location.search);a.set(i,e),t.replace({...t.location,search:a.toString()})}),[i,t])]}function g(e){const{defaultValue:a,queryString:r=!1,groupId:t}=e,i=p(e),[s,o]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:i}))),[c,d]=m({queryString:r,groupId:t}),[g,v]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,i]=(0,u.Nk)(r);return[t,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:t}),x=(()=>{const e=c??g;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,i]),tabValues:i}}var v=r(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=r(5893);function b(e){let{className:a,block:r,selectedValue:n,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const a=e.currentTarget,r=o.indexOf(a),t=l[r].value;t!==n&&(c(a),s(t))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;a=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;a=o[r]??o[o.length-1];break}}a?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},a),children:l.map((e=>{let{value:a,label:r,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,t.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":n===a}),children:r??a},a)}))})}function w(e){let{lazy:a,children:r,selectedValue:t}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function j(e){const a=g(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(b,{...e,...a}),(0,f.jsx)(w,{...e,...a})]})}function y(e){const a=(0,v.Z)();return(0,f.jsx)(j,{...e,children:d(e.children)},String(a))}},1151:(e,a,r)=>{r.d(a,{Z:()=>l,a:()=>s});var n=r(7294);const t={},i=n.createContext(t);function s(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);