!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("isValidIP",[],t):"object"==typeof exports?exports.isValidIP=t():e.isValidIP=t()}(self,(function(){return function(){"use strict";var e={2697:function(e,t,r){r.d(t,{default:function(){return n}});var o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function n(e){var t=Object.prototype.toString.call(e);return o[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o,n,i,u={};return o=r(2697),n=/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,i=/^[0-9A-F]{1,4}$/i,u.default=function e(t,r){if("string"!==(0,o.default)(t))return!1;if(!r)return e(t,4)||e(t,6);if(4===r)return!!n.test(t)&&+t.split(".").sort(((e,t)=>+e-t))[3]<=255;if(6===r){var u=t.split(":"),c=!1,f=e(u[u.length-1],4),l=f?7:8;if(u.length>l)return!1;if("::"===t)return!0;"::"===t.substr(0,2)?(u.shift(),u.shift(),c=!0):"::"===t.substr(t.length-2)&&(u.pop(),u.pop(),c=!0);for(var a=0;a<u.length;a+=1)if(""===u[a]&&a>0&&a<u.length-1){if(c)return!1;c=!0}else if(f&&a===u.length-1);else if(!i.test(u[a]))return!1;return c?u.length>=1:u.length===l}return!1},u.default}()}));