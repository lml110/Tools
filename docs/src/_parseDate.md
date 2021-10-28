## \_parseDate(String) ⇒
<p>日期反向解析</p>

**Returns**: <p>解析后的Date类型日期</p>  
**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Description |
| --- | --- |
| String | <p>输入的日期字符串，如'2014-09-13'</p> |

**Example**  
```javascript
parseDate('2016-08-11'); // Thu Aug 11 2016 00:00:00 GMT+0800parseDate('2016-08-11 13:28:43', 'yyyy-MM-DD hh:mm:ss') // Thu Aug 11 2016 13:28:43 GMT+0800
```
