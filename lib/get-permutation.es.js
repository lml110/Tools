!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("getPermutation",[],t):"object"==typeof exports?exports.getPermutation=t():e.getPermutation=t()}(self,(function(){return function(){"use strict";var e={default:function e(t){if(1==t.length)return[t];for(var n=[],o=0;o<t.length;o++){var r=t[o],f=t.slice(0);f.splice(o,1);for(var u=e(f),i=0;i<u.length;i++)u[i].unshift(r);n=n.concat(u)}return n}};return e.default}()}));