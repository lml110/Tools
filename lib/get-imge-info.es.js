!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("getImgeInfo",[],t):"object"==typeof exports?exports.getImgeInfo=t():e.getImgeInfo=t()}(self,(function(){return function(){"use strict";var e={7058:function(e,t,n){var o=n(4071);t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-DD hh:mm:ss",n={"M+":(e=(0,o.default)(e)).getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)n.hasOwnProperty(r)&&new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t}},4071:function(e,t,n){var o=n(2697);t.default=function(e){var t=(0,o.default)(e);return"date"===t?e:e?"string"===t&&e.includes("-")?new Date(e.replace(/-/g,"/")):new Date(e):new Date}},9512:function(e,t,n){var o=n(4025),r=n(8517);t.default=function(e){return o.Z.revokeObjectURL?revokeObjectURL(e):r.Z.revokeObjectURL(e)}},8153:function(e,t,n){var o=n(4025),r=n(8517),a=n(9512);t.default=function(e,t){return t&&(0,a.default)(t),o.Z.createObjectURL?createObjectURL(e):r.Z.createObjectURL(e)}},9055:function(e,t,n){var o=n(2697),r=function(e,t){return new Promise(((n,o)=>{var r=new Image;t&&(r.crossOrigin="Anonymous"),r.onload=function(){n(r)},r.src=e}))};t.default=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"array"==(0,o.default)(e)?Promise.all(e.map(((e,n)=>r(e,t)))):r(e,t)}},2697:function(e,t,n){n.d(t,{default:function(){return r}});var o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function r(e){var t=Object.prototype.toString.call(e);return o[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}},8517:function(e,t,n){var o=n(4025);t.Z=o.Z.webkitURL||o.Z.URL},4025:function(e,t,n){var o="object"==typeof n.g&&null!==n.g&&n.g.Object===Object&&n.g,r="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,a="object"==typeof self&&null!==self&&self.Object===Object&&self,c=r||o||a||Function("return this")();t.Z=c}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o,r,a,c={};return o=n(9055),r=n(7058),a=n(8153),c.default=function(e,t){return new Promise((function(n,c){if(!e)return n({});var i=e.size,u={type:e.type,name:e.name,size:i,size_KB:_float(i/1024,2),size_MB:_float(i/1024/1024,2)};if(e.lastModifiedDate&&(u.date=(0,r.default)(e.lastModifiedDate,"yyyy-MM-DD hh:mm:ss")),t){var l=(0,a.default)(e);l?(0,o.default)(l).then((function(e){n(Object.assign(u,{width:e.width,height:e.height,blob:l,image:e}))})):n(u)}else n(u)}))},c.default}()}));