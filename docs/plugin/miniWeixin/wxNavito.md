## wxNavito(url, tag, type) ⇒ <code>Null</code>
<p>跳转页面</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>地址-空-返回上一页</p> |
| tag | <code>String</code> | <p>标识 - 默认- 跳转前执行的函数submit</p> |
| type | <code>String</code> | <p>跳转类型 - 默认 - href</p> |

**Example**  
```javascript
//封装
// https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.navigateTo.html
 wxNavito.call(this,url,tag)
'1': 'redirectTo',
'2': 'reLaunch', //关闭所有页面并打开
'3': 'switchTab',
```
