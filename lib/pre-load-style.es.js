!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("preLoadStyle",[],t):"object"==typeof exports?exports.preLoadStyle=t():e.preLoadStyle=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var t={};e.d(t,{default:function(){return c}});var o="object"==typeof e.g&&null!==e.g&&e.g.Object===Object&&e.g,n="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,r="object"==typeof self&&null!==self&&self.Object===Object&&self,l=(n||o||r||Function("return this")()).document||{},c=function(e,t){return new Promise(((o,n)=>{var r=l.createElement("link");r.rel="preload",r.as=t||"style",r.href=e,r.onload=()=>o(e),r.onerror=e=>n(e),l.head.appendChild(r)}))};return t.default}()}));