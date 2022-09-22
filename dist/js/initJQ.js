/*! For license information please see initJQ.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("initJQ",[],e):"object"==typeof exports?exports.initJQ=e():t.initJQ=e()}(self,(function(){return function(){"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}return t.default=function(){if(!window.$)return!1;var t=function(t,e){var n=e.sort().join("&");return md5(t+"?"+n+"&key=xingzhuang-journey-app").toUpperCase()};$.extend({cookie:cookie,_getParams:_getParams,_init:function(){var t=this.ljApp_userId(),e=document.domain;(8767581==t||~e.indexOf("test"))&&loadScript("https://resj.outdoorclub.com.cn/jss/shopMall/vconsole.min.js").then((function(t){new VConsole}))},ljApp_userId:function(){var t=cookie("auth_userId")||"";if(!t&&isAndorIosNoWe()){var e=window.navigator.userAgent,n=e.indexOf("sign"),r=[];r=e.substring(n).split(";")[0].split(":");for(var o=0;o<r.length;o++){var i;if("userid"==(i=r[o].split("="))[0]){t=i[1];break}}}return t},_error:function(t,e){alert(t)},_ajax:function(n,r,o,i){var s=this,u=$.Deferred();n=n||"POST",i.isSign&&(o=function(n,r){var o=(new Date).getTime();if("string"==typeof r){var i=""==r?"appId=xingzhuang&timestamp="+o:r+"&appId=xingzhuang&timestamp="+o;return i+"&sign="+t(n,i.split("&"))}if("object"==e(r)){var s=[],u=$.extend(r,{timestamp:o,appId:"xingzhuang"});for(var a in u)s.push(a+"="+u[a]);return u.sign=t(n,s),u}}(r,o));var a={url:r,type:n,timeout:3e4,data:o,dataType:"json",success:function(t){if(2e3==t.resultCode)u.resolve(t.data);else{console.error(r,t);var e=t.resultMsg||"请求数据发生错误";c.abort(),u.reject(t,e),i.iserr&&s._error(e,!0)}},error:function(t,e){console.error(e,r,t);var n;n="timeout"==e?"服务器超时，请重试":_getHttpCodeMsg(t.status),t.abort(),u.reject(t,n),i.iserr&&s._error(n)},complete:function(){}};i.timeout&&(a.timeout=i.timeout),2==i.type&&(a=$.extend(a,{contentType:"application/json",data:JSON.stringify(o)})),3==i.type&&(a=$.extend(a,{cache:!1,contentType:!1,processData:!1}));var c=$.ajax(a);return u.promise()},_get:function(t,e,n){return this._ajax("GET",t,e,n||{})},_post:function(t,e,n){return this._ajax("POST",t,e,n||{})},_leftTime:function(){var t={time:1e3,hasText:!0,_clear:function(){clearTimeout(this.timebox),this.isEnd=!0},_start:function(e,n){this.timebox=null,this.isEnd=!1,n&&n(t._res(e)),e-=t.time,this._run(e,n)},_res:function(e){var n={},r=parseInt(e/1e3,10),o=r%86400;for(var i in n.days=Math.floor(r/86400),n.hours=Math.floor(o/3600),o%=3600,n.minutes=Math.floor(o/60),o%=60,n.seconds=Math.floor(o),n)n[i]=formatNumber(n[i]);return n.msec=Math.floor(e%1e3),n.msec<10?n.msec="00"+n.msec:n.msec<100?n.msec="0"+n.msec:n.msec=n.msec.toString(),t.hasText&&(n.text1=n.hours+":"+n.minutes+":"+n.seconds+"."+n.msec.substring(0,1),n.text=n.days+"天 "+n.hours+"小时 "+n.minutes+" 分钟"+n.seconds+" 秒"),n},_run:function(e,n){if(this.isEnd)return!1;this.timebox=setTimeout((function(){if(e>0){var r=t._res(e);return n&&n(r),e-=t.time,t._run(e,n)}return n&&n(),t._clear()}),this.time)}};return t},_smsCountDown:function(){var t=this,e={_txt:" s",timebox:null,_clear:function(){clearTimeout(this.timebox),this.isEnd=!0},_start:function(t,n){this.timebox=null,this.isEnd=!1,t=t||60,n&&n(t+e._txt),this._run(t,n)},_run:function(n,r){if(t.isEnd)return!1;e.timebox=setTimeout((function(){return--n>0?(r&&r(n+e._txt),e._run(n,r)):(r&&r(n),e._clear())}),1e3)}};return e},lazyload:function(){var t=this;function e(){var e=0,n=$(window).height();t.each((function(){var t=this.getBoundingClientRect();if(t.bottom<=0)return!0;if(t.top>=n)return e++<2;var r=this.dataset.lazySrc;r&&("IMG"===this.nodeName?this.src=r:this.style.backgroundImage="url("+r+")",this.removeAttribute("data-lazy-src"))}))}$(window).on("scroll resize",e),e()}})},t.default}()}));