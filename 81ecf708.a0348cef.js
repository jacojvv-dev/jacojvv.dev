(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(6),o=(n(0),n(97)),a={id:"fun-with-ienumerable-and-collection-initializers",title:"Fun with IEnumerable and collection initializers",author:"Jaco Jansen van Vuuren",author_title:"Software Developer",author_url:"https://github.com/jacojvv-dev",author_image_url:"https://avatars0.githubusercontent.com/u/14131955?v=4",tags:["c#","csharp","ienumerable"],image:"https://www.jacojvv.dev/img/covers/2020-10-04-fun-with-ienumerable-and-collection-initializers.png"},c={permalink:"/blog/fun-with-ienumerable-and-collection-initializers",editUrl:"https://github.com/jacojvv-dev/jacojvv.dev/edit/main/blog/2020-10-04-fun-with-ienumerable-and-collection-initializers.md",source:"@site/blog\\2020-10-04-fun-with-ienumerable-and-collection-initializers.md",description:"IEnumerable and collection initializers. You probably use them every day (if you write C# code at least) without thinking about the implementation details too much. And honestly - neither did I. But after I got a null reference exception (by accident, of course) whilst doing an assignment to a collection I was reminded about some of the interesting parts of IEnumerable - and some of the fun stuff you can do with it.",date:"2020-10-04T00:00:00.000Z",tags:[{label:"c#",permalink:"/blog/tags/c"},{label:"csharp",permalink:"/blog/tags/csharp"},{label:"ienumerable",permalink:"/blog/tags/ienumerable"}],title:"Fun with IEnumerable and collection initializers",readingTime:3.7,truncated:!0,nextItem:{title:"Customizing configuration sources for Azure Functions",permalink:"/blog/customizing-configuration-sources-for-azure-functions"}},l=[],u={rightToc:l};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"IEnumerable and collection initializers. You probably use them every day (if you write C# code at least) without thinking about the implementation details too much. And honestly - neither did I. But after I got a null reference exception (by accident, of course) whilst doing an assignment to a collection I was reminded about some of the interesting parts of IEnumerable - and some of the fun stuff you can do with it."))}s.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return d}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),s=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=s(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=r,d=f["".concat(a,".").concat(m)]||f[m]||p[m]||o;return n?i.a.createElement(d,c(c({ref:t},u),{},{components:n})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);