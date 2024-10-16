## preLoadStyle(url, urlas) ⇒ <code>Promise</code>
<p>预加载link资源配置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>地址</p> |
| urlas | <code>String</code> | <p>资源类型 script || image || style(默认)</p> |

**Example**  
```javascript
preLoadStyle(url).then
<link rel="preload" href="/base.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" type="text/css" href="/base.css"></noscript>

<link rel="preload" href="/vue.min_2.6.10.js" as="script" 
    onload="var script = rootDocument.createElement('script'); script.src = this.href; rootDocument.body.appendChild(script);">
<noscript><strong>We're sorry but web doesn't work properly without JavaScript enabled. Please enable it to continue.</strong></noscript>
```
