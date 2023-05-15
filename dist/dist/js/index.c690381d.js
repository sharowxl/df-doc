(function(e){function t(t){for(var r,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={index:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa15e":"e22baea2","chunk-2d0d0441":"1cfc8ddf"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var u=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("deb2")},"109e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[n("h2",{attrs:{id:"kuai-su-shang-shou"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kuai-su-shang-shou"}},[e._v("¶")]),e._v(" 快速上手")]),n("p",[e._v("本节将介绍如何在项目中使用 DF-BUI")]),n("h4",{attrs:{id:"an-xu-yin-ru"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-xu-yin-ru"}},[e._v("¶")]),e._v(" 按需引入")]),n("p",[e._v("借助 "),n("a",{attrs:{href:"https://github.com/QingWei-Li/babel-plugin-component"}},[e._v("babel-plugin-component")]),e._v("，我们可以只引入需要的组件，以达到减小项目体积的目的。")]),n("p",[e._v("首先，安装 babel-plugin-component：")]),n("pre",[n("code",{staticClass:"language-bash"},[e._v("\n    npm install babel-plugin-component -D\n\n")])]),n("p",[e._v("然后，将 .babelrc 修改为：")]),n("pre",[n("code",{staticClass:"language-json"},[e._v('\n    {\n      "presets": [\n        "@vue/cli-plugin-babel/preset"\n      ],\n      "plugins": [\n        [\n          "component",\n          {\n            "libraryName": "@df_scope/df-bui",\n            "styleLibraryName": "theme-chalk"\n          }\n        ]\n      ]\n    }\n\n')])]),n("p",[e._v("接下来，如果你只希望引入部分组件，比如 PageDynamic，那么需要在 main.js 中写入以下内容：")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("\n    import Vue from 'vue';\n    import { PageDynamic } from '@df_scope/df-bui';\n    import App from './App.vue';\n\n    Vue.component(PageDynamic.name, PageDynamic);\n    /* 或写为\n    * Vue.use(Button)\n    * Vue.use(Select)\n    */\n\n    new Vue({\n      el: '#app',\n      render: h => h(App)\n    });\n\n")])]),n("p",[e._v("完整组件列表和引入方式")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("\n    import Vue froPageDynamicm 'vue';\n    import {\n      PageDynamic\n    } from '@df_scope/df-bui';\n\n    const components = [\n      PageDynamic\n    ]\n\n    components.forEach(component => Vue.use(component))\n\n\n")])])])}],a=n("2877"),i={},s=Object(a["a"])(i,r,o,!1,null,null,null);t["default"]=s.exports},1733:function(e,t,n){},"252f":function(e,t,n){(function(e){var r,o,a,i=n("7037").default;n("a4d3"),n("e01a"),n("d3b7"),n("944a"),n("0c47"),n("23dc"),n("c975"),n("99af"),function(n,s){"object"==i(t)&&"object"==i(e)?e.exports=s():(o=[],r=s,a="function"===typeof r?r.apply(t,o):r,void 0===a||(e.exports=a))}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(e){var t=1*e.substring(0,e.length-1),n=e.substring(e.length-1);return"s"===n?1e3*t:"h"===n?60*t*60*1e3:"d"===n?24*t*60*60*1e3:e}function r(e){var t="".concat(e,"="),n="";if(document.cookie.length>0){var r=document.cookie.indexOf(t);if(-1!==r){r+=t.length;var o=document.cookie.indexOf(";",r);-1===o&&(o=document.cookie.length),n=unescape(document.cookie.substring(r,o))}}return n}function o(e,t,r){var o=n(r),a=new Date;a.setTime(a.getTime()+1*o),document.cookie="".concat(e,"=").concat(escape(t),";expires=").concat(a.toUTCString())}function a(e){var t=new Date;t.setTime(t.getTime()-1);var n=r(e);null!=n&&(document.cookie="".concat(e,"=").concat(n,";expires=").concat(t.toUTCString()))}return e.r(t),e.d(t,{getsec:function(){return n},getCookie:function(){return r},setCookie:function(){return o},delCookie:function(){return a}}),t}()}))}).call(this,n("62e4")(e))},"5b0a":function(e,t,n){},"6b8a":function(e,t,n){var r={"./basic/layout.md":["66f1","chunk-2d0d0441"],"./form/pageDynamic.md":["1009","chunk-2d0aa15e"],"./install.md":["99d1"],"./quickStart.md":["109e"]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="6b8a",e.exports=o},"7be1":function(e,t,n){(function(e,r){var o,a,i,s=n("ded3").default,c=n("7037").default;n("d3b7"),n("c975"),n("4160"),n("159b"),n("3ca3"),n("ddb0"),n("25f0"),n("ac1f"),n("5319"),n("f4b3"),n("bf19"),n("b0c0"),n("a4d3"),n("e01a"),n("fb6a"),n("99af"),n("4de4"),n("b64b"),n("accc"),n("a15b"),n("466d"),n("4d63"),n("841c"),n("1276"),n("498a"),n("3410"),n("c19f"),n("ace4"),n("82da"),n("2b3d"),n("944a"),n("0c47"),n("23dc"),function(e,n){"object"==c(t)&&"object"==c(r)?r.exports=n():(a=[],o=n,i="function"===typeof o?o.apply(t,a):o,void 0===i||(r.exports=i))}(self,(function(){return function(){var t={9669:function(e,t,n){e.exports=n(1609)},5448:function(e,t,n){"use strict";var r=n(4867),o=n(6026),a=n(4372),i=n(5327),s=n(4097),c=n(4109),u=n(7985),l=n(5061);e.exports=function(e){return new Promise((function(t,n){var f=e.data,d=e.headers;r.isFormData(f)&&delete d["Content-Type"];var p=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var g=s(e.baseURL,e.url);if(p.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),p.timeout=e.timeout,p.onreadystatechange=function(){if(p&&4===p.readyState&&(0!==p.status||p.responseURL&&0===p.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in p?c(p.getAllResponseHeaders()):null,a={data:e.responseType&&"text"!==e.responseType?p.response:p.responseText,status:p.status,statusText:p.statusText,headers:r,config:e,request:p};o(t,n,a),p=null}},p.onabort=function(){p&&(n(l("Request aborted",e,"ECONNABORTED",p)),p=null)},p.onerror=function(){n(l("Network Error",e,null,p)),p=null},p.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",p)),p=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(g))&&e.xsrfCookieName?a.read(e.xsrfCookieName):void 0;v&&(d[e.xsrfHeaderName]=v)}if("setRequestHeader"in p&&r.forEach(d,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete d[t]:p.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(p.withCredentials=!!e.withCredentials),e.responseType)try{p.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&p.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&p.upload&&p.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){p&&(p.abort(),n(e),p=null)})),f||(f=null),p.send(f)}))}},1609:function(e,t,n){"use strict";var r=n(4867),o=n(1849),a=n(321),i=n(7185);function s(e){var t=new a(e),n=o(a.prototype.request,t);return r.extend(n,a.prototype,t),r.extend(n,t),n}var c=s(n(5655));c.Axios=a,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n(5263),c.CancelToken=n(4972),c.isCancel=n(6502),c.all=function(e){return Promise.all(e)},c.spread=n(8713),c.isAxiosError=n(6268),e.exports=c,e.exports.default=c},5263:function(e){"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},4972:function(e,t,n){"use strict";var r=n(5263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},6502:function(e){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:function(e,t,n){"use strict";var r=n(4867),o=n(5327),a=n(782),i=n(3572),s=n(7185);function c(e){this.defaults=e,this.interceptors={request:new a,response:new a}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},782:function(e,t,n){"use strict";var r=n(4867);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},4097:function(e,t,n){"use strict";var r=n(1793),o=n(7303);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},5061:function(e,t,n){"use strict";var r=n(481);e.exports=function(e,t,n,o,a){var i=new Error(e);return r(i,t,n,o,a)}},3572:function(e,t,n){"use strict";var r=n(4867),o=n(8527),a=n(6502),i=n(5655);function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return a(t)||(s(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:function(e){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},7185:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){t=t||{};var n={},o=["url","method","data"],a=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(e[o],t[o])}r.forEach(o,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(a,u),r.forEach(i,(function(o){r.isUndefined(t[o])?r.isUndefined(e[o])||(n[o]=c(void 0,e[o])):n[o]=c(void 0,t[o])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=o.concat(a).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},6026:function(e,t,n){"use strict";var r=n(5061);e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},8527:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},5655:function(t,n,r){"use strict";var o=r(4867),a=r(6016),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!o.isUndefined(e)&&o.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c,u={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(c=r(5448)),c),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),o.isFormData(e)||o.isArrayBuffer(e)||o.isBuffer(e)||o.isStream(e)||o.isFile(e)||o.isBlob(e)?e:o.isArrayBufferView(e)?e.buffer:o.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):o.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};o.forEach(["delete","get","head"],(function(e){u.headers[e]={}})),o.forEach(["post","put","patch"],(function(e){u.headers[e]=o.merge(i)})),t.exports=u},1849:function(e){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},5327:function(e,t,n){"use strict";var r=n(4867);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var a;if(n)a=n(t);else if(r.isURLSearchParams(t))a=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),a=i.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}},7303:function(e){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},4372:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,a,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(a)&&s.push("domain="+a),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},1793:function(e){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},6268:function(e){"use strict";e.exports=function(e){return"object"==c(e)&&!0===e.isAxiosError}},7985:function(e,t,n){"use strict";var r=n(4867);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},6016:function(e,t,n){"use strict";var r=n(4867);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},4109:function(e,t,n){"use strict";var r=n(4867),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,a,i={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),n=r.trim(e.substr(a+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},8713:function(e){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4867:function(e,t,n){"use strict";var r=n(1849),o=Object.prototype.toString;function a(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==c(e)}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function l(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=c(e)&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:a,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:u,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:l,isStream:function(e){return s(e)&&l(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function n(n,r){u(t[r])&&u(n)?t[r]=e(t[r],n):u(n)?t[r]=e({},n):a(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)f(arguments[r],n);return t},extend:function(e,t,n){return f(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},1560:function(e,t,n){"use strict";function r(e){var t="".concat(e,"="),n="";if(document.cookie.length>0){var r=document.cookie.indexOf(t);if(-1!==r){r+=t.length;var o=document.cookie.indexOf(";",r);-1===o&&(o=document.cookie.length),n=unescape(document.cookie.substring(r,o))}}return n}n.d(t,{getCookie:function(){return r}})}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){"use strict";r.r(o),r.d(o,{default:function(){return a}});var e=r(9669),t=r.n(e),n=r(1560);t().defaults.headers.post["Content-Type"]="application/json";var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t().create({baseURL:e.baseURL||"/",timeout:e.timeout||1e4,headers:s({},e.header)});return r.interceptors.request.use((function(t){var r=(0,n.getCookie)("token"),o=(0,n.getCookie)("userinfo"),a=o.yonghuId,i=o.MAC;return r&&(t.headers.Authorization=r),a&&(t.headers.DangQianYhId=a),i&&(t.headers.MAC=i),void 0!==t.data&&null!==t.data||(t.data={}),"function"==typeof e.requestPipe?e.requestPipe(t):t}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(t){var n=t.data;if(200===t.status){if("blob"===t.config.responseType)return t;if(n[e.msgCode]===e.successCode)return e.resData?n[e.resData]:n;throw new Error(n)}if(401===t.status)throw new Error("权限不足或未登录");if(403===t.status)throw new Error("权限不足或未登录");return n}),(function(e){if(e.response){var t=e.response;if(500===t.status)throw new Error("服务错误，请重试");if(t.data&&t.data.msg)throw new Error(t.data.msg)}return Promise.reject(e)})),r}}(),o}()}))}).call(this,n("4362"),n("62e4")(e))},"99d1":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"content element-doc"},[n("h2",{attrs:{id:"an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[e._v("¶")]),e._v(" 安装")]),n("p",[e._v("DF-UI 是我们自己开发的组件，安装之前，你需要在你的工程项目的根目录下配置 .npmrc 文件，使得 npm 能够正确的指向安装地址")]),n("p",[e._v("在 .npmrc 中写入以下内容：")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("\n  registry=http://registry.npm.taobao.org/\n\n  @df_scope:registry=http://nexus.df-mic.com/repository/npm-group/\n\n")])]),n("h3",{attrs:{id:"npm-an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#npm-an-zhuang"}},[e._v("¶")]),e._v(" npm 安装")]),n("pre",[n("code",{staticClass:"language-shell"},[e._v("\n  npm install @df_scope/df-bui -S\n\n")])]),n("h3",{attrs:{id:"yarn-an-zhuang"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#yarn-an-zhuang"}},[e._v("¶")]),e._v(" yarn 安装")]),n("pre",[n("code",{staticClass:"language-shell"},[e._v("\n  yarn add @df_scope/df-bui -S\n  \n")])]),n("p",[e._v("安装完成后，请阅读下一节："),n("a",{attrs:{href:"/#/component/quickstart"}},[e._v("快速上手")]),e._v("。")])])}],a=n("2877"),i={},s=Object(a["a"])(i,r,o,!1,null,null,null);t["default"]=s.exports},b423:function(e,t,n){},deb2:function(e,t,n){"use strict";n.r(t);n("2c90"),n("f058");var r=n("ae4b"),o=n.n(r),a=(n("f406"),n("5842")),i=n.n(a),s=(n("27b1"),n("f1b2")),c=n.n(s),u=(n("87dc"),n("dd64")),l=n.n(u),f=(n("bda1"),n("33a5")),d=n.n(f),p=(n("1218"),n("7498")),h=n.n(p),m=(n("1fa4"),n("f9a9")),g=n.n(m),v=(n("50e4"),n("e963")),b=n.n(v),y=(n("1ed5"),n("a83c")),x=n.n(y),j=(n("3965"),n("334a")),w=n.n(j),C=(n("0ca9"),n("2736")),E=n.n(C),_=(n("21dc"),n("5da9")),S=n.n(_),O=(n("2a34"),n("c464")),N=n.n(O),k=(n("b1a8"),n("1aa0")),I=n.n(k),A=(n("1817"),n("378f")),P=n.n(A),T=(n("f4c9"),n("61f4")),M=n.n(T),D=(n("525a"),n("3712")),R=n.n(D),U=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4160"),n("159b"),n("2b0e")),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"is-component":e.isComponent},attrs:{id:"app"}},[n("df-container",{staticStyle:{height:"100%",overflow:"hidden"}},[n("df-header",{staticClass:"main-header",attrs:{height:"80"}}),n("df-container",{staticClass:"main-container"},[n("div",{staticClass:"page-container"},[n("router-view")],1)])],1)],1)},z=[],B=(n("ac1f"),n("841c"),{components:{},computed:{isComponent:function(){var e=this.$route.path||"";return e.search(/component/i)>-1}}}),q=B,H=n("2877"),$=Object(H["a"])(q,L,z,!1,null,null,null),Y=$.exports,V=n("2909"),J=(n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("8c4f")),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-model"},[n("df-menu",{attrs:{"unique-opened":!0,"default-openeds":["1","2","3"],"default-active":e.defaultActive,router:!0}},[n("df-submenu",{attrs:{index:"1"}},[n("template",{slot:"title"},[n("span",[e._v("开发指南")])]),n("df-menu-item-group",[n("df-menu-item",{attrs:{index:"/component/install"}},[e._v(" 安装 ")])],1),n("df-menu-item-group",[n("df-menu-item",{attrs:{index:"/component/quickStart"}},[e._v(" 快速上手 ")])],1)],2),n("df-submenu",{attrs:{index:"2"}},[n("template",{slot:"title"},[n("span",[e._v("业务组件")])]),e._l(e.baseMenu,(function(t){return n("df-menu-item-group",{key:t.title,attrs:{title:t.title}},e._l(t.children,(function(t){return n("df-menu-item",{key:t.path,attrs:{index:t.path}},[e._v(" "+e._s(t.name)+" ")])})),1)}))],2)],1)],1)},Q=[],X=(n("d81d"),n("fb6a"),n("b0c0"),{components:{},data:function(){return{defaultActive:"/",baseMenu:[]}},created:function(){function e(e,t){return{title:e,children:t.map((function(e){return{name:"".concat(e.path.charAt(0).toUpperCase()).concat(e.path.slice(1)," ").concat(e.name),path:"/component/".concat(e.path)}}))}}var t=[];for(var n in te)if(Object.hasOwnProperty.call(te,n)){var r=te[n];t.push(e(n,r))}this.baseMenu=t;var o=this.$route.fullPath;this.defaultActive="/"===o?"/":o},methods:{}}),Z=X,W=Object(H["a"])(Z,F,Q,!1,null,null,null),G=W.exports,K=n("99d1"),ee=n("109e");U["default"].use(J["a"]);var te={Form:[{path:"pageDynamic",name:"下拉分页"}]};function ne(e,t){return{path:"/component/".concat(t.path),name:t.path,component:function(){return n("6b8a")("./"+e.toLowerCase()+"/"+t.path+(t.filetype||".md"))}}}var re=function(){var e=[],t=function(t){if(Object.hasOwnProperty.call(te,t)){var n=te[t];n.forEach((function(n){e.push(ne(t,n))}))}};for(var n in te)t(n);return e},oe=[{path:"/",redirect:"/component/install"},{path:"/component",redirect:"/component/install",name:"form",component:{render:function(){var e=arguments[0];return e("div",{style:"height: 100%;width:100%;display: flex"},[e("df-aside",{attrs:{width:"325px"}},[e(G)]),e("df-main",[e("router-view")]),e("df-backtop",{attrs:{target:".df-main",right:100,bottom:150}})])}},children:[{path:"/component/install",component:K["default"],name:"default"},{path:"/component/quickStart",component:ee["default"],name:"快速上手"}].concat(Object(V["a"])(re()))}],ae=new J["a"]({base:"/",routes:oe}),ie=ae,se=(n("b423"),n("1733"),n("5530")),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"df_page_dynamic"},[n("df-page-select",{attrs:{table:e.table,isPagination:!0,pageSize:e.selectPageSize,valueKey:e.props.key,querySelectList:e.getselectlist,selectLabel:e.props.value},on:{blur:e.blur,focus:e.focus,change:e.change},scopedSlots:e._u([{key:"default",fn:function(t){return e._l(t.list,(function(r,o){return n("df-option",{key:r[e.props.key],attrs:{value:r,label:r[e.props.value]}},[e.table?e._l(t.column,(function(e){return n("df-select-column",{key:e.XIANSHILIE,attrs:{optionIndex:o,width:5*e.XIANSHILIEKD,label:e.XIANSHILIEMC,prop:e.XIANSHILIE}})})):void 0],2)}))}}]),model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}})],1)},ue=[],le=n("53ca"),fe=n("1da1"),de=(n("96cf"),n("7be1")),pe=n.n(de),he=pe()({baseURL:"/api",timeout:"10000",headers:{},requestPipe:function(e){return e},msgCode:"returnCode",successCode:1,resData:"returnData"}),me=he,ge=n("252f"),ve={state:{headers:{MAC:"00-01-6C-06-A6-29","x-send":"httpKey",zhiGongXm:encodeURIComponent("系统管理员"),yuanQuId:1}},setHeaders:null,getState:function(){return this.setState(),this.state.headers},setState:function(){this.state.headers=Object.assign({},this.state.headers,this.setHeaders())},create:function(e){this.setHeaders=e}},be={name:"DfPageDynamic",data:function(){return{table:!0,selectPageSize:5,list:[],page:1,column:[],total:1}},props:{peiZhiId:{type:String},fuWuTjMc:{type:String},value:{type:Object/String,default:function(){}},props:{type:Object,required:!0}},computed:{selectValue:{get:function(){return this.value},set:function(e){this.$emit("input",e)}}},methods:{getselectlist:function(e){var t=this;return Object(fe["a"])(regeneratorRuntime.mark((function n(){var r,o,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.page,e.pagesize,o=e.keyword,a="object"===Object(le["a"])(o)?"":o,n.next=4,me({url:"/winbff-jichufw/DongTaiCx/getShuJuList",method:"post",data:[{peiZhiId:t.peiZhiId,fuWuTjMc:t.fuWuTjMc,dangQianYe:r,chaXunCs:{SHURUMLX:"SHURUMA1",SHURUMA:a,JIAGETX:"1",YUANQUID:"-9999"}}],headers:Object(se["a"])({DangQianYhId:Object(ge["getCookie"])("DangQianYhId")||"DBA",Authorization:Object(ge["getCookie"])("Authorization")||"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ5b25nSHVYbSI6Iuezu-e7n-euoeeQhuWRmCIsInNjb3BlIjpbIjI0MzQ1MjQ1NDM1MjM0MjM0NSIsIjY0NDE5NjI0NzMxNzMxOTY4MCIsIjYyNjQxNjE1NzM0MzA4ODY0MCIsIjYyNjQxNjIxMDc0NDk2NzE2OCIsIjYyNjQxNjI1OTYxNjk5NzM3NiIsIjYyNjQxNjMxNTg4MzU4NTUzNiIsIjY0MjI5Nzg3Njc4ODgyNjExMiJdLCJleHAiOjE2MjA1MjA1NjIsInVzZXJOYW1lIjoiREJBIiwianRpIjoiYTZmMjk0MzEtYzVjNC00MmQ1LTk1NmQtODAyNGQ1Yjc4NDQ5IiwiY2xpZW50X2lkIjoiWkM1TnFqblhsWEVXN1ZIdCJ9.ZZrjcAEc-djMFTIz3xTmXpYIqyD2T7wx3hZHiGTYI84"},ve.getState())}).then((function(e){t.list=e[0].data,t.column=JSON.parse(e[0].xianShiLieSz),t.total=e[0].zongTiaoShu,t.selectPageSize=e[0].meiYeTs,1===JSON.parse(e[0].xianShiLieSz).length?t.table=!1:t.table=!0}));case 4:return n.abrupt("return",new Promise((function(e,n){e({list:t.list,total:t.total,column:t.column})})).catch((function(e){console.log(e)})));case 5:case"end":return n.stop()}}),n)})))()},blur:function(e){this.$emit("blur",e)},focus:function(e){this.$emit("focus",e)},change:function(e){this.$emit("change",e)}},created:function(){}},ye=be,xe=Object(H["a"])(ye,ce,ue,!1,null,null,null),je=xe.exports;je.install=function(e){e.component(je.name,je)};var we=je,Ce=[we],Ee=function(e,t){ve.create(t),Ce.map((function(t){return e.component(t.name,t)}))};"undefined"!==typeof window&&window.Vue&&Ee(window.Vue);var _e=Object(se["a"])({install:Ee},Ce),Se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block",class:[{hover:e.hovering}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[n("div",{staticClass:"source"},[e._t("source")],2),n("div",{ref:"meta",staticClass:"meta"},[e.$slots.default?n("div",{staticClass:"description"},[e._t("default")],2):e._e(),n("div",{staticClass:"highlight"},[e._t("highlight")],2)]),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":e.fixedControl},on:{click:function(t){e.isExpanded=!e.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[e.iconClass,{hovering:e.hovering}]})]),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.isExpanded?"隐藏代码":"展开"))])])],1)])},Oe=[],Ne=(n("1276"),n("1487")),ke=n.n(Ne),Ie={data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},methods:{scrollHandler:function(){var e=this.$refs.meta.getBoundingClientRect(),t=e.top,n=e.bottom,r=e.left;console.log(t,n,r),this.fixedControl=n>document.documentElement.clientHeight&&t+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?"".concat(r,"px"):"0"},removeScrollHandler:function(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{lang:function(){return this.$route.path.split("/")[1]},iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(e){var t=this;if(this.codeArea.style.height=e?"".concat(this.codeAreaHeight+1,"px"):"0",!e)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout((function(){console.log(1),t.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),t.scrollParent&&t.scrollParent.addEventListener("scroll",t.scrollHandler),t.scrollHandler()}),200)}},created:function(){},mounted:function(){var e=this;this.$nextTick((function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,ke.a.highlightBlock);var n=e.$el.getElementsByClassName("highlight")[0];0===e.$el.getElementsByClassName("description").length&&(n.style.width="100%",n.borderRight="none")}))},beforeDestroy:function(){this.removeScrollHandler()}},Ae=Ie,Pe=(n("ffa4"),Object(H["a"])(Ae,Se,Oe,!1,null,null,null)),Te=Pe.exports,Me=[R.a,M.a,P.a,I.a,N.a,S.a,E.a,w.a,x.a,b.a,g.a,h.a,d.a,l.a,c.a,i.a,o.a];Me.forEach((function(e){return U["default"].use(e)})),U["default"].component("demo-block",Te);var De=function(){return{}};U["default"].use(_e,De);window.app=new U["default"]({router:ie,render:function(e){return e(Y)},beforeCreate:function(){},created:function(){}}).$mount("#app")},ffa4:function(e,t,n){"use strict";n("5b0a")}});
//# sourceMappingURL=index.c690381d.js.map