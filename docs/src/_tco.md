## \_tco(f) ⇒ <code>function</code>
<p>尾递归优化</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | <p>递归函数</p> |

**Example**  
```javascript
_tco(fun)
```
## \_tco 浏览器就会报错Uncaught RangeError: Maximum call stack size exceeded在JS的递归调用中，JS引擎将为每次递归开辟一段内存用以储存递归截止前的数据，这些内存的数据结构以“栈”的形式存储，这种方式开销非常大，并且一般浏览器可用的内存非常有限。()
