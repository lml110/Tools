## setURLParams(url, [changes], [useChange])
<p>设置url中参数覆盖</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>链接</p> |
| [changes] | <code>Object</code> | <p>改动集合</p> |
| [useChange] | <code>Boolean</code> | <p>是否完全使用改动的集合</p> |

**Example**  
```javascript
console.log(setURLParams('group_product_detail_3.html/#/lml?nw=1&productId=880',{productId:'604',lml:'模式',nw:null}));
//group_product_detail_3.html/#/lml?productId=604&lml=%E6%A8%A1%E5%BC%8F

setURLParams('',{a:1}) // 如a有-替换，无-添加
setURLParams('',{a:null}) // 如a有-删除
setURLParams('',changes,true) //完全使用changes参数
```
