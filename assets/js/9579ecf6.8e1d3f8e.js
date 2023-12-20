"use strict";(self.webpackChunkauto_route=self.webpackChunkauto_route||[]).push([[431],{56:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),r=i(1151);const s={sidebar_position:3},o="Deep linking",a={id:"guides/deep-linking",title:"Deep linking",description:"References: Deep linking & Configuring links",source:"@site/docs/guides/deep-linking.mdx",sourceDirName:"guides",slug:"/guides/deep-linking",permalink:"/react-native-auto-route/docs/guides/deep-linking",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Opening a modal",permalink:"/react-native-auto-route/docs/guides/modal"},next:{title:"Screen tracking for analytics",permalink:"/react-native-auto-route/docs/guides/screen-tracking"}},c={},l=[{value:"Setup",id:"setup",level:2},{value:"Configuring links",id:"configuring-links",level:2},{value:"Testing deep links",id:"testing-deep-links",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"deep-linking",children:"Deep linking"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["References: ",(0,t.jsx)(n.a,{href:"https://reactnavigation.org/docs/deep-linking/",children:"Deep linking"})," & ",(0,t.jsx)(n.a,{href:"https://reactnavigation.org/docs/configuring-links#prefixes",children:"Configuring links"})]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,t.jsxs)(n.p,{children:["Follow the ",(0,t.jsx)(n.a,{href:"https://reactnavigation.org/docs/deep-linking#set-up-with-bare-react-native-projects",children:"Set up with bare React Native projects"})," to setup deep linking."]}),"\n",(0,t.jsx)(n.h2,{id:"configuring-links",children:"Configuring links"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:"import React from 'react';\nimport RouterRoot from 'react-native-auto-route';\n\nconst App = () => {\n  return <RouterRoot linking={{prefixes: ['mychat://']}} />;\n};\n\nexport default App;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"testing-deep-links",children:"Testing deep links"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"npx uri-scheme open [your deep link] --[ios|android]\n"})}),"\n",(0,t.jsx)(n.p,{children:"For example:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'npx uri-scheme open "mychat://chat/jane" --ios\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);