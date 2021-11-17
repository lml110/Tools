## getEndDateToMonth(date, diffMonth, diffMS) ⇒ <code>Number</code>
<p>通过月份获取截止时间</p>

**Returns**: <code>Number</code> - <p>毫秒数</p>  
**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> \| <code>String</code> \| <code>Number</code> | <p>初始时间</p> |
| diffMonth | <code>Number</code> | <p>相差月份</p> |
| diffMS | <code>Number</code> | <p>秒差距 || 场景：用于展示是否前一天:59</p> |

**Example**  
```javascript
//- 当初始月份的天数大于结束月份的天数时 == 结束月份最后一天
let endDate = getEndDateToMonth(new Date("2021-12-31 00:00:00"),2,1) //bug
let endDate = getEndDateToMonth("2021-12-31 00:00:00",2,1)
console.log(endDate); // 1645977599000
console.log(_formatDate(endDate)); // 2022-02-27 23:59:59

getEndDateToMonth(new Date("2021-12-31 08:00:00"),2,1) //2022-02-27 23:59:59
```
