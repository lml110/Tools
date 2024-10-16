## \_formatDate(date, fmt) ⇒ <code>String</code>
<p>格式化时间</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>any</code> | <p>默认当前时间</p> |
| fmt | <code>String</code> | <p>格式|默认：yyyy-MM-DD hh:mm:ss</p> |

**Example**  
```javascript
console.log(_formatDate()); //当前时间格式化
console.log(_formatDate(new Date()));
console.log(_formatDate(1638288000000)); //2021-12-01 00:00:00
```
