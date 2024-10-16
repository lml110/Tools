## reFileName(str, tag) ⇒ <code>String</code>
<p>重命文件名称</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> |  |
| tag | <code>String</code> | <p>替换值 (默认加唯一值)</p> |

**Example**  
```javascript
console.log(reFileName('工号导入模板.1221.sa.xlsx')); //工号导入模板.1221.sa_2y954rg58x6000.xlsx
console.log(reFileName('工号导入模板.1221.sa.xlsx','-tag')); //工号导入模板.1221.sa-tag.xlsx
reFileName(_trim(file.name,true)) //服务端需求：文件名要去除空格，有空格服务端下载不了（清除全局空格）
```
