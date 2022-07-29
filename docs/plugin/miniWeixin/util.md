## setInitConfig()
<p>初始配置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
//设置初始环境setInitConfig()
```
## setAuthInfoModal 配置信息(beforeText, confirmText, showCancel)
<p>设置授权提示框 配置参数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| beforeText | <code>String</code> | <p>前置内容</p> |
| confirmText | <code>String</code> | <p>确认按钮内容</p> |
| showCancel | <code>Boolean</code> | <p>是否显示取消按钮</p> |

**Example**  
```javascript
// https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.htmlsetAuthInfoModal({
    beforeText: "由于保险公司要求,需要获取您的",
    confirmText: "去设置",
});
```
## setAuthFailModal 配置信息(beforeText, confirmText, showCancel)
<p>设置二次授权失败的提示框 配置参数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| beforeText | <code>String</code> | <p>前置内容</p> |
| confirmText | <code>String</code> | <p>确认按钮内容</p> |
| showCancel | <code>Boolean</code> | <p>是否显示取消按钮</p> |

**Example**  
```javascript
// https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.htmlsetAuthFailModal({
    beforeText: "由于保险公司要求,需要获取您的",
    confirmText: "去设置",
});
setAuthFailModal(true); //提示内容与第一次授权提示弹窗一样
```
## setRem(clientWidth)
<p>设置rem</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| clientWidth | <code>Number</code> | <p>屏幕宽度</p> |

**Example**  
```javascript
window.onload = (qq)=> {
    if (process.env.isMiniprogram) {
        let screenWidth = this.sysInfo.screenWidth
        if(traversePage.includes(this.$route.name)){
            let left = getObjVal(this.sysInfo,"safeArea.left") || 0;
            screenWidth = +screenWidth-(left*2)
        }
        // 小程序
        setRem(screenWidth)
    } else {
        // Web 端
        setRem(document.documentElement.getBoundingClientRect().width)
    }
}
var docEl = doc.documentElement,
resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
if (!doc.addEventListener) return;
win.addEventListener(resizeEvt, recalc, false);
doc.addEventListener('DOMContentLoaded', recalc, false);
```
