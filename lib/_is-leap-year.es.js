!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("_isLeapYear",[],t):"object"==typeof exports?exports._isLeapYear=t():e._isLeapYear=t()}(self,(function(){return function(){"use strict";var e={default:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e instanceof Date&&(e=e.getFullYear()),e%4==0&&e%100!=0||e%400==0}};return e.default}()}));