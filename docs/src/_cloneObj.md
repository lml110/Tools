## \_cloneObj(obj, [isSelf]) ⇒ <code>\*</code>
<p>深拷贝数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> |  |
| [isSelf] | <code>Boolean</code> | <p>是否排除循环引用</p> |

**Example**  
```javascript
// JSON.stringify处理
// 不会处理的几种类型： Date, RegExp, undefined, Function, symbol
// --- Date类型被转成了字符串输出，正则表达式转成了空对象， undefined和Function,symbol都被直接忽略了
```
