## getOneArr(sourceArr, exclude) ⇒ <code>Array</code>
<p>获取单层级数组 - 浅拷贝</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>源s数组</p> |
| exclude | <code>Array</code> \| <code>String</code> | <p>过滤Key</p> |

**Example**  
```javascript
getOneArr(arr, ['children'])
getOneArr(arr, 'children')
```
