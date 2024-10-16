## nestedProperty
**Date**: 2017-11-23  
**Author**: liumouliang  
### new nestedProperty()
<p>嵌套对象处理方法</p>

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
let pop = []
console.log(obj?.a?.b);
console.log(nestedProperty.get(pop, "length"));
//因`?.`不能使用
console.log(nestedProperty.get(obj, "a.b.c.arr.+.c"));
// # 错误
console.log(nestedProperty.get(obj,'+.c')); //undefined
console.log(nestedProperty.get(obj, "a.d.c")); //undefined
console.log(nestedProperty.get(obj)); //原值
```
## hasNestedProperty(object, property, options:) ⇒
<p>告诉嵌套对象是否具有给定的属性
给定一个对象，例如a.b.c.d=5，hasNestedProperty（a，“b.c.d”）将返回true。
如果属性在原型链中，它也会返回true。</p>

**Returns**: <p>true if有（对象中的属性），否则为false</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>the object to get the property from</p> |
| property | <code>String</code> | <p>the path to the property as a string</p> |
| options: | <code>Object</code> | <ul> <li>设置为拒绝原型中的属性</li> </ul> |

## setNestedProperty(object, property, value) ⇒
<p>设置嵌套在一个或多个对象中的对象的属性
如果属性不存在，则会创建它</p>

**Returns**: <p>object</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| property | <code>String</code> |  |
| value |  | <p>the value to set</p> |

## isInNestedProperty(object, property, objectInPath, options:) ⇒ <code>boolean</code>
<p>告知对象是否位于嵌套属性的路径上
如果对象在路径上，并且路径存在，则返回true，否则返回false。</p>

**Returns**: <code>boolean</code> - <p>true</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>to get the nested property from</p> |
| property | <code>String</code> | <p>name of the nested property</p> |
| objectInPath | <code>Object</code> | <p>the object to check</p> |
| options: | <code>Object</code> | <ul> <li>validPath: 如果路径无效，即使对象在路径中，也返回false</li> </ul> |

