## \_paramsToString(params, str, filterList) ⇒ <code>String</code> \| <code>Array</code>
<p>对象参数转url字符串</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <p>对象参数</p> |
| str | <code>String</code> | <p>前缀符号 有值则返回字符串</p> |
| filterList | <code>Array</code> | <p>过滤空值 默认[undefined,null]</p> |

**Example**  
```javascript
console.log('_paramsToString',_paramsToString({11:'21','22':'就梵蒂冈'},''));
_paramsToString(requedata,'?')
```
