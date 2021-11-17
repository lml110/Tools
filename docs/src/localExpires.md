## localExpires(key, value, diffTime) ⇒ <code>value</code>
<p>本地+生存周期</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> |  |
| value | <code>value</code> | <p>Undefined：过期删除 | null|''：空值删除</p> |
| diffTime | <code>String</code> \| <code>Number</code> | <p>时间差：String-固定过期，Number-附加时间（默认天）</p> |

**Example**  
```javascript
// 使用场景：小程序的cookie模拟
localExpires('lml','魔尊',1) //当前过期时间增加一天
localExpires('lml',null)
localExpires('lml','魔尊',true)
console.log(localExpires('lml'),Locals.keys(),Locals.info());
```
