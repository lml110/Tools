!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("parseAboutTime",[],t):"object"==typeof exports?exports.parseAboutTime=t():e.parseAboutTime=t()}(self,(function(){return function(){"use strict";var e={1482:function(e,t,o){var n=o(7736);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-DD hh:mm:ss",o={"M+":(e=(0,n.default)(e)).getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),o)o.hasOwnProperty(r)&&new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?o[r]:("00"+o[r]).substr((""+o[r]).length)));return t}},7736:function(e,t,o){var n=o(4929);t.default=function(e){var t=(0,n.default)(e);return"date"===t?e:e?"string"===t&&e.includes("-")?new Date(e.replace(/-/g,"/")):new Date(e):new Date}},4929:function(e,t,o){o.d(t,{default:function(){return r}});var n={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function r(e){var t=Object.prototype.toString.call(e);return n[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n,r,a={};return n=o(1482),r=o(7736),60,3600,86400,604800,a.default=function(e,t){e=(0,r.default)(e);var o=parseInt((+new Date-e)/1e3);return o<=0?"":o<60?"".concat(o,"秒之前"):o<3600?"".concat(parseInt(o/60),"分钟之前"):o<86400?"".concat(parseInt(o/3600),"小时之前"):o<604800?"".concat(parseInt(o/86400),"天之前"):t?t(o,e):(0,n.default)(e,"yyyy-MM-DD")},a.default}()}));