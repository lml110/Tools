## typeOf(source, type) ⇒ <code>string</code>
<p>判断数据类型</p>

**Returns**: <code>string</code> - <p>返回类型字符串</p>  
**Overload**:   
**Date**: 2019-09-09  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>unknown</code> | <p>要检测类型的值</p> |
| type | <code>T</code> | <p>指定需要验证的类型</p> |

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
const err = new Error('查无此订单')
// err.name === 'Error'
console.log(typeOf(err)); //error
console.log(typeOf(err.message)); //string
console.log(typeOf(err.stack)); //string
```
## TypeOfMap
**Properties**

| Name | Type |
| --- | --- |
| boolean | <code>Boolean</code> | 
| number | <code>Number</code> | 
| string | <code>String</code> | 
| function | <code>function</code> | 
| array | <code>Array.&lt;any&gt;</code> | 
| object | <code>Object</code> | 
| symbol | <code>Symbol</code> | 
| date | <code>Date</code> | 
| error | <code>Error</code> | 
| promise | <code>Promise.&lt;any&gt;</code> | 
| map | <code>Map.&lt;any, any&gt;</code> | 
| set | <code>Set.&lt;any&gt;</code> | 
| regexp | <code>RegExp</code> | 
| undefined | <code>undefined</code> | 
| null | <code>null</code> | 

