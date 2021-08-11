"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[5833],{603:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],s={},c="What is Chrysalis?",l={unversionedId:"introduction/what_is_chrysalis",id:"introduction/what_is_chrysalis",isDocsHomePage:!1,title:"What is Chrysalis?",description:"The objective of the IOTA Foundation was to optimize the IOTA mainnet before Coordicide and to offer an enterprise-ready solution for our ecosystem. This was achieved by an intermediate update called Chrysalis. You can read more about how Chrysalis was strategically released here.",source:"@site/external/chrysalis-docs/docs/introduction/what_is_chrysalis.md",sourceDirName:"introduction",slug:"/introduction/what_is_chrysalis",permalink:"/chrysalis-docs/introduction/what_is_chrysalis",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Welcome",permalink:"/chrysalis-docs/welcome"},next:{title:"Path to Chrysalis",permalink:"/chrysalis-docs/introduction/path_to_chrysalis"}},d=[{value:"What Are the Specific Chrysalis Upgrades?",id:"what-are-the-specific-chrysalis-upgrades",children:[{value:"White-flag Approach",id:"white-flag-approach",children:[]},{value:"New Milestone Selection Algorithm",id:"new-milestone-selection-algorithm",children:[]},{value:"URTS Tip Selection",id:"urts-tip-selection",children:[]},{value:"Ed25519 Signature Scheme",id:"ed25519-signature-scheme",children:[]},{value:"Atomic Transactions",id:"atomic-transactions",children:[]},{value:"Switch to UTXO Model",id:"switch-to-utxo-model",children:[]},{value:"Internal Binary Representation",id:"internal-binary-representation",children:[]},{value:"New Node API and Client Libraries",id:"new-node-api-and-client-libraries",children:[]}]}],h={toc:d};function p(e){var t=e.components,s=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"what-is-chrysalis"},"What is Chrysalis?"),(0,r.kt)("p",null,"The objective of the IOTA Foundation was to optimize the IOTA mainnet before Coordicide and to offer an enterprise-ready solution for our ecosystem. This was achieved by an intermediate update called ",(0,r.kt)("inlineCode",{parentName:"p"},"Chrysalis"),". You can read more about how Chrysalis was strategically released here."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4167).Z})),(0,r.kt)("p",null,"A chrysalis is \u201cthe form a caterpillar takes before it emerges from its cocoon as a fully-formed moth or butterfly\u201d. In the context of IOTA, Chrysalis was the mainnet\u2019s intermediate stage before Coordicide's completion. The main purpose of Chrysalis is to improve the usability of the previous IOTA mainnet, for users and developers alike."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2660).Z})),(0,r.kt)("p",null,"Why is this process of adopting major protocol improvements relatively unique to IOTA among permissionless Digital Ledger Technologies (DLTs)? The simple answer is the absence of miners. In most permissionless DLTs, the miners\u2019 economic incentives differ from those of regular network users. Changes to throughput and network latencies can disrupt the fee market the miners rely on. This in turn makes them likely to object to network upgrades as it affects their bottom line."),(0,r.kt)("p",null,"In IOTA, validators and users are one and the same. There is no conflict of interests between parties with different motivations, meaning there is a much smoother path to network improvements. This is why we are able to incrementally and smoothly upgrade the network before Coordicide."),(0,r.kt)("h2",{id:"what-are-the-specific-chrysalis-upgrades"},"What Are the Specific Chrysalis Upgrades?"),(0,r.kt)("h3",{id:"white-flag-approach"},"White-flag Approach"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(823).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://iota.cafe/t/conflict-white-flag-mitigate-conflict-spamming-by-ignoring-conflicts/233"},"The White-flag approach"),", which is used for calculating balances. It is a simpler, conflict-ignoring approach that improved the speed and efficiency of tip selection, eliminated many network attacks, and significantly reduced the need for reattachments."),(0,r.kt)("h3",{id:"new-milestone-selection-algorithm"},"New Milestone Selection Algorithm"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2674).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://iota.cafe/t/coordinator-improvements/310"},"A new milestone selection algorithm for the Coordinator")," that focuses on allowing the network to support many more confirmed transactions per second (CTPS) than before, with higher computational efficiency."),(0,r.kt)("h3",{id:"urts-tip-selection"},"URTS Tip Selection"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2821).Z}),"\nA new ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/master/text/0008-uniform-random-tip-selection/0008-uniform-random-tip-selection.md"},"Uniform Random Tip Selection")," in node software. It is significantly faster and more efficient than the previous tip selection algorithm."),(0,r.kt)("h3",{id:"ed25519-signature-scheme"},"Ed25519 Signature Scheme"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(4420).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/blob/ee07797acb5940b7dbb5c3411b184ccdc6afdbb1/text/0000-ed25519-signature-scheme/0000-ed25519-signature-scheme.md"},"The Ed25519 signature scheme")," has been added to the network, replacing the current Winternitz one time signature scheme (W-OTS) signature scheme. Using an EdDSA signature scheme allows the protocol and clients using the protocol to run more efficiently on established hardware. Unlike W-OTS, the Ed25519 signature scheme also allows for the re-use of private keys, and, with that, introduces reusable addresses to the protocol. This change also dramatically reduces the transaction size, saving network bandwidth and processing time."),(0,r.kt)("h3",{id:"atomic-transactions"},"Atomic Transactions"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(861).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md"},"Atomic transactions")," that move the protocol from the current, complicated, bundle construct and use simpler atomic transactions instead. This results in much simpler development, and more adaptable and maintainable code of the core software. In addition, atomic transactions reduce network overhead, reduce transaction validation and signature verification load, and improve spam protection and congestion control."),(0,r.kt)("h3",{id:"switch-to-utxo-model"},"Switch to UTXO Model"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7861).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://iota.cafe/t/switching-to-utxo-model-for-balances-colored-coins-easier-conflict-resolution/229"},"Switch to the UTXO model")," from the current account model. Every coin on an address becomes uniquely identifiable and every spend names the exact coins that it wants to move. This allows for faster and more exact conflict handling and improves resilience and security of the protocol. In addition, switching to UTXO makes other functionalities, such as colored tokens, on the protocol possible in the future."),(0,r.kt)("h3",{id:"internal-binary-representation"},"Internal Binary Representation"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6329).Z}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luca-moser/protocol-rfcs/blob/signed-tx-payload/text/0000-transaction-payload/0000-transaction-payload.md"},"A switch to an internal binary representation of the trinary transaction"),". This allows us to work on binary data for validation, IO, and other processing, without the current reliance on binary-ternary conversions as in the pre-Chrysalis node software. The switch to binary transactions further reduces transaction size, saving network bandwidth and processing time."),(0,r.kt)("h3",{id:"new-node-api-and-client-libraries"},"New Node API and Client Libraries"),(0,r.kt)("p",null,"With Chrysalis, we wanted to offer a more standard API on both the node and client library level. Node implementations provide a completely redesigned ",(0,r.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml"},"RESTful")," and ",(0,r.kt)("a",{parentName:"p",href:"https://playground.asyncapi.io/?load=https://raw.githubusercontent.com/luca-moser/protocol-rfcs/rfc/node-event-api/text/0033-node-event-api/0033-node-event-api.yml"},"eventful")," API implementations."),(0,r.kt)("p",null,"Our ",(0,r.kt)("a",{parentName:"p",href:"/chrysalis-docs/libraries/"},"client libraries")," provide high level abstractions that allow developers to build solutions that are easier to develop and cheaper to maintain."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,u=p["".concat(c,".").concat(m)]||p[m]||h[m]||r;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2660:function(e,t,n){t.Z=n.p+"assets/images/02_path_to-44585e2687441e0d558cbaf271a0e32a.png"},4167:function(e,t,n){t.Z=n.p+"assets/images/00-35df8796a18933da0d70535d975b39e7.gif"},823:function(e,t,n){t.Z=n.p+"assets/images/01-a8fd633b9ba8b13099eea3dd6855c782.png"},2674:function(e,t,n){t.Z=n.p+"assets/images/02-47928c5a81662ea608d091d951dd163a.png"},2821:function(e,t,n){t.Z=n.p+"assets/images/03-b2ef8429fe6fb683139a402d68adf2a4.png"},4420:function(e,t,n){t.Z=n.p+"assets/images/04-50479a17e65e038cfda71c898ca5bc6a.png"},861:function(e,t,n){t.Z=n.p+"assets/images/05-5b5784bb20634abbf3eab2350d6291fe.png"},7861:function(e,t,n){t.Z=n.p+"assets/images/06-d1d4fd3cd6761eb8a2caae479fc26cf6.png"},6329:function(e,t,n){t.Z=n.p+"assets/images/07-ae1a935e21a18334630a7143c409a395.png"}}]);