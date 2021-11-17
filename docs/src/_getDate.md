## \_getDate(date) ⇒ <code>Date</code>
<p>获取时间元数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>Number</code> \| <code>String</code> \| <code>null</code> | <p>可为空值</p> |

**Example**  
```javascript
//兼容iphone//new Date("2012-2-22 06:23") iphone返回的是 invalid Date//new Date('2012-02-22') //正确//new Date('2012-2-22') //invalid_getDate() //当前时间
```
