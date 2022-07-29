## reportAnalytics(name, url, params, desc, message, other, cname) ⇒ <code>Null</code>
<p>线上统计请求的错误信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | <p>名称</p> |
| url | <code>String</code> | <p>链接</p> |
| params | <code>String</code> | <p>参数</p> |
| desc | <code>String</code> | <p>描述</p> |
| message | <code>String</code> | <p>信息</p> |
| other | <code>String</code> | <p>其他</p> |
| cname | <code>String</code> | <p>标识名</p> |

**Example**  
```javascript
//现用实时日志控制，但日志太多，没有统计信息
// https://developers.weixin.qq.com/miniprogram/dev/api/data-analysis/wx.reportAnalytics.html
reportAnalytics(name, url, params, desc, "", other)
```
