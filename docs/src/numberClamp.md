## numberClamp(number, [lower], [upper]) ⇒ <code>Number</code>
<p>限制数值范围</p>

**Date**: 2017-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| number | <code>Number</code> | <p>The number to clamp.</p> |
| [lower] | <code>Number</code> | <p>lower bound.</p> |
| [upper] | <code>Number</code> | <p>upper bound.</p> |

**Example**  
```javascript
numberClamp(-10, -5, 5);
// => -5

numberClamp(10, -5, 5);
// => 5
```
