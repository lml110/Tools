## findForStatic(value, sourceArr, keys, [emptyDesc]) ⇒ <code>any</code>
<p>根据静态枚举查询对应值</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>操作目标</p> |
| sourceArr | <code>Array</code> | <p>源数据</p> |
| keys | <code>Array</code> \| <code>String</code> | <p>枚举(数组则返回对应值[label,value]，字符串key则查到后全部返回)</p> |
| [emptyDesc] | <code>String</code> | <p>为空描述</p> |

**Example**  
```javascript
const staticList1 = [
    {label: 'a1', value: 1, id: 0},
    {label: 'a2', value: 0, id: 3},
]
console.log(findForStatic(0, staticList1,[,'id'])); //a1
console.log(findForStatic('a2', staticList1, 'label')); //[1,{label: 'a2', value: 0, id: 3}]
==== 与_findName类似，但_findName查询全部时不会给索引值
```
