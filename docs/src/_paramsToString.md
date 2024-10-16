## \_paramsToString(params, [str], [filterList]) ⇒ <code>String</code> \| <code>Array</code>
<p>对象参数转url字符串</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <p>对象参数</p> |
| [str] | <code>String</code> | <p>前缀符号 有值则返回字符串</p> |
| [filterList] | <code>Array</code> | <p>过滤空值 默认[undefined,null]</p> |

**Example**  
```javascript
_paramsToSimpleList
应用场景：转换为适用于url字符串的场景
console.log(_paramsToString({11:'21','22':'就梵蒂冈','pop':null})); //['11=21', '22=%E5%B0%B1%E6%A2%B5%E8%92%82%E5%86%88']
console.log(_paramsToString({11:'21','22':'就梵蒂冈','pop':null},'')); //11=21&22=%E5%B0%B1%E6%A2%B5%E8%92%82%E5%86%88
console.log(_paramsToString({11:'21','22':'就梵蒂冈','pop':null},'?')); ?11=21&22=%E5%B0%B1%E6%A2%B5%E8%92%82%E5%86%88
console.log(_paramsToString({11:'21','22':'就梵蒂冈','pop':null},'?',[])); ?11=21&22=%E5%B0%B1%E6%A2%B5%E8%92%82%E5%86%88&pop=
```
