"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[843],{960:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return h}});var o=n(2122),a=n(9756),r=(n(7294),n(3905)),i=["components"],s={},l="The Solo package",c={unversionedId:"tutorial/01",id:"tutorial/01",isDocsHomePage:!1,title:"The Solo package",description:"Solo is a Go package to write tests for IOTA smart contracts. It allows the",source:"@site/external/wasp/documentation/docs/tutorial/01.md",sourceDirName:"tutorial",slug:"/tutorial/01",permalink:"/wasp/tutorial/01",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Exploring IOTA Smart Contracts",permalink:"/wasp/tutorial/readme"},next:{title:"Tokens and the UTXO Ledger",permalink:"/wasp/tutorial/02"}},p=[{value:"First example",id:"first-example",children:[]}],u={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-solo-package"},"The Solo package"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is a Go package to write tests for IOTA smart contracts. It allows the\ndeployment of ISCP chains and smart contracts. It also provides a toolkit for\ninteraction with smart contracts, for manipulation of tokens and ledger accounts\nin an environment that is almost identical to the distributed multi-chain\nenvironment of the ISCP."),(0,r.kt)("p",null,"The Solo package and its GoDoc link ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/master/packages/solo"},"can be found here"),".\nThe GoDocs provides a reference to all ",(0,r.kt)("em",{parentName:"p"},"Solo")," calls which can be used in tests\n(not necessarily covered in this tutorial)."),(0,r.kt)("p",null,"Smart contracts are notoriously isolated from the outside world. The effect of\nthe user interaction with a smart contract is normally only observed in its\nstate change. The approach in this tutorial is to explain all main concepts of\nISCP development through loading smart contracts into the ",(0,r.kt)("em",{parentName:"p"},"Solo")," tests, invoking\nits functions and examining state changes."),(0,r.kt)("p",null,"ISCP is currently in active development, so things change and are less than\nperfect. In the current stage the ISCP software is experimental. We expect\nfeedback from the community about hands-on experience. We also expect\ncontribution to the development of ISCP itself, including Rust/Wasm development\nenvironment or, possibly, alternative VM implementations."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is not a toy environment. It allows developers to develop and test real\nsmart contracts and entire inter-chain protocols before deploying them on the\ndistributed network."),(0,r.kt)("p",null,"Please follow ",(0,r.kt)("a",{parentName:"p",href:"/wasp/misc/install"},"the link")," for installation instructions."),(0,r.kt)("p",null,"The code of examples the tutorial can be found ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/docOps/tutorial"},"here"),"."),(0,r.kt)("h2",{id:"first-example"},"First example"),(0,r.kt)("p",null,"The following is an example of a ",(0,r.kt)("em",{parentName:"p"},"Solo")," test. It deploys a new chain and invokes\na function in the ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," contract."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," contract always exists on any chain. So for this example there is no\nneed to deploy any new contract. The test log to the testing output the main\nparameters of the chain, lists names and IDs of all four core contracts."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Note that we include constant seed for the test so that each test run would produce exactly the seme result.\nNormally we would use randomly generated value for keys)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var seed = ed25519.NewSeed([]byte("long long seed for determinism................"))\n\nfunc TestTutorial1(t *testing.T) {\n    env := solo.New(t, false, false, seed)\n    chain := env.NewChain(nil, "ex1")\n\n    // calls view root::GetChainInfo\n    chainID, chainOwnerID, coreContracts := chain.GetInfo()\n    // assert all core contracts deployed (default)\n    require.EqualValues(t, len(core.AllCoreContractsByHash), len(coreContracts))\n\n    t.Logf("chain ID: %s", chainID.String())\n    t.Logf("chain owner ID: %s", chainOwnerID.String())\n    for hname, rec := range coreContracts {\n        t.Logf("    Core contract \'%s\': %s", rec.Name, iscp.NewAgentID(chainID.AsAddress(), hname))\n    }\n}\n')),(0,r.kt)("p",null,"The output of the test will be something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"=== RUN   TestTutorial1\n34:06.400897600 INFO    TestTutorial1.db    dbmanager/dbmanager.go:54   creating new registry database. Persistent: false\n34:06.404218000 INFO    TestTutorial1   solo/solo.go:166    Solo environment has been created with initial logical time 00:01.000000000\n34:06.405298800 INFO    TestTutorial1   solo/solo.go:234    deploying new chain 'ex1'. ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM, state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n34:06.405298800 INFO    TestTutorial1   solo/solo.go:236         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. state controller address: 1Aa4X9L2xJVQqxiLFbHj9KXA8YtQqBLHsytuCxBn1kneM\n34:06.405298800 INFO    TestTutorial1   solo/solo.go:237         chain '$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM'. originator address: 1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q\n34:06.405298800 INFO    TestTutorial1.db    dbmanager/dbmanager.go:56   creating new database for chain $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM. Persistent: false\n34:06.449417600 INFO    TestTutorial1   solo/clock.go:35    AdvanceClockBy: logical clock advanced by 2ns to 00:01.000000002\n34:06.449946700 INFO    TestTutorial1.ex1   solo/run.go:127 state transition --\x3e #1. Requests in the block: 1. Outputs: 1\n34:06.449946700 INFO    TestTutorial1   solo/clock.go:44    ClockStep: logical clock advanced by 1ms to 00:01.001000002\n34:06.449946700 INFO    TestTutorial1.ex1   solo/req.go:268 callView: blocklog::getLatestBlockInfo\n34:06.449946700 INFO    TestTutorial1.ex1   solo/req.go:268 callView: blocklog::getRequestLogRecordsForBlock\n34:06.449946700 INFO    TestTutorial1.ex1   solo/run.go:148 REQ: 'tx/[0]3awCue3F6VJ7DPYvLbACfg5e4RUuh2LJ3n5kLafXSyv6'\n34:06.449946700 INFO    TestTutorial1.ex1   solo/solo.go:310    chain 'ex1' deployed. Chain ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM\n34:06.449946700 INFO    TestTutorial1.ex1   solo/req.go:268 callView: root::getChainInfo\n    tutorial_test.go:30: chain ID: $/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM\n    tutorial_test.go:31: chain owner ID: A/1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q::00000000\n    tutorial_test.go:33:     Core contract 'root': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::cebf5908\n    tutorial_test.go:33:     Core contract 'blocklog': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::f538ef2b\n    tutorial_test.go:33:     Core contract '_default': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::00000000\n    tutorial_test.go:33:     Core contract 'blob': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::fd91bc63\n    tutorial_test.go:33:     Core contract 'eventlog': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::661aa7d8\n    tutorial_test.go:33:     Core contract 'governance': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::17cf909f\n    tutorial_test.go:33:     Core contract 'accounts': A/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM::3c4b5e02\n--- PASS: TestTutorial1 (0.05s)\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(Note: addresses, chain IDs and other hashes will be the same on each run of the test because of the constant seed. Also, the\nlog produced by the test contains timestamps from computer timer, while the Solo environment operates in its own logical time)")),(0,r.kt)("p",null,"The core contracts listed in the log (",(0,r.kt)("inlineCode",{parentName:"p"},"_default"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blob"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"blocklog"),"\n, ",(0,r.kt)("inlineCode",{parentName:"p"},"root"),") are automatically deployed on each new chain. You can see\nthem listed in the test log together with their ",(0,r.kt)("em",{parentName:"p"},"contract IDs"),"."),(0,r.kt)("p",null,"The output fragment in the log ",(0,r.kt)("inlineCode",{parentName:"p"},"state transition #0 --\x3e #1")," means the state of\nthe chain has changed from block index 0 (the origin index of the empty state)\nto block index 1. The state #0 is the empty origin state, the #1 always contains\nall core smart contracts deployed on the chain as well as other variables of\nchain set, such as ",(0,r.kt)("em",{parentName:"p"},"chainID")," and ",(0,r.kt)("em",{parentName:"p"},"chain owner ID"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"chain ID")," and ",(0,r.kt)("em",{parentName:"p"},"chain owner ID")," are respectively ID of the deployed\nchain ",(0,r.kt)("inlineCode",{parentName:"p"},"$/cfQL3Vzay65ZZnPgsDKwXRRGwDWK68QkQwZqzvVs8UXM")," and the address (in the\nform of ",(0,r.kt)("em",{parentName:"p"},"agent ID"),") from which the chain has been deployed:\n",(0,r.kt)("inlineCode",{parentName:"p"},"A/1CeHWHSLdqfJijBSM3KLqk44MTJBFGrYQ1tJGkKuWqr8q::00000000")," (the prefixes ",(0,r.kt)("inlineCode",{parentName:"p"},"$/"),"\nand ",(0,r.kt)("inlineCode",{parentName:"p"},"A/")," indicate that what follows are a chain ID and an agent ID, respectively)."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||r;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);