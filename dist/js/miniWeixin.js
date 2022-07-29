/*! For license information please see miniWeixin.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("miniWeixin",[],e):"object"==typeof exports?exports.miniWeixin=e():t.miniWeixin=e()}(self,(function(){return function(){"use strict";var t={d:function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),t.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},t.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var e={};t.d(e,{default:function(){return $t}});var n={};t.r(n),t.d(n,{getAuthFailModal:function(){return St},getAuthInfoModal:function(){return wt},getEnvVersion:function(){return dt},setAuthFailModal:function(){return jt},setAuthInfoModal:function(){return bt},setInitConfig:function(){return mt},setRem:function(){return It}});var r=function(t,e){return e?t.replace(/(.*\/)*([^.])/gi,"$2").toLowerCase():t.replace(/.+\./,"").toLowerCase()};function o(t){const e=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[e.call(t)]||e.call(t).replaceAll(new RegExp(/\[|\]|object /g),"")}const i=[Date,RegExp,Set,WeakSet,Map,WeakMap,Error];var a=function(t){let e,n=!1,r=[];return function(){if(r.push(arguments),!n){for(n=!0;r.length;)e=t.apply(this,r.shift());return n=!1,e}}}((function t(e,n=new WeakSet){let r=null,a=o(e);if(i.includes(e&&e.constructor))r=new e.constructor(e);else if("array"===a){r=[];for(let o=0;o<e.length;o++)r[o]=t(e[o],n)}else if("object"===a){if(r={},n.has(e))return r;n.add(e);for(const o in e)Object.hasOwnProperty.call(e,o)&&(r[o]=t(e[o],n))}else r=e;return r}));const u="object"==typeof t.g&&null!==t.g&&t.g.Object===Object&&t.g,c="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,s="object"==typeof self&&null!==self&&self.Object===Object&&self;var l=c||u||s||Function("return this")(),f=function(t){try{return JSON.parse(t)}catch(e){return t}},h=function(t){return t&&l.JSON?JSON.stringify(t,function(){const t=new WeakSet;return(e,n)=>{if("object"==typeof n&&null!==n){if(t.has(n))return;t.add(n)}return n}}()):""},g=function(t){return"object"===o(t)},p=function(t,e,n){let r,o,i,a,u,c,s=0,f=!1,h=!1,p=!0;const d=!e&&0!==e&&"function"==typeof l.requestAnimationFrame;if("function"!=typeof t)throw new TypeError("Expected a function");function m(e){const n=r,i=o;return r=o=void 0,s=e,a=t.apply(i,n),a}function y(t,e){return d?(l.cancelAnimationFrame(u),l.requestAnimationFrame(t)):setTimeout(t,e)}function b(t){const n=t-c;return void 0===c||n>=e||n<0||h&&t-s>=i}function w(){const t=Date.now();if(b(t))return x(t);u=y(w,function(t){const n=t-s,r=e-(t-c);return h?Math.min(r,i-n):r}(t))}function x(t){return u=void 0,p&&r?m(t):(r=o=void 0,a)}function j(...t){const n=Date.now(),i=b(n);if(r=t,o=this,c=n,i){if(void 0===u)return function(t){return s=t,u=y(w,e),f?m(t):a}(c);if(h)return u=y(w,e),m(c)}return void 0===u&&(u=y(w,e)),a}return e=+e||0,g(n)&&(f=!!n.leading,h="maxWait"in n,i=h?Math.max(+n.maxWait||0,e):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==u&&function(t){if(d)return l.cancelAnimationFrame(t);clearTimeout(t)}(u),s=0,r=c=o=u=void 0},j.flush=function(){return void 0===u?a:x(Date.now())},j.pending=function(){return void 0!==u},j};const d=function(t){return t&&"object"==typeof t&&t.get?t:{get:()=>t}};var m=function(t){return"number"===o(t)?t:+t},y=function(t=9,e=0){return Math.floor(Math.random()*(t-e+1)+e)},b=function(t,e=2){return Number.prototype.toFixed.call(m(t),e)},w=function(t,e){return m(b(t,e))},x=function(t){return["array","object"].includes(o(t))?h(t):""+t},j=function(...t){console.log("[lml]",...t)},S=function(t){let e=o(t);return"date"===e?t:t?"string"===e&&t.includes("-")?new Date(t.replace(/-/g,"/")):new Date(t):new Date},I=function(t,e="yyyy-MM-DD hh:mm:ss"){let n={"M+":(t=S(t)).getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(let t in n)n.hasOwnProperty(t)&&new RegExp("("+t+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?n[t]:("00"+n[t]).substr((""+n[t]).length)));return e},v=function(t,e,n){let r=-1,o=t.length;for(;++r<o;)e.call(n,t[r],r,"array")},M=function(...t){let e=function(t){let e="";return v(t,(function(t){e+=" "+x(t)})),e}(t);return console.log(`%c[${I(new Date,"hh:mm:ss")}]:${e}`,"color:red")},P=function(t,e,n){let r=t;return"function"===o(e)?r=t.filter(e):"string"===o(e)&&(r=t.filter((t=>t[e]))),n&&(r=r.map((t=>t[n]))),r};function _(t,e,n,r={}){const{childKey:i="children",sucessFn:a=function(t){this.push(t)}}=r;let u=[];return"array"===o(t)&&(u=t.reduce((function(t,r,o,u){if(e(r))a.call(t,r);else{let t=P(u,((t,e)=>n(t,r)));t&&1==t.length?t[0][i]?a.call(t[0][i],r):t[0][i]=[r]:console.log("查询错误",r,t)}return t}),[])),u}let O,A,E;const T=function(t,e){let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=O(o,e);if(i&&n.push(i),A){let t=A(o,e);if(t&&o[t]){let e=T(o[t],o);E&&(n=E(n,e)||n)}}}return n};let L,D;const R=function(t,e){let n;for(let r=0;r<t.length;r++){let o=t[r];if(L(o,e))return o;if(D){let t=D(o);t&&(n=R(t,o))}if(n)return n}return n};class $ extends Error{constructor(t){super(t),this.name="ObjectPrototypeMutationError"}}function k(t,e,n=(()=>{})){const r=e.split("."),o=r.length;for(let e=0;e<o;e++){const o=r[e];if(!t)return;if("+"===o){if(Array.isArray(t))return t.map(((o,i)=>{const a=r.slice(e+1);return a.length>0?k(o,a.join("."),n):n(t,i,r,e)}));t=n(t,o,r,e)}else t=n(t,o,r,e)}return t}function F(t,e){return t.length===e+1}var C={set:function(t,e,n){if("object"!=typeof t||null===t||!e)return t;if("number"==typeof e)return t[e]=n,t[e];try{return k(t,e,(function(t,e,r,o){if(t===Reflect.getPrototypeOf({}))throw new $("Attempting to mutate Object.prototype");if(!t[e]){const n=Number.isInteger(Number(r[o+1])),i="+"===r[o+1];t[e]=n||i?[]:{}}return F(r,o)&&(t[e]=n),t[e]}))}catch(e){if(e instanceof $)throw e;return t}},get:function(t,e){return e?k(t,e,(function(t,e){return t&&t[e]})):t},has:function(t,e,n={}){if("object"!=typeof t||null===t||!e)return!1;if("number"==typeof e)return e in t;try{let r=!1;return k(t,e,(function(t,e,o,i){if(!F(o,i))return t&&t[e];r=n.own?t.hasOwnProperty(e):e in t})),r}catch(t){return!1}},hasOwn:function(t,e,n){return this.has(t,e,n||{own:!0})},isIn:function(t,e,n,r={}){if("object"!=typeof t||null===t||!e)return!1;try{let o=!1,i=!1;return k(t,e,(function(t,e,r,a){return o=o||t===n||!!t&&t[e]===n,i=F(r,a)&&"object"==typeof t&&e in t,t&&t[e]})),r.validPath?o&&i:o}catch(t){return!1}},ObjectPrototypeMutationError:$},N=function(t){let e=o(t);return"string"===e?t:["array","number"].includes(e)?""+t:""},q=function(t,e){let n=Math.pow(10,e||2);return Math.round(t*n)/n},U=function(t,e=2){if(!e||e<0)return str;let n="";const r=t<0,o=String(Math.abs(t));return o.length<e&&(n=new Array(e-o.length+1).join("0")),(r?"-":"")+n+o},z=function(t){return void 0===t},B=function(t){return!t&&0!==t},V=function(t,e){return C.get(t,e)},W=function(t,e=["SUN","MON","TUE","WED","THU","FRI","SAT"]){let n={year:(t=S(t)).getFullYear(),month:t.getMonth()+1,day:t.getDate(),hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()};for(let t in n)n.hasOwnProperty(t)&&(n[t]=U(n[t]));return n.week_key=t.getDay(),n.week=e[n.week_key],n},J=l.location||{},K=function(t,e,n){for(let r in t)t.hasOwnProperty(r)&&e.call(n,t[r],r,"object")},G=function(t,e,n){if(e)return"array"===o(t)?v(t,e,n):"object"===o(t)?K(t,e,n):void 0},H=function(t,e,n=[void 0,null]){let r=[];return G(t,(function(t,e){if(n&&n.includes(t))return!1;let i="string"===o(t)?t:JSON.stringify(t);r.push(e+"="+i)})),"string"===o(e)?r.length?e+r.join("&"):"":r},Y=function(t){return t?t.replace(/([^\u0000-\u00FF])/g,(t=>encodeURIComponent(t))):t},Z=function(t){return t?decodeURIComponent(t):t};const Q=function(t){if(1==t.length)return[t];let e=[];for(let n=0;n<t.length;n++){let r=t[n],o=t.slice(0);o.splice(n,1);let i=Q(o);for(let t=0;t<i.length;t++)i[t].unshift(r);e=e.concat(i)}return e};const X=function(t,e,n=[],r=[]){if(1===e)return n.push(...t.map((t=>[...r,t]))),n;for(let o=0;o<t.length-e+1;o++){let i=[...r,t[o]];X(t.slice(o+1),e-1,n,i)}return n};const tt=["B","KB","MB","GB","TB"];var et={_deepCopy:a,_cloneObj:function(t){return f(h(t))},getFormData:(t={},e={})=>{let n=new FormData;for(let e in t)t.hasOwnProperty(e)&&n.append(e,t[e]);for(let t in e)if(e.hasOwnProperty(t)&&e[t]&&e[t].length){let r=e[t];for(let e=0,o=r.length;e<o;e++)n.append(t,r[e])}return n},typeOf:o,debounce:p,throttle:function(t,e,n){let r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return g(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(t,e,{leading:r,trailing:o,maxWait:e})},definePros:function(t,e,n){return n?Object.defineProperty(t,n,d(e)):e&&"object"==typeof e?Object.defineProperties(t,function(t){let e={};for(let n in t)e[n]=d(t[n]);return e}(e)):t},_keyid:function(t=""){return t+Number(Math.random().toString().substr(3,8)+Date.now()).toString(36)},_seedId:function(t){let e="0";if(t)for(let n=0;n<t;n++)e+=y();return m(e)},_toNumber:m,_toNumFixed:w,_toString:x,_toJson:f,formatJsonStr:function(t,e){return t?e?t.split(e):"string"===typeOf(t)?f(t):"array"===typeOf(t)&&t:[]},trace:j,warning:M,getChinese:function(t){return(t=N(t)).match(/[\u4e00-\u9fa5]/g).join("")},babelToFileName:function(t,e){return e?t.replace(/[A-Z]/g,(function(t,e){return e?"-"+t.toLowerCase():t.toLowerCase()})):t.replace(/\-\b(\w)|\-\s(\w)/g,(function(t,e){return e.toUpperCase()}))},getFileName:function(t){return t&&t.replace(/(.*\/)*([^.]+).*/gi,"$2")||""},getFileExtName:r,_float:q,numberPad:U,numberComma:function(t,e=3){return(t=String(t).split("."))[0]=t[0].replace(new RegExp("(\\d)(?=(\\d{"+e+"})+$)","ig"),"$1,"),t.join(".")},numberRandom:y,afreshSetTree:_,arrayToTree:function(t,e,n){if(e=Object.assign({parentProperty:"parentId",childrenProperty:"children",customID:"id",rootID:0},e),!Array.isArray(t))throw new TypeError("Expected an array but got an invalid argument");return _(t,(t=>t[e.parentProperty]==e.rootID),((t,n)=>t[e.customID]==n[e.parentProperty]),{sucessFn:n,childKey:e.childrenProperty})},filterList:function(t,e,n,r){if("array"!==o(t)||"function"!==o(e))return!1;if(O=e,n){let t=o(n);A="function"===t?n:"string"===t&&(t=>n),E=r}return T(t)},findTarget:function(t,e,n){if("array"!==o(t)||"function"!==o(e))return!1;if(L=e,n){let t=o(n);D="function"===t?n:"string"===t&&(t=>t[n])}return R(t)},nestedProperty:C,isChinese:function(t){return/^[\u4e00-\u9fa5]{0,}$/.test(t)},isEmptyObject:function(t){for(let e in t)return!1;return!0},isUndefined:z,isObject:g,isNulls:function(t){return!t||0==t},_noValue:B,checkEmail:function(t){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(t)},checkPhone:function(t){return!!/^1\d{10}$/.test(t)},hasObjKey:function(t,e,n=!0){return C.has(t,e,{own:n})},getObjVal:V,_formatDate:I,_getAllDate:W,getEndDateToMonth:function(t,e,n=0){if(!t)return!1;t=S(t);let r=W(t),o=W(t.setMonth(+r.month+e,0)),i=r.day>o.day?o.day:r.day;return+new Date(o.year,o.month-1,i,o.hour,o.minute,o.second)-1e3*n},formatDurationToFriendly:function(t){return t<60?t+"秒":t<3600?(t-t%60)/60+"分"+t%60+"秒":t<86400?(t-t%3600)/60/60+"小时"+Math.round(t%3600/60)+"分":(t/60/60/24).toFixed(1)+"天"},_getAllParams:t=>{t=t||J.href;let e={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"params",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=e.parser[e.strictMode?"strict":"loose"].exec(t),r={},o=14;for(;o--;)r[e.key[o]]=n[o]||"";return r[e.q.name]={},r[e.key[12]].replace(e.q.parser,(function(t,n,o){n&&(r[e.q.name][n]=o)})),r},_getParams:function(t,e){t||(t=J.href);let n={};if(e)return function(t,e){t||(t=J.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}(t,e);let r=/(\?)(?!.*\1)+[^#]*/.exec(t);return r=r?r[0]:"",r.replace(/([^?&=]+)=([^?&=]*)/g,(function(t,e,r){let o=decodeURIComponent(e),i=decodeURIComponent(r);return i=String(i),n[o]=i,t})),n},_paramsToString:H,_encode:Y,_decode:Z,getNameOrKey:P,mergeJson:function(t,...e){let n=t?new Map:new Set;return e&&e.length>1&&v(e,(function(e){"array"==o(e)&&e.reduce((function(e,n){return t?n&&n[t]&&(e.has(n[t])?console.log("重名元素",n):e.set(n[t],n)):e.has(n)?console.log("重名元素",n):e.add(n),e}),n)})),t?Array.from(n.values()):Array.from(n)},isArrRepeat:function(t,e){if(1==e){let e={};for(let n in t){if(e[t[n]])return!0;e[t[n]]=!0}return!1}return new Set(t).size!=t.length},getPermutation:Q,getCombine:X,getRandomArrayElements:function(t,e){let n,r,o=t.slice(0),i=t.length,a=i-e;for(;i-- >a;)r=Math.floor((i+1)*Math.random()),n=o[r],o[r]=o[i],o[i]=n;return o.slice(a)},getMaximin:function(t,e){return"min"===e?Math.min.apply(null,t):Math.max.apply(null,t)},_compareVersion:function(t,e){t=t.split("."),e=e.split(".");let n=Math.max(t.length,e.length);for(;t.length<n;)t.push("0");for(;e.length<n;)e.push("0");for(let r=0;r<n;r++){let n=+t[r],o=+e[r];if(n>o)return 1;if(n<o)return-1}return 0},_getStr:N,Cutsubstr:function(t,e=12,n=!0){if(!t||!e)return"";let r="";for(let o=0;o<t.length&&e>0;o++)r+=t.substr(o,1),e-=n&&t.charCodeAt(o)>127?2:1;return r.length<t.length&&(r+="..."),r},strlen:function(t){let e=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r>=1&&r<=126||65376<=r&&r<=65439?e++:e+=2}return e},strlenUnit:function(t){let e=0;for(;t>1024;)t/=1024,++e;return`${w(t)}${tt[e]}`},_for:G,_forObject:K,_forEach:v,_filter:function(t,e,n){return e?"object"===typeOf(t)?function(t,e,n){let r={},o=typeOf(e);for(let i in t)t.hasOwnProperty(i)&&("function"===o&&e.call(n,t[i],i)||"array"===o&&e.includes(i))&&(r[i]=t[i]);return r}(t,e,n):"array"===typeOf(t)?Array.prototype.filter.call(t,e,n):void 0:t},_toFixed:b,_trim:(t,e)=>(t=N(t),e?t.replace(/\s/g,""):t.replace(/(^\s+)|(\s+$)/g,"")),_timeout:class{constructor(t){this.app=t||{},this.times=null}start(t,e){if(!e)return!1;this.clear(),this.callback=t,this.times=l.setTimeout(this.callback,e)}clear(){this.times&&(l.clearTimeout(this.times),this.times=null)}},_interval:class{constructor(t){this.app=t||{},this.times=null}start(t,e){if(!e)return!1;this.clear(),this.callback=t,this.times=l.setInterval(this.callback,e)}clear(){this.times&&(l.clearInterval(this.times),this.times=null)}},_stringify:h};const nt={raw:!0},rt=function(t){return nt.raw?Y(t):t},ot={get:t=>wx.getStorageSync(rt(t)),set(t,e){if(!t)return this.clear();B(e)?wx.removeStorageSync(rt(t)):wx.setStorageSync(rt(t),e)},remove(t){wx.removeStorageSync(rt(t))},clear(t){t?this.remove(t):wx.clearStorageSync()},keys(){const t=this.info();return"array"===o(t.keys)&&t.keys.map((t=>{return e=t,nt.raw?Z(e):e;var e}))||[]},info:()=>wx.getStorageInfoSync()||{}};var it={noValue:B,setStorage:function(t){nt=Object.assign(nt,t)},Locals:ot,local:function(t,e){return t?z(e)?ot.get(t):void ot.set(t,e):ot.clear()}},at=function(t,e){return new Promise((function(n,r){return"object"===o(e)?(e.success=function(t){n(t)},e.fail=function(t){r(t)},t&&t(e)):t&&t(n,r)}))},ut=function(t,e={},n="GET",r={}){return at(wx.request,{url:t,data:e,method:n,...r})},ct=function(t="加载中",e=!1){return"string"===o(t)?(wx.showNavigationBarLoading(),wx.showLoading({title:t,mask:e})):(wx.hideNavigationBarLoading(),wx.hideLoading())};const st=wx.getRealtimeLogManager?wx.getRealtimeLogManager():null,lt={debug(){st&&st.debug.apply(st,arguments)},info(){st&&st.info.apply(st,arguments)},warn(){st&&st.warn.apply(st,arguments)},error(){st&&st.error.apply(st,arguments)},setMsg(t){st&&st.setFilterMsg&&"string"==typeof t&&st.setFilterMsg(t)},addMsg(t){st&&st.addFilterMsg&&"string"==typeof t&&st.addFilterMsg(t)}};var ft=lt,ht={appId:"",logId:"",envVersion:"",IS_RELEASE:!1,baseSize:37.5,domain:{},uploadImgUrl:"",keys:{},pages:{},imgs:{err:{banner:"https://media.winbaoxian.com/autoUpload/activity/imgError_09a1c604751934f.png"},share:{card:"https://media.winbaoxian.com/autoUpload/miniApp/19f06bc0-d821-4bc0-829d-88803586becf.png"},default:{no:"https://media.winbaoxian.com/autoUpload/common/fa683e55-7443-44ea-80f6-c30974915429.png",avatar:"https://media.winbaoxian.com/autoUpload/activity/Bitmap2x_254c9d847191a39.png"}},times:{refresh:700},projectInfo:{},pageId:""},gt=function(t,e,n={}){return new Promise(((r,o)=>t?wx.showModal({title:e||"",content:t,confirmColor:"#508CEE",...n,success:t=>t.confirm?r(t):t.cancel?o(t):void 0,fail:t=>o(t)}):o()))};const pt={userInfo:"用户信息",userLocation:"位置权限",record:"麦克风",werun:"微信运动步数",writePhotosAlbum:"相册权限",camera:"摄像头权限",userLocationBackground:"后台定位权限"},dt=function(t){return t||("object"===o(__wxConfig)?__wxConfig.envVersion:"release")},mt=function(){ht.envVersion=dt(),ht.IS_RELEASE="release"===ht.envVersion,function(){let t="https://third-api.wyins.net";ht.IS_RELEASE||(t="https://third-api.wyins.net.cn"),ht.domain.VUE_APP_UPLOAD_URL=t,ht.uploadImgUrl=t+"/oss/getAuthInfo"}()};let yt={beforeText:"请授权",showCancel:!1};const bt=function(t){"object"===o(t)&&(yt=t)},wt=function(t){if("function"===o(yt.callback))return yt.callback(t);let e=yt.contentText||`${yt.beforeText}${pt[t]}`;return gt(e,"",yt)};let xt={contentText:"取消授权，可能会使部分服务无法使用",confirmText:"重新授权",cancelText:"我知道了"};const jt=function(t){let e=o(t);"object"===e?xt=t:"boolean"===e&&(xt.callback=wt)},St=function(t){if("function"===o(xt.callback))return xt.callback(t);let e=xt.contentText||`${xt.beforeText}${pt[t]}`;return gt(e,"",xt)};function It(t,e=750){t>e&&(t=e);const n=t/e;document.documentElement.style.fontSize=q(ht.baseSize*Math.min(n,2))+"px"}var vt=function(t){return new Promise(((e,n)=>{const r="scope."+t,o=function(){return at(wx.openSetting,{}).then((i=>{t?i.authSetting[r]?e(i):St(t).then(o).catch(n):e(i)})).catch((t=>{M("wx.openSetting-err"),j(t),n(t)}))};if(t)return wt(t).then(o).catch(n);o()}))},Mt=function(t){return new Promise(((e,n)=>{const r="scope."+t,o=wx.authorize||wx.authorizeForMiniProgram;return at(o,{scope:r}).then(e).catch((r=>(M("wx.authorize-err == ",r),vt(t).then(e).catch(n))))}))},Pt=function(t="",e={}){return new Promise(((n,r)=>{const o=t?"scope."+t:"";return at(wx.getSetting,e).then((t=>o?t.authSetting&&t.authSetting[o]?n(t):r(t):n(t))).catch(r)}))};const _t={1:"redirectTo",2:"reLaunch",3:"switchTab"};const Ot="https:";var At=function(t){return"string"!==o(t)?Promise.reject(t):at(wx.getImageInfo,{src:t})};const Et=function(t,e){return Promise.all(t.map(At)).then((n=>(v(n,((e,n)=>e.path&&(t[n]=e.path))),e&&e(t))))};var Tt={_promise:at,_request:ut,wxOpenSetting:vt,wxGetSetting:Pt,wxAuthorize:function(t){return new Promise(((e,n)=>t?Pt(t).then(e).catch((r=>(M("wx.getSetting-err == ",r),Mt(t).then(e).catch(n)))):n()))},_authorize:Mt,wxTips:gt,wxLoading:ct,wxToast:function(t,e){return"string"===o(t)?wx.showToast({title:t,icon:"none",mask:!1,...e}):wx.hideToast()},wxBarLoading:function(t){wx.hideNavigationBarLoading(),t&&wx.showNavigationBarLoading()},wxNavito:function(t,e,n){return n&&this&&this.submit&&this.submit(n),t?e?wx[_t[e]]({url:t}):wx.navigateTo({url:t}):wx.navigateBack()},wxSetBarTitle:function(t){if(t=Z(t||""))return at(wx.setNavigationBarTitle,{title:t})},reportAnalytics:function(t="",e="",n="",r="",o="",i="",a="request_error"){return wx.reportAnalytics&&wx.reportAnalytics(a,{request_name:t,request_url:e,request_params:n,request_desc:r,request_message:o,request_other:i})},wxClipData:function(t){return at(wx.setClipboardData,{data:t})},wxSysInfo:function(){return wx.getSystemInfoSync()},uploadImage:function(t,e,n){return new Promise(((o,i)=>ut(ht.uploadImgUrl,{fileDir:t}).then((t=>{const a=V(t,"data.data"),u=[],c=e.length;if(!a.dir)return M("uploadImage未获取授权数据"),j("uploadImage== ",t),i(t);v(e,((t,e)=>{let s=a.dir;s+=n?a.fileName+".png":r(t,!0);const l={key:s,policy:a.policy,OSSAccessKeyId:a.accessid,signature:a.signature,success_action_status:200};at(wx.uploadFile,{url:Ot+a.host,formData:l,filePath:t,name:"file"}).then((t=>{if(u.push(Ot+a.cdnMediaHost+s),u.length>=c)return o(u)})).catch((t=>(i(t),!1)))}))})).catch(i)))},setRemoteImgInfo:function(t,e){const n=o(t);if("object"===n){let n=Object.keys(t),r=n.map((e=>t[e]));return Et(r,(r=>(v(n,((e,n)=>t[e]=r[n])),e&&e(t))))}return"array"===n?Et(t,e):"string"===n?At(t).then((t=>e(t.path))):void 0}};let Lt={config:ht,points:{entry:{pageId:"sqzjy"}}};const Dt=function(t,e=[]){return t?[...e,`[${t}]`]:e},Rt=function(t){return[...Dt(ht.envVersion,Dt(ht.logId)),...t]};Lt=Object.assign({},Lt,n,it,Tt,et,{API:class{constructor(t={}){this.options=t,this.$request=this.$request.bind(this),this.$get=this.$get.bind(this),this.$post=this.$post.bind(this),this.count=0,this.isLoading=t.isLoading||!1,this.showLoading=t.showLoading||ct,this.hideLoading=t.hideLoading||ct.bind(this,null),this.errAPI=function(e,n,r){return this.isLoading&&(this.count--,0===this.count&&this.hideLoading()),t.logManager&&(ft.addMsg("APIERR"),ft.warn("[APIERR]-apis",n),ft.warn("[APIERR]-errDesc",e)),t.errAPI?t.errAPI(e,r):r(e)},this.sucessAPI=function(e,n){return this.isLoading&&(this.count--,0===this.count&&this.hideLoading()),t.sucessAPI?t.sucessAPI(e,n):n(e.data)},this.sucessCode=function(e){return t.sucessCode?t.sucessCode(e):200===e.code&&e.success}}$request(t,e={},n=!0,r="GET",o={}){const i=this.options;return new Promise(((a,u)=>{i.getRequeData&&(e=i.getRequeData(e,n,o));const c={name:t,url:i.getApiUrl(t)||t,params:H(e,""),other:H({hasSessionId:n,method:r},"")};return this.isLoading&&(0===this.count&&this.showLoading(),this.count++),ut(c.url,e,r,{header:o.header||{}}).then((t=>{let e=t.data;this.sucessCode(e)?this.sucessAPI(e,a):this.errAPI(e,c,u)})).catch((t=>this.errAPI(t,c,u)))}))}$get(t,e,n,r){return this.$request(t,e,n,"GET",r)}$post(t,e,n,r){return this.$request(t,e,n,"POST",r)}},log:ft,setLog:function(t,...e){const n=ft[t];if(n)return ht.logId&&ft.setMsg(ht.logId),n.apply(ft,Rt(e))},trace:function(){return ht.logId&&ft.setMsg(ht.logId),ft.info.apply(ft,Rt(arguments)),et.trace.apply(et,Rt(arguments))},warning:function(){return ht.logId&&ft.setMsg(ht.logId),ft.error.apply(ft,Rt(arguments)),et.warning.apply(et,Rt(arguments))}});var $t=Lt;return e.default}()}));