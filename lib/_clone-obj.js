!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("_cloneObj",[],t):"object"==typeof exports?exports._cloneObj=t():e._cloneObj=t()}(self,(function(){return function(){"use strict";var e={2799:function(e,t,o){var r=o(3072);t.default=function(e){let t=[];return function e(o){let n=(0,r.default)(o);if(t.includes(o))return;t.push(o);let c="array"===n?[]:"object"===n?{}:o;if("array"===n)for(let t=0;t<o.length;t++)c.push(e(o[t]));else if("object"===n)for(let t in o)o.hasOwnProperty(t)&&(c[t]=e(o[t]));return c}(e)}},3072:function(e,t,o){function r(e){const t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[t.call(e)]||t.call(e)}o.d(t,{default:function(){return r}})}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r,n={};return r=o(2799),n.default=function(e){let t=Array.isArray(e)?[]:{};if(JSON)try{t=JSON.parse(JSON.stringify(e))}catch(o){console.log("stringify",o),t=(0,r.default)(e)}else t=(0,r.default)(e);return t},n.default}()}));