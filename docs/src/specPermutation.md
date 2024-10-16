## specPermutation(list, data, filter, ...refs) ⇒ <code>Array</code>
<p>二维数组中数组元素的全排列 == 规格 废弃 与arrayToTree相同</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | <p>[['a1','a2'],['b1','b2']]</p> |
| data | <code>Object</code> | <p>{'a1':valData}</p> |
| filter | <code>Array</code> | <p>['id','valueName'] valData.id</p> |
| ...refs | <code>any</code> | <p>data过滤数组 || ','分隔符</p> |

**Example**  
```javascript
specPermutation(goodsSpecList,data,['speIds','speType'],['id','valueName'],'+')
```
