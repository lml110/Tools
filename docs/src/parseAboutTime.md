## parseAboutTime(date, aboutFn) ⇒ <code>String</code>
<p>解析当前时间的大致差时</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>时间-秒</p> |
| aboutFn | <code>function</code> | <p>7天后的自定义返回函数</p> |

**Example**  
```javascript
// 目前解析到天, 月与年需要非固定，一般用不到，可自定义
console.log(parseAboutTime(date)); //1小时之前
```
