## numberComma(source, [length]) ⇒ <code>String</code>
<p>用于分割数字，一般用于格式化金额</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>any</code> |  |
| [length] | <code>Number</code> | <p>可填-分割位数|默认为3位</p> |

**Example**  
```javascript
// 只处理整数
numberComma(12454542.55111) === 12,454,542.55111
```
