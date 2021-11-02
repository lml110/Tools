## getFileURL(file, src) ⇒ <code>String</code>
<p>兼容生成文件路径</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>file</code> |  |
| src | <code>String</code> | <p>已存在需清除的路径</p> |

**Example**  
```javascript
// 1. 不支持base64
// 2. file：file | blobbase64 = getFileURL(dataURLToBlob(imgInfo.base64),this.deleteFilePath);
```
