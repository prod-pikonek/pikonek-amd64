(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1107:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),a=n(1085),l=n(1086),c=n(1094),i=n(1090),u=n(895),f=n(671);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=["server","system"],b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(v,e);var t,n,r,s=g(v);function v(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,v),(t=s.call(this,e)).loading=function(){return o.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t.getServerLog=function(e){null!=t.intervalLog&&void 0!==t.intervalLog||t.logService.getServerLog(e,{signal:t.abortController.signal}).then((function(n){t.setState({fetching:!0,logs:n},(function(){t.intervalLog=setInterval((function(){t.logService.getServerLog(e,{signal:t.abortController.signal}).then((function(e){t.setState({fetching:!1,logs:e})})).catch((function(e){console.error(e)}))}),1e4)}))})).catch((function(e){console.error(e)}))},t.clearServerLog=function(){t.abortController.abort(),clearInterval(t.intervalLog),t.intervalLog=null},t.logService=new u.a,t.abortController=new AbortController,t.state={fetching:!1,logs:""},t}return t=v,(n=[{key:"componentWillUnmount",value:function(){this.abortController.abort(),this.clearServerLog()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(a.a,null,o.a.createElement(l.a,null,o.a.createElement(f.y,null,o.a.createElement(f.g,{xs:"12"},o.a.createElement(c.a,null,o.a.createElement("strong",null,"Select log to show")),o.a.createElement(i.a,{type:"select",onChange:function(t){e.clearServerLog(),e.getServerLog(t.target.value)}},m.map((function(e,t){return o.a.createElement("option",{key:t,value:e},e)}))))),this.state.fetching?o.a.createElement(f.y,null,o.a.createElement(f.g,{xs:"12"},o.a.createElement("h5",null,"Fetching logs. Please wait. Do not navigate away or close the page."))):o.a.createElement(f.y,null,o.a.createElement(f.g,{lg:"12",className:"mt-2"},o.a.createElement("h5",null,"This log automatically refreshes every 10 seconds and shows only the last 15 lines.")),o.a.createElement(f.g,{lg:"12"},o.a.createElement("div",null,o.a.createElement("hr",null),o.a.createElement("pre",null,this.state.logs)))))))}}])&&p(t.prototype,n),r&&p(t,r),Object.defineProperty(t,"prototype",{writable:!1}),v}(r.Component);t.default=b},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(812),o=(n(193),n(192));function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,l;return t=e,(n=[{key:"getServerLog",value:function(e,t){return new Promise((function(n,a){o.a.http({url:r.a.LOG_URL+"/"+e,headers:t}).GET.then((function(e){n(e.data)})).catch((function(e){a(e)}))}))}}])&&a(t.prototype,n),l&&a(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);