!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("localExpires",[],t):"object"==typeof exports?exports.localExpires=t():e.localExpires=t()}(self,(function(){return function(){"use strict";var e={9715:function(e,t,n){n.d(t,{default:function(){return l}});var r=n(6232),o=n(4417),u=n(1302),a=n(1563),f=n(1176),l={get(e){return(t=localStorage.getItem((0,u.default)(e)))?(0,f.default)((0,a.default)(t)):t;var t},set(e,t){if(!e)return this.clear();(0,r.default)(t)?localStorage.removeItem((0,u.default)(e)):localStorage.setItem((0,u.default)(e),function(e){return e?(0,u.default)(JSON.stringify(e)):e}(t))},remove(e){e&&this.set(e)},clear(e){e?this.remove(e):localStorage.clear()},keys(){return Object.keys(localStorage).map(((e,t)=>(0,a.default)(e)))},info(){return(0,o.default)(localStorage)}}},1563:function(e,t){t.default=function(e){return e?decodeURIComponent(e):e}},1302:function(e,t){t.default=function(e){return e?e.replace(/([^\u0000-\u00FF])/g,(e=>encodeURIComponent(e))):e}},4417:function(e,t,n){var r=n(2550),o=n(8074),u=n(2092);t.default=function(e){if(!e)return!1;var t=0;return(0,r.default)(e,(function(n,r){t+=(0,o.default)(e.getItem(r))})),{size:t,unit:(0,u.default)(t),maxSize:5120}}},6232:function(e,t){t.default=function(e){return!e&&0!==e}},4957:function(e,t){t.default=function(e){return void 0===e}},1176:function(e,t){t.default=function(e){try{return JSON.parse(e)}catch(t){return e}}},9323:function(e,t,n){var r=n(4735),o=n(1723);t.default=function(e,t){return(0,r.default)((0,o.default)(e,t))}},4735:function(e,t,n){var r=n(2697);t.default=function(e){return"number"===(0,r.default)(e)?e:+e}},2697:function(e,t,n){n.d(t,{default:function(){return o}});var r={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function o(e){var t=Object.prototype.toString.call(e);return r[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}},2550:function(e,t){t.default=function(e,t,n){for(var r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,"object")}},1723:function(e,t,n){var r=n(4735);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.prototype.toFixed.call((0,r.default)(e),t)}},8074:function(e,t,n){function r(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r>=1&&r<=126||65376<=r&&r<=65439?t++:t+=2}return t}n.d(t,{default:function(){return r}})},2092:function(e,t,n){n.d(t,{default:function(){return u}});var r=n(9323),o=["B","KB","MB","GB","TB"];function u(e){for(var t=0;e>1024;)e/=1024,++t;return"".concat((0,r.default)(e)).concat(o[t])}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var u=t[r]={exports:{}};return e[r](u,u.exports,n),u.exports}n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r,o,u,a,f={};return r=n(2697),o=n(4957),u=n(9715),a=n(6232),f.default=function(e,t,n){if(!e)return u.default.clear();var f,l=!1,c=u.default.get("EXPIRES");if("boolean"===(0,r.default)(n)&&c&&(l=n),(0,o.default)(t)){var i=u.default.get(e);return i&&i.startTime?(f=l?c>Date.now()&&(i.value||i):!!(i.expires&&i.expires>Date.now())&&(i.value||i))||u.default.remove(e):f=i,f}if((0,a.default)(t))u.default.remove(e);else{if(l)f={value:t,startTime:Date.now()};else{var d,s=(0,r.default)(n);if("string"===s)d=new Date(n);else if("number"===s){var p=n,b=d=new Date;b.setDate(b.getDate()+p)}f=d?{value:t,startTime:Date.now(),expires:d.getTime()}:t}if(f)return u.default.set(e,f)}},f.default}()}));