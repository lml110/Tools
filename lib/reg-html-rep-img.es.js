!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("regHtmlRepImg",[],t):"object"==typeof exports?exports.regHtmlRepImg=t():e.regHtmlRepImg=t()}(self,(function(){return function(){"use strict";var e={default:function(e,t){var r=new RegExp(/(\<img )([^>]*)(src=")([^"]*)([^>]*\>)/,"g");return e.replace(r,(function(e,r,n,o,f,u,p,c){var i=r+n+o;return(i+=t(f,e)||f)+u}))}};return e.default}()}));