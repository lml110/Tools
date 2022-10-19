## \_noValue(value) ⇒ <code>Boolean</code>
<p>非空并不为0</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| value | <code>val</code> | 

**Example**  
```javascript
//判断是[null,undefined,"",false]
//场景：有值带0或[]时作为成功处理, 如判断系统状态的对比
console.log(_noValue(""));  // true
console.log(_noValue(undefined)); // true
console.log(_noValue(null));    // true

//保留 0 | []
console.log(_noValue(0));   // false
console.log(_noValue([]));  // false
```
