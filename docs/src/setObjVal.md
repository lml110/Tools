## setObjVal(object, property, value) ⇒ <code>value</code>
<p>设置嵌套对象的属性</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> \| <code>Array</code> |  |
| property | <code>String</code> | <p>属性key</p> |
| value | <code>any</code> | <p>设置值</p> |

**Example**  
```javascript
// 如果属性不存在，则会创建它
var array = [
  { a: 0, b: 1, c: 2 },
  { a: 10, b: 11, c: 12 },
  { a: 20, b: 21, c: 22 }
]
var obj = {
  a: {
    b: {
      c: {
        d: 5,
        arr: array
      }
    }
  }
};

setObjVal(obj, "a.b.c.arr.+.c",88)
// [
//   { a: 0, b: 1, c: 88 },
//   { a: 10, b: 11, c: 88 },
//   { a: 20, b: 21, c: 88 }
// ]
setObjVal(obj, "a.b.c.d",88) // d: 88
```
