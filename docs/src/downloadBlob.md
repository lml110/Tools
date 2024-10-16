## downloadBlob(blob, [name], [type])
<p>数据流下载</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| blob | <code>any</code> | <p>[response.data]</p> |
| [name] | <code>String</code> | <p>文件名</p> |
| [type] | <code>String</code> | <p>application/vnd.ms-excel</p> |

**Example**  
```javascript
// 场景：动态链接中数据流处理下载
downloadBlob([response.data],name,'application/vnd.ms-excel')
//其他: window.open(`${process.env.BASE_API}/orderListExcel?${params}`, '_blank');

=== linkToBlob
import_invoiceExcel(file) {
    const url = `/api/invoice/importInvoiceExcel`;
    const fileData = { 'file': [file] };
    return new Promise((resolve, reject) => {
        return this.$post(url, {}, { fileData },{ responseType: 'blob' }).then((data) => {
            const tt = typeOf(data), size = getObjVal(data,'size');
            console.log(tt, size, data);
            // 如果有文件流返回则下载并返回错误，否则成功
            if(tt == 'Blob' && size){
                const fileName = reFileName(_trim(file.name, true));
                // downloadBlob(data,`${fileName}_${+new Date()}.${extName}`)
                downloadBlob(data,fileName)
                reject('失败');
            }else{
                this.$tipsMessage('专票快递单号提交成功！', 1)
                resolve('成功');
            };
        }).catch((err) => {
            console.error('上传失败',err);
            reject('失败')
        });
    });
},
```
