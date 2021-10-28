## isNulls(value) ⇒ <code>Boolean</code>
<p>判断除对象外的空值</p>

**Date**: 2017-05-24  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>null</code> | <p>原值</p> |

**Example**  
```javascript
console.log(isNulls(0));
console.log(isNulls(null));
console.log(isNulls(undefined));
console.log(isNulls(false));

console.log(isNulls([]));
console.log(isNulls(' '));
console.log(isNulls([0]));
console.log(isNulls({}));
```
