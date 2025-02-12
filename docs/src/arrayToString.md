## arrayToString(source, [tag]) ⇒ <code>String</code>
<p>数组转字符串</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> |  |
| [tag] | <code>String</code> | <p>间隔符号默认 ','</p> |

**Example**  
```javascript
console.log(arrayToString([111, null ,true, '数据'])); // 111,true,数据
console.log(arrayToString([{a:'是对的'},'22',1,'都是',[33,44]])); //22,1,都是
console.log(arrayToString([' ',' s',' dd '])); //'s,dd' //自动去掉收尾空格
// 应用场景：过滤数组元素的空值
const listStr = arrayToString([' ','',' ']); //''
return listStr ? listStr.split(',') : [];  //[];
```
