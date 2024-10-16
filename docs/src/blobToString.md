## blobToString(blob) ⇒ <code>Promise</code>
<p>blobToString</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| blob | <code>File</code> \| <code>Blob</code> | 

**Example**  
```javascript
blobToString(blob).then
场景：接口使用了responseType: 'blob',
则如果数据是对象也会返回blob数据，只是类型blob.type === 'application/json'
blobToString可以针对json类型直接读取为字符串对象
```
