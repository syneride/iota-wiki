"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8165],{4274:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return h},default:function(){return f}});var r=a(2122),i=a(9756),n=(a(7294),a(3905)),o=["components"],l={},p="Verify your Firefly Desktop Download",s={unversionedId:"firefly/verify_download",id:"firefly/verify_download",isDocsHomePage:!1,title:"Verify your Firefly Desktop Download",description:"When you download Firefly Desktop, you may want to verify its authenticity to make sure that you downloaded the correct one from the IOTA Foundation GitHub repository. In this tutorial, you learn how to verify Firefly Desktop downloads.",source:"@site/external/chrysalis-docs/docs/firefly/verify_download.md",sourceDirName:"firefly",slug:"/firefly/verify_download",permalink:"/chrysalis-docs/firefly/verify_download",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Firefly",permalink:"/chrysalis-docs/firefly/"},next:{title:"Node Software",permalink:"/chrysalis-docs/node_software"}},h=[{value:"Windows Operating System",id:"windows-operating-system",children:[{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash",children:[]},{value:"Verify the Code Signature",id:"verify-the-code-signature",children:[]}]},{value:"MacOS Operating System",id:"macos-operating-system",children:[{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash-1",children:[]},{value:"Verify the Code Signature",id:"verify-the-code-signature-1",children:[]}]},{value:"Linux Operating System",id:"linux-operating-system",children:[{value:"Verify the SHA256 Hash",id:"verify-the-sha256-hash-2",children:[]},{value:"Verify the Code Signature",id:"verify-the-code-signature-2",children:[]}]}],m={toc:h};function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"verify-your-firefly-desktop-download"},"Verify your Firefly Desktop Download"),(0,n.kt)("p",null,"When you download Firefly Desktop, you may want to verify its authenticity to make sure that you downloaded the correct one from the IOTA Foundation GitHub repository. In this tutorial, you learn how to verify Firefly Desktop downloads."),(0,n.kt)("p",null,"To verify the authenticity of Firefly Desktop, you can check its SHA256 hash and its code signature. Instructions for both of these steps differ, depending on your operating system."),(0,n.kt)("h2",{id:"windows-operating-system"},"Windows Operating System"),(0,n.kt)("h3",{id:"verify-the-sha256-hash"},"Verify the SHA256 Hash"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open a command-line interface.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop ",(0,n.kt)("inlineCode",{parentName:"p"},".exe")," file. Replace the path with the path to your Firefly ",(0,n.kt)("inlineCode",{parentName:"p"},".exe")," file."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"certUtil -hashfile path\\to\\firefly-desktop-version.exe SHA256\n")),(0,n.kt)("p",null,"For example, if the file is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"C:\\Users\\yourname\\Downloads")," directory, do the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"certUtil -hashfile C:\\Users\\yourname\\Downloads\\firefly-desktop-1.0.0.exe SHA256\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Compare your SHA256 hash with the one in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match.")),(0,n.kt)("h3",{id:"verify-the-code-signature"},"Verify the Code Signature"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right-click on ",(0,n.kt)("inlineCode",{parentName:"p"},"firefly-desktop-version.exe"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Digital Signatures")," > ",(0,n.kt)("strong",{parentName:"p"},"Details")," > ",(0,n.kt)("strong",{parentName:"p"},"View Certificate"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the Certification Path tab, make sure that the path matches the following information:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DigiCert."),(0,n.kt)("li",{parentName:"ul"},"DigiCert SHA2 Assured Code Signing CA."),(0,n.kt)("li",{parentName:"ul"},"IOTA Stiftung."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Make sure that the Certificate status reads, "This certificate is OK.".'))),(0,n.kt)("h2",{id:"macos-operating-system"},"MacOS Operating System"),(0,n.kt)("h3",{id:"verify-the-sha256-hash-1"},"Verify the SHA256 Hash"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Terminal (in ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications/Utilities/Terminal"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop ",(0,n.kt)("inlineCode",{parentName:"p"},".dmg")," file. Replace the path with the path to your Firefly ",(0,n.kt)("inlineCode",{parentName:"p"},".dmg")," file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 256 /path/to/firefly-desktop-version.dmg\n")),(0,n.kt)("p",{parentName:"li"},"For example, if the file is in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"shasum -a 256 ~/Downloads/firefly-desktop-1.0.0.dmg\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compare your SHA256 hash with the one in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match."))),(0,n.kt)("h3",{id:"verify-the-code-signature-1"},"Verify the Code Signature"),(0,n.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To follow these instructions you need the ",(0,n.kt)("a",{parentName:"p",href:"https://www.ics.uci.edu/~pattis/common/handouts/macmingweclipse/allexperimental/macxcodecommandlinetools.html"},"Xcode Command Line Tools"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Terminal (in ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications/Utilities/Terminal"),").")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the ",(0,n.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file's signature. Replace the path with the path to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file. This command confirms whether the code binaries are actually signed, the signature is valid, all the sealed components are unaltered, and the signature passes some basic consistency checks."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"codesign -d -vv /path/to/Firefly.app\n")),(0,n.kt)("p",{parentName:"li"},"For example, if the file is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications")," directory, do the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"codesign -d -vv /Applications/Firefly.app\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"Identifier=org.iota.firefly\nAuthority=Developer ID Application: IOTA Stiftung (UG77RJKZHH)\nAuthority=Developer ID Certification Authority\nAuthority=Apple Root CA\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Test the signature against system policies. Replace the path with the path to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Firefly.app")," file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"spctl -a -vv path/to/Firefly.app\n")),(0,n.kt)("p",{parentName:"li"},"For example, if the file is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications")," directory, do the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"spctl -a -vv /Applications/Firefly.app\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command (assuming Firefly is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/Applications")," directory):"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"/Applications/Firefly.app: accepted\nsource=Developer ID\norigin=Developer ID Application: IOTA Stiftung (UG77RJKZHH)\n")))),(0,n.kt)("h2",{id:"linux-operating-system"},"Linux Operating System"),(0,n.kt)("h3",{id:"verify-the-sha256-hash-2"},"Verify the SHA256 Hash"),(0,n.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"To follow these instructions you need the ",(0,n.kt)("inlineCode",{parentName:"p"},"sha256sum")," package, which is included with most Linux distributions."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the Terminal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a SHA256 hash of the Firefly Desktop executable file. Replace the path with the path to your Firefly executable file."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum path/to/firefly-desktop-version.AppImage\n")),(0,n.kt)("p",{parentName:"li"},"For example, if the file is in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sha256sum ~/Downloads/firefly-desktop-1.0.0.AppImage\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Compare your SHA256 hash with the one in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes")," and make sure that they match."))),(0,n.kt)("h3",{id:"verify-the-code-signature-2"},"Verify the Code Signature"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the .asc and .gpg files in the Assets section of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/releases"},"release notes"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Import the Firefly GPG key from keyserver.ubuntu.com."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --keyserver keyserver.ubuntu.com --recv 466385BD0B40D9550F93C04746A440CCE5664A64\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gpg: key 46A440CCE5664A64: public key "IOTA Foundation (IOTA Foundation Identity) <contact@iota.org>"\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify the signature."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify path/to/firefly-desktop-version.AppImage.asc path/to/firefly-desktop-version.AppImage\n")),(0,n.kt)("p",{parentName:"li"},"For example, if the .asc and .AppImage files are both in ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Downloads"),", do the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"gpg --verify ~/Downloads/firefly-desktop-1.0.0.AppImage.asc ~/Downloads/firefly-desktop-1.0.0.AppImage\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Make sure that the following information matches the output of the command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'gpg: Good signature from "IOTA Foundation (IOTA Foundation Identity) <contact@iota.org>"\n')))))}f.isMDXComponent=!0},3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return c}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},h=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),f=s(a),c=i,u=f["".concat(p,".").concat(c)]||f[c]||m[c]||n;return a?r.createElement(u,o(o({ref:t},h),{},{components:a})):r.createElement(u,o({ref:t},h))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"}}]);