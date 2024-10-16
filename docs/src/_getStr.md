## \_getStr(str) ⇒ <code>String</code>
<p>获取有效的字符串</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| str | <code>any</code> | 

**Example**  
```javascript
//处理'date', 'number', 'boolean'
console.log(_getStr(0)); //'0'
console.log(_getStr(new Date())); //'标准时间'
console.log(_getStr(false)); //'false'
```
