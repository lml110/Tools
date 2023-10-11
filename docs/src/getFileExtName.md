## getFileExtName(std, 是否包含文件名) ⇒ <code>String</code>
<p>获取后缀名并转换小写</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| std | <code>str</code> | <p>文件地址</p> |
| 是否包含文件名 | <code>isName</code> |  |

**Example**  
```javascript
console.log(getFileExtName('04/2019110405043483.PNG.JPG')); // == jpg
console.log(getFileExtName('04/2019110405043483.PNG.JPG',true)); // === 2019110405043483.png.jpg
console.log(getFileExtName('04/2019110405043483.PNG.JPG?v=1&32')); // == jpg
```
