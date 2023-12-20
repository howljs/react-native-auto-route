"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[401],{4880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>f,frontMatter:()=>u,metadata:()=>d,toc:()=>h});var r=a(5893),n=a(1151),o=a(4866),l=a(5162),s=a(2004),i=a.n(s);const u={sidebar_position:4},c="Layout routes",d={id:"layout-routes",title:"Layout routes",description:"Create a layout route",source:"@site/docs/layout-routes.mdx",sourceDirName:".",slug:"/layout-routes",permalink:"/react-native-auto-route/docs/layout-routes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Moving between screens",permalink:"/react-native-auto-route/docs/moving-between-screens"},next:{title:"Passing parameters to routes",permalink:"/react-native-auto-route/docs/params"}},p={},h=[{value:"Create a layout route",id:"create-a-layout-route",level:2}];function m(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"layout-routes",children:"Layout routes"}),"\n",(0,r.jsx)(i(),{playing:!0,controls:!0,url:"/react-native-auto-route/img/create-layout.mp4"}),"\n",(0,r.jsx)(t.h2,{id:"create-a-layout-route",children:"Create a layout route"}),"\n",(0,r.jsxs)(t.p,{children:["To create a layout route for a directory, create a file named ",(0,r.jsx)(t.code,{children:"_layout.tsx"})," or ",(0,r.jsx)(t.code,{children:"_layout.js"})," in the directory, and export a React component as default."]}),"\n",(0,r.jsx)(t.p,{children:"Example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nconst AppLayout = () => {\n  return <Stack initialRouteName=\"home\" />\n};\n\nexport default AppLayout;\n"})}),"\n",(0,r.jsx)(t.p,{children:"Supports adding a single layout route for a given directory. If you want to use multiple layout routes, add multiple directories:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"\ud83d\udcc2 app\n\u2503 \u2523 \ud83d\udcdc _layout.tsx\n\u2503 \u2523 \ud83d\udcdc sign-in.tsx\n\u2503 \u2523 \ud83d\udcc2 (tabs)\n\u2503 \u2503 \u2517 \ud83d\udcdc _layout.tsx\n\u2503 \u2503 \u2517 \ud83d\udcdc home.tsx\n\u2503 \u2503 \u2517 \ud83d\udcdc profile.tsx\n"})}),"\n",(0,r.jsxs)(o.Z,{children:[(0,r.jsx)(l.Z,{value:"_layout",label:"_layout",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/_layout.tsx"',children:"import React from 'react';\nimport { Stack } from 'react-native-auto-route';\n\nexport default function Layout() {\n  return <Stack initialRouteName=\"(tabs)\" />;\n}\n"})})}),(0,r.jsx)(l.Z,{value:"(tabs)/_layout",label:"(tabs)/_layout",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/(tabs)/_layout.tsx"',children:"import React from 'react';\nimport { Tabs } from 'react-native-auto-route';\n\nexport default function Layout() {\n  return <Tabs />;\n}\n"})})}),(0,r.jsx)(l.Z,{value:"(tabs)/home",label:"(tabs)/home",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/(tabs)/home.tsx"',children:"import { View, Text } from 'react-native';\nimport React from 'react';\n\nconst Home = () => {\n  return (\n    <View>\n      <Text>Home</Text>\n    </View>\n  );\n};\n\nexport default Home;\n"})})}),(0,r.jsx)(l.Z,{value:"(tabs)/profile",label:"(tabs)/profile",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/(tabs)/profile.tsx"',children:"import { View, Text } from 'react-native';\nimport React from 'react';\n\nconst Profile = () => {\n  return (\n    <View>\n      <Text>Profile</Text>\n    </View>\n  );\n};\n\nexport default Profile;\n"})})}),(0,r.jsx)(l.Z,{value:"sign-in",label:"sign-in",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="app/sign-in.tsx"',children:"import { View, Text } from 'react-native';\nimport React from 'react';\n\nconst SignIn = () => {\n  return (\n    <View>\n      <Text>SignIn</Text>\n    </View>\n  );\n};\n\nexport default SignIn;\n\n"})})})]}),"\n",(0,r.jsx)(t.p,{children:"With above directory structure:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"/sign-in"})," will use ",(0,r.jsx)(t.code,{children:"app/_layout.tsx"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"/tabs/home"})," and ",(0,r.jsx)(t.code,{children:"/tabs/profile"})," will use ",(0,r.jsx)(t.code,{children:"app/(tabs)/_layout.tsx"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"(tabs)"}),": using the group syntax (), prevent a segment from showing in the URL path. In this case, the URL path will be ",(0,r.jsx)(t.code,{children:"/home"})," and ",(0,r.jsx)(t.code,{children:"/profile"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"app/_layout.tsx"})," is not created, the default layout (Stack) will be used."]})]})}function f(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var r=a(512);const n={tabItem:"tabItem_Ymn6"};var o=a(5893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,l),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(7294),n=a(512),o=a(2466),l=a(6550),s=a(469),i=a(1980),u=a(7392),c=a(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:a,groupId:n}),[f,x]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),b=(()=>{const e=u??f;return h({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),x(e)}),[d,x,o]),tabValues:o}}var x=a(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function y(e){let{className:t,block:a,selectedValue:r,selectValue:l,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,a=i.indexOf(t),n=s[a].value;n!==r&&(u(t),l(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(v,{...e,...t})]})}function w(e){const t=(0,x.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}}}]);