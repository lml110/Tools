## \_isValue(value) ⇒ <code>Boolean</code>
<p>判断是有效值</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| value | <code>null</code> | 

**Example**  
```javascript
//类似 !_noValue(val) ??
console.log(_isValue(""));  // false
console.log(_isValue(undefined)); // false
console.log(_isValue(null));    // false
console.log(_isValue(NaN));    // false

console.log(_isValue(false)); //true
console.log(_isValue(0));   // true
console.log(_isValue([]));  // true
```
