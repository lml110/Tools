## afreshSetTree(list, parentFN, ifFN, apis) ⇒ <code>Array</code>
<p>一维数组生成一次性树结构</p>

**Date**: 2019-11-15  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> |  |
| parentFN | <code>function</code> | <p>确认函数</p> |
| ifFN | <code>function</code> | <p>判断函数</p> |
| apis | <code>object</code> | <p>赋值配置</p> |

**Example**  
```javascript
通过parent一次性查询
reduce 累加器
muiErrFn 多个重复值的处理函数
const treeList = afreshSetTree(res,cus=>cus.parentId==0,(el,cus)=>(el.id==cus.parentId) && (el.type==1));

let data = [{ "aa": 11, id: 1, parentId: 0 }, { "aa": 22, id: 2, parentId: 1 }, { "aa": 33, "bb": 31, id: 3, parentId: 2 }, { "aa": 33, "bb": 32, id: 4, parentId: 3 }, { "aa": 44, id: 5, parentId: 3 }]
let list = afreshSetTree(data, cus => cus.parentId == 0, (el, cus) => el.id == cus.parentId)
console.log(list);
// [{"aa":11,"id":1,"parentId":0,"children":[{"aa":22,"id":2,"parentId":1,"children":[{"aa":33,"bb":31,"id":3,"parentId":2,"children":[{"aa":33,"bb":32,"id":4,"parentId":3},{"aa":44,"id":5,"parentId":3}]}]}]}]
```
