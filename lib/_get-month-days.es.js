!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("_getMonthDays",[],t):"object"==typeof exports?exports._getMonthDays=t():e._getMonthDays=t()}(self,(function(){return function(){"use strict";var e={7923:function(e,t){t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e instanceof Date&&(e=e.getFullYear()),e%4==0&&e%100!=0||e%400==0}}},t={};var n,o={};return n=function n(o){var r=t[o];if(void 0!==r)return r.exports;var f=t[o]={exports:{}};return e[o](f,f.exports,n),f.exports}(7923),o.default=function(){var e,t,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,r=arguments.length>1?arguments[1]:void 0;o instanceof Date?(e=o.getFullYear(),t=o.getMonth()):"number"==typeof o&&(e=o,t=r-1);var f=[31,28,31,30,31,30,31,31,30,31,30,31];return 1==t&&(0,n.default)(e)?f[t]+1:f[t]},o.default}()}));