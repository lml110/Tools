## \_filterObject(source, callback, thisValue) ⇒ <code>Array</code>
<p>数据过滤-不递归</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>object</code> \| <code>array</code> |  |
| callback | <code>function</code> | <p>处理函数</p> |
| thisValue | <code>this</code> | <p>可填</p> |

**Example**  
```javascript
const list = [{id:112,name:'lml1'},{id:113,name:'lml1'}]
console.log(_filter(list,_=>_.id==113));
```
