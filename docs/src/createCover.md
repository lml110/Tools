## createCover([clear], zIndex)
<p>创建透明蒙层(应用场景：点击触发后其他操作不可触发)</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| [clear] | <code>any</code> | <p>是否清除</p> |
| zIndex | <code>String</code> \| <code>Number</code> | <p>层级-9999</p> |

**Example**  
```javascript
createCover(); //创建
createCover(true); //删除
createCover(0, 999); //改变层级
```
