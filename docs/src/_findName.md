## \_findName(sourceArr, queryFn, [queryKey]) ⇒ <code>any</code>
<p>查询数组内数据值</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>源数据</p> |
| queryFn | <code>any</code> | <p>查询函数</p> |
| [queryKey] | <code>String</code> | <p>键值</p> |

**Example**  
```javascript
查询全部时直接给对象

const BQ_TYPES = [
    { label: '批增', value: 100, status: 1, },
    { label: '批减', value: 10, status: 0,  },
    { label: '批换', value: 1, status: 2, },
];
console.log(_findName(BQ_TYPES,_=>_.value===1,'label')); //批换
===
findForStatic(1, BQ_TYPES)

console.log(_findName(BQ_TYPES,_=>_.status===1,'label')); //批增
===
findForStatic(1, BQ_TYPES,[,'status'])

console.log(_findName(BQ_TYPES,_=>_.status===1)); //{label: '批增', value: 100, status: 1}
===
findForStatic(1, BQ_TYPES,'status') //[0,{label: '批增', value: 100, status: 1}]
```
