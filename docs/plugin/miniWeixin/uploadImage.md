## uploadImage(fileDir, filePaths) ⇒ <code>Promise</code>
<p>上传图片</p>

**Returns**: <code>Promise</code> - <p>文件上传成功后的地址</p>  
**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| fileDir | <code>String</code> | <p>文件储存位置</p> |
| filePaths | <code>Array</code> | <p>文件临时地址</p> |

**Example**  
```javascript
//需转化成微信内置的临时文件信息
uploadImage('double-record-system',[http://tmp/FSVvf9GXWP1n439c5d534a1274ccfde7d2ebf8b3b9fc.png])
 this.$promise(wx.chooseImage,{
    cont: 1
}).then(qq => {
    let tempFilePaths = qq.tempFilePaths
    console.log('tempFilePaths',qq,tempFilePaths);
    uploadImage('double-record-system',tempFilePaths).then(data => {
        console.log('then',data);
    }).catch((err)=>{});
    
}).catch((err)=>{}); 

this.trace("快照执行成功-snapshot");
return uploadImage("double-record-system", [
    data.tempImagePath,
]);

click_mapDepot() {
    return this.$promise(wx.chooseImage, {
        cont: 1,
        sourceType: ["album"],
    })
        .then((qq) => {
            let tempFilePaths = qq.tempFilePaths;
            this.trace("图库上传-tempFilePaths", qq, tempFilePaths);
            return uploadImage("double-record-system", tempFilePaths);
        })
        .then((data) => {
            this.trace("图库-uploadImage === ", data);
            // wxClipData(data[0])
            return this.getRealPersonVerify(data[0]);
        })
        .catch((err) => {
            this.trace("图库-takePictureFail === ", err);
            return this._recover();
        });
},
```
