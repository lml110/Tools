## \_getDate(date) ⇒ <code>Date</code>
<p>获取时间元数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| date | <code>String</code> \| <code>Number</code> \| <code>Date</code> | <p>可为空值</p> |

**Example**  
```javascript
//兼容iphone
//new Date("2012-2-22 06:23") iphone返回的是 invalid Date
//new Date('2012-02-22') //正确
//new Date('2012-2-22') //invalid

_getDate() //当前时间
```

* [_getDate(date)](#_getDate) ⇒ <code>Date</code>
    * [~any](#_getDate..any) : <code>any</code>
    * [~res](#_getDate..res) : <code>Date</code>

### _getDate~any : <code>any</code>
### _getDate~res : <code>Date</code>
