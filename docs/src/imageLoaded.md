## \_imageLoaded
<p>图片是否加载完毕
//原生
xiu.onload = xiu.onreadystatechange = function() {
if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
1、IE8及以下版本不支持onload事件，但支持onreadystatechange事件；
2、readyState是onreadystatechange事件的一个状态，值为loaded或complete的时候，表示已经加载完毕。</p>

## imageLoaded(source, iscross) ⇒ <code>Promise</code>
<p>处理图片加载完毕</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> \| <code>String</code> |  |
| iscross | <code>Boolean</code> | <p>是否跨域 | 默认：true</p> |

**Example**  
```javascript
imageLoaded(source)
```
