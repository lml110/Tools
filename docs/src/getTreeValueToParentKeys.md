## getTreeValueToParentKeys(treeList, parentKeys, [childrenKey], [resFN]) ⇒ <code>Array</code>
<p>根据parentKeys获取值列表</p>

**Date**: 2021-10-26  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| treeList | <code>Array</code> | <p>树形数据</p> |
| parentKeys | <code>Array</code> | <p>结构位置 || 选中索引</p> |
| [childrenKey] | <code>String</code> | <p>子选项属性名</p> |
| [resFN] | <code>function</code> | <p>返回数据处理</p> |

**Example**  
```javascript
const childrenKey = 'children';
let parseKeys = []
filterList(treeList, (cur, parents, parentKeys, level) => {
    if(cur.id == code){
        parseKeys = parentKeys.slice(0);
        return parseKeys;
    }
}, childrenKey);
const parseList = getTreeValueToParentKeys(dataList, parseKeys, childrenKey, _ => getOneObj(_, childrenKey));
return parseList;

//如：cell-cascader组件的set_onlyLastLevel
```
