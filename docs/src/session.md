## session(key, value) ⇒ <code>any</code>
<p>Sessions简化版</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>//无值清空</p> |
| value | <code>any</code> | <p>//空值删除</p> |

**Example**  
```javascript
session('lml',null)
session('lml','魔尊')
console.log(session('lml'),Sessions.keys(),Sessions.info());
```
