!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("installModuleClass",[],t):"object"==typeof exports?exports.installModuleClass=t():e.installModuleClass=t()}(self,(function(){return function(){"use strict";var e={default:function(e,t,n){return Reflect.ownKeys(t).forEach((function(o,l,u){return n?n.includes(o)?e[o]=t[o].bind(e):null:"constructor"===o?null:e[o]=t[o].bind(e)}))}};return e.default}()}));