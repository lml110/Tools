## getFileName(fileName, 是否包含后缀名) ⇒ <code>String</code>
<p>获取文件名称</p>

**Date**: 2019-06-10  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>String</code> | <p>文件地址</p> |
| 是否包含后缀名 | <code>isExt</code> |  |

**Example**  
```javascript
console.log(getFileName('a/b/c.js')); // === c
console.log(getFileName('/aa/bb/CC/工号导入模板.1221.sa.xlsx')); // 工号导入模板.1221.sa
console.log(getFileName('/aa/bb/Cc/工号导入模板.1221.sa.xlsx',true)); //['工号导入模板.1221.sa', 'xlsx']
```
