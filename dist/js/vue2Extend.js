!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue2Extend",[],t):"object"==typeof exports?exports.vue2Extend=t():e.vue2Extend=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var t={};e.d(t,{default:function(){return I}});var n={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function o(e){var t=Object.prototype.toString.call(e);return n[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}var r=function(e,t,n){if(t)return"array"===o(e)?function(e,t,n){for(var o=-1,r=e.length;++o<r;)t.call(n,e[o],o,"array")}(e,t,n):"object"===o(e)?function(e,t,n){for(var o in e)e.hasOwnProperty(o)&&t.call(n,e[o],o,"object")}(e,t,n):void 0};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var u="object"===(void 0===e.g?"undefined":i(e.g))&&null!==e.g&&e.g.Object===Object&&e.g,l="object"===("undefined"==typeof globalThis?"undefined":i(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,a="object"===("undefined"==typeof self?"undefined":i(self))&&null!==self&&self.Object===Object&&self,c=l||u||a||Function("return this")();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}var s,p,d,b,g=function(e,t){return e&&c.JSON?t?JSON.stringify(e,(n=new WeakSet,function(e,t){if("object"===f(t)&&null!==t){if(n.has(t))return;n.add(t)}return t})):JSON.stringify(e):"";var n},y=function(e,t){return e?t?e.replace(/([^\u0000-\u00FF])/g,(function(e){return encodeURIComponent(e)})):encodeURIComponent(e):e},h=function(e){return y((t=e)?decodeURIComponent(t):t)===e?e:y(e);var t},v=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[void 0,null],i=[];return r(e,(function(e,t){if(n&&n.includes(e))return!1;var r="string"===o(e)?e:g(e);r=h(r),i.push(t+"="+r)})),"string"===o(t)?i.length?t+i.join("&"):"":i},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new FormData;for(var o in e)e.hasOwnProperty(o)&&n.append(o,e[o]);for(var r in t)if(t.hasOwnProperty(r)&&t[r]&&t[r].length)for(var i=t[r],u=0,l=i.length;u<l;u++)n.append(r,i[u]);return n},j=function(e,t){return"boolean"===o(e)?e:Boolean(t)},S=["","application/json;charset=utf-8","application/x-www-form-urlencoded;charset=UTF-8","multipart/form-data","text/xml"],O={},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t?m(e,t):e},x=function(e){return O[e]||e},N=function(e){delete this.cancelQueue[e]},T=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"get",o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4?arguments[4]:void 0;o||(o={});var i=o,u=(i.hasSessionId,i.fileData),l=i.isFormData,a=i.isNoString,c=i.contentTypeNum,f=i.delEmpty,g=i.isCancel,y=i.isResAll;f=j(f,!0);var h={url:x(e),method:n,headers:{}};return t&&("post"===n?u?(h.data=w(t,u),o.progress&&(h.onUploadProgress=o.progress)):h.data=l?w(t,{}):a?t:v(t,""):h.params=t),c&&(h.headers["Content-Type"]=S[c]),r&&(h=Object.assign(h,r)),p?s&&s(h):new Promise((function(t,n){s&&s(h).then((function(o){g&&N(e),y?t(o):d&&d(o)?t(b&&b(o)):n(o)})).catch((function(t){return g&&N(e),n(t)}))}))},P={setInit:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e&&(s=e),t&&(O=t),n.isSelf&&(p=n.isSelf),n.isResOk&&(d=n.isResOk),n.sucessOk&&(b=n.sucessOk)},fetch:s,APIURL:O,$getRequestUrl:x,$request:T,$post:function(e,t,n,o){return T(e,t,"post",n,o)},$get:function(e,t,n,o){return T(e,t,"get",n,o)}},R=c.document||{};function C(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function U(e,t){if(!e.style)return"";var n=e.style[C(t)];if(!n)if(R.defaultView&&R.defaultView.getComputedStyle){var o=R.defaultView.getComputedStyle(e,null);n=o?o.getPropertyValue(t):null}else e.currentStyle&&(n=e.currentStyle[C(t)]);return n.replace(/px$/,"")}var F=function(e,t){e.className?function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)}(e,t)||(e.className+=" "+t):e.className=t},I={API:P,directives:{ellipsis:{inserted:function(e,t,n){var o=t.arg||2,r=U(e,"line-Height")*o,i=e.firstChild,u=U(e,"height")>r;if(i){if(u&&t.modifiers.is)for(;e.offsetHeight>r;)i.innerHTML=i.innerHTML.replace(/.(\.\.\.)?$/,"...");return t.value&&t.value(u,e)}}},transition:{inserted:function(e,t,n){var o=t.arg||"collapse",r=t.value||!1,i="transition-".concat(o),u=U(e,"height")||e.clientHeight||e.scrollHeight;F(e,i),e.dataset.height=u,e.style.height=r?u:"0"},update:function(e,t,n){t.arg;var o=t.value||!1,r=e.dataset.height;e.style.height=o?r+"px":"0"}}}};return t.default}()}));