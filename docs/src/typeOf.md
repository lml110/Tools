## typeOf(obj, [type]) ⇒ <code>any</code>
<p>判断数据类型</p>

**Date**: 2019-09-09  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | <p>原值</p> |
| [type] | <code>String</code> | <p>类型</p> |

**Example**  
```javascript
//原生typeOf  判断数组和null时都是object
typeOf(obj)==='array'
// Checking against a type
typeOf(obj, 'array') // true or false

Symbol：
Symbol.for('test') === Symbol.for('test')
Symbol('test') === Symbol('test')
console.log(typeOf(0)); //number
console.log(typeOf(window)); //window
```
