## downloadFile(url, [name], [apis]) ⇒ <code>Promise</code>
<p>下载文件</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> |  |
| [name] | <code>String</code> | <p>文件名</p> |
| [apis] | <code>Object</code> | <p>下载配置</p> |

**Example**  
```javascript
setUrlHttps(url) //保证域名同源
downloadFile('https://res.wyins.net/autoUpload/admin/ab5f8089-efec-4369-8375-7e36db88349c.xlsx','表格')
downloadFile('https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80', _keyid())

https://www.qbao100.com/proxy/proposal.electronic.download?policyid=3E3E126C6F124FF7BCC49B9A460B52DE
# 配置信息
cors: '', //跨域
type: '', //下载文件类型
force: false, //强制下载
ext: true, //文件名是否添加后缀 -- 火狐不加不识别
```
