!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("imageLoaded",[],t):"object"==typeof exports?exports.imageLoaded=t():e.imageLoaded=t()}(self,(function(){return function(){"use strict";var e={2697:function(e,t,o){o.d(t,{default:function(){return n}});var r={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function n(e){var t=Object.prototype.toString.call(e);return r[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r,n,c={};return r=o(2697),n=function(e,t){return new Promise(((o,r)=>{var n=new Image;t&&(n.crossOrigin="Anonymous"),n.onload=function(){o(n)},n.src=e}))},c.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"array"==(0,r.default)(e)?Promise.all(e.map(((e,o)=>n(e,t)))):n(e,t)},c.default}()}));