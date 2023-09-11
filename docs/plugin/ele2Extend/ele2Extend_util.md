## tipsMessage(content, type, duration) ⇒ <code>message</code>
<p>提示框</p>

**Date**: 2021-10-26  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | <p>提示内容</p> |
| type | <code>Number</code> | <p>类型 | 默认：2 - 警告</p> |
| duration | <code>Number</code> | <p>延迟时间 | 默认：2000毫秒</p> |

**Example**  
```javascript
this.$tipsMessage('asf',1) // 成功提示
```
## tips2(content, url, reqdata, isTrue) ⇒ <code>confirm</code>
<p>此操作将永久删除该产品, 是否继续?</p>

**Date**: 2021-10-26  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | <p>提示内容</p> |
| url | <code>String</code> | <p>请求地址</p> |
| reqdata | <code>Object</code> | <p>请求参数</p> |
| isTrue | <code>function</code> | <p>判断函数</p> |

**Example**  
```javascript
click_delProduct(){
  this.$tips2('永久删除该产品','product/deleteProduct',{productId:this.exportImportObj.id}).then((data) => {
    this.exportImportObj.exportImportVisible = false;
    this.fetchData();
  }).catch((err)=>{
    console.log('catch',err);
  });
},
```
## getEleHeight(nodeName) ⇒ <code>Number</code>
<p>获取元素高度</p>

**Date**: 2021-10-26  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| nodeName | <code>String</code> | 

**Example**  
```javascript
getEleHeight(ele).then
```
