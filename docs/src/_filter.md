## \_filter(source, callback, [thisValue]) ⇒ <code>Object</code>
<p>数据过滤-不递归</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| source | <code>\*</code> |  |  |
| callback | <code>\*</code> |  | <p>处理函数</p> |
| [thisValue] | <code>any</code> | <code>this</code> | <p>可填</p> |

**Example**  
```javascript
const list = [{id:112,name:'lml1'},{id:113,name:'lml1'},{id:113,name:'lml2'}]
console.log(_filter(list,_=>_.id==113)); //[{id:113,name:'lml1'},{id:113,name:'lml2'}]
const obj = {
    '112': {id:112,name:'lml1'},
    '113': {id:113,name:'lml1'},
    '114': {id:114,name:'lml2'}
}
console.log(_filter(obj,_=>_.name=='lml1'));  // {"112":{"id":112,"name":"lml1"},"113":{"id":113,"name":"lml1"}}
console.log(_filter(obj,['112','114'])); // {"112":{"id":112,"name":"lml1"},"114":{"id":114,"name":"lml2"}}
```
