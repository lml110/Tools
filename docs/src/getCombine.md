## getCombine(arr, n, result, current) ⇒ <code>Array</code>
<p>从数组中取出n个元素的所有组合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| arr | <code>Array</code> | 
| n | <code>Number</code> | 
| result | <code>Array</code> | 
| current | <code>Array</code> | 

**Example**  
```javascript
getCombine(lmlarr, 3);

//深度不要太大，比如
 getCombine(Array.from({length:100}),4) //3921225
 getCombine(Array.from({length:100}),3) //161700
 getCombine(Array.from({length:100}),5) //内存崩溃
```
