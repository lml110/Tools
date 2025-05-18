## regHtmlRepImg(str, forCall) ⇒ <code>String</code>
<p>替换编辑图片标签</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | <p>源代码</p> |
| forCall | <code>function</code> | <p>替换函数</p> |

**Example**  
```javascript
_letslazyload(content) {
    return regHtmlRepImg(content,function(src){
        let html = src + '"';
        html += ` data-src="${src}" key="${src}"`;
        return html;
    });
},
```
