## \_getHttpCodeMsg(status, options, def) ⇒ <code>String</code>
<p>获取http状态码的提示信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| status | <code>String</code> \| <code>Number</code> | <p>状态码</p> |
| options | <code>Object</code> | <p>可填-替换扩展数据</p> |
| def | <code>String</code> | <p>可填-默认提示信息</p> |

**Example**  
```javascript
_getHttpCodeMsg(status,{'405':'请求错误,未找到该资源'});
```
