(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1116:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return R}));var r=n(1),a=n.n(r),o=n(1111),c=n(1112),i=n(1085),s=n(1106),u=n(1113),l=n(1086),f=n(1094),p=n(1090),d=n(1080),y=n(802),m=n.n(y),b=n(872);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t,n,r,a,o,c){try{var i=e[o](c),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(r,a)}function O(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){w(o,r,a,c,i,"next",e)}function i(e){w(o,r,a,c,i,"throw",e)}c(void 0)}))}}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(e,t){return(S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return j(this,n)}}function j(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(v,e);var t,n,r,y=k(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=y.call(this,e)).getServers=O(regeneratorRuntime.mark((function e(){var n,r,a,o,c,i,s,u,l,f=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=f.length>0&&void 0!==f[0]&&f[0],e.prev=1,t.setState(E(E({},t.state),{},{render:!0})),r=[],a=[],null===(o=window.sessionStorage.getItem("servers"))||!1!==n){e.next=10;break}a=JSON.parse(o),e.next=15;break;case 10:return e.next=12,t.packageServer.getSpeedtestServers();case 12:for(c=e.sent,r=c.response,i=0,s=Object.keys(r);i<s.length;i++)for(u=s[i],l=0;l<r[u].length;l++)a.push(r[u][l]);case 15:t.setState(E(E({},t.state),{},{servers:a,render:!1}),(function(){return window.sessionStorage.setItem("servers",JSON.stringify(a))})),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),t.setState(E(E({},t.state),{},{render:!1}));case 21:case"end":return e.stop()}}),e,null,[[1,18]])}))),t.runSpeedtest=function(e){t.setState({},t.eventsource(e.action))},t.eventsource=function(e){var t=document.getElementById("alInfo"),n=document.getElementById("alSuccess"),r=document.getElementById("alError"),a=document.getElementById("output"),o=document.getElementById("btnAction");if("function"!=typeof EventSource)return a.style.display="block",void(a.innerHTML="Not supported with this browser!");var c=new EventSource("/api/package/management/speedtest?request=ping&server="+e);a.innerHTML="",a.style.display="block",t.style.display="block",n.style.display="none",r.style.display="none",o.setAttribute("disabled",!0),c.addEventListener("message",(function(e){-1!==e.data.indexOf("[/]")?(n.style.display="block",o.removeAttribute("disabled")):-1!==e.data.indexOf("[x]")&&(r.style.display="block");var t="";-1!==e.data.indexOf("[i]")?(t+=e.data+"\n",a.append(t)):(t+=e.data+"\n",a.append(t),c.close(),o.removeAttribute("disabled"))}),!1),c.addEventListener("error",(function(){setTimeout((function(){t.style.display="none"}),2e3),c.close(),o.removeAttribute("disabled")}),!1)},t.packageServer=new b.a,t.state={servers:[],server:"",render:!1},t}return t=v,(n=[{key:"componentDidMount",value:function(){this.getServers()}},{key:"render",value:function(){var e=this;return a.a.createElement(o.a,null,a.a.createElement(c.a,{lg:"12"},a.a.createElement(i.a,null,a.a.createElement(s.a,null,a.a.createElement(u.a,null,a.a.createElement("h4",null,"Run speedtest"))),a.a.createElement(l.a,null,this.state.render?a.a.createElement("h5",null,"Fetching servers. Please wait..."):a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{className:"mt-2"},"Servers"),a.a.createElement(p.a,{type:"select",name:"interface",className:"mb-2",onChange:function(t){return e.setState(E(E({},e.state),{},{server:t.target.value}))},placeholder:"Select servers"},a.a.createElement("option",{value:""},"Best server"),!m.a.isEmpty(this.state.servers)&&this.state.servers.map((function(e,t){var n="".concat(e.name,"(").concat(e.sponsor,") ").concat(e.d.toFixed(2),"km");return a.a.createElement("option",{key:t,value:e.id},n)})))),a.a.createElement("button",{id:"btnAction",type:"button",className:"btn btn-info action-btn-wifi",onClick:function(t){return e.runSpeedtest({action:e.state.server})}},a.a.createElement("i",{className:"fa fa-play"}),a.a.createElement("span",null," Run"))," ",a.a.createElement("button",{id:"btnAction",className:"btn btn-success action-btn-wifi",onClick:function(t){return e.getServers(!0)}},a.a.createElement("i",{className:"fa fa-refresh"}),a.a.createElement("span",null," Refresh")),a.a.createElement(a.a.Fragment,null,a.a.createElement("hr",null),a.a.createElement(d.a,{id:"alInfo",color:"info",className:"mb-4 mt-4",style:{display:"none"}},"This may take a while. ",a.a.createElement("strong",null,"Please do not navigate away from or close this page.")),a.a.createElement(d.a,{id:"alSuccess",color:"success",className:"mb-4 mt-4",style:{display:"none"}},"Success!"),a.a.createElement(d.a,{id:"alError",color:"danger",className:"mb-4 mt-4",style:{display:"none"}},"Error!"),a.a.createElement("pre",{id:"output",style:{display:"none"}}))))))}}])&&P(t.prototype,n),r&&P(t,r),Object.defineProperty(t,"prototype",{writable:!1}),v}(r.Component)},822:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},872:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(192),a=n(812);n(802);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,c;return t=e,(n=[{key:"getPPPOE",value:function(){return new Promise((function(e,t){r.a.http({url:a.a.PACKAGE_URL+"/pppoe"}).GET.then((function(t){e(t.data)})).catch((function(e){t(e)}))}))}},{key:"getPPPOEUsers",value:function(){return new Promise((function(e,t){r.a.http({url:a.a.PACKAGE_URL+"/pppoe/users"}).GET.then((function(t){e(t.data)})).catch((function(e){t(e)}))}))}},{key:"updatePPPOE",value:function(e){return new Promise((function(t,n){r.a.http({url:a.a.PACKAGE_URL+"/pppoe",data:e}).POST.then((function(e){t(e.data)})).catch((function(e){n(e)}))}))}}])&&o(t.prototype,n),c&&o(t,c),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);