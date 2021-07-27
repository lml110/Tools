/*! For license information please see wechat.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("wechat",[],t):"object"==typeof exports?exports.wechat=t():e.wechat=t()}(self,(function(){return(()=>{"use strict";var e={7014:(e,t,n)=>{n.d(t,{default:()=>m});var o=n(5359);const i=function(e,t){let n=[];return function(e,t,n){if(t)"array"===(0,o.default)(e)?function(e,t,n){let o=-1,i=e.length;for(;++o<i;)t.call(n,e[o],o,"array")}(e,t,n):"object"===(0,o.default)(e)&&function(e,t,n){for(let o in e)e.hasOwnProperty(o)&&t.call(n,e[o],o,"object")}(e,t,n)}(e,(function(e,t){if(null!=e&&null!=e){let i="string"===(0,o.default)(e)?e:JSON.stringify(e);n.push(t+"="+i)}})),"string"===(0,o.default)(t)?n.length?t+n.join("&"):"":n};let r=null,c={};const s={},l=["","application/json;charset=utf-8","application/x-www-form-urlencoded;charset=UTF-8","multipart/form-data","text/xml"],a=function(e={},t){return t?((e={},t={})=>{let n=new FormData;for(let t in e)e.hasOwnProperty(t)&&n.append(t,e[t]);for(let e in t)if(t.hasOwnProperty(e)&&t[e]&&t[e].length){let o=t[e];for(let t=0,i=o.length;t<i;t++)n.append(e,o[t])}return n})(e,t):e},u=function(e){return c[e]||e},f=function(e,t,n="get",o={},c){return o||(o={}),new Promise(((f,g)=>{const{hasSessionId:d,fileData:p,isFormData:h,isNoString:m,contentTypeNum:w,timeout:b,isCancel:y}=o,x={url:u(e),method:n,headers:{},cancelToken:y?(S=e,new axios.CancelToken((e=>{s[S]=e}))):null};var S;return t&&("post"===n?p?(x.data=a(t,p),o.progress&&(x.onUploadProgress=o.progress)):x.data=h?a(t,{}):m?t:i(t,""):x.params=t),w&&(x.headers["Content-Type"]=l[w]),c&&(x=Object.assign(x,c)),r&&r(x).then((t=>{y&&delete s[e],200===t.code&&t.success?f(t.data||t.success):g(t)})).catch((t=>{y&&delete s[e],g(t)}))}))},g={setInit:function(e,t){r=e,c=t},fetch:r,APIURL:c,$getRequestUrl:u,$clearCancleApi:function(){for(let e in s)s[e](),delete s[e]},$request:f,$post:function(e,t,n,o){return f(e,t,"post",n,o)},$get:function(e,t,n,o){return f(e,t,"get",n,o)}};var d=n(704);function p(e){return e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()}))}function h(e,t){let n=e.style[p(t)];if(!n)if(d.Z.defaultView&&d.Z.defaultView.getComputedStyle){let o=d.Z.defaultView.getComputedStyle(e,null);n=o?o.getPropertyValue(t):null}else e.currentStyle&&(n=e.currentStyle[p(t)]);return n.replace(/px$/,"")}const m={API:g,directives:{ellipsis:{inserted(e,t,n){let o=t.arg||2,i=h(e,"line-Height")*o,r=e.firstChild,c=h(e,"height")>i;if(r){if(c&&t.modifiers.is)for(;e.offsetHeight>i;)r.innerHTML=r.innerHTML.replace(/.(\.\.\.)?$/,"...");return t.value&&t.value(c,e)}}}}}},5359:(e,t,n)=>{function o(e){const t=Object.prototype.toString;return{"[object Boolean]":"boolean","[object Number]":"number","[object String]":"string","[object Function]":"function","[object Array]":"array","[object Date]":"date","[object RegExp]":"regexp","[object Undefined]":"undefined","[object Null]":"null","[object Object]":"object","[object Promise]":"promise","[object Map]":"map","[object Set]":"set","[object Map Iterator]":"map-iterator","[[object Symbol]]":"symbol","[object Module]":"module"}[t.call(e)]||t.call(e)}n.d(t,{default:()=>o})},704:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n(5511).Z.document||{}},5511:(e,t,n)=>{n.d(t,{Z:()=>c});const o="object"==typeof n.g&&null!==n.g&&n.g.Object===Object&&n.g,i="object"==typeof globalThis&&null!==globalThis&&globalThis.Object==Object&&globalThis,r="object"==typeof self&&null!==self&&self.Object===Object&&self,c=i||o||r||Function("return this")()}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};return(()=>{n.d(o,{default:()=>T});var e=n(7014),t=n(5511),i=n(704);const r=function(){return t.Z.pageYOffset||i.Z.documentElement.scrollTop||i.Z.body.scrollTop},c=t.Z.navigator||{},s=new class{constructor(e){this.versions=this.getVersions(),this.language=this.getLanguage()}getVersions(){let e=c.userAgent,t=e.toLowerCase();return c.appVersion,{trident:e.includes("Trident"),presto:e.includes("Presto"),webKit:e.includes("AppleWebKit"),gecko:e.includes("Gecko")&&!e.includes("KHTML"),mobile:!!e.match(/AppleWebKit.*Mobile.*/),ios:!!e.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:e.includes("Android")||e.includes("Linux"),iPhone:e.includes("iPhone"),iPad:e.includes("iPad"),webApp:!e.includes("Safari"),isWechat:"micromessenger"==t.match(/MicroMessenger/i),weibo:"weibo"==t.match(/WeiBo/i),qq:"qq"==t.match(/QQ/i)}}getLanguage(){let e=c.browserLanguage||c.language;return e&&e.toLowerCase()}getIosVersion(){let e=c.userAgent.toLowerCase().match(/cpu iphone os (.*?) like mac os/);return e?e[1].replace(/_/g,"."):""}getWechatVersion(){let e=c.userAgent&&c.userAgent.match(/MicroMessenger\/([\d\.]+)/i);return e?e[1]:""}},l=s.versions,a=l.isWechat,u=t.Z.wx&&a,f=function(e){if(u&&wx.ready)return wx.ready(e)},g=function(e,t){if(!u)return!1;wx.config({appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:t||["chooseImage","getLocalImgData","previewImage","scanQRCode","getNetworkType","updateAppMessageShareData","updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo","hideMenuItems","hideAllNonBaseMenuItem"]})},d=function(e){u&&t.Z.WeixinJSBridge&&("object"==typeof WeixinJSBridge&&"function"==typeof WeixinJSBridge.invoke?e&&e():i.Z.addEventListener?i.Z.addEventListener("WeixinJSBridgeReady",e,!1):i.Z.attachEvent&&(i.Z.attachEvent("WeixinJSBridgeReady",e),i.Z.attachEvent("onWeixinJSBridgeReady",e)))},p=function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:.625}),WeixinJSBridge.on("menu:setfont",(function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:.625})}))},h=function(){return d(p)},m=function(e,t){h(),e&&g(...e),f((function(){return t&&t()})),wx.error((function(e){console.log("js-sdk ��ʼ��ʧ��",e)}))},w=t.Z.location||{},b=function(e){return new Promise(((t,n)=>{wx.checkJsApi({jsApiList:e||[],success:function(n){console.log("checkJsApi",e,n),t(n)},fail:function(e){n(e)}})}))};var y=n(5359);const x=function(e){return"object"===(0,y.default)(e)},S=function(e,n,o){let i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return x(o)&&(i="leading"in o?!!o.leading:i,r="trailing"in o?!!o.trailing:r),function(e,n,o){let i,r,c,s,l,a,u=0,f=!1,g=!1,d=!0;const p=!n&&0!==n&&"function"==typeof t.Z.requestAnimationFrame;if("function"!=typeof e)throw new TypeError("Expected a function");function h(t){const n=i,o=r;return i=r=void 0,u=t,s=e.apply(o,n),s}function m(e,n){return p?(t.Z.cancelAnimationFrame(l),t.Z.requestAnimationFrame(e)):setTimeout(e,n)}function w(e){const t=e-a;return void 0===a||t>=n||t<0||g&&e-u>=c}function b(){const e=Date.now();if(w(e))return y(e);l=m(b,function(e){const t=e-u,o=n-(e-a);return g?Math.min(o,c-t):o}(e))}function y(e){return l=void 0,d&&i?h(e):(i=r=void 0,s)}function S(...e){const t=Date.now(),o=w(t);if(i=e,r=this,a=t,o){if(void 0===l)return function(e){return u=e,l=m(b,n),f?h(e):s}(a);if(g)return l=m(b,n),h(a)}return void 0===l&&(l=m(b,n)),s}return n=+n||0,x(o)&&(f=!!o.leading,g="maxWait"in o,c=g?Math.max(+o.maxWait||0,n):c,d="trailing"in o?!!o.trailing:d),S.cancel=function(){void 0!==l&&function(e){if(p)return t.Z.cancelAnimationFrame(e);clearTimeout(e)}(l),u=0,i=a=r=l=void 0},S.flush=function(){return void 0===l?s:y(Date.now())},S.pending=function(){return void 0!==l},S}(e,n,{leading:i,trailing:r,maxWait:n})},j=function(e){return i.Z.documentElement[e]||i.Z.body[e]},v=function(e,t={}){const{beforeFn:n,ifFn:o,diffH:i}=t;let c=r();if(o&&o(c))return!1;if(n&&n(),e){if(this&&(this.isLoadedOnce||this.isLoaded))return!1;if(c>j("scrollHeight")-j("clientHeight")-i)return e()}},T=Object.assign(e.default,{FastClick_bug:function(){if(!t.Z.FastClick)return!1;let e,n;if(FastClick.prototype.focus=function(e){let t,n=navigator.userAgent.indexOf("Windows Phone")>=0;/iP(ad|hone|od)/.test(navigator.userAgent)&&!n&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type&&"email"!==e.type?(t=e.value.length,e.setSelectionRange(t,t),e.focus()):e.focus()},!versions.ios)return!1;i.Z.body.addEventListener("focusin",(()=>{e=!0,clearTimeout(n)})),i.Z.body.addEventListener("focusout",(()=>{if(e=!1,e)return!1;n=setTimeout((()=>{let e=r()||0;t.Z.scrollTo({top:e,left:0,behavior:"smooth"})}),100)}))},setDocumentTitle:function(e,t){if(!e||i.Z.title===e)return!1;if(i.Z.title=e,l.ios){let e=i.Z.createElement("iframe");e.src=t||"/favicon.ico",e.style.display="none",e.onload=function(){setTimeout((function(){e.remove()}),0)},i.Z.body.appendChild(e)}},isJweixin:u,initWX:function(e=[],n){return!!a&&(t.Z.wx?m(e,n):(o="https://res2.wx.qq.com/open/js/jweixin-1.6.0.js",new Promise(((e,t)=>{let n=i.Z.createElement("script");n.type="text/javascript",n.onload=n.onreadystatechange=function(){n.readyState?"loaded"==n.readyState||"complete"==n.readyState?(n.onreadystatechange=null,e(o)):t(n):e(o)},n.onerror=e=>t(e),n.src=o,i.Z.body.appendChild(n)}))).then(m.bind(this,e,n)));var o},wxPay:function(e,t){return new Promise(((n,o)=>t?WeixinJSBridge.invoke("getBrandWCPayRequest",e,(function(e){let t=e.err_msg?e.err_msg.split(":")[1]:"";"ok"===t?n(e):"cancel"===t?(console.log("取消支付！"),o(t)):(console.log("支付失败",e),o(e))})):(e.success=function(e){n(e)},e.fail=function(e){o(e)},wx.chooseWXPay(e))))},wxFontHandle:h,wxReady:f,wxBridgeReady:d,wxConfig:g,wxShare:function(e,t){return u?Promise.reject():new Promise(((n,o)=>{if(!e||function(e){for(let t in e)return!1;return!0}(e)||!e.title)return e.hideShare?wx.hideAllNonBaseMenuItem():wx.hideOptionMenu(),o(),!1;const{title:i,desc:r,link:c}=e;let l=e.imgUrl||e.imageUrl,a=s.getWechatVersion(),u=function(e,t){e=e.split("."),t=t.split(".");let n=Math.max(e.length,t.length);for(;e.length<n;)e.push("0");for(;t.length<n;)t.push("0");for(let o=0;o<n;o++){let n=+e[o],i=+t[o];if(n>i)return 1;if(n<i)return-1}return 0}(a,"6.7.2");1==u&&wx.updateAppMessageShareData?(wx.updateAppMessageShareData({title:i,desc:r,link:c,imgUrl:l,trigger:function(e){console.log("朋友及QQ-trigger")},success:function(e){console.log("分享给朋友及QQ"),t&&t.updateAppMessage&&t.updateAppMessage(e),n(e)},cancel:function(e){console.log("取消分享给朋友及QQ")},fail:function(e){console.log("分享给朋友及QQ失败"),o()}}),wx.updateTimelineShareData({title:i,link:c,imgUrl:l,trigger:function(e){console.log("分享到朋友圈及QQ空间-trigger")},success:function(e){console.log("分享到朋友圈及QQ空间"),t&&t.updateTimeline&&t.updateTimeline(e),n(e)},cancel:function(e){console.log("取消分享到朋友圈及QQ空间")},fail:function(e){console.log("分享到朋友圈及QQ空间失败"),o()}})):(console.log("微信版本过低，版本小于6.7.2，请尽快升级",a,u),wx.onMenuShareTimeline({title:i,desc:r,link:c,imgUrl:l,trigger:function(e){console.log("trigger"),console.log(JSON.stringify(e))},success:function(e){console.log(" 分享朋友圈成功"),t&&t.updateTimeline&&t.updateTimeline(e),n(e)},cancel:function(e){console.log("取消分享朋友圈")},fail:function(e){console.log("分享朋友圈失败"),console.log(JSON.stringify(e)),o()}}),wx.onMenuShareAppMessage({title:i,desc:r,link:c,imgUrl:l,trigger:function(e){console.log("trigger"),console.log(JSON.stringify(e))},success:function(e){console.log("分享给朋友成功"),t&&t.updateAppMessage&&t.updateAppMessage(e),n(e)},cancel:function(e){console.log("取消分享朋友")},fail:function(e){console.log("分享朋友失败"),console.log(JSON.stringify(e)),o()}}),wx.onMenuShareQQ({title:i,desc:r,link:c,imgUrl:l,trigger:function(e){console.log("trigger"),console.log(JSON.stringify(e))},success:function(e){console.log("分享QQ成功"),t&&t.updateAppMessage&&t.updateAppMessage(e),n(e)},cancel:function(e){console.log("取消分享QQ")},fail:function(e){console.log("分享QQ失败"),console.log(JSON.stringify(e)),o()}}),wx.onMenuShareWeibo({title:i,desc:r,link:c,imgUrl:l,trigger:function(e){console.log("trigger"),console.log(JSON.stringify(e))},success:function(e){console.log("分享微博成功"),t&&t.onMenuShareWeibo&&t.onMenuShareWeibo(e),n(e)},cancel:function(e){console.log("取消分享微博")},fail:function(e){console.log("分享微博失败"),console.log(JSON.stringify(e)),o()}}))}))},wxAuthorize:function(e,t={}){let n=encodeURI(t.url||w.href),o=t.scope||"snsapi_userinfo",i=t.state||"STATE";w.replace(`https://open.weixin.qq.com/connect/oauth2/authorize?appid=${e}&redirect_uri=${n}&response_type=code&scope=${o}&state=${i}#wechat_redirect`)},wxCheckJsApi:b,wxChooseImage:function(e={}){return new Promise(((t,n)=>{b(["chooseImage","getLocalImgData"]).then((o=>{wx.chooseImage({count:e.count||1,needResult:1,sizeType:e.sizeType||["compressed"],sourceType:e.sourceType||["album","camera"],success:function(e){t(e.localIds||e)},fail:function(){n(err)}})})).catch((e=>{n(e)}))}))},wxGetImgData:function(e){return new Promise(((n,o)=>{t.Z.__wxjs_is_wkwebview?wx.getLocalImgData({localId:e,sucess:function(e){n(e.localData||e)},fail:function(t){console.log("getLocalImgData",t),n(e)}}):n(e)}))},scrollListener:function(e,t){return(t=Object.assign({throttleTime:100,diffH:600},t)).throttleTime?S(v.bind(this,e,t),t.throttleTime):v.bind(this,e,t)}})})(),o.default})()}));