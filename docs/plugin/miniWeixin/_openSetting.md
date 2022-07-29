## wxOpenSetting(authInfo) ⇒ <code>Promise</code>
<p>调起客户端小程序设置界面，返回用户设置的操作结果</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| authInfo | <code>String</code> | <p>明确授权值 || 默认为空-不弹窗直接走授权</p> |

**Example**  
```javascript
//必须手动唤起 || 弹窗点击触发//https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.htmlwxOpenSetting()wxOpenSetting('userInfo')
```
