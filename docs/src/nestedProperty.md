## default
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
<p>Tell if a nested object has a given property (or array a given index)
given an object such as a.b.c.d = 5, hasNestedProperty(a, &quot;b.c.d&quot;) will return true.
It also returns true if the property is in the prototype chain.</p>

**Returns**: <p>true if has (property in object), false otherwise</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>the object to get the property from</p> |
| property | <code>String</code> | <p>the path to the property as a string</p> |
| options: | <code>Object</code> | <ul> <li>own: set to reject properties from the prototype</li> </ul> |

## setNestedProperty(object, property, value) ⇒
<p>Set the property of an object nested in one or more objects
If the property doesn't exist, it gets created.</p>

**Returns**: <p>object if no assignment was made or the value if the assignment was made</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> |  |
| property | <code>String</code> |  |
| value |  | <p>the value to set</p> |

## isInNestedProperty(object, property, objectInPath, options:) ⇒ <code>boolean</code>
<p>Tell if an object is on the path to a nested property
If the object is on the path, and the path exists, it returns true, and false otherwise.</p>

**Returns**: <code>boolean</code> - <p>true if the object is on the path</p>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Object</code> | <p>to get the nested property from</p> |
| property | <code>String</code> | <p>name of the nested property</p> |
| objectInPath | <code>Object</code> | <p>the object to check</p> |
| options: | <code>Object</code> | <ul> <li>validPath: return false if the path is invalid, even if the object is in the path</li> </ul> |

