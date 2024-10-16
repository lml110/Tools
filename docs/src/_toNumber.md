## \_toNumber(source) ⇒ <code>Number</code>
<p>转数字</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| source | <code>\*</code> | 

**Example**  
```javascript
console.log(_toNumber(NaN)); // 0
console.log(_toNumber('152.00')); // 152
console.log(_toNumber('true')); // 0
console.log(_toNumber(true)); // 1
```
