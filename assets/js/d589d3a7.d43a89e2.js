"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[162],{6443:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(5893),r=t(1151),i=t(4866),o=t(5162);const l={sidebar_position:1},s="Getting Started",c={id:"getting-started",title:"Getting Started",description:"react-native-auto-route is a file-based router for React Native CLI (iOS, Android). It is build on top of React Navigation and Expo Router",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/react-native-auto-route/docs/getting-started",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Create screens",permalink:"/react-native-auto-route/docs/create-screens"}},u={},d=[{value:"Minimum requirements",id:"minimum-requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Install <code>react-native-auto-route</code>:",id:"install-react-native-auto-route",level:3},{value:"Installing peer dependencies:",id:"installing-peer-dependencies",level:3},{value:"Add Auto Route plugin",id:"add-auto-route-plugin",level:3},{value:"Update metro.config.js",id:"update-metroconfigjs",level:3},{value:"Update your <code>App.tsx</code> file",id:"update-your-apptsx-file",level:3}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"react-native-auto-route"})," is a file-based router for React Native CLI (iOS, Android). It is build on top of ",(0,a.jsx)(n.a,{href:"https://reactnavigation.org/",children:"React Navigation"})," and ",(0,a.jsx)(n.a,{href:"https://docs.expo.dev/router/introduction/",children:"Expo Router"})]}),"\n",(0,a.jsxs)(n.p,{children:["It allow you to manage your routes in a simple and intuitive way. When a file is added, removed or renamed, the router is automatically updated. Every screen in your app is automatically deep linkable, for example, you can open the screen ",(0,a.jsx)(n.code,{children:"app/home.tsx"})," with the url ",(0,a.jsx)(n.code,{children:"myapp://home"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"minimum-requirements",children:"Minimum requirements"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"react-native"})," >= 0.63.0"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"typescript"})," >= 4.1.0 (if you use TypeScript)"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.h3,{id:"install-react-native-auto-route",children:["Install ",(0,a.jsx)(n.code,{children:"react-native-auto-route"}),":"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install react-native-auto-route\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add react-native-auto-route\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add react-native-auto-route\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"installing-peer-dependencies",children:"Installing peer dependencies:"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"If you already have these libraries installed and at the latest version, you can skip this step."}),"\n"]}),"\n",(0,a.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install react-native-screens react-native-safe-area-context\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add react-native-screens react-native-safe-area-context\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add react-native-screens react-native-safe-area-context\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["If you're on a Mac and developing for iOS, you need to install the pods (via ",(0,a.jsx)(n.a,{href:"https://cocoapods.org",children:"Cocoapods"}),") to complete the linking."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx pod-install ios\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"react-native-screens"})," package requires one additional configuration step to properly\nwork on Android devices. Edit ",(0,a.jsx)(n.code,{children:"MainActivity.kt"})," or ",(0,a.jsx)(n.code,{children:"MainActivity.java"})," file which is located under ",(0,a.jsx)(n.code,{children:"android/app/src/main/java/<your package name>/"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Add the highlighted code to the body of ",(0,a.jsx)(n.code,{children:"MainActivity"})," class:"]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{value:"kotlin",label:"Kotlin",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"// highlight-next-line\nimport android.os.Bundle;\n\nclass MainActivity: ReactActivity() {\n  //...code\n  // highlight-start\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(null)\n  }\n  // highlight-end\n  //...code\n}\n"})})}),(0,a.jsx)(o.Z,{value:"java",label:"Java",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-java",children:"// highlight-next-line\nimport android.os.Bundle;\n\npublic class MainActivity extends ReactActivity {\n  //...code\n  // highlight-start\n  @Override\n  protected void onCreate(Bundle savedInstanceState) {\n    super.onCreate(null);\n  }\n  // highlight-end\n  \n  public static class MainActivityDelegate extends ReactActivityDelegate {\n    //...code\n  }\n}\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"add-auto-route-plugin",children:"Add Auto Route plugin"}),"\n",(0,a.jsxs)(n.p,{children:["Add ",(0,a.jsx)(n.code,{children:"react-native-auto-route/plugin"})," plugin to your ",(0,a.jsx)(n.code,{children:"babel.config.js"}),". You can customize the plugin options, ",(0,a.jsx)(n.code,{children:"appDirectory"})," is the directory where your screens are located, and importMode is the import mode (",(0,a.jsx)(n.code,{children:"sync"})," or ",(0,a.jsx)(n.code,{children:"lazy"}),") for your screens (Default: ",(0,a.jsx)(n.code,{children:"sync"}),")."]}),"\n",(0,a.jsxs)(i.Z,{children:[(0,a.jsx)(o.Z,{value:"normal",label:"Normal",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:'    module.exports = {\n      presets: [\n        //...\n      ],\n      plugins: [\n        //...\n        // highlight-next-line\n        "react-native-auto-route/plugin",\n      ],\n    };\n'})})}),(0,a.jsx)(o.Z,{value:"custom",label:"Custom Configs",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:'    module.exports = {\n      presets: [\n        //...\n      ],\n      plugins: [\n        //...\n        // highlight-next-line\n        ["react-native-auto-route/plugin", { appDirectory: "app", importMode: "sync" }],\n      ],\n    };\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"update-metroconfigjs",children:"Update metro.config.js"}),"\n",(0,a.jsxs)(n.p,{children:["Enable ",(0,a.jsx)(n.code,{children:"unstable_allowRequireContext"})," in your ",(0,a.jsx)(n.code,{children:"metro.config.js"})," file."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="metro.config.js"',children:"const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');\n\n/**\n * Metro configuration\n * https://facebook.github.io/metro/docs/configuration\n *\n * @type {import('metro-config').MetroConfig}\n */\nconst config = {\n  transformer: {\n    // highlight-next-line\n    unstable_allowRequireContext: true,\n  },\n};\n\nmodule.exports = mergeConfig(getDefaultConfig(__dirname), config);\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"update-your-apptsx-file",children:["Update your ",(0,a.jsx)(n.code,{children:"App.tsx"})," file"]}),"\n",(0,a.jsxs)(n.p,{children:["Import ",(0,a.jsx)(n.code,{children:"react-native-auto-route"})," and use the ",(0,a.jsx)(n.code,{children:"RouterRoot"})," component. It's similar to ",(0,a.jsx)(n.code,{children:"NavigationContainer"})," from ",(0,a.jsx)(n.code,{children:"react-navigation"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import React from 'react';\nimport RouterRoot from 'react-native-auto-route';\n\nconst App = () => {\n  return <RouterRoot />;\n};\n\nexport default App;\n"})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>I});var a=t(7294),r=t(512),i=t(2466),o=t(6550),l=t(469),s=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:r}),[m,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&s(f)}),[f]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),x(e)}),[d,x,i]),tabValues:i}}var x=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function j(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=s.indexOf(n),r=l[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,v.jsx)(j,{...e,...n}),(0,v.jsx)(b,{...e,...n})]})}function I(e){const n=(0,x.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var a=t(7294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);