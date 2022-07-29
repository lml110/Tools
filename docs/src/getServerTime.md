## getServerTime(path) ⇒ <code>Promise</code>
<p>获取服务器时间</p>

**Date**: 2021-11-11  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>String</code> | <p>请求路径|默认‘当前文件’ - 优化根路径403禁止访问</p> |

**Example**  
```javascript
getServerTime().then(t=>t||Date.now())
```
