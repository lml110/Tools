## getTimeStamp(date, zone) ⇒ <code>Number</code>
<p>获取不同地区的时间戳</p>

**Returns**: <code>Number</code> - <p>时间戳</p>  
**Date**: 2021-11-11  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> |  |
| zone | <code>Number</code> | <p>时区</p> |

**Example**  
```javascript
// 传值给服务端
console.log(getTimeStamp(677084400000)); //正常
console.log(getTimeStamp(677084400000,8));  //=== 677088000000 || +new Date("Mon Jun 17 1991 00:00:00 GMT+0800")
```
