"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3923],{2277:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(2122),i=n(9756),r=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"in_progress/new/chain_components",id:"in_progress/new/chain_components",isDocsHomePage:!1,title:"chain_components",description:"DRAFT. IN PROGRESS",source:"@site/external/wasp/documentation/docs/in_progress/new/chain_components.md",sourceDirName:"in_progress/new",slug:"/in_progress/new/chain_components",permalink:"/wasp/in_progress/new/chain_components",version:"current",frontMatter:{}},c=[{value:"Responsibility of the global <code>Chains</code> object",id:"responsibility-of-the-global-chains-object",children:[]},{value:"Requests",id:"requests",children:[{value:"On-ledger requests",id:"on-ledger-requests",children:[]},{value:"Off-ledger requests",id:"off-ledger-requests",children:[]}]},{value:"Responsibility of the <code>Chain</code> object",id:"responsibility-of-the-chain-object",children:[{value:"Peers",id:"peers",children:[]},{value:"Mempool",id:"mempool",children:[]},{value:"Consensus",id:"consensus",children:[]},{value:"State manager",id:"state-manager",children:[]},{value:"Committee manager (?)",id:"committee-manager-",children:[]}]}],m={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"DRAFT. IN PROGRESS")),(0,r.kt)("h1",{id:"chains"},"Chains"),(0,r.kt)("p",null,"Registry of the ",(0,r.kt)("inlineCode",{parentName:"p"},"chain")," objects. "),(0,r.kt)("p",null,"Contains all active chains the node is participating in."),(0,r.kt)("p",null,"There are ",(0,r.kt)("inlineCode",{parentName:"p"},"chains")," package and ",(0,r.kt)("inlineCode",{parentName:"p"},"chains")," plugin. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The package implements ",(0,r.kt)("inlineCode",{parentName:"li"},"Chains")," object "),(0,r.kt)("li",{parentName:"ul"},"The plugin creates one global instances of ",(0,r.kt)("inlineCode",{parentName:"li"},"Chains")," and provides access to it")),(0,r.kt)("h2",{id:"responsibility-of-the-global-chains-object"},"Responsibility of the global ",(0,r.kt)("inlineCode",{parentName:"h2"},"Chains")," object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"handle the in-memory registry of chains: load from Registry ( ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainRecord")," ), activate, deactivate, find by ",(0,r.kt)("inlineCode",{parentName:"li"},"ChainID")),(0,r.kt)("li",{parentName:"ul"},"attach to exposed events and listen to incoming async messages which are targeted to the specific chain:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"txstream"),": transactions and other updates from Goshimmer"),(0,r.kt)("li",{parentName:"ul"},"off-ledger requests from ",(0,r.kt)("em",{parentName:"li"},"off-ledger request module")))),(0,r.kt)("li",{parentName:"ul"},"dispatch messages to specific chain")),(0,r.kt)("h1",{id:"chain-object"},"Chain object"),(0,r.kt)("p",null,"Represents a chain the node is participating in."),(0,r.kt)("p",null,"The node can participate as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"committee node"),". In this case it has its index and ",(0,r.kt)("inlineCode",{parentName:"li"},"DKShare")," in a current committee of the chain. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"access node"),". In this case it only contains state of the chain and cannot participate in producing state updates")),(0,r.kt)("h2",{id:"requests"},"Requests"),(0,r.kt)("p",null,"it is implemented as ",(0,r.kt)("inlineCode",{parentName:"p"},"iscp.Request")," interface"),(0,r.kt)("p",null,"There are 2 types of requests which implements the interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"on-ledger requests which are coming as UTXO outputs of confirmed transactions from L1."),(0,r.kt)("li",{parentName:"ul"},"off-ledger requests which are coming directly to the node through API.")),(0,r.kt)("h3",{id:"on-ledger-requests"},"On-ledger requests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"corresponds to confirmed UTXO of ",(0,r.kt)("inlineCode",{parentName:"li"},"ledgerstate.ExtendedLockedOutput")," type"),(0,r.kt)("li",{parentName:"ul"},"contains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tokens (>=1)"),(0,r.kt)("li",{parentName:"ul"},"target chain (",(0,r.kt)("inlineCode",{parentName:"li"},"Address")," of the output)"),(0,r.kt)("li",{parentName:"ul"},"Metadata:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"target contract"),(0,r.kt)("li",{parentName:"ul"},"target entry point"),(0,r.kt)("li",{parentName:"ul"},"params (RequestArgs, dict.Dict),"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sender")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minted")," proofs."))),(0,r.kt)("li",{parentName:"ul"},"coming with transaction from goshimmer via ",(0,r.kt)("inlineCode",{parentName:"li"},"txstream")),(0,r.kt)("li",{parentName:"ul"},"each transaction is parsed into requests by adding ",(0,r.kt)("inlineCode",{parentName:"li"},"sender")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"minted")," to each output"),(0,r.kt)("li",{parentName:"ul"},"RequestID == ledgerstate.OutputID == TransactionID||index")),(0,r.kt)("h3",{id:"off-ledger-requests"},"Off-ledger requests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"coming as API calls from the wild. Do not correspond to any UTXO"),(0,r.kt)("li",{parentName:"ul"},"contains:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"target chain (",(0,r.kt)("inlineCode",{parentName:"li"},"ChainID"),")"),(0,r.kt)("li",{parentName:"ul"},"Metadata:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"target contract"),(0,r.kt)("li",{parentName:"ul"},"target entry point"),(0,r.kt)("li",{parentName:"ul"},"params (dict.Dict),"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ordnum"),": an increasing counter which must be unique for each transaction ",(0,r.kt)("inlineCode",{parentName:"li"},"uint64")),(0,r.kt)("li",{parentName:"ul"},"ED25519 signature of the above. Sender address is an address which can be derived from the signature"),(0,r.kt)("li",{parentName:"ul"},"RequestID == ledgerstate.OutputID(blake2b(",(0,r.kt)("inlineCode",{parentName:"li"},"contains"),") || 0)"))),(0,r.kt)("li",{parentName:"ul"},"each off-ledger request is checked:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"signature must be valid"),(0,r.kt)("li",{parentName:"ul"},"it must contain existing account on the chain for the sender address"),(0,r.kt)("li",{parentName:"ul"},"its ",(0,r.kt)("inlineCode",{parentName:"li"},"ordnum")," must be larger than the last ",(0,r.kt)("inlineCode",{parentName:"li"},"ordnum")," stored with the account under the address")))),(0,r.kt)("p",null,"The off-ledger requests are validated upon receiving from API by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"checking the signature"),(0,r.kt)("li",{parentName:"ul"},"calling a view to check if the account is present."),(0,r.kt)("li",{parentName:"ul"},"checking if ",(0,r.kt)("inlineCode",{parentName:"li"},"ordnum")," is higher than the one in the chain (it is only a preliminary check, to reject obviously wrong requests)")),(0,r.kt)("h2",{id:"responsibility-of-the-chain-object"},"Responsibility of the ",(0,r.kt)("inlineCode",{parentName:"h2"},"Chain")," object"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"consume incoming stream of messages dispatched to the ",(0,r.kt)("inlineCode",{parentName:"li"},"chain")," by ",(0,r.kt)("inlineCode",{parentName:"li"},"chains"),"."),(0,r.kt)("li",{parentName:"ul"},"Message types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Off-ledger requests, already pre-validated"),(0,r.kt)("li",{parentName:"ul"},"Transactions from ",(0,r.kt)("inlineCode",{parentName:"li"},"txstream"),". Each transaction is parsed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state transition"),", the ",(0,r.kt)("inlineCode",{parentName:"li"},"AliasOutput")," to the chain if it contains one"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"on-ledger")," requests, the ",(0,r.kt)("inlineCode",{parentName:"li"},"ExtendedLockedOutputs")," with target address to the chain"))))),(0,r.kt)("li",{parentName:"ul"},"Process requests by producing blocks/updates of the chain's state"),(0,r.kt)("li",{parentName:"ul"},"maintain consistent solid state of the chain"),(0,r.kt)("li",{parentName:"ul"},"provide access to the solid state of the chain")),(0,r.kt)("h3",{id:"peers"},"Peers"),(0,r.kt)("p",null,"Peers of the chain are nodes which are running the chain."),(0,r.kt)("p",null,"Some peers are ",(0,r.kt)("inlineCode",{parentName:"p"},"committee peers"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"committee peers")," form a committee:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"committee represents ",(0,r.kt)("inlineCode",{parentName:"li"},"state address"),", backed by a distributed key"),(0,r.kt)("li",{parentName:"ul"},"each committee peer contains index in the committee and the secret partial key, generated during DKG (must be present in the registry)")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Committee")," may change, then ",(0,r.kt)("inlineCode",{parentName:"p"},"state address")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"committee peers")," change too."),(0,r.kt)("p",null,"Peers are exchanging information (within the chain)."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"receiving peer sends validated off-ledger requests to committee peers."),(0,r.kt)("li",{parentName:"ul"},"each committee peer send ",(0,r.kt)("inlineCode",{parentName:"li"},"request id")," of each request it is ready to process to the committee peers"),(0,r.kt)("li",{parentName:"ul"},"all peers exchange syncing data (blocks) upon request"),(0,r.kt)("li",{parentName:"ul"},"all peers exchange blob data"),(0,r.kt)("li",{parentName:"ul"},"committee peers exchange partial signatures of transactions")),(0,r.kt)("h3",{id:"mempool"},"Mempool"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Committee peer maintains a pool of pending requests: the ",(0,r.kt)("inlineCode",{parentName:"li"},"mempool"),". It contains all pre-validated and unprocessed yet requests.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Requests are placed into the ",(0,r.kt)("inlineCode",{parentName:"li"},"mempool")," when they are coming from internal sources: as off-ledger requests and as requests parsed from transactions."),(0,r.kt)("li",{parentName:"ul"},"Requests are removed from the ",(0,r.kt)("inlineCode",{parentName:"li"},"mempool")," when block is committed to the DB. The block contains IDs of all processed requests."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mempool")," taking care about solidification of ",(0,r.kt)("inlineCode",{parentName:"li"},"blob references")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mempool")," is producing a list of requests which node is ",(0,r.kt)("em",{parentName:"li"},"ready to process")," (taking into account of solidification\nof blob references, timelocks and so on."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"mempool")," is informing other committee peers and its own consensus process with its ",(0,r.kt)("em",{parentName:"li"},"ready to process"),"\nlist by sending corresponding request IDs.")),(0,r.kt)("h3",{id:"consensus"},"Consensus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Receives ",(0,r.kt)("em",{parentName:"li"},"ready to process")," list, current ",(0,r.kt)("inlineCode",{parentName:"li"},"state output")," and produces a signed transaction"),(0,r.kt)("li",{parentName:"ul"},"sends pending block and pending transaction to the ",(0,r.kt)("inlineCode",{parentName:"li"},"state manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Consensus")," communicates with other committee nodes"),(0,r.kt)("li",{parentName:"ul"},"also ",(0,r.kt)("inlineCode",{parentName:"li"},"consensus")," sends partial signatures to peers designated as ",(0,r.kt)("inlineCode",{parentName:"li"},"sentinels"))),(0,r.kt)("h3",{id:"state-manager"},"State manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"listens to the incoming state transitions (",(0,r.kt)("inlineCode",{parentName:"li"},"AliasOutputs"),")"),(0,r.kt)("li",{parentName:"ul"},"upon approval, commits block to DB"),(0,r.kt)("li",{parentName:"ul"},"when detects it is behind, sends pulls request to other peers to get missing block"),(0,r.kt)("li",{parentName:"ul"},"when needed, sends pull request for confirmed ",(0,r.kt)("inlineCode",{parentName:"li"},"state outputs")),(0,r.kt)("li",{parentName:"ul"},"informs consensus about state transition")),(0,r.kt)("h3",{id:"committee-manager-"},"Committee manager (?)"),(0,r.kt)("p",null,"Handles committee transitions. Upon arrival of state output which is marked as ",(0,r.kt)("em",{parentName:"p"},"governance update"),(0,r.kt)("br",{parentName:"p"}),"\n","checks address of the current committee:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"if it is an access nodes wrt the chain, it tries to load ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitteeRecord")," and corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"DKShare"),".\nIf success, sets up the committee and continue processing as committee node"),(0,r.kt)("li",{parentName:"ul"},"if it is a committee node wrt the chain and state address change, it tries to load ",(0,r.kt)("inlineCode",{parentName:"li"},"CommitteeRecord")," and corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"DKShare"),".\nIf success, sets up the new committee and continue processing as committee node"),(0,r.kt)("li",{parentName:"ul"},"if it is a committee node wrt the chain and address does not change, it does nothing"),(0,r.kt)("li",{parentName:"ul"},"if address change and node can't load the key, it continues as an access node")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);