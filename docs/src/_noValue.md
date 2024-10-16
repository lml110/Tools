## \_noValue(value) ⇒ <code>boolean</code>
<p>检查给定的值是否为“无值”状态。</p>

**Returns**: <code>boolean</code> - <ul>
<li>如果值为无值状态，则返回true；否则返回false。</li>
</ul>  
**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | <p>需要检查的值。</p> |

**Example**  
```javascript
无值指的是null、undefined、空字符串、false、0、NaN以及空数组或空对象。
对于boolean类型，总是返回false，因为boolean值即使是false也被视为有值。
//判断是[null,undefined,NaN]
//场景：有值带0或[]时作为成功处理, 如判断系统状态的对比
console.log(_noValue(undefined)); // true
console.log(_noValue(null));    // true
console.log(_noValue(NaN));    // true

//保留 0 | [] | false | ""
console.log(_noValue(" "));  // false
console.log(_noValue(false)); //false
console.log(_noValue(0));   // false
console.log(_noValue([]));  // false
console.log(_noValue({}));  // false
console.log(_noValue(""));  // false
```
