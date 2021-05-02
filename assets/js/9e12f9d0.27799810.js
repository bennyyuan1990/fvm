(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(8),o=(n(0),n(94)),a={id:"overview",title:"Overview",sidebar_position:0},l={unversionedId:"getting_started/overview",id:"getting_started/overview",isDocsHomePage:!1,title:"Overview",description:"FVM helps with the need for a consistent app builds by allowing to reference Flutter SDK version used on a per-project basis. It also allows you to have multiple Flutter versions installed to quickly validate and test upcoming Flutter releases with your apps, without waiting for Flutter installation every time.",source:"@site/docs/getting_started/overview.md",sourceDirName:"getting_started",slug:"/getting_started/overview",permalink:"/docs/getting_started/overview",editUrl:"https://github.com/leoafarias/fvm/edit/master/doc/docs/getting_started/overview.md",version:"current",sidebarPosition:0,frontMatter:{id:"overview",title:"Overview",sidebar_position:0},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/getting_started/installation"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Principles",id:"principles",children:[]}],c={toc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"FVM helps with the need for a consistent app builds by allowing to reference Flutter SDK version used on a per-project basis. It also allows you to have multiple Flutter versions installed to quickly validate and test upcoming Flutter releases with your apps, without waiting for Flutter installation every time."),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"We need to have more than one Flutter SDK at a time."),Object(o.b)("li",{parentName:"ul"},"Testing new SDK features requires switching between ",Object(o.b)("a",{parentName:"li",href:"https://flutter.dev/docs/development/tools/sdk/releases"},"Channels")),Object(o.b)("li",{parentName:"ul"},"Switch between channels is slow, and requires to reinstall every time."),Object(o.b)("li",{parentName:"ul"},"No way of keeping track of the latest working/used version of the sdk in an app."),Object(o.b)("li",{parentName:"ul"},"Major Flutter updates require migration of all Flutter apps in the machine."),Object(o.b)("li",{parentName:"ul"},"Inconsistent development environements between other devs in the team.")),Object(o.b)("h2",{id:"principles"},"Principles"),Object(o.b)("p",null,"Some of the principles that are followed when building and adding new features to FVM."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Always use Flutter tools when interacting with the SDK"),Object(o.b)("li",{parentName:"ul"},"Do not override any Flutter CLI commands."),Object(o.b)("li",{parentName:"ul"},"Follow Flutter suggested installation instructions to accomplish caching."),Object(o.b)("li",{parentName:"ul"},"Should extend Flutter behavior and not modify them."),Object(o.b)("li",{parentName:"ul"},"API should be simple and easy to understand.")))}u.isMDXComponent=!0},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),u=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,m=p["".concat(a,".").concat(b)]||p[b]||d[b]||o;return n?i.a.createElement(m,l(l({ref:t},c),{},{components:n})):i.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);