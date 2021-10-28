## uploadFile(url, filedata, requedata, prossFn) ⇒ <code>Promise</code>
<p>原生js上传多图</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>上传地址</p> |
| filedata | <code>Object</code> | <p>文件列表 {file1: [file],file2:[]}</p> |
| requedata | <code>Object</code> | <p>其他参数</p> |
| prossFn | <code>function</code> | <p>上传进度事件</p> |

**Example**  
```javascript
uploadFile(url,{file1: [file],file2:[]},{})
```
