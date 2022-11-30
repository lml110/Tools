## getImgSize(base64url, length, type) ⇒ <code>Number</code>
<p>获取base64图片储存大小</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| base64url | <code>String</code> | <p>base64图</p> |
| length | <code>Number</code> | <p>默认KB</p> |
| type | <code>String</code> | <p>类型 - 默认jpg</p> |

**Example**  
```javascript
let src = canvas.toDataURL(type, encode)
let size = getImgSize(src)
```
