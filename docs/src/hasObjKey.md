## hasObjKey(object, property, isOwn) ⇒ <code>Boolean</code>
<p>查询嵌套对象是否具有给定的属性</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> \| <code>Array</code> |  |
| property | <code>String</code> | <p>属性key</p> |
| isOwn | <code>Boolean</code> | <p>设置为拒绝原型中的属性|默认：true</p> |

**Example**  
```javascript
//如果属性在原型链中，它也会返回true
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
console.log(hasObjKey(obj, "a.b.c.arr.+.c")); // true
console.log(hasObjKey(obj, "a.b.c.arr.+.d")); // false
console.log(hasObjKey(array, "2"));	//true
console.log(hasObjKey(array, "+.c")); //true
console.log(hasObjKey(array, "+.d")); //false
```
