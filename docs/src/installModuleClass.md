## installModuleClass(that, store, includes) ⇒ <code>Null</code>
<p>class类绑定this指向</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>Object</code> | <p>this</p> |
| store | <code>Object</code> | <p>class</p> |
| includes | <code>Array</code> | <p>选填 是否包含</p> |

**Example**  
```javascript
installModuleClass(this, ActionStore.prototype)
```
