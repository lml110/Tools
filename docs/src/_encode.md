## \_encode(s, [isonly]) ⇒ <code>String</code>
<p>URL编码转换</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>String</code> |  |
| [isonly] | <code>Boolean</code> | <p>是否只转中文</p> |

**Example**  
```javascript
let a = 'http://lml.com:8011/ele2Extend.html?a=大师傅&b=sd15&c=[{"a":1}]'
console.log(_encode(a));
// http%3A%2F%2Flml.com%3A8011%2Fele2Extend.html%3Fa%3D%E5%A4%A7%E5%B8%88%E5%82%85%26b%3Dsd15%26c%3D%5B%7B%22a%22%3A1%7D%5D
console.log(_encode(a,true));
//只转中文
// http://lml.com:8011/ele2Extend.html?a=%E5%A4%A7%E5%B8%88%E5%82%85&b=sd15&c=[{"a":1}]
console.log(encodeURI(a));
// http://lml.com:8011/ele2Extend.html?a=%E5%A4%A7%E5%B8%88%E5%82%85&b=sd15&c=%5B%7B%22a%22:1%7D%5D
```
