!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("dataURLToBuffer",[],t):"object"==typeof exports?exports.dataURLToBuffer=t():e.dataURLToBuffer=t()}(self,(function(){return function(){"use strict";var e={default:function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var f=atob(e),o=f.length,r=new ArrayBuffer(o),a=new Uint8Array(r),n=0;n<o;n++)a[n]=f.charCodeAt(n);return r}};return e.default}()}));