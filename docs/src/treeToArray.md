## treeToArray(list, resObj, parents) ⇒ <code>Array</code>
<p>递归查询数组</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | <p>原值</p> |
| resObj | <code>Object</code> | <p>参数</p> |
| parents | <code>Object</code> | <p>父级元素</p> |

**Example**  
```javascript
树结构反向转换一维数组

queryFN: 向下查询函数
handleFN：处理已完成的子数组
childKey：子键

const data = [{ aa: 11, 'children': [{ children: [{ aa: 33, bb: 31, children: [{ aa: 33, bb: 32 }, { aa: 44 }] }], aa: 22, }] }]
let list = treeToArray(data);
console.log(list);
// [{"aa":11},{"aa":22},{"aa":33,"bb":31},{"aa":33,"bb":32},{"aa":44}]
```
