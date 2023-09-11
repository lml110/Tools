## setUrlHttps(url)
<p>设置链接协议为https</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>链接</p> |

**Example**  
```javascript
console.log(setUrlHttps('//llmlhttp.jpg'));  // https://llmlhttp.jpg
console.log(setUrlHttps('http://llmlhttp.jpg')); // https://llmlhttp.jpg
console.log(setUrlHttps({})); // ''
```
