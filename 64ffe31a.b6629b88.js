(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{101:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return o}))},71:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),i=(r(0),r(97)),a=(r(99),{id:"moving-databricks-from-one-azure-subscription-to-another",title:"Moving Databricks from one Azure subscription to another",author:"Jaco Jansen van Vuuren",author_title:"Software Developer",author_url:"https://github.com/jacojvv-dev",author_image_url:"https://avatars0.githubusercontent.com/u/14131955?v=4",tags:["azure","databricks"],image:"https://www.jacojvv.dev/img/covers/2020-08-27-moving-databricks-from-one-azure-subscription-to-another.png"}),c={permalink:"/blog/moving-databricks-from-one-azure-subscription-to-another",editUrl:"https://github.com/jacojvv-dev/jacojvv.dev/edit/main/blog/2020-08-27-moving-databricks-from-one-azure-subscription-to-another.md",source:"@site/blog\\2020-08-27-moving-databricks-from-one-azure-subscription-to-another.md",description:"I recently needed to move a Databricks instance from one Azure subscription to another - online resources on this topic were scarce - so I thought I could contribute a little something to the world. Hopefully it's useful to someone.",date:"2020-08-27T00:00:00.000Z",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"databricks",permalink:"/blog/tags/databricks"}],title:"Moving Databricks from one Azure subscription to another",readingTime:6.42,truncated:!0,prevItem:{title:"Customizing configuration sources for Azure Functions",permalink:"/blog/customizing-configuration-sources-for-azure-functions"},nextItem:{title:"A case for a lower footprint JSON specification",permalink:"/blog/a-case-for-a-lower-footprint-json-specification"}},u=[],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I recently needed to move a Databricks instance from one Azure subscription to another - online resources on this topic were scarce - so I thought I could contribute a little something to the world. Hopefully it's useful to someone."))}l.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(r),b=n,m=f["".concat(a,".").concat(b)]||f[b]||p[b]||i;return r?o.a.createElement(m,c(c({ref:t},s),{},{components:r})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},98:function(e,t,r){"use strict";var n=r(0),o=r(20);t.a=function(){const e=Object(n.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},99:function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return a}));var n=r(98),o=r(101);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:i=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(o.b)(r))return r;if(n)return t+r;const a=!r.startsWith(t)?t+r.replace(/^\//,""):r;return i?e+a:a}(t,e,r,n)}}function a(e,t={}){const{withBaseUrl:r}=i();return r(e,t)}}}]);