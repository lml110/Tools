## getFileExtName(std, [isName]) ⇒ <code>String</code>
<p>获取后缀名并转换小写</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| std | <code>String</code> | <p>文件地址</p> |
| [isName] | <code>Boolean</code> | <p>是否包含文件名</p> |

**Example**  
```javascript
console.log(getFileExtName('04/2019110405043483.PNG.JPG')); // == jpg
console.log(getFileExtName('04/2019110405043483.PNG.JPG',true)); // === 2019110405043483.png.jpg
console.log(getFileExtName('04/2019110405043483.PNG.JPG?v=1&32')); // == jpg
```
