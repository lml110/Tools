!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("_cloneObj",[],e):"object"==typeof exports?exports._cloneObj=e():t._cloneObj=e()}(self,(function(){return function(){"use strict";var t={1176:function(t,e){e.default=function(t){try{return JSON.parse(t)}catch(e){return t}}},7173:function(t,e,n){var o=n(4025);e.default=function(t){return t&&o.Z.JSON?JSON.stringify(t,(e=new WeakSet,(t,n)=>{if("object"==typeof n&&null!==n){if(e.has(n))return;e.add(n)}return n})):"";var e}},4025:function(t,e,n){var o="object"==typeof n.g&&null!==n.g&&n.g.Object===Object&&n.g,r="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,f="object"==typeof self&&null!==self&&self.Object===Object&&self,u=r||o||f||Function("return this")();e.Z=u}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var f=e[o]={exports:{}};return t[o](f,f.exports,n),f.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();var o={};return function(){n(4025);var t=n(1176),e=n(7173);o.default=function(n){return(0,t.default)((0,e.default)(n))}}(),o.default}()}));