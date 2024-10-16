## classEndDate
**Date**: 2022-11-23  
**Author**: liumouliang  
### new classEndDate()
<p>class-获取截止时间的方法类</p>

**Example**  
```javascript
//# tag: ['year','month','day','hour','minute','second']
const endDates = new classEndDate();
const diffDates = new classEndDate();
// 截止当前天
const endDate_day = diffDates.getEndDate(new Date("2021-12-31 08:00:00"),2)
console.log(_formatDate(endDate_day)); // 2022-01-02 00:00:00
// 截止当前月
const endDate = diffDates.getEndDate(new Date("2021-12-31 08:00:00"),2,'month')
console.log(_formatDate(endDate)); // 2022-02-01 00:00:00
// 截止当前年
const endDate_year = diffDates.getEndDate(new Date("2021-12-31 08:00:00"),2,'year')
console.log(_formatDate(endDate_year)); // 2023-01-01 00:00:00

// 截止对应天
const endDate_day2 = diffDates.getAllEndDate(new Date("2021-12-31 08:00:00"),2)
console.log('截止对应天',_formatDate(endDate_day2)); // 2022-01-02 08:00:00
// 截止对应月
const endDate2 = diffDates.getAllEndDate(new Date("2021-12-31 08:00:00"),2,'month')
console.log('截止对应月',_formatDate(endDate2)); // 2022-02-28 08:00:00
// 截止对应月
const endDate2_1 = diffDates.getAllEndDate(new Date("2021-12-12 08:00:00"),2,'month')
console.log('截止对应月',_formatDate(endDate2_1)); // 2022-02-12 08:00:00
// 截止对应年
const endDate_year2 = diffDates.getAllEndDate(new Date("2021-12-31 08:00:00"),2,'year')
console.log('截止对应年',_formatDate(endDate_year2)); // 2023-12-31 08:00:00

// 截止对应时
const endtime_h = diffDates.getEndTime(new Date("2021-12-31 23:52:00"),2,'hour')
console.log('截止对应时',_formatDate(endtime_h)); // 2022-01-01 01:52:00
// 截止对应分
const endtime_m = diffDates.getEndTime(new Date("2021-12-31 23:59:00"),2,'minute')
console.log('截止对应分',_formatDate(endtime_m)); // 2022-01-01 00:01:00
// 截止对应秒
const endtime_s = diffDates.getEndTime(new Date("2021-12-31 23:59:59"),2)
console.log('截止对应秒',_formatDate(endtime_s)); // 2022-01-01 00:00:01

//# 剩余时间例子
const alLeftTimes = new getAllLeftTime();
const endDate = diffDates.getEndDate(null,1,'month')
const diffDate = diffDates.getDiffDate(null,1,'month') //810084400
console.log(_formatDate(endDate)); // 2023-11-01 00:00:00
console.log(alLeftTimes.getLeftTimeStr(diffDate)); //03周03天06小时46分56秒

const endTime = diffDates.getEndTime(null,2,'hour')
const diffTime = diffDates.getDiffTime(null,2,'hour')
console.log(_formatDate(endTime)); //2023-10-07 19:19:50
console.log(alLeftTimes.getLeftTimeStr(diffTime)); //01小时59分59秒

if(payOverTimeType === 1){
    const diffDates = new classEndDate();
    const endDate = +diffDates.getEndDate(curDate);
    endTime = endDate - curDate;
}
if(endTime>=0){
    return alLeftTimes.getLeftTimeStr(endTime)
}
```
## getEndMonth(date, diff) ⇒ <code>Date</code>
<p>获取结束月份（默认下一月）</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| date | <code>Date</code> | 
| diff | <code>Number</code> | 

**Example**  
```javascript
getEndMonth(date, diff)
```
## getEndTime(date, diff, tag) ⇒ <code>Date</code>
<p>获取结束时间</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>时间</p> |
| diff | <code>Number</code> | <p>差异值</p> |
| tag | <code>String</code> | <p>标识（day）</p> |

**Example**  
```javascript
getEndTime(date, diff = 1, tag = 'second')
```
## getDiffTime(date, diff, tag) ⇒ <code>Date</code>
<p>获取差异时间</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>时间</p> |
| diff | <code>Number</code> | <p>差异值</p> |
| tag | <code>String</code> | <p>标识（day）</p> |

**Example**  
```javascript
getDiffTime(date, diff = 1, tag = 'second')
```
## getEndDate(date, diff, tag) ⇒ <code>Date</code>
<p>获取结束日期 (当前截止时间)</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | <p>时间</p> |
| diff | <code>Number</code> | <p>差异值</p> |
| tag | <code>String</code> | <p>标识（day）</p> |

**Example**  
```javascript
//当天截止，当月截止
getEndDate(date, diff = 1, tag = 'day')
```
## getDiffDate(date, [diff], [tag]) ⇒ <code>Number</code>
<p>获取差异日期</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>any</code> | <p>时间</p> |
| [diff] | <code>Number</code> | <p>差异值</p> |
| [tag] | <code>String</code> | <p>标识（day）</p> |

**Example**  
```javascript
getDiffDate(date, diff = 1, tag = 'day')
```
