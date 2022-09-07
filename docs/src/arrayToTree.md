## \_default(res, options, sucessFn) ⇒ <code>Array</code>
<p>数组转树结构</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Array</code> |  |
| options | <code>Object</code> | <p>参数</p> |
| sucessFn | <code>function</code> | <p>完成后函数</p> |

**Example**  
```javascript
默认参数：
{
    parentProperty: 'parentId',
    childrenProperty: 'children',
    customID: 'id',
    rootID: 0 //默认根-父id的值
}
const result = arrayToTree(menuList, { parentProperty: 'pid', customID: 'id' },routerSort);
```
