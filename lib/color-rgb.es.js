!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("colorRgb",[],t):"object"==typeof exports?exports.colorRgb=t():e.colorRgb=t()}(self,(function(){return function(){"use strict";var e={4735:function(e,t,o){var r=o(2697);t.default=function(e){return"number"===(0,r.default)(e)?e:+e}},2697:function(e,t,o){o.d(t,{default:function(){return n}});var r={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function n(e){var t=Object.prototype.toString.call(e);return r[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var c=t[r]={exports:{}};return e[r](c,c.exports,o),c.exports}o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var r={};return function(){o.d(r,{default:function(){return n}});var e=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,t=o(4735),n=function(o){if((o=o.toLowerCase())&&e.test(o)){if(4===o.length){for(var r="#",n=1;n<4;n+=1)r+=o.slice(n,n+1).concat(o.slice(n,n+1));o=r}for(var c=[],u=1;u<7;u+=2)c.push((0,t.default)("0x"+o.slice(u,u+2)));return"RGB("+c.join(",")+")"}return o}}(),r.default}()}));