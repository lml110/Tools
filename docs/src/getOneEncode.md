## getOneEncode(str) ⇒ <code>String</code>
<p>获取encodeURIComponent后的字符串(单次判断)</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>需要转换的字符</p> |

**Example**  
```javascript
应用场景：对不明确的数据转码时验证
console.log(getOneEncode('http://lml.html')); //http%3A%2F%2Flml.html
console.log(getOneEncode('http%3A%2F%2Flml.html')); //http%3A%2F%2Flml.html
```
