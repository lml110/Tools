## setURLParams(url, changes)
<p>设置url中参数覆盖</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>链接</p> |
| changes | <code>Object</code> | <p>改动集合</p> |

**Example**  
```javascript
console.log(setURLParams('group_product_detail_3.html/#/lml?nw=1&productId=880',{productId:'604',lml:'模式',nw:null}));
//group_product_detail_3.html/#/lml?productId=604&lml=%E6%A8%A1%E5%BC%8F
```
