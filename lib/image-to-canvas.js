!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("imageToCanvas",[],e):"object"==typeof exports?exports.imageToCanvas=e():t.imageToCanvas=e()}(self,(function(){return function(){"use strict";var t={3391:function(t,e,o){var n=o(3750);e.default=function(t,e){let o={jpg:"image/jpeg",png:"image/png"},r=o[t?/^http/.test(t)?(0,n.default)(t):t:"jpg"]||o.jpg;return this&&this.toDataURL(r,e||.8)}},4202:function(t,e,o){var n=o(3072);const r=function(t,e){return new Promise(((o,n)=>{let r=new Image;e&&(r.crossOrigin="Anonymous"),r.onload=function(){o(r)},r.src=t}))};e.default=function(t,e=!0){return"array"==(0,n.default)(t)?Promise.all(t.map(((t,o)=>r(t,e)))):r(t,e)}},3750:function(t,e){e.default=function(t){return t.replace(/.+\./,"").toLowerCase()}},3072:function(t,e,o){function n(t){const e=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[e.call(t)]||e.call(t)}o.d(e,{default:function(){return n}})}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var c=e[n]={exports:{}};return t[n](c,c.exports,o),c.exports}o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};var n={};return function(){o.d(n,{default:function(){return u}});var t=o(4202);const e="object"==typeof o.g&&null!==o.g&&o.g.Object===Object&&o.g,r="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,c="object"==typeof self&&null!==self&&self.Object===Object&&self;var i=(r||e||c||Function("return this")()).document||{},a=o(3391),u=function(e,o){return new Promise(((n,r)=>{(0,t.default)(e,!0).then((t=>{let r=i.createElement("canvas");if(r.width=t.width,r.height=t.height,r.getContext("2d").drawImage(t,0,0,t.width,t.height),o)return n((0,a.default)(r,e)),!1;n(r)}))}))}}(),n.default}()}));