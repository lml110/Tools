## \_findName(sourceArr, queryFn, queryKey) ⇒ <code>String</code>
<p>查询数组内数据值</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>源数据</p> |
| queryFn | <code>function</code> | <p>查询函数</p> |
| queryKey | <code>String</code> | <p>键值</p> |

**Example**  
```javascript
const BQ_TYPES = [
    { label: '批增', value: 100, status: 1, },
    { label: '批减', value: 10, status: 0,  },
    { label: '批换', value: 1, status: 2, },
];
_findName(BQ_TYPES,_=>_.value===100,'status')
```
