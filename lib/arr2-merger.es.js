!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define("arr2Merger",[],r):"object"==typeof exports?exports.arr2Merger=r():e.arr2Merger=r()}(self,(function(){return function(){"use strict";var e={default:function(e,r,t){return t?function(e,r){for(var t=Math.min(e.length,r.length),n=-1,o=[];++n<t;){var f=r[n];e.includes(f)&&o.push(f)}return o}(e,r):function(e,r){return Array.from(new Set([...e,...r]))}(e,r)}};return e.default}()}));