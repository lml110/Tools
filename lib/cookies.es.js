!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Cookies",[],t):"object"==typeof exports?exports.Cookies=t():e.Cookies=t()}(self,(function(){return function(){"use strict";var e={6232:function(e,t){t.default=function(e){return!e&&0!==e}},9323:function(e,t,o){var r=o(4735),n=o(1723);t.default=function(e,t){return(0,r.default)((0,n.default)(e,t))}},4735:function(e,t,o){var r=o(2697);t.default=function(e){return"number"===(0,r.default)(e)?e:+e}},2697:function(e,t,o){o.d(t,{default:function(){return n}});var r={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function n(e){var t=Object.prototype.toString.call(e);return r[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}},1723:function(e,t,o){var r=o(4735);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.prototype.toFixed.call((0,r.default)(e),t)}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,o),i.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r={};return function(){o.d(r,{default:function(){return f}});var e="object"==typeof o.g&&null!==o.g&&o.g.Object===Object&&o.g,t="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,n="object"==typeof self&&null!==self&&self.Object===Object&&self,i=(t||e||n||Function("return this")()).document||{},u=o(2697),c=o(6232),a=o(9323),l={get(e){var t=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(i.cookie);return"array"===(0,u.default)(t)&&t[1]},set(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return this.clear();if((0,c.default)(t)&&(o.expires=-1),"number"===(0,u.default)(o.expires)){var r=o.expires,n=o.expires=new Date;n.setDate(n.getDate()+r)}return i.cookie=[e,"=",t,o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")},remove(e){if(e)return this.set(e)},clear(e){if(e)this.remove(e);else for(var t=this.keys(),o=t.length;o--;)this.remove(t[o])},keys(){return i.cookie.match(/[^ =;]+(?=\=)/g)},info(){return{unit:"KB",currentSize:i.cookie.length?(0,a.default)(i.cookie.length/1024):0,maxSize:4}}},f=l}(),r.default}()}));