## mergeJson(keyName, refs) ⇒ <code>Array</code>
<p>根据标识合并多个单层数组或对象</p>

**Date**: 2019-06-27  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| keyName | <code>String</code> | <p>唯一标识</p> |
| refs | <code>Array</code> \| <code>Object</code> | <p>arguments 单层数组或对象</p> |

**Example**  
```javascript
//## 需要处理数据必须是同类型
const datumList = [{
  "configId": 3,
  "datumId": 3,
  "datumName": "退保申请书",
  "exampleUrl": "https://media.wyins.net/invoiceUpload/groupadmin/20230423/dd2f6f77db114b90a6fd1be45ab52c5c.pdf",
  "description": null,
  "urlList": null
}, {
  "configId": 4,
  "datumId": 4,
  "datumName": "测试申请书",
  "exampleUrl": "https://media.wyins.net/invoiceUpload/groupadmin/20230423/dd2f6f77db114b90a6fd1be45ab52c5c.pdf",
  "description": null,
  "urlList": null
}]
const checkFailResultList = [{
  "id": 4,
  "cancellationId": 1,
  "datumId": 3,
  "datumName": "退保申请书",
  "type": 1,
  "status": 0,
  "reason": 'datumId：4失败原因',
  "contentType": 1,
  "description": null,
  "urlList": ['https://res.winbaoxian.com/autoUpload/common/150-150_491860a0a634e86.jpg', 'https://res.wyins.net/autoUpload/common/gf_901_20191213_ywshjtgj.pdf', 'https://media.wyins.net/group/团险职业上传模板_cy464ut2wjk00.xlsx']
}]
mergeJson('datumId',datumList,checkFailResultList)
mergeJson(curs=>{
    return ''+curs.datumId + curs.id
},datumList,checkFailResultList)
mergeJson('datumId',datumList[0],datumList[1],checkFailResultList[0])
```
