!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("strlen",[],t):"object"==typeof exports?exports.strlen=t():e.strlen=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function n(e){let t=0;for(let n=0;n<e.length;n++){let o=e.charCodeAt(n);o>=1&&o<=126||65376<=o&&o<=65439?t++:t+=2}return t}return e.d(t,{default:function(){return n}}),t.default}()}));