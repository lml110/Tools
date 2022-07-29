## wxGetSetting(authInfo, params) ⇒ <code>Promise</code>
<p>查询用户的当前设置 有限频</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| authInfo | <code>String</code> | <p>授权信息 //有则判断，无则返回全部</p> |
| params | <code>Object</code> | <p>参数</p> |

**Example**  
```javascript
参考： https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.htmlwxGetSetting().thenwxGetSetting("camera",{}).then
```
