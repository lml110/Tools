## \_trimSpecial(str, [regStr]) ⇒ <code>String</code>
<p>去除特殊占位符号</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> |  |
| [regStr] | <code>String</code> | <p>正则 | 默认全部</p> |

**Example**  
```javascript
// 正则内特殊：\\+ | \\[ | \\]
// 行装：&+\\/↵\r\n\t
console.log(_trimSpecial('觉得\ndjsf【发九点十分】')); // 觉得djsf发九点十分
```
