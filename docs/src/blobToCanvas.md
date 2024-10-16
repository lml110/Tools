## blobToCanvas(blob, [options]) ⇒ <code>Promise</code>
<p>文件流转Canvas</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| blob | <code>Blob</code> | <p>文件流</p> |
| [options] | <code>Object</code> | <p>配置项</p> |

**Example**  
```javascript
//处理本地流，远程已下载后的场景
imageToBlob(imgSrc).then(blob => {
    blobToCanvas(blob,{
        width: 210,
        height: 270,
    }).then(canvas => {
        const type = 'image/jpeg'
        let base64 = canvas.toDataURL(type, 1)
        console.log(getImgSize(base64));
    }).catch((err)=>{});
}).catch((err) => {});
```
