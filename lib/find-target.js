!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("findTarget",[],t):"object"==typeof exports?exports.findTarget=t():e.findTarget=t()}(self,(function(){return function(){"use strict";var e={3072:function(e,t,o){function n(e){const t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[t.call(e)]||t.call(e)}o.d(t,{default:function(){return n}})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,o),c.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};return function(){var e=o(3072);let t,r;const c=function(e,o){let n;for(let u=0;u<e.length;u++){let f=e[u];if(t(f,o))return f;if(r){let e=r(f);e&&(n=c(e,f))}if(n)return n}return n};n.default=function(o,n,u){if("array"!==(0,e.default)(o)||"function"!==(0,e.default)(n))return!1;if(t=n,u){let t=(0,e.default)(u);r="function"===t?u:"string"===t&&(e=>e[u])}return c(o)}}(),n.default}()}));