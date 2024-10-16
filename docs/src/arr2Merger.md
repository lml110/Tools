## arr2Merger(arrList) ⇒ <code>Array</code>
<p>简单数组的合并去重</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| arrList | <code>Array</code> | <p>数组集合</p> |

**Example**  
```javascript
console.log(arr2Merger([1,2,4],[2,5],[3,4])); //[1, 2, 4, 5, 3]
console.log(arr2Merger(_=>_.flat(),[1,2,4,[2,5]],[2,5,[3,4]])); //[1, 2, 4, 5, 3]
```
