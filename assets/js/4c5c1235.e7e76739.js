"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4834],{7927:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={},l="Creating a Chain; Core Contracts",c={unversionedId:"tutorial/03",id:"tutorial/03",isDocsHomePage:!1,title:"Creating a Chain; Core Contracts",description:"In a test we can deploy one or several chains, deploy smart contracts on them,",source:"@site/external/wasp/documentation/docs/tutorial/03.md",sourceDirName:"tutorial",slug:"/tutorial/03",permalink:"/wasp/tutorial/03",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tokens and the UTXO Ledger",permalink:"/wasp/tutorial/02"},next:{title:"Deploying and running a Rust smart contract",permalink:"/wasp/tutorial/04"}},p=[{value:"Writing and compiling first Rust smart contract",id:"writing-and-compiling-first-rust-smart-contract",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"creating-a-chain-core-contracts"},"Creating a Chain; Core Contracts"),(0,o.kt)("p",null,"In a test we can deploy one or several chains, deploy smart contracts on them,\nand invoke them."),(0,o.kt)("p",null,"In the example ",(0,o.kt)("inlineCode",{parentName:"p"},"TestTutorial1"),", the statement\n",(0,o.kt)("inlineCode",{parentName:"p"},'chain := env.NewChain(nil, "ex1")')," creates and deploys a new chain ",(0,o.kt)("inlineCode",{parentName:"p"},"ex1")," in the\nenvironment of the test. Several chains may be deployed in the test."),(0,o.kt)("p",null,"Deploying a chain automatically means deployment of all core smart contracts on\nit. The core contracts are responsible for the vital functions of the chain and\nprovide infrastructure for all other smart contracts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/root"},"root"),". Responsible for the initialization of the chain, maintains\nthe global parameters, and the registry of deployed contracts. It also handles\nfees and performs other functions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/default"},"_default"),". Any request that cannot be handled by any of the\nother deployed contracts ends up here.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/accounts"},"accounts"),". Responsible for the on-chain ledger of accounts. The\non-chain accounts contain colored tokens, which are controlled by smart\ncontracts and addresses on the UTXO Ledger.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/blob"},"blob"),". Responsible for the immutable registry of binary objects of\narbitrary size. One blob is a collection of named binary chunks of data. For\nexample, a blob can be used to store a collections of ",(0,o.kt)("em",{parentName:"p"},"wasm")," binaries, needed\nto deploy ",(0,o.kt)("em",{parentName:"p"},"WebAssembly")," smart contracts. Each blob in the registry is\nreferenced by its hash which is deterministically calculated from its data.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/wasp/contract_core/blocklog"},"blocklog"),". Keeps track of the blocks, requests and event that were\nprocessed by the chain."))),(0,o.kt)("h2",{id:"writing-and-compiling-first-rust-smart-contract"},"Writing and compiling first Rust smart contract"),(0,o.kt)("p",null,"In this section we will create a new smart contract. We will write its code in\nRust, and then will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasplib")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/contracts/rust/wasmlib"},"library"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-pack")," to compile it into a WebAssembly (",(0,o.kt)("em",{parentName:"p"},"wasm"),") binary."),(0,o.kt)("p",null,"Note that this tutorial is not a tutorial of the ISCP smart contract development\nenvironment: for that we will provide other tutorials. The only goal of these\nexamples is an introduction to fundamental principles of ISCP smart contracts."),(0,o.kt)("p",null,"We assume you already have Rust and ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-pack"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://rustwasm.github.io/wasm-pack/installer/"},"installed"),"."),(0,o.kt)("p",null,"We will be using the examples from the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp")," repository located in\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/docOps/tutorial/rust-example"},"https://github.com/iotaledger/wasp/tree/develop/docOps/tutorial/rust-example")," directory."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rust-example")," smart contract is a simple smart contract which stores a\nstring in its state upon request and allows to retrieve the stored string by\ncalling a view. The smart contract also implements an entry point which allows\nthe creator of the smart contract instance to withdraw all iotas contained in\nthe smart contract's account on the chain."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'use wasmlib::*;\n\nconst PARAM_STRING: &str = "paramString";\nconst VAR_STRING: &str = "storedString";\n\n#[no_mangle]\nfn on_load() {\n    // declare entry points of the smart contract\n    let exports = ScExports::new();\n    exports.add_func("storeString", store_string);\n    exports.add_view("getString", get_string);\n    exports.add_func("withdrawIota", withdraw_iota);\n}\n\n// storeString entry point stores a string provided as parameters\n// in the state as a value of the key \'storedString\'\n// panics if parameter is not provided\nfn store_string(ctx: &ScFuncContext) {\n    // take parameter paramString\n    let par = ctx.params().get_string(PARAM_STRING);\n    // require parameter exists\n    ctx.require(par.exists(), "string parameter not found");\n\n    // store the string in "storedString" variable\n    ctx.state().get_string(VAR_STRING).set_value(&par.value());\n    // log the text\n    let msg = "Message stored: ".to_string() + &par.value();\n    ctx.log(&msg);\n}\n\n// getString view returns the string value of the key \'storedString\'\n// The call return result as a key/value dictionary.\n// the returned value in the result is under key \'paramString\'\nfn get_string(ctx: &ScViewContext) {\n    // take the stored string\n    let s = ctx.state().get_string(VAR_STRING).value();\n    // return the string value in the result dictionary\n    ctx.results().get_string(PARAM_STRING).set_value(&s);\n}\n\n// withdraw_iota sends all iotas contained in the contract\'s account\n// to the caller\'s L1 address.\n// Panics of the caller is not an address\n// Panics if the address is not the creator of the contract is the caller\n// The caller will be address only if request is sent from the wallet on the L1, not a smart contract\nfn withdraw_iota(ctx: &ScFuncContext) {\n    let creator = ctx.contract_creator();\n    let caller = ctx.caller();\n\n    ctx.require(creator == caller, "not authorised");\n    ctx.require(caller.is_address(), "caller must be an address");\n\n    let bal = ctx.balances().balance(&ScColor::IOTA);\n    if bal > 0 {\n        ctx.transfer_to_address(&caller.address(), ScTransfers::new(&ScColor::IOTA, bal))\n    }\n}\n')),(0,o.kt)("p",null,"Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"wasm-pack build")," command will produce something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"C:/Users/evaldas/.cargo/bin/wasm-pack.exe build -- --color=always\n[INFO]: Checking for the Wasm target...\n[INFO]: Compiling to Wasm...\n    Finished release [optimized] target(s) in 0.05s\n[INFO]: Installing wasm-bindgen...\n[INFO]: Optimizing wasm binaries with `wasm-opt`...\n[INFO]: :-) Done in 0.80s\n[INFO]: :-) Your wasm pkg is ready to publish at C:\\Users\\evaldas\\Documents\\proj\\Go\\src\\github.com\\iotaledger\\wasp\\docOps\\tutorial-examples\\pkg.\n")),(0,o.kt)("p",null,"The 17KB file ",(0,o.kt)("inlineCode",{parentName:"p"},"example_tutorial_bg.wasm")," is the binary of the smart contract. We\nwill be using it in further examples. The file contains everything needed to\ndeploy the smart contract on a chain run on the ISCP network."))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);