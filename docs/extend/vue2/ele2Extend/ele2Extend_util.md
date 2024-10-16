## tipsMessage(content, type, duration) ⇒ <code>null</code>
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
## tips2(content, url, reqdata, options) ⇒ <code>Promise</code>
<p>此操作将永久删除该产品, 是否继续?</p>

**Date**: 2021-10-26  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | <p>提示内容</p> |
| url | <code>String</code> | <p>请求地址</p> |
| reqdata | <code>Object</code> | <p>请求参数</p> |
| options | <code>Object</code> | <p>配置信息</p> |

**Example**  
```javascript
// options
{
    meta:'$get' //请求方式
    isChangeTxt: false, //是否改变文案
    isTrue: ()=>{}, //判断函数
}

this.$tips2('永久删除该组','product/deleteProductVerification',{type:this.type, id},{ meta:'$get' }).then((data) => {
    this.$tipsMessage('删除成功',1)
    return this.GetList();
}).catch((err)=>{
    console.log('catch',err);
});
this.$tips2('调用接口退保').then(() => {
    return this.$get('refund/refundPolicy',{ policyUuid }).then((data) => {
        console.log('调用接口退保',data);
        return this.setTableData();
    }).catch((err)=>{
        console.log('err',err);
    });
}).catch((err)=>{});
```
## getEleHeight(nodeName) ⇒ <code>Promise</code>
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
