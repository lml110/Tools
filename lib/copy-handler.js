!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("copyHandler",[],t):"object"==typeof exports?exports.copyHandler=t():e.copyHandler=t()}(self,(function(){return function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var t={};function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}e.d(t,{default:function(){return u}});var n="object"===(void 0===e.g?"undefined":o(e.g))&&null!==e.g&&e.g.Object===Object&&e.g,r="object"===("undefined"==typeof globalThis?"undefined":o(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,i="object"===("undefined"==typeof self?"undefined":o(self))&&null!==self&&self.Object===Object&&self,l=r||n||i||Function("return this")(),c=l.navigator||{},f=l.document||{},u=function(e){if(c.clipboard&&l.isSecureContext)return c.clipboard.writeText(e);var t=f.createElement("textarea");return t.value=e,t.style.position="absolute",t.style.opacity=0,t.style.left="-999999px",t.style.top="-999999px",f.body.appendChild(t),t.focus(),t.select(),new Promise((function(e,o){f.execCommand("copy")?e():o(),t.remove()}))};return t.default}()}));