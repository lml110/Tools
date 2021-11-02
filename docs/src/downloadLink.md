## downloadLink(link, name, callback) ⇒ <code>null</code>
<p>地址文件下载</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| link | <code>String</code> |  |
| name | <code>String</code> | <p>文件名</p> |
| callback | <code>function</code> | <p>回调</p> |

**Example**  
```javascript
downloadLink(getFileURL(dataURLToBlob || imageToBlob),saveName)
```