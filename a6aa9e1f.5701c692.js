(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{99:function(a,e,t){"use strict";t.r(e);var n=t(0),i=t.n(n),l=t(102),c=t(107),r=t(114),m=t(105);var o=function(a){const{metadata:e}=a,{previousPage:t,nextPage:n}=e;return i.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},i.a.createElement("div",{className:"pagination-nav__item"},t&&i.a.createElement(m.a,{className:"pagination-nav__link",to:t},i.a.createElement("h4",{className:"pagination-nav__label"},"\xab Newer Entries"))),i.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&i.a.createElement(m.a,{className:"pagination-nav__link",to:n},i.a.createElement("h4",{className:"pagination-nav__label"},"Older Entries \xbb"))))};e.default=function(a){const{metadata:e,items:t}=a,{siteConfig:{title:n}}=Object(l.a)(),m="/"===e.permalink?n:"Blog",{blogDescription:s}=e;return i.a.createElement(c.a,{title:m,description:s},i.a.createElement("div",{className:"container margin-vert--lg"},i.a.createElement("div",{className:"row"},i.a.createElement("main",{className:"col col--8 col--offset-2"},t.map(({content:a})=>i.a.createElement(r.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},i.a.createElement(a,null))),i.a.createElement(o,{metadata:e})))))}}}]);