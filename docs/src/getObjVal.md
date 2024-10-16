## getObjVal(object, property) ⇒ <code>any</code>
<p>查询嵌套对象的属性</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> \| <code>Array</code> |  |
| property | <code>String</code> | <p>属性key</p> |

**Example**  
```javascript
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
console.log(getObjVal(obj, "a.b.c.arr.+.c")); // [2, 12, 22]
console.log(getObjVal(obj, "a.b.c.arr.+.d")); // [undefined, undefined, undefined]
console.log(getObjVal(array, "a.b.c.d"));  //5
console.log(getObjVal(array, "+.c")); //undefined
console.log(getObjVal(array, "+.d")); //undefined
```
