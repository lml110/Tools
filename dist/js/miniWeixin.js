/*! For license information please see miniWeixin.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("miniWeixin",[],t):"object"==typeof exports?exports.miniWeixin=t():e.miniWeixin=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};e.d(t,{default:function(){return z}});var n={};e.r(n),e.d(n,{wxAuthorize:function(){return U},wxOpenSetting:function(){return q},wxTips:function(){return k}});function r(e){const t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[t.call(e)]||t.call(e)}var o=function(e){let t=[];return function e(n){let o=r(n);if(t.includes(n))return;t.push(n);let i="array"===o?[]:"object"===o?{}:n;if("array"===o)for(let t=0;t<n.length;t++)i.push(e(n[t]));else if("object"===o)for(let t in n)n.hasOwnProperty(t)&&(i[t]=e(n[t]));return i}(e)},i=function(e){return"object"===r(e)};const u="object"==typeof e.g&&null!==e.g&&e.g.Object===Object&&e.g,c="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,a="object"==typeof self&&null!==self&&self.Object===Object&&self;var l=c||u||a||Function("return this")(),s=function(e,t,n){let r,o,u,c,a,s,f=0,g=!1,p=!1,h=!0;const d=!t&&0!==t&&"function"==typeof l.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){const n=r,i=o;return r=o=void 0,f=t,c=e.apply(i,n),c}function m(e,t){return d?(l.cancelAnimationFrame(a),l.requestAnimationFrame(e)):setTimeout(e,t)}function b(e){const n=e-s;return void 0===s||n>=t||n<0||p&&e-f>=u}function w(){const e=Date.now();if(b(e))return j(e);a=m(w,function(e){const n=e-f,r=t-(e-s);return p?Math.min(r,u-n):r}(e))}function j(e){return a=void 0,h&&r?y(e):(r=o=void 0,c)}function S(...e){const n=Date.now(),i=b(n);if(r=e,o=this,s=n,i){if(void 0===a)return function(e){return f=e,a=m(w,t),g?y(e):c}(s);if(p)return a=m(w,t),y(s)}return void 0===a&&(a=m(w,t)),c}return t=+t||0,i(n)&&(g=!!n.leading,p="maxWait"in n,u=p?Math.max(+n.maxWait||0,t):u,h="trailing"in n?!!n.trailing:h),S.cancel=function(){void 0!==a&&function(e){if(d)return l.cancelAnimationFrame(e);clearTimeout(e)}(a),f=0,r=s=o=a=void 0},S.flush=function(){return void 0===a?c:j(Date.now())},S.pending=function(){return void 0!==a},S};const f=function(e){return e&&"object"==typeof e&&e.get?e:{get:()=>e}};var g=function(e){return"number"===r(e)?e:+e},p=function(e=9,t=0){return Math.floor(Math.random()*(e-t+1)+t)},h=function(e,t=2){return Number.prototype.toFixed.call(g(e),t)},d=function(e,t,n){let o=e;return"function"===r(t)?o=e.filter(t):"string"===r(t)&&(o=e.filter((e=>e[t]))),n&&(o=o.map((e=>e[n]))),o};function y(e,t,n,o={}){const{childKey:i="children",sucessFn:u=function(e){this.push(e)}}=o;let c=[];return"array"===r(e)&&(c=e.reduce((function(e,r,o,c){if(t(r))u.call(e,r);else{let e=d(c,((e,t)=>n(e,r)));e&&1==e.length?e[0][i]?u.call(e[0][i],r):e[0][i]=[r]:console.log("查询错误",r,e)}return e}),[])),c}let m,b,w;const j=function(e,t){let n=[];for(let r=0;r<e.length;r++){let o=e[r],i=m(o,t);if(i&&n.push(i),b){let e=b(o,t);if(e&&o[e]){let t=j(o[e],o);w&&(n=w(n,t)||n)}}}return n};let S,x;const O=function(e,t){let n;for(let r=0;r<e.length;r++){let o=e[r];if(S(o,t))return o;if(x){let e=x(o);e&&(n=O(e,o))}if(n)return n}return n};var v=function(e,t=2){if(!t||t<0)return str;let n="";const r=e<0,o=String(Math.abs(e));return o.length<t&&(n=new Array(t-o.length+1).join("0")),(r?"-":"")+n+o},P=function(e){return void 0===e},M=l.location||{},T=function(e,t,n){let r=-1,o=e.length;for(;++r<o;)t.call(n,e[r],r,"array")},D=function(e,t,n){for(let r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,"object")},$=function(e,t,n){if(t)return"array"===r(e)?T(e,t,n):"object"===r(e)?D(e,t,n):void 0};const _=function(e){if(1==e.length)return[e];let t=[];for(let n=0;n<e.length;n++){let r=e[n],o=e.slice(0);o.splice(n,1);let i=_(o);for(let e=0;e<i.length;e++)i[e].unshift(r);t=t.concat(i)}return t},E=function(e,t,n=[],r=[]){if(1===t)return n.push(...e.map((e=>[...r,e]))),n;for(let o=0;o<e.length-t+1;o++){let i=[...r,e[o]];E(e.slice(o+1),t-1,n,i)}return n};var A={_deepCopy:o,_cloneObj:function(e){let t=Array.isArray(e)?[]:{};if(JSON)try{t=JSON.parse(JSON.stringify(e))}catch(n){console.log("stringify",n),t=o(e)}else t=o(e);return t},getFormData:(e={},t={})=>{let n=new FormData;for(let t in e)e.hasOwnProperty(t)&&n.append(t,e[t]);for(let e in t)if(t.hasOwnProperty(e)&&t[e]&&t[e].length){let r=t[e];for(let t=0,o=r.length;t<o;t++)n.append(e,r[t])}return n},typeOf:r,debounce:s,throttle:function(e,t,n){let r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return i(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),s(e,t,{leading:r,trailing:o,maxWait:t})},definePros:function(e,t,n){return n?Object.defineProperty(e,n,f(t)):t&&"object"==typeof t?Object.defineProperties(e,function(e){let t={};for(let n in e)t[n]=f(e[n]);return t}(t)):e},_keyid:function(){return Number(Math.random().toString().substr(3,8)+Date.now()).toString(36)},_seedId:function(e){let t="0";if(e)for(let n=0;n<e;n++)t+=p();return g(t)},_toNumber:g,_toNumFixed:function(e,t){return g(h(e,t))},formatJsonStr:function(e,t){return e?t?e.split(t):"string"===typeOf(e)?function(e){try{return JSON.parse(e)}catch(t){return e}}(e):"array"===typeOf(e)&&e:[]},getFileName:function(e){return e&&e.replace(/(.*\/)*([^.]+).*/gi,"$2")||""},getFileExtName:function(e){return e.replace(/.+\./,"").toLowerCase()},babelToFileName:function(e,t){return t?e.replace(/[A-Z]/g,(function(e,t){return t?"-"+e.toLowerCase():e.toLowerCase()})):e.replace(/\-\b(\w)|\-\s(\w)/g,(function(e,t){return t.toUpperCase()}))},_float:function(e,t){let n=Math.pow(10,t||2);return Math.round(e*n)/n},numberPad:v,numberComma:function(e,t=3){return(e=String(e).split("."))[0]=e[0].replace(new RegExp("(\\d)(?=(\\d{"+t+"})+$)","ig"),"$1,"),e.join(".")},numberRandom:p,afreshSetTree:y,arrayToTree:function(e,t,n){if(t=Object.assign({parentProperty:"parentId",childrenProperty:"children",customID:"id",rootID:0},t),!Array.isArray(e))throw new TypeError("Expected an array but got an invalid argument");return y(e,(e=>e[t.parentProperty]==t.rootID),((e,n)=>e[t.customID]==n[t.parentProperty]),{sucessFn:n,childKey:t.childrenProperty})},filterList:function(e,t,n,o){if("array"!==r(e)||"function"!==r(t))return!1;if(m=t,n){let e=r(n);b="function"===e?n:"string"===e&&(e=>n),w=o}return j(e)},findTarget:function(e,t,n){if("array"!==r(e)||"function"!==r(t))return!1;if(S=t,n){let e=r(n);x="function"===e?n:"string"===e&&(e=>e[n])}return O(e)},isChinese:function(e){return/^[\u4e00-\u9fa5]{0,}$/.test(e)},isEmptyObject:function(e){for(let t in e)return!1;return!0},isUndefined:P,isObject:i,isNulls:function(e){return!e||0==e},_noValue:function(e){return!e&&0!==e},checkEmail:function(e){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(e)},checkPhone:function(e){return!!/^1\d{10}$/.test(e)},_formatDate:function(e,t="yyyy-MM-DD hh:mm:ss"){"date"!==r(e)&&(e=e?new Date(e):new Date);let n={"M+":e.getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in n)n.hasOwnProperty(e)&&new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[e]:("00"+n[e]).substr((""+n[e]).length)));return t},_getAllDate:function(e,t=["SUN","MON","TUE","WED","THU","FRI","SAT"]){"date"!==r(e)&&(e=e?new Date(e):new Date);let n={year:e.getFullYear(),month:e.getMonth()+1,day:e.getDate(),hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds()};for(let e in n)n.hasOwnProperty(e)&&(n[e]=v(n[e]));return n.week_key=e.getDay(),n.week=t[n.week_key],n},_getAllParams:e=>{e=e||M.href;let t={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"params",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=t.parser[t.strictMode?"strict":"loose"].exec(e),r={},o=14;for(;o--;)r[t.key[o]]=n[o]||"";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,(function(e,n,o){n&&(r[t.q.name][n]=o)})),r},_getParams:function(e,t){e||(e=M.href);let n={};if(!e)return n;if(t)return function(e,t){e||(e=M.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}(e,t);let r=/(\?)(?!.*\1)+[^#]*/.exec(e);return r=r?r[0]:"",r.replace(/([^?&=]+)=([^?&=]*)/g,(function(e,t,r){let o=decodeURIComponent(t),i=decodeURIComponent(r);return i=String(i),n[o]=i,e})),n},_paramsToString:function(e,t,n=[void 0,null]){let o=[];return $(e,(function(e,t){if(n&&n.includes(e))return!1;let i="string"===r(e)?e:JSON.stringify(e);o.push(t+"="+i)})),"string"===r(t)?o.length?t+o.join("&"):"":o},getNameOrKey:d,mergeJson:function(e,...t){let n=e?new Map:new Set;return t&&t.length>1&&t.map((function(t){"array"==r(t)&&t.reduce((function(t,n){return e?n&&n[e]&&(t.has(n[e])?console.log("重名元素",n):t.set(n[e],n)):t.has(n)?console.log("重名元素",n):t.add(n),t}),n)})),e?Array.from(n.values()):Array.from(n)},isArrRepeat:function(e,t){if(1==t){let t={};for(let n in e){if(t[e[n]])return!0;t[e[n]]=!0}return!1}return new Set(e).size!=e.length},getPermutation:_,getCombine:E,_compareVersion:function(e,t){e=e.split("."),t=t.split(".");let n=Math.max(e.length,t.length);for(;e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(let r=0;r<n;r++){let n=+e[r],o=+t[r];if(n>o)return 1;if(n<o)return-1}return 0},Cutsubstr:function(e,t=12,n=!0){if(!e||!t)return"";let r="";for(let o=0;o<e.length&&t>0;o++)r+=e.substr(o,1),t-=n&&e.charCodeAt(o)>127?2:1;return r.length<e.length&&(r+="..."),r},_for:$,_forObject:D,_forEach:T,_filter:function(e,t,n){return t?"object"===typeOf(e)?function(e,t,n){let r={},o=typeOf(t);for(let i in e)e.hasOwnProperty(i)&&("function"===o&&t.call(n,e[i],i)||"array"===o&&t.includes(i))&&(r[i]=e[i]);return r}(e,t,n):"array"===typeOf(e)?Array.prototype.filter.call(e,t,n):void 0:e},_toFixed:h,_trim:(e,t)=>{e||(e="");let n=e.replace(/(^\s+)|(\s+$)/g,"");return t&&(n=n.replace(/\s/g,"")),n}};const F={raw:!0},C=function(e){return F.raw&&e?encodeURIComponent(e):e},N={get:e=>wx.getStorageSync(C(e)),set(e,t){if(!e)return this.clear();noValue(t)?wx.removeStorageSync(C(e)):wx.setStorageSync(C(e),t)},remove(e){wx.removeStorageSync(C(e))},clear(e){e?this.remove(e):wx.clearStorageSync()},keys(){const e=this.info();return"array"===r(e.keys)&&e.keys.map((e=>{return t=e,F.raw&&t?decodeURIComponent(t):t;var t}))||[]},info:()=>wx.getStorageInfoSync()||{}};var I={noValue:noValue,setStorage:function(e){F=Object.assign(F,e)},Locals:N,locals:function(e,t){return e?P(t)?N.get(e):void N.set(e,t):N.clear()}};const R={userInfo:"用户信息",userLocation:"地理位置",record:"录音功能",werun:"微信运动步数",writePhotosAlbum:"保存到相册",camera:"摄像头",userLocationBackground:"后台定位"},k=function(e,t,n={}){return new Promise(((r,o)=>e?wx.showModal({title:t||"",content:e,confirmColor:"#508CEE",...n,success:e=>e.confirm?r(e):e.cancel?o(e):void 0,fail:e=>o(e)}):o()))},q=function(e){return new Promise(((t,n)=>{const r="scope."+e,o=function(){return(e=wx.openSetting,i={},new Promise((function(t,n){return"object"===typeOf(i)?(i.success=function(e){t(e)},i.fail=function(e){n(e)},e(i)):e(t,n)}))).then((e=>{e.authSetting[r]?t(e):k("取消授权，可能会使部分服务无法使用，或页面信息显示不完整。",null,{confirmText:"重新授权",cancelText:"我知道了"}).then(o).catch(n)})).catch((e=>{console.log("wx.openSetting-err",e),n(e)}));var e,i};if(e)return k("请授权"+R[e],null,{showCancel:!1}).then(o);o()}))},U=function(e){return new Promise(((t,n)=>{const r="scope."+e;return wx.getSetting().then((o=>{o.authSetting[r]?t(o):wx.authorize({scope:r}).then(t).catch((r=>(console.log("wx.authorize",r),q(e).then(t).catch(n))))})).catch((e=>{console.log("wx.getSetting-err",e),n(e)}))}))};var z=Object.assign(I,n,A,{API:class{constructor(e={}){this.options=e,this.$request=this.$request.bind(this),this.$get=this.$get.bind(this),this.$post=this.$post.bind(this)}getSuccessData(e,t,n,r){return r&&r(e,t,n)||t(e)}$request(e,t={},n=!0,r="GET",o={}){let i=this.options;return new Promise(((u,c)=>(t=i.getRequeData(t,n,o),wx.request({url:i.getApiUrl(e)||e,data:t,method:r,header:o.header||{},success:e=>i.getSuccessData(e,u,c),fail(e){c(e)}}))))}$get(e,t,n,r){return this.$request(e,t,n,"GET",r)}$post(e,t,n,r){return this.$request(e,t,n,"POST",r)}}});return t.default}()}));