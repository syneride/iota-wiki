"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9247],{4146:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return p}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o=["components"],s={},l="Configuration parameters",u={unversionedId:"implementation_design/configuration_parameters",id:"implementation_design/configuration_parameters",isDocsHomePage:!1,title:"Configuration parameters",description:"Customizing configuration",source:"@site/external/goshimmer/documentation/docs/implementation_design/configuration_parameters.md",sourceDirName:"implementation_design",slug:"/implementation_design/configuration_parameters",permalink:"/goshimmer/implementation_design/configuration_parameters",version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Plugin system",permalink:"/goshimmer/implementation_design/plugin"},next:{title:"Object storage",permalink:"/goshimmer/implementation_design/object_storage"}},m=[{value:"Customizing configuration",id:"customizing-configuration",children:[]},{value:"Custom parameter fields",id:"custom-parameter-fields",children:[{value:"Old, deprecated way",id:"old-deprecated-way",children:[]},{value:"New way",id:"new-way",children:[]}]}],c={toc:m};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration-parameters"},"Configuration parameters"),(0,i.kt)("h2",{id:"customizing-configuration"},"Customizing configuration"),(0,i.kt)("p",null,"Users can pass configuration parameters in two ways when running GoShimmer. One way is through a JSON configuration file and another way is through command line arguments.\nSettings passed through command line arguments take precedence. The JSON configuration file is structured as a JSON object containing parameters and their values.\nParameters are grouped into embedded objects containing parameters for a single plugin or functionality. There is no limit on how deep the configuration object may be embedded.\nFor example, the config below contains example parameters for the PoW plugin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "pow": {\n    "difficulty": 2,\n    "numThreads": 1,\n    "timeout": "10s"\n  }\n}\n')),(0,i.kt)("p",null,"The same arguments can be passed through command line arguments in the following way. Embedded objects' values are described using JSON dot-notation.\nAdditionally,the user can pass the path of the JSON config file through a command-line argument as well, as shown in an example below. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"goshimmer \\\n--config=/tmp/config.json \\\n--pow.difficulty=2 \\\n--pow.numThreads=1 \\\n--pow.timeout=10s \n")),(0,i.kt)("h2",{id:"custom-parameter-fields"},"Custom parameter fields"),(0,i.kt)("p",null,"Currently, in the code there are two ways in which parameters are registered with GoShimmer. However, one is deprecated way, while the second should be used any longer when adding new parameters."),(0,i.kt)("h3",{id:"old-deprecated-way"},"Old, deprecated way"),(0,i.kt)("p",null,"The old way is described shortly to give a basic understanding of how it works, but it should not be used any longer when adding new parameters."),(0,i.kt)("p",null,"In a package where the parameters will be used, create a ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters.go")," file, that contains the definition of constants, which define parameter names in JSON dot-notation.\nThe constants will be later used in the code to access the parameter value.\nThe file should also contain an ",(0,i.kt)("inlineCode",{parentName:"p"},"init()")," function, which registers the parameters with the ",(0,i.kt)("inlineCode",{parentName:"p"},"flag")," library responsible for parsing configuration along with its default value and short description.\nIt should include comments describing what the parameter is for. Here is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters.go")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package customPackage\n\nimport (\n    flag "github.com/spf13/pflag"\n)\nconst (\n    // ParamName contains some value used within the plugin\n    ParamName = "customPlugin.paramName"\n)\n\nfunc init() {\n    flag.Float64(paramName, 0.31, "ParamName used in some calculation")\n}\n')),(0,i.kt)("p",null,"The parameter values can be accessed in the code in the following way through the ",(0,i.kt)("inlineCode",{parentName:"p"},"config")," plugin:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/iotaledger/goshimmer/plugins/config"\n\nconfig.Node().Int(CfgGossipPort)\n')),(0,i.kt)("h3",{id:"new-way"},"New way"),(0,i.kt)("p",null,"Defining configuration parameters using the new way is really similar, however the parameters are not registered directly with the package reading the configuration,\nbut rather with our custom package that contains all the logic required to make it work seamlessly. "),(0,i.kt)("p",null,"In this approach, instead of defining a parameter name, a new type is defined with all necessary parameters, their default values and usage descriptions using Go's struct field tags.\nA variable is then initialized with the defined type."),(0,i.kt)("p",null,"One difference is that parameter names do not contain the namespace they belong to, the namespace is set when registering the parameters structure with the ",(0,i.kt)("inlineCode",{parentName:"p"},"configuration")," package. One ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters.go")," file can contain definitions and register multiple parameter structures."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'package customPlugin\n\nimport "github.com/iotaledger/hive.go/configuration"\n\n// Parameters contains the configuration parameters used by the custom plugin.\ntype ParametersDefinition struct {\n    // ParamName contains some value used within the plugin\n    ParamName float64 `default:"0.31" usage:"ParamName used in some calculation"`\n\n    // ParamGroup contains an example of embedded configuration definitions.\n    ParamGroup struct {\n        // DetailedParam1 is the example value\n        DetailedParam1        string `default:"defaultValue" usage:"DetailedParam1 used in the plugin"`\n        // DetailedParam2 is the example value\n        DetailedParam2        string `default:"defaultValue" usage:"DetailedParam2 used in the plugin"`\n    }\n}\n\nvar Parameters = &ParametersDefinition{}\n\nfunc init() {\n    configuration.BindParameters(Parameters, "customPlugin")\n}\n')),(0,i.kt)("p",null,"In order to access the parameter value, a user can simply access the structure's field: ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters.ParamName")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Parameters.ParamGroup.DetailedParam1"),"\nand it will be populated either with the default value or values passed through a JSON config or command-line argument. "),(0,i.kt)("p",null,"This approach makes it more simple to define new parameters as well as makes accessing configuration values more clear."))}p.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return d}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,g=p["".concat(l,".").concat(d)]||p[d]||c[d]||i;return t?a.createElement(g,o(o({ref:n},m),{},{components:t})):a.createElement(g,o({ref:n},m))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);