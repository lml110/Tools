!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("setURLParams",[],e):"object"==typeof exports?exports.setURLParams=e():t.setURLParams=e()}(self,(function(){return function(){"use strict";var t={1928:function(t,e){e.default=function(t){return t?decodeURIComponent(t):t}},3677:function(t,e){e.default=function(t,e){return t?e?t.replace(/([^\u0000-\u00FF])/g,(function(t){return encodeURIComponent(t)})):encodeURIComponent(t):t}},7206:function(t,e,n){var o=n(2395),r=n(6182),u=n(1928);e.default=function(t,e){t||(t=o.Z.href);var n={};if(e)return(0,r.default)(t,e);var f=/(\?)(?!.*\1)+[^#]*/.exec(t);return(f=f?f[0]:"").replace(/([^?&=]+)=([^?&=]*)/g,(function(t,e,o){var r=(0,u.default)(e),f=(0,u.default)(o);return f+="",n[r]=f,t})),n}},6182:function(t,e,n){var o=n(2395),r=n(1928);e.default=function(t,e){t||(t=o.Z.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?(0,r.default)(n[2].replace(/\+/g," ")):"":null}},1779:function(t,e,n){var o=n(6226),r=n(5212),u=n(4929),f=n(9550);e.default=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[void 0,null],c=[];return(0,o.default)(t,(function(t,e){if(n&&n.includes(t))return!1;var o="string"===(0,u.default)(t)?t:(0,r.default)(t);o=(0,f.default)(o),c.push(e+"="+o)})),"string"===(0,u.default)(e)?c.length?e+c.join("&"):"":c}},9550:function(t,e,n){var o=n(3677),r=n(1928);e.default=function(t){return(0,o.default)((0,r.default)(t))===t?t:(0,o.default)(t)}},2683:function(t,e){e.default=function(t){return!t&&0!==t}},4929:function(t,e,n){n.d(e,{default:function(){return r}});var o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function r(t){var e=Object.prototype.toString.call(t);return o[e]||e.replaceAll(new RegExp(/\[|\]|object /g),"")}},6226:function(t,e,n){var o=n(4929),r=n(7383),u=n(5619);e.default=function(t,e,n){if(e)return"array"===(0,o.default)(t)?(0,r.default)(t,e,n):"object"===(0,o.default)(t)?(0,u.default)(t,e,n):void 0}},7383:function(t,e){e.default=function(t,e,n){for(var o=-1,r=t.length;++o<r;)e.call(n,t[o],o,"array")}},5619:function(t,e){e.default=function(t,e,n){for(var o in t)t.hasOwnProperty(o)&&e.call(n,t[o],o,"object")}},5212:function(t,e,n){var o=n(9977);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}e.default=function(t,e){return t&&o.Z.JSON?e?JSON.stringify(t,(n=new WeakSet,function(t,e){if("object"===r(e)&&null!==e){if(n.has(e))return;n.add(e)}return e})):JSON.stringify(t):"";var n}},2395:function(t,e,n){var o=n(9977);e.Z=o.Z.location||{}},9977:function(t,e,n){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var r="object"===(void 0===n.g?"undefined":o(n.g))&&null!==n.g&&n.g.Object===Object&&n.g,u="object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,f="object"===("undefined"==typeof self?"undefined":o(self))&&null!==self&&self.Object===Object&&self,c=u||r||f||Function("return this")();e.Z=c}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return t[o](u,u.exports,n),u.exports}n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var o,r,u,f,c,l={};return o=n(2395),r=n(7206),u=n(6226),n(4929),f=n(2683),c=n(1779),l.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;t||(t=o.Z.href);var l=t.replace(/(\?)(?!.*\1)+[^#]*/,""),i=Object.keys(e),a=n?{}:(0,r.default)(t);return(0,u.default)(i,(function(t){a[t]=e[t],(0,f.default)(e[t])&&delete a[t]})),l+(0,c.default)(a,"?")},l.default}()}));