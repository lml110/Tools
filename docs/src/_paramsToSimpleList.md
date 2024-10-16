## \_paramsToSimpleList(params, [str], [filterList]) ⇒ <code>Array</code>
<p>对象完全转换简单列表</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | <p>对象参数</p> |
| [str] | <code>String</code> | <p>链接符号 默认'='</p> |
| [filterList] | <code>Array</code> | <p>过滤空值 默认[undefined,null]</p> |

**Example**  
```javascript
应用场景：控制台展示 || 不需要（过滤，转码，适配返回数据）
console.log(_paramsToSimpleList({11:'21','22':'就梵蒂冈','pop':null})); //['11=21', '22=就梵蒂冈']
console.log(_paramsToSimpleList({11:'21','22':'就梵蒂冈','pop':null},'++')); //['11++21', '22++就梵蒂冈']
console.log(_paramsToSimpleList({11:'21','22':'就梵蒂冈','pop':null},'++',[])); //['11++21', '22++就梵蒂冈', 'pop++']
```
