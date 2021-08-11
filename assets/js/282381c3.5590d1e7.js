"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4651],{8304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],l={},c="Overview",p={unversionedId:"crate_overview",id:"crate_overview",isDocsHomePage:!1,title:"Overview",description:"In this section you will find an overview of all the crates that make up Bee.",source:"@site/external/bee/documentation/docs/crate_overview.md",sourceDirName:".",slug:"/crate_overview",permalink:"/bee/crate_overview",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Setup a Node",permalink:"/bee/setup_a_node"},next:{title:"API Reference",permalink:"/bee/api_reference"}},s=[{value:"bee-api",id:"bee-api",children:[]},{value:"bee-common",id:"bee-common",children:[{value:"bee-common",id:"bee-common-1",children:[]},{value:"bee-common-derive",id:"bee-common-derive",children:[]}]},{value:"bee-crypto",id:"bee-crypto",children:[]},{value:"bee-ledger",id:"bee-ledger",children:[]},{value:"bee-message",id:"bee-message",children:[]},{value:"bee-network",id:"bee-network",children:[]},{value:"bee-pow",id:"bee-pow",children:[]},{value:"bee-protocol",id:"bee-protocol",children:[]},{value:"bee-runtime",id:"bee-runtime",children:[]},{value:"bee-signing",id:"bee-signing",children:[]},{value:"bee-storage",id:"bee-storage",children:[]}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"In this section you will find an overview of all the crates that make up Bee.  "),(0,i.kt)("h2",{id:"bee-api"},"bee-api"),(0,i.kt)("p",null,"The default REST API implementation for the IOTA Bee node software."),(0,i.kt)("h2",{id:"bee-common"},"bee-common"),(0,i.kt)("h3",{id:"bee-common-1"},"bee-common"),(0,i.kt)("p",null,"Common utilities used across the bee framework."),(0,i.kt)("h3",{id:"bee-common-derive"},"bee-common-derive"),(0,i.kt)("p",null,"Derive macros for the ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-common")," crate."),(0,i.kt)("h2",{id:"bee-crypto"},"bee-crypto"),(0,i.kt)("p",null,"TO-DO"),(0,i.kt)("h2",{id:"bee-ledger"},"bee-ledger"),(0,i.kt)("p",null,"All types and features required to compute and maintain the ledger state."),(0,i.kt)("h2",{id:"bee-message"},"bee-message"),(0,i.kt)("p",null,"Implementation of ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/GalRogozinski/protocol-rfcs/blob/message/text/0017-message/0017-message.md"},"RFC: Message"),"."),(0,i.kt)("h2",{id:"bee-network"},"bee-network"),(0,i.kt)("p",null,"Networking functionality and types for nodes and clients participating in the IOTA protocol built on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"libp2p"),"."),(0,i.kt)("h2",{id:"bee-pow"},"bee-pow"),(0,i.kt)("p",null,"Provides Proof of Work utilities for the IOTA protocol."),(0,i.kt)("h2",{id:"bee-protocol"},"bee-protocol"),(0,i.kt)("p",null,"All types and workers enabling the IOTA protocol."),(0,i.kt)("h2",{id:"bee-runtime"},"bee-runtime"),(0,i.kt)("p",null,"Runtime components and utilities for the bee framework."),(0,i.kt)("h2",{id:"bee-signing"},"bee-signing"),(0,i.kt)("p",null,"IOTA signing primitives."),(0,i.kt)("h2",{id:"bee-storage"},"bee-storage"),(0,i.kt)("h4",{id:"bee-storage-1"},"bee-storage"),(0,i.kt)("p",null,"A general purpose storage backend crate with a key:value abstraction API."),(0,i.kt)("h4",{id:"bee-storage-rocksdb"},"bee-storage-rocksdb"),(0,i.kt)("p",null,"A bee-storage implementation for the ",(0,i.kt)("a",{parentName:"p",href:"https://rocksdb.org/"},"RocksDB")," backend."),(0,i.kt)("h4",{id:"bee-storage-sled"},"bee-storage-sled"),(0,i.kt)("p",null,"A bee-storage implementation for the ",(0,i.kt)("a",{parentName:"p",href:"https://dbdb.io/db/sled"},"Sled")," backend."),(0,i.kt)("h4",{id:"bee-storage-test"},"bee-storage-test"),(0,i.kt)("p",null,"A crate to test storage implementation generically."))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);