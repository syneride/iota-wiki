"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[3113],{4359:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],s={},l="Security 101",c={unversionedId:"getting_started/security_101",id:"getting_started/security_101",isDocsHomePage:!1,title:"Security 101",description:"This section provides a checklist of steps for running a reliable and secure node.",source:"@site/external/bee/documentation/docs/getting_started/security_101.md",sourceDirName:"getting_started",slug:"/getting_started/security_101",permalink:"/bee/getting_started/security_101",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Nodes 101",permalink:"/bee/getting_started/nodes_101"},next:{title:"Configuration",permalink:"/bee/configuration"}},u=[{value:"Securing Your Device",id:"securing-your-device",children:[{value:"Securing SSH logins",id:"securing-ssh-logins",children:[]},{value:"Blocking Unnecessary Ports",id:"blocking-unnecessary-ports",children:[]}]},{value:"Deciding Whether to Enable Remote Proof of Work",id:"deciding-whether-to-enable-remote-proof-of-work",children:[]},{value:"Load Balancing",id:"load-balancing",children:[]},{value:"Reverse Proxy",id:"reverse-proxy",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"security-101"},"Security 101"),(0,a.kt)("p",null,"This section provides a checklist of steps for running a reliable and secure node."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Please note that servers that are reachable from the Internet are a constant target from security challengers.  Please, make sure you follow the minimum security essentials summarized in this article."))),(0,a.kt)("h2",{id:"securing-your-device"},"Securing Your Device"),(0,a.kt)("p",null,"The security of the device that is running your node is of the utmost importance to stop attackers from gaining access to the node."),(0,a.kt)("p",null,"You should consider doing the following before running a node on your device:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#securing-ssh-logins"},"Securing SSH logins"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#blocking-unnecessary-ports"},"Blocking unnecessary ports"),".")),(0,a.kt)("h3",{id:"securing-ssh-logins"},"Securing SSH logins"),(0,a.kt)("p",null,"If you log into your device through SSH, you should take measures to protect it from unauthorized access. Many guides have been written about this subject. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"https://blog.devolutions.net/2017/4/10-steps-to-secure-open-ssh"},"10 Steps to Secure Open SSH"),". In addition to that, you can also leverage tools such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.fail2ban.org/wiki/index.php/Main_Page"},"Fail2ban")," to further tighten your nodes security."),(0,a.kt)("h3",{id:"blocking-unnecessary-ports"},"Blocking Unnecessary Ports"),(0,a.kt)("p",null,"Attackers can abuse any open ports on your device. To secure your device against attacks on unused open ports, you should close all ports except those that are in use."),(0,a.kt)("p",null,"You can use a firewall to accomplish this. All operating systems include firewall options. By having a firewall in place, you can completely block unused and unnecessary ports."),(0,a.kt)("p",null,"On a cloud platforms such as AWS, Azure or GCP, one can block ports on VPS networking settings."),(0,a.kt)("h2",{id:"deciding-whether-to-enable-remote-proof-of-work"},"Deciding Whether to Enable Remote Proof of Work"),(0,a.kt)("p",null,"When you're configuring your node, you have the option to allow it to do proof of work. If you enable this feature, clients can ask your node to do remote proof of work."),(0,a.kt)("p",null,"Proof of work takes time and uses your node's computational power. So, you should consider enabling it according to your infrastructure."),(0,a.kt)("h2",{id:"load-balancing"},"Load Balancing"),(0,a.kt)("p",null,"If you run more than one node, it's a good practice to make sure that you distribute the API requests among all of them."),(0,a.kt)("p",null,"To evenly distribute the API requests among all your nodes, you can run a reverse proxy server that will act as a load balancer (",(0,a.kt)("a",{parentName:"p",href:"http://www.haproxy.org/"},"HAProxy"),", ",(0,a.kt)("a",{parentName:"p",href:"https://traefik.io/"},"Traefik"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"Nginx"),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.apache.org/"},"Apache"),", etc.). This way, you can have one domain name for your reverse proxy server that all nodes will send their API calls to. On the backend, the nodes with the most spare computational power will process the request and return the response."),(0,a.kt)("p",null,"Since broadcasted messages are atomic and nodes provides restful API to communicate, you will not need sticky sessions or similar technologies."),(0,a.kt)("h2",{id:"reverse-proxy"},"Reverse Proxy"),(0,a.kt)("p",null,"We recommend that you use a reverse proxy in front of a node is even if you are deploying a single node. Using a reverse proxy adds a security layer that can handle tasks such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IP address filtering. "),(0,a.kt)("li",{parentName:"ul"},"Abuse rate limiting. "),(0,a.kt)("li",{parentName:"ul"},"SSL encrypting."),(0,a.kt)("li",{parentName:"ul"},"Additional authorization layer.")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);