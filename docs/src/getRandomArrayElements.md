## getRandomArrayElements(arr, count) ⇒ <code>Array</code>
<p>随机获取数组中的元素组合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> |  |
| count | <code>Number</code> | <p>数量</p> |

**Example**  
```javascript
let list = Array.from({length:30}, (v, i) => i+1)console.log(getRandomArrayElements(list,10));
```
