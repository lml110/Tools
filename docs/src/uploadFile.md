## uploadFile(url, filedata, requedata, apiObj) ⇒ <code>Promise</code>
<p>原生js上传多图</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>上传地址</p> |
| filedata | <code>Object</code> | <p>文件列表 {file1: [file],file2:[]}</p> |
| requedata | <code>Object</code> | <p>其他参数</p> |
| apiObj | <code>Object</code> | <p>配置信息</p> |

**Example**  
```javascript
uploadFile('/mock/60dae3958621c72358c0d4d7/template/lml/uploadFile',{file1: ['测试1','测试2']},{lml:'11'}}
uploadFile('/mock/60dae3958621c72358c0d4d7/template/lml/uploadFile',{file1: ['测试1','测试2']},{lml:'11'},{contentTypeNum:3,prossFn({loaded,total}){}})
uploadFile('/mock/60dae3958621c72358c0d4d7/template/lml/uploadFile',{file1: ['测试1','测试2']},{lml:'11'},{
    formDataFn(requedata, filedata){
        return JSON.stringify(requedata);
    }
})
uploadFile('/mock/60dae3958621c72358c0d4d7/template/lml/uploadFile?aa=11',{file1: ['测试1','测试2']},{lml:'11'},{method: 'get'})
```
