!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("colorHex",[],t):"object"==typeof exports?exports.colorHex=t():e.colorHex=t()}(self,(function(){return function(){"use strict";var e={d:function(t,r){for(var o in r)e.o(r,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:r[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return o}});var r=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,o=function(e){if(/^(rgb|RGB)/.test(e)){for(var t=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),o="#",n=0;n<t.length;n++){var f=Number(t[n]).toString(16);"0"===f&&(f+=f),o+=f}return 7!==o.length&&(o=e),o}if(!r.test(e))return e;var u=e.replace(/#/,"").split("");if(6===u.length)return e;if(3===u.length){for(var i="#",c=0;c<u.length;c+=1)i+=u[c]+u[c];return i}};return t.default}()}));