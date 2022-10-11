/*! For license information please see itouch.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("itouch",[],e):"object"==typeof exports?exports.itouch=e():t.itouch=e()}(self,(function(){return function(){"use strict";var t={};function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s="ontouchstart"in window,o=s?"touchstart":"mousedown",n=s?"touchmove":"mousemove",r=s?"touchend":"mouseup",a=s?"touchcancel":"mouseleave",h=function(){function t(i,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.isWebkit3dTransform="WebKitCSSMatrix"in window&&"m11"in new WebKitCSSMatrix,this.node="object"==e(i)?i:document.querySelector(i),this.options=Object.assign({scalable:!1,rotatable:!1,transform:"transform",isSpinner:!0,spinner:"",orientFn:null,startFn:null,moveFn:null,endFn:null},s),this.spinner=this.options.spinner?document.querySelector(this.options.spinner):this.node,this.orient={x:0,y:0},this.start_orient={},this.touchObj={},this.init()}var h,u;return h=t,u=[{key:"init",value:function(){this.rotation=0,this.scale=1,this.gesture=!1,this.curX=0,this.curY=0,this.node.addEventListener(o,this.touchstart.bind(this),!1),this.node.addEventListener(n,this.touchmove.bind(this),!1),this.node.addEventListener(r,this.touchend.bind(this),!1),this.node.addEventListener(a,this.touchcancel.bind(this),!1)}},{key:"_recovery",value:function(t){var e=this.getPageSize(t),i=this.getMatrix(),s=0,o=0;this.start_orient=e,i&&(s=i[0],o=i[1]),this.start0X=e[0].x-s,this.start0Y=e[0].y-o,e[1]?(this.origin=e,this.start1X=e[1].x-s,this.start1Y=e[1].y-o,this.gesture=!0):this.gesture=!1}},{key:"getTouchObj",value:function(t){var e={scale:this.scale,rotation:this.rotation,curX:this.curX,curY:this.curY};return t&&(e.size=this.getPageSize(t)),e}},{key:"touchstart",value:function(t){t.preventDefault(),this._recovery(t),this.options.startFn&&this.options.startFn(this.getTouchObj(t))}},{key:"touchmove",value:function(t){t.preventDefault();var e="",i=this.options.transform,s=this.getPageSize(t),o={};if(this.gesture){var n=s[0].x-this.start0X,r=s[0].y-this.start0Y,a=s[1].x-this.start1X,h=s[1].y-this.start1Y;this.curX=(n+a)/2,this.curY=(r+h)/2}else this.curX=s[0].x-this.start0X,this.curY=s[0].y-this.start0Y;if(o={curX:this.curX,curY:this.curY,size:s},e+=this._translate(this.curX,this.curY),this.gesture){if(this.options.scalable){var u=this._scale(s)/this._scale(this.origin),c=t.scale||u;o.scale=this.scale*c,e+="scale("+o.scale+")"}if(this.options.rotatable){var l=Math.round(180*(this._rotate(this.origin)-this._rotate(s))/Math.PI),p=t.rotation||l;o.rotation=this.rotation+p,e+="rotate("+o.rotation%360+"deg)",e+="translateZ(0)"}}else this.options.scalable&&(o.scale=this.scale,e+="scale("+o.scale+")"),this.options.rotatable&&(o.rotation=this.rotation,e+="rotate("+o.rotation%360+"deg)",e+="translateZ(0)");(this.options.scalable||this.options.rotatable)&&(t.scale||(this.touchObj.scale=o.scale),t.rotation||(this.touchObj.rotation=o.rotation)),this.options.moveFn&&this.options.moveFn(o),this.options.isSpinner&&(this.spinner.style[i]=e)}},{key:"_endTouch",value:function(t){if(t.preventDefault(),this.gesture&&(this.options.scalable&&(t.scale?this.scale*=t.scale:this.scale=this.touchObj.scale||0),this.options.rotatable&&(t.rotation?this.rotation+=t.rotation:this.rotation=this.touchObj.rotation||0),this.gesture=!1),t.touches&&t.touches.length)this.touchstart(t);else{if(this.options.orientFn){var e=this.getTouches(t).changedTouches,i=e[0].pageX,s=e[0].pageY,o=this.start_orient[0].x,n=this.start_orient[0].y;return e[1]&&this.start_orient[1]&&(i=(e[0].pageX+e[0].pageX)/2,s=(e[0].pageY+e[0].pageY)/2,o=(this.start_orient[0].x+this.start_orient[0].x)/2,n=(this.start_orient[0].y+this.start_orient[0].y)/2),this.orient.x=i>o?2:i<o?1:0,this.orient.y=s>n?2:s<n?1:0,this.options.orientFn&&this.options.orientFn(this.orient,this.getTouchObj(t))}this.options.endFn&&this.options.endFn(this.getTouchObj(t))}}},{key:"touchend",value:function(t){this._endTouch(t)}},{key:"touchcancel",value:function(t){this._endTouch(t)}},{key:"_translate",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return this.isWebkit3dTransform?i+="translate3d("+t+"px,"+e+"px, 0)":i+="translate("+t+"px,"+e+"px)",i}},{key:"_rotate",value:function(t){return Math.atan2(t[1].x-t[0].x,t[1].y-t[0].y)}},{key:"_scale",value:function(t){return Math.sqrt(Math.pow(t[1].x-t[0].x,2)+Math.pow(t[1].y-t[0].y,2))}},{key:"getMatrix",value:function(t){var e=this.spinner.style[this.options.transform];if(!e)return 0;var i=e.split("(")[1].split(")")[0].split(",").map((function(t,e){return Number(t.replace("px",""))}));return i[t]||i}},{key:"getPageSize",value:function(t){var e,i,o=[];if(s){var n=this.getTouches(t);if(!n.targetTouches||!n.targetTouches.length)return!1;if(e=n.targetTouches[0].pageX,i=n.targetTouches[0].pageY,t.touches&&t.touches[1]){var r=n.targetTouches[1];o[1]={x:r.pageX,y:r.pageY}}}else e=t.pageX,i=t.pageY;return o[0]={x:e,y:i},o}},{key:"getTouches",value:function(t){return{changedTouches:this.getToucheOption(t.changedTouches),touches:this.getToucheOption(t.touches),targetTouches:this.getToucheOption(t.targetTouches)}}},{key:"getToucheOption",value:function(t){for(var e=[],i=0;i<t.length;i++)e.push({pageX:t[i].pageX,pageY:t[i].pageY,clientX:t[i].clientX,clientY:t[i].clientY,screenX:t[i].screenX,screenY:t[i].screenY});return e}},{key:"removeEvent",value:function(){this.node.removeEventListener(o,this.touchstart.bind(this),!1),this.node.removeEventListener(n,this.touchmove.bind(this),!1),this.node.removeEventListener(r,this.touchend.bind(this),!1),this.node.removeEventListener(a,this.touchcancel.bind(this),!1)}}],u&&i(h.prototype,u),Object.defineProperty(h,"prototype",{writable:!1}),t}();return t.default=h,t.default}()}));