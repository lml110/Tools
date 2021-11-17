## getMaximin(arr, maximin) ⇒ <code>Value</code>
<p>获取简单一维数组中的最大值</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| maximin | <code>String</code> | <p>min|默认：max</p> |

**Example**  
```javascript
let list = Array.from({length:30}, (v, i) => i+1)
console.log(getMaximin(list)); //30
console.log(getMaximin(list,'min')); //1
```
