!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("baseTools",[],t):"object"==typeof exports?exports.baseTools=t():e.baseTools=t()}(self,(function(){return function(){"use strict";var e={d:function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})}};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var t={};function n(e,t){if(!e)return"";var n=/(.*\/)*([^.].*)[.](.*)/;return t?e.match(n).slice(-2):e.replace(n,"$2")}e.d(t,{default:function(){return ft}});var r=function(e,t){return t?e.replace(/(.*\/)*([^.])/gi,"$2").toLowerCase():e.replace(/.+\./,"").toLowerCase()},o={"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"};function i(e){var t=Object.prototype.toString.call(e);return o[t]||t.replaceAll(new RegExp(/\[|\]|object /g),"")}var a,u,c,f,l=[Date,RegExp,Set,WeakSet,Map,WeakMap,Error],s=(a=function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new WeakSet,r=null,o=i(t);if(l.includes(t&&t.constructor))r=new t.constructor(t);else if("array"===o){r=[];for(var a=0;a<t.length;a++)r[a]=e(t[a],n)}else if("object"===o){if(r={},n.has(t))return r;for(var u in n.add(t),t)Object.hasOwnProperty.call(t,u)&&(r[u]=e(t[u],n))}else r=t;return r},c=!1,f=[],function(){if(f.push(arguments),!c){for(c=!0;f.length;)u=a.apply(this,f.shift());return c=!1,u}}),p=s;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var d="object"===(void 0===e.g?"undefined":h(e.g))&&null!==e.g&&e.g.Object===Object&&e.g,g="object"===("undefined"==typeof globalThis?"undefined":h(globalThis))&&null!==globalThis&&globalThis.Object==Object&&globalThis,v="object"===("undefined"==typeof self?"undefined":h(self))&&null!==self&&self.Object===Object&&self,y=g||d||v||Function("return this")(),m=function(e){try{return JSON.parse(e)}catch(t){return e}};function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}var w=function(e){return e&&y.JSON?JSON.stringify(e,(t=new WeakSet,function(e,n){if("object"===b(n)&&null!==n){if(t.has(n))return;t.add(n)}return n})):"";var t},j=function(e){return"object"===i(e)},S=function(e,t,n){var r,o,i,a,u,c,f=0,l=!1,s=!1,p=!0,h=!t&&0!==t&&"function"==typeof y.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function d(t){var n=r,i=o;return r=o=void 0,f=t,a=e.apply(i,n)}function g(e,t){return h?(y.cancelAnimationFrame(u),y.requestAnimationFrame(e)):setTimeout(e,t)}function v(e){return f=e,u=g(b,t),l?d(e):a}function m(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-f>=i}function b(){var e=Date.now();if(m(e))return w(e);u=g(b,function(e){var n=e-f,r=t-(e-c);return s?Math.min(r,i-n):r}(e))}function w(e){return u=void 0,p&&r?d(e):(r=o=void 0,a)}function S(){for(var e=Date.now(),n=m(e),i=arguments.length,f=new Array(i),l=0;l<i;l++)f[l]=arguments[l];if(r=f,o=this,c=e,n){if(void 0===u)return v(c);if(s)return u=g(b,t),d(c)}return void 0===u&&(u=g(b,t)),a}return t=+t||0,j(n)&&(l=!!n.leading,i=(s="maxWait"in n)?Math.max(+n.maxWait||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==u&&function(e){if(h)return y.cancelAnimationFrame(e);clearTimeout(e)}(u),f=0,r=c=o=u=void 0},S.flush=function(){return void 0===u?a:w(Date.now())},S.pending=function(){return void 0!==u},S};function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}var E,M,D,x=function(e){return e&&"object"===O(e)&&e.get?e:{get:function(){return e}}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+Number(Math.random().toString().substr(3,8)+Date.now()).toString(36)},A=function(e){return"number"===i(e)?e:+e},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return Math.floor(Math.random()*(e-t+1)+t)},k=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number.prototype.toFixed.call(A(e),t)},_=function(e,t){return A(k(e,t))},R=function(e){return["array","object"].includes(i(e))?w(e):""+e},C=function(e){var t=i(e);return"date"===t?e:e?"string"===t&&e.includes("-")?new Date(e.replace(/-/g,"/")):new Date(e):new Date},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-DD hh:mm:ss",n={"M+":(e=C(e)).getMonth()+1,"D+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var r in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)n.hasOwnProperty(r)&&new RegExp("("+r+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[r]:("00"+n[r]).substr((""+n[r]).length)));return t},I=function(e,t,n){for(var r=-1,o=e.length;++r<o;)t.call(n,e[r],r,"array")},F=function(e){var t="";return I(e,(function(e){t+=" "+R(e)})),t},U=function(e,t,n){var r=e;return"function"===i(t)?r=e.filter(t):"string"===i(t)&&(r=e.filter((function(e){return e[t]}))),n&&(r=r.map((function(e){return e[n]}))),r};function N(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=r.childKey,a=void 0===o?"children":o,u=r.sucessFn,c=void 0===u?function(e){return this.push(e)}:u,f=[];return"array"===i(e)&&(f=e.reduce((function(e,r,o,i){if(t(r))c.call(e,r);else{var u=U(i,(function(e,t){return n(e,r)}));u&&1==u.length?u[0][a]?c.call(u[0][a],r):u[0][a]=[r]:c.call(e,r)}return e}),[])),f}var z,B,$=function e(t,n){for(var r=[],o=0;o<t.length;o++){var i=t[o],a=E(i,n);if(a&&r.push(a),M){var u=M(i,n);if(u&&i[u]){var c=e(i[u],i);D&&(r=D(r,c)||r)}}}return r},W=function e(t,n){for(var r,o=0;o<t.length;o++){var i=t[o];if(z(i,n))return i;if(B){var a=B(i);a&&(r=e(a,i))}if(r)return r}return r};function q(e){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q(e)}function K(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function V(e){var t="function"==typeof Map?new Map:void 0;return V=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return H(e,arguments,X(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),Y(r,e)},V(e)}function H(e,t,n){return H=J()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&Y(o,n.prototype),o},H.apply(null,arguments)}function J(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function Y(e,t){return Y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Y(e,t)}function X(e){return X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},X(e)}var G=".",Q=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Y(e,t)}(i,e);var t,n,r,o=(t=i,n=J(),function(){var e,r=X(t);if(n){var o=X(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return K(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).name="ObjectPrototypeMutationError",t}return r=i,Object.defineProperty(r,"prototype",{writable:!1}),r}(V(Error)),Z={set:function(e,t,n){if("object"!=q(e)||null===e||!t)return e;if("number"==typeof t)return e[t]=n,e[t];try{return ee(e,t,(function(e,t,r,o){if(e===Reflect.getPrototypeOf({}))throw new Q("Attempting to mutate Object.prototype");if(!e[t]){var i=Number.isInteger(Number(r[o+1])),a="+"===r[o+1];e[t]=i||a?[]:{}}return te(r,o)&&(e[t]=n),e[t]}))}catch(t){if(t instanceof Q)throw t;return e}},get:function(e,t){return t?ee(e,t,(function(e,t){return e&&e[t]})):e},has:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("object"!=q(e)||null===e||!t)return!1;if("number"==typeof t)return t in e;try{var r=!1;return ee(e,t,(function(e,t,o,i){if(!te(o,i))return e&&e[t];r=n.own?e.hasOwnProperty(t):t in e})),r}catch(e){return!1}},hasOwn:function(e,t,n){return this.has(e,t,n||{own:!0})},isIn:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if("object"!=q(e)||null===e||!t)return!1;try{var o=!1,i=!1;return ee(e,t,(function(e,t,r,a){return o=o||e===n||!!e&&e[t]===n,i=te(r,a)&&"object"===q(e)&&t in e,e&&e[t]})),r.validPath?o&&i:o}catch(e){return!1}},ObjectPrototypeMutationError:Q};function ee(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},r=t.split(G),o=r.length,i=function(t){var o=r[t];if(!e)return{v:void 0};if("+"===o){if(Array.isArray(e))return{v:e.map((function(o,i){var a=r.slice(t+1);return a.length>0?ee(o,a.join(G),n):n(e,i,r,t)}))};e=n(e,o,r,t)}else e=n(e,o,r,t)},a=0;a<o;a++){var u=i(a);if("object"===q(u))return u.v}return e}function te(e,t){return e.length===t+1}var ne=Z,re=function(e){var t=i(e);return"string"===t?e:["array","number"].includes(t)?""+e:""},oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(!t||t<0)return str;var n="",r=e<0,o=String(Math.abs(e));return o.length<t&&(n=new Array(t-o.length+1).join("0")),(r?"-":"")+n+o},ie=function(e){return void 0===e},ae=function(e){return!e&&0!==e},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["SUN","MON","TUE","WED","THU","FRI","SAT"],n=(e=C(e)).getFullYear(),r=e.getMonth()+1,o=e.getDate(),i=e.getHours(),a=e.getMinutes(),u=e.getSeconds(),c={year:n,month:r,day:o,hour:i,minute:a,second:u};for(var f in c)c.hasOwnProperty(f)&&(c[f]=oe(c[f]));return c.week_key=e.getDay(),c.week=t[c.week_key],c},ce=function(e){return e<60?e+"秒":e<3600?(e-e%60)/60+"分"+e%60+"秒":e<86400?(e-e%3600)/60/60+"小时"+Math.round(e%3600/60)+"分":(e/60/60/24).toFixed(1)+"天"},fe=y.location||{},le=function(e,t,n){for(var r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,"object")},se=function(e,t,n){if(t)return"array"===i(e)?I(e,t,n):"object"===i(e)?le(e,t,n):void 0},pe=function(e){return e?e.replace(/([^\u0000-\u00FF])/g,(function(e){return encodeURIComponent(e)})):e},he=function(e){return e?decodeURIComponent(e):e};function de(e){return function(e){if(Array.isArray(e))return ge(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return ge(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ge(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ge(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ve(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r>=1&&r<=126||65376<=r&&r<=65439?t++:t+=2}return t}var ye=["B","KB","MB","GB","TB"];function me(e){for(var t=0;e>1024;)e/=1024,++t;return"".concat(_(e)).concat(ye[t])}var be=function(e,t){return e=re(e),t?e.replace(/\s/g,""):e.replace(/(^\s+)|(\s+$)/g,"")};function we(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function je(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Se={_deepCopy:p,_cloneObj:function(e){return m(w(e))},getFormData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new FormData;for(var r in e)e.hasOwnProperty(r)&&n.append(r,e[r]);for(var o in t)if(t.hasOwnProperty(o)&&t[o]&&t[o].length)for(var i=t[o],a=0,u=i.length;a<u;a++)n.append(o,i[a]);return n},typeOf:i,debounce:S,throttle:function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return j(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),S(e,t,{leading:r,trailing:o,maxWait:t})},definePros:function(e,t,n){return n?Object.defineProperty(e,n,x(t)):t&&"object"===O(t)?Object.defineProperties(e,function(e){var t={};for(var n in e)t[n]=x(e[n]);return t}(t)):e},_keyid:T,_seedId:function(e){var t="0";if(e)for(var n=0;n<e;n++)t+=P();return A(t)},_toNumber:A,_toNumFixed:_,_toString:R,_toJson:m,formatJsonStr:function(e,t){return e?t?e.split(t):"string"===typeOf(e)?m(e):"array"===typeOf(e)&&e:[]},trace:function(){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];(e=console).log.apply(e,["[lml]"].concat(n))},warning:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=F(t);return console.log("%c[".concat(L(new Date,"hh:mm:ss"),"]:").concat(r),"color:red")},getChinese:function(e){return(e=re(e)).match(/[\u4e00-\u9fa5]/g).join("")},babelToFileName:function(e,t){return t?e.replace(/[A-Z]/g,(function(e,t){return t?"-"+e.toLowerCase():e.toLowerCase()})):e.replace(/\-\b(\w)|\-\s(\w)/g,(function(e,t){return t.toUpperCase()}))},getFileName:n,getFileExtName:r,_float:function(e,t){var n=Math.pow(10,t||2);return Math.round(e*n)/n},numberPad:oe,numberComma:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return(e=String(e).split("."))[0]=e[0].replace(new RegExp("(\\d)(?=(\\d{"+t+"})+$)","ig"),"$1,"),e.join(".")},numberRandom:P,numberClamp:function(e,t,n){return void 0===n&&(n=t,t=void 0),void 0!==n&&(n=(n=A(n))==n?n:0),void 0!==t&&(t=(t=A(t))==t?t:0),function(e,t,n){return e==e&&(void 0!==n&&(e=e<=n?e:n),void 0!==t&&(e=e>=t?e:t)),e}(A(e),t,n)},afreshSetTree:N,arrayToTree:function(e,t,n){if(t=Object.assign({parentProperty:"parentId",childrenProperty:"children",customID:"id",rootID:0},t),!Array.isArray(e))throw new TypeError("Expected an array but got an invalid argument");return N(e,(function(e){return e[t.parentProperty]==t.rootID}),(function(e,n){return e[t.customID]==n[t.parentProperty]}),{sucessFn:n,childKey:t.childrenProperty})},filterList:function(e,t,n,r){if("array"!==i(e)||"function"!==i(t))return!1;if(E=t,n){var o=i(n);M="function"===o?n:"string"===o&&function(e){return n},D=r}return $(e)},findTarget:function(e,t,n){if("array"!==i(e)||"function"!==i(t))return!1;if(z=t,n){var r=i(n);B="function"===r?n:"string"===r&&function(e){return e[n]}}return W(e)},nestedProperty:ne,isChinese:function(e){return/^[\u4e00-\u9fa5]{0,}$/.test(e)},isEmptyObject:function(e){for(var t in e)return!1;return!0},isUndefined:ie,isObject:j,isNulls:function(e){return!e||0==e},_noValue:ae,checkEmail:function(e){return/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/.test(e)},checkPhone:function(e){return!!/^1\d{10}$/.test(e)},hasObjKey:function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return ne.has(e,t,{own:n})},getObjVal:function(e,t){return ne.get(e,t)},_formatDate:L,_getAllDate:ue,getEndDateToMonth:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(!e)return!1;e=C(e);var r=ue(e),o=ue(e.setMonth(+r.month+t,0)),i=r.day>o.day?o.day:r.day;return+new Date(o.year,o.month-1,i,o.hour,o.minute,o.second)-1e3*n},formatDurationToFriendly:ce,getTimeStamp:function(e,t){if(e=C(e),"number"===i(t)){var n=e.getTimezoneOffset()/-60;return+e+36e5*(n-t)}return+e},setTimeStamp:function(e,t){if(e=C(e),"number"===i(t)){var n=e.getTimezoneOffset()/60;return+e+36e5*(n+t)}return e},_getAllParams:function(e){e=e||fe.href;for(var t={strictMode:!1,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"params",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=t.parser[t.strictMode?"strict":"loose"].exec(e),r={},o=14;o--;)r[t.key[o]]=n[o]||"";return r[t.q.name]={},r[t.key[12]].replace(t.q.parser,(function(e,n,o){n&&(r[t.q.name][n]=o)})),r},_getParams:function(e,t){e||(e=fe.href);var n={};if(t)return function(e,t){e||(e=fe.href),t=t.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}(e,t);var r=/(\?)(?!.*\1)+[^#]*/.exec(e);return(r=r?r[0]:"").replace(/([^?&=]+)=([^?&=]*)/g,(function(e,t,r){var o=decodeURIComponent(t),i=decodeURIComponent(r);return i=String(i),n[o]=i,e})),n},_paramsToString:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[void 0,null],r=[];return se(e,(function(e,t){if(n&&n.includes(e))return!1;var o="string"===i(e)?e:JSON.stringify(e);r.push(t+"="+o)})),"string"===i(t)?r.length?t+r.join("&"):"":r},_encode:pe,_decode:he,getNameOrKey:U,mergeJson:function(e){for(var t=e?new Map:new Set,n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return r&&r.length>1&&I(r,(function(n){"array"==i(n)&&n.reduce((function(t,n){return e?n&&n[e]&&(t.has(n[e])?console.log("重名元素",n):t.set(n[e],n)):t.has(n)?console.log("重名元素",n):t.add(n),t}),t)})),e?Array.from(t.values()):Array.from(t)},isArrRepeat:function(e,t){if(1==t){var n={};for(var r in e){if(n[e[r]])return!0;n[e[r]]=!0}return!1}return new Set(e).size!=e.length},getPermutation:function e(t){if(1==t.length)return[t];for(var n=[],r=0;r<t.length;r++){var o=t[r],i=t.slice(0);i.splice(r,1);for(var a=e(i),u=0;u<a.length;u++)a[u].unshift(o);n=n.concat(a)}return n},getCombine:function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];if(1===n)return r.push.apply(r,de(t.map((function(e){return[].concat(de(o),[e])})))),r;for(var i=0;i<t.length-n+1;i++){var a=[].concat(de(o),[t[i]]);e(t.slice(i+1),n-1,r,a)}return r},getRandomArrayElements:function(e,t){for(var n,r,o=e.slice(0),i=e.length,a=i-t;i-- >a;)n=o[r=Math.floor((i+1)*Math.random())],o[r]=o[i],o[i]=n;return o.slice(a)},getMaximin:function(e,t){return"min"===t?Math.min.apply(null,e):Math.max.apply(null,e)},_compareVersion:function(e,t){e=e.split("."),t=t.split(".");for(var n=Math.max(e.length,t.length);e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(var r=0;r<n;r++){var o=+e[r],i=+t[r];if(o>i)return 1;if(o<i)return-1}return 0},_getStr:re,Cutsubstr:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(!e||!t)return"";for(var r="",o=0;o<e.length&&t>0;o++)r+=e.substr(o,1),t-=n&&e.charCodeAt(o)>127?2:1;return r.length<e.length&&(r+="..."),r},strlen:ve,strlenUnit:me,_for:se,_forObject:le,_forEach:I,_filter:function(e,t,n){return t?"object"===typeOf(e)?function(e,t,n){var r={},o=typeOf(t);for(var i in e)e.hasOwnProperty(i)&&("function"===o&&t.call(n,e[i],i)||"array"===o&&t.includes(i))&&(r[i]=e[i]);return r}(e,t,n):"array"===typeOf(e)?Array.prototype.filter.call(e,t,n):void 0:e},_toFixed:k,_trim:be,_timeout:function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app=t||{},this.times=null}var t,n;return t=e,(n=[{key:"start",value:function(e,t){if(!t)return!1;this.clear(),this.callback=e,this.times=y.setTimeout(this.callback,t)}},{key:"clear",value:function(){this.times&&(y.clearTimeout(this.times),this.times=null)}}])&&we(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),_interval:function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app=t||{},this.times=null}var t,n;return t=e,(n=[{key:"start",value:function(e,t){if(!t)return!1;this.clear(),this.callback=e,this.times=y.setInterval(this.callback,t)}},{key:"clear",value:function(){this.times&&(y.clearInterval(this.times),this.times=null)}}])&&je(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),_stringify:w,installModuleClass:function(e,t,n){return Reflect.ownKeys(t).forEach((function(r,o,i){return n?n.includes(r)?e[r]=t[r].bind(e):null:"constructor"===r?null:e[r]=t[r].bind(e)}))}},Oe=y.navigator||{};function Ee(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Me=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.versions=this.getVersions(),this.language=this.getLanguage()}var t,n;return t=e,(n=[{key:"getVersions",value:function(){var e=Oe.userAgent,t=e.toLowerCase();return Oe.appVersion,{trident:e.includes("Trident"),presto:e.includes("Presto"),webKit:e.includes("AppleWebKit"),gecko:e.includes("Gecko")&&!e.includes("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.includes("Android")||e.includes("Linux"),iPhone:e.includes("iPhone"),iPad:e.includes("iPad"),webApp:!e.includes("Safari"),isWechat:"micromessenger"==t.match(/MicroMessenger/i),weibo:"weibo"==t.match(/WeiBo/i),qq:"qq"==t.match(/QQ/i)}}},{key:"getLanguage",value:function(){var e=Oe.browserLanguage||Oe.language;return e&&e.toLowerCase()}},{key:"getIosVersion",value:function(){var e=Oe.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);return e?e[1].replace(/_/g,"."):""}},{key:"getWechatVersion",value:function(){var e=Oe.userAgent&&Oe.userAgent.match(/MicroMessenger\/([\d\.]+)/i);return e?e[1]:""}}])&&Ee(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()),De=Me.versions,xe=y.document||{},Te=xe.createElement("div").style,Ae=function(){for(var e=["t","webkitT","MozT","msT","OT"],t=0,n=e.length;t<n;t++)if(e[t]+"ransform"in Te)return e[t].substr(0,e[t].length-1);return!1}();function Pe(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}var ke=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"click";y.MouseEvent?t=new MouseEvent(n):(t=xe.createEvent("MouseEvents")).initMouseEvent(n,!0,!1,y,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)};function _e(e){return function(e){if(Array.isArray(e))return Re(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Re(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Re(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Re(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ce(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Le=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._events=[]}var t,n;return t=e,n=[{key:"on",value:function(e,t){if(Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.on(e[n],t);else(this._events[e]||(this._events[e]=[])).push(t)}},{key:"once",value:function(e,t){var n=this;function r(){n.off(e,r),t.apply(null,arguments)}r.fn=t,this.on(e,r)}},{key:"off",value:function(e,t){if(arguments.length||(this._events=[]),Array.isArray(e))for(var n=0,r=e.length;n<r;n++)this.off(e[n],t);var o=this._events[e];if(o){1==arguments.length&&(this._events[e]=null);for(var i,a=o.length;a--;)if((i=o[a])===t||i.fn===t){o.splice(a,1);break}}}},{key:"emit",value:function(e){var t=this._events[e];if(t)for(var n=0,r=(t=_e(t)).length;n<r;n++)try{t[n].apply(null,Array.prototype.slice.call(arguments).slice(1))}catch(t){new Error(t,'event handler for "'.concat(e,'"'))}}}],n&&Ce(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),Ie=Le,Fe=xe.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},Ue=xe.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)},Ne=function(e){if(!e)return!1;var t=0;return le(e,(function(n,r){t+=ve(e.getItem(r))})),{size:t,unit:me(t),maxSize:5120}},ze={get:function(e){var t=new RegExp("(?:^|; )"+e+"=([^;]*)").exec(xe.cookie);return"array"===i(t)&&t[1]},set:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!e)return this.clear();if(ae(t)&&(n.expires=-1),"number"===i(n.expires)){var r=n.expires,o=n.expires=new Date;o.setDate(o.getDate()+r)}return xe.cookie=[e,"=",t,n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")},remove:function(e){if(e)return this.set(e)},clear:function(e){if(e)this.remove(e);else for(var t=this.keys(),n=t.length;n--;)this.remove(t[n])},keys:function(){return xe.cookie.match(/[^ =;]+(?=\=)/g)},info:function(){return{unit:"KB",currentSize:xe.cookie.length?_(xe.cookie.length/1024):0,maxSize:4}}},Be=ze,$e=function(e){return e?m(he(e)):e},We=function(e){return e?pe(JSON.stringify(e)):e},qe={get:function(e){return $e(localStorage.getItem(pe(e)))},set:function(e,t){if(!e)return this.clear();ae(t)?localStorage.removeItem(pe(e)):localStorage.setItem(pe(e),We(t))},remove:function(e){e&&this.set(e)},clear:function(e){e?this.remove(e):localStorage.clear()},keys:function(){return Object.keys(localStorage).map((function(e,t){return he(e)}))},info:function(){return Ne(localStorage)}},Ke={get:function(e){return $e(sessionStorage.getItem(pe(e)))},set:function(e,t){if(!e)return this.clear();ae(t)?sessionStorage.removeItem(pe(e)):sessionStorage.setItem(pe(e),We(t))},remove:function(e){e&&this.set(e)},clear:function(e){e?this.remove(e):sessionStorage.clear()},keys:function(){return Object.keys(sessionStorage).map((function(e,t){return he(e)}))},info:function(){return Ne(sessionStorage)}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return e instanceof Date&&(e=e.getFullYear()),e%4==0&&e%100!=0||e%400==0},He=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-DD",n={y:0,M:1,D:0,H:0,h:0,m:0,s:0,S:0};t.replace(/([^yMDhmsS]*?)(([yMDhmsS])\3*)([^yMDhmsS]*?)/g,(function(t,r,o,i,a,u,c){return e=e.replace(new RegExp(r+"(\\d{"+o.length+"})"+a),(function(e,t){return n[i]=parseInt(t),""})),""})),n.M--;var r=new Date(n.y,n.M,n.D,n.h,n.m,n.s);return 0!==n.S&&r.setMilliseconds(n.S),r},Je=He;console.log(He("1991-06-17"));var Ye=y.webkitURL||y.URL,Xe=function(e){return y.revokeObjectURL?revokeObjectURL(e):Ye.revokeObjectURL(e)},Ge=function(e,t){return t&&Xe(t),y.createObjectURL?createObjectURL(e):Ye.createObjectURL(e)},Qe=function(e){return new Promise((function(t,n){var r=xe.createElement("script");r.type="text/javascript",r.onload=r.onreadystatechange=function(){r.readyState?"loaded"==r.readyState||"complete"==r.readyState?(r.onreadystatechange=null,t(e)):n(r):t(e)},r.onerror=function(e){return n(e)},r.src=e,xe.body.appendChild(r)}))},Ze=function(e){return new Promise((function(t,n){var r=xe.createElement("link");r.rel="stylesheet",r.type="text/css",r.href=e,r.onload=function(){return t(e)},r.onerror=function(e){return n(e)},xe.head.appendChild(r)}))},et=function(e,t,n){var r=xe.createElement("a");return r.download=t||"photo",r.target="_blank",r.href=e,ke(r),n&&n()},tt=function(e,t){return new Promise((function(n,r){var o=y.XMLHttpRequest?new y.XMLHttpRequest:new ActiveObject("Microsoft");t&&(o.withCredentials=!0),o.open("GET",e,!0),o.responseType="blob",o.onload=function(e){200==this.status||0===this.status?n(this.response):r(this)},o.send()}))},nt=function(e,t,n){if(n&&(e=new Blob([e],{type:n})),Oe.msSaveOrOpenBlob)Oe.msSaveBlob(e,t);else{var r=Ge(e);et(r,t,(function(){return Xe(r)}))}return!1},rt=function(e,t){return new Promise((function(n,r){var o=new Image;t&&(o.crossOrigin="Anonymous"),o.onload=function(){n(o)},o.src=e}))},ot=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"array"==i(e)?Promise.all(e.map((function(e,n){return rt(e,t)}))):rt(e,t)},it=function(e,t){return tt(e,t)},at=function(e,t,n){var o={jpg:"image/jpeg",png:"image/png"},i=o[t?/^http/.test(t)?r(t):t:"jpg"]||o.jpg;return e.toDataURL(i,n||.8)},ut=De.isWechat,ct={server:Se,browser:Me,versions:De,readyDOM:function(e){xe.addEventListener?xe.addEventListener("DOMContentLoaded",e,!1):xe.attachEvent?xe.attachEvent("onreadystatechange",(function(){"interactive"!=xe.readystate&&"complete"!=xe.readystate||(xe.detachEvent("onreadystatechange",arguments.callee),e())})):y.onload=e},prefixStyle:function(e){return!1!==Ae&&(""===Ae?e:Ae+e.charAt(0).toUpperCase()+e.substr(1))},getCssStyle:function(e,t){if(!e.style)return"";var n=e.style[Pe(t)];if(!n)if(xe.defaultView&&xe.defaultView.getComputedStyle){var r=xe.defaultView.getComputedStyle(e,null);n=r?r.getPropertyValue(t):null}else e.currentStyle&&(n=e.currentStyle[Pe(t)]);return n.replace(/px$/,"")},triggerEvent:ke,EventBus:Ie,stopDefault:function(e){e.preventDefault()},_on:Fe,_off:Ue,_getHttpCodeMsg:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"系统异常，请稍后重试",r={400:"错误请求",401:"未授权，请重新登录",403:"拒绝访问",404:"请求错误,未找到该资源",405:"请求方法未允许",408:"系统请求超时，请稍后重试",500:"服务器端出错",501:"网络未实现",502:"网络错误",503:"服务不可用",504:"网络超时",505:"http版本不支持该请求"};return Object.assign(r,t)[String(e)]||n},getStorageSzie:Ne,Cookies:Be,cookie:function(e,t,n){return e?ie(t)?Be.get(e):void Be.set(e,t,n):Be.clear()},Locals:qe,local:function(e,t){return e?ie(t)?qe.get(e):void qe.set(e,t):qe.clear()},localExpires:function(e,t,n){if(!e)return qe.clear();var r,o=!1,a=qe.get("EXPIRES");if("boolean"===i(n)&&a&&(o=n),ie(t)){var u=qe.get(e);return u&&u.startTime?(r=o?a>Date.now()&&(u.value||u):!!(u.expires&&u.expires>Date.now())&&(u.value||u))||qe.remove(e):r=u,r}if(ae(t))qe.remove(e);else{if(o)r={value:t,startTime:Date.now()};else{var c,f=i(n);if("string"===f)c=new Date(n);else if("number"===f){var l=n,s=c=new Date;s.setDate(s.getDate()+l)}r=c?{value:t,startTime:Date.now(),expires:c.getTime()}:t}if(r)return qe.set(e,r)}},Sessions:Ke,session:function(e,t){return e?ie(t)?Ke.get(e):void Ke.set(e,t):Ke.clear()},removeURLParameter:function(e,t){var n=e.split("?");if(n.length>=2){for(var r=encodeURIComponent(t)+"=",o=n[n.length-1].split(/[&;]/g),i=o.length;i-- >0;)~o[i].lastIndexOf(r,0)&&o.splice(i,1);return n[0]+(o.length>0?"?"+o.join("&"):"")}return e},_getMonthDays:function(){var e,t,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,r=arguments.length>1?arguments[1]:void 0;n instanceof Date?(e=n.getFullYear(),t=n.getMonth()):"number"==typeof n&&(e=n,t=r-1);var o=[31,28,31,30,31,30,31,31,30,31,30,31];return 1==t&&Ve(e)?o[t]+1:o[t]},_isLeapYear:Ve,_parseDate:Je,formatDurationToFriendly:ce,regHtmlRepImg:function(e,t){var n=new RegExp(/(\<img )([^>]*)(src=")([^"]*)([^>]*\>)/,"g");return e.replace(n,(function(e,n,r,o,i,a,u,c){var f=n+r+o;return(f+=t(i,e)||i)+a}))},regHtmlBreakList:function(e){return e.split(/\n|\r/g).map((function(e,t){return be(e)}))},clearEmptyTags:function(e){e.replace(/<([a-h|j-z]+?)(?:\s+?[^>]*?)?>\s*?<\/\1>/gi,"")},_regAngle:function(e,t){var n=new RegExp(t||/[&"'+#↵\r\n\t]/,"g"),r={"&":"＆","'":"＇",'"':"＂","#":"＃","+":"＋"};return e.replace(n,(function(e){return r[e]||""}))},_trimEmoji:function(e){return e.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g,"")},_trimSpecial:function(e,t){var n="[";return n+=t||"`~!@#$^&*()=|+{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？↵\r\n\t",n+="]",n=new RegExp(n,"g"),e.replace(n,"")},_telFormat:function(e){return(e=String(e)).replace(/(\d{3})(\d{4})(\d{4})/,"$1 $2 $3")},getFileURL:Ge,loadResource:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"js";return t?"css"===t?Ze(e):"js"===t?Qe(e):void 0:Promise.reject()},preLoadStyle:function(e,t){return new Promise((function(n,r){var o=xe.createElement("link");o.rel="preload",o.as=t||"style",o.href=e,o.onload=function(){return n(e)},o.onerror=function(e){return r(e)},xe.head.appendChild(o)}))},loadResourceCode:function(e,t){return!!t&&("js"==t?function(e){var t=xe.createElement("script");t.type="text/javascript";try{t.appendChild(xe.createTextNode(e))}catch(n){t.text=e}xe.body.appendChild(t)}(e):"css"==t?function(e){var t=xe.createElement("style");t.type="text/css";try{t.appendChild(xe.createTextNode(e))}catch(n){t.styleSheet.cssText=e}xe.head.appendChild(t)}(e):void 0)},downloadLink:et,downloadFile:function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise((function(i,a){o=Object.assign({cors:"",type:"",force:!1,ext:!0},o);var u=r(e),c=o.type,f=t||n(e);return o.ext&&(f=f+"."+u),tt(e,o.cors).then((function(e){o.force&&(e=(e.slice||e.webkitSlice||e.mozSlice).call(e,0,e.size,"application/octet-stream")),nt(e,f,c),i(e)})).catch(a)}))},reFileName:function(e,t){if(!e)return"";var r=n(e,!0);return t=t||"_"+T(),r[0]+t+"."+r[1]},imageLoaded:ot,getImgeInfo:function(e,t){return new Promise((function(n,r){if(!e)return n({});var o=e.size,i={type:e.type,name:e.name,size:o,size_KB:_float(o/1024,2),size_MB:_float(o/1024/1024,2)};if(e.lastModifiedDate&&(i.date=L(e.lastModifiedDate,"yyyy-MM-DD hh:mm:ss")),t){var a=Ge(e);a?ot(a).then((function(e){n(Object.assign(i,{width:e.width,height:e.height,blob:a,image:e}))})):n(i)}else n(i)}))},downloadIamge:function(e,t){return it(e).then((function(e){return nt(e,t)}))},canvasToDataURL:at,dataURLToBlob:function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],r=atob(t[1]),o=r.length,i=new Uint8Array(o);o--;)i[o]=r.charCodeAt(o);return new Blob([i],{type:n})},dataURLToBuffer:function(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,o=new ArrayBuffer(r),i=new Uint8Array(o),a=0;a<r;a++)i[a]=n.charCodeAt(a);return o},dataURLToFile:function(e,t){for(var n=e.split(","),r=n[0].match(/:(.*?);/)[1],o=atob(n[1]),i=o.length,a=new Uint8Array(i);i--;)a[i]=o.charCodeAt(i);return new File([a],t,{type:r})},fileToDataURL:function(e){return new Promise((function(t,n){var r=new FileReader;r.onload=function(e){t(e.target.result)},r.onerror=function(e){console.log("读取失败",e)},r.onloadend=function(e){},r.readAsDataURL(e)}))},imageToBlob:it,imageToCanvas:function(e,t){return new Promise((function(n,r){ot(e,!0).then((function(r){var o=xe.createElement("canvas");if(o.width=r.width,o.height=r.height,o.getContext("2d").drawImage(r,0,0,r.width,r.height),t)return n(at(o,e)),!1;n(o)}))}))},isWechat:ut},ft=ct;return t.default}()}));