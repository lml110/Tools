## downloadLink(link, [name], [callback]) ⇒ <code>void</code> \| <code>function</code>
<p>地址文件下载</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| link | <code>String</code> |  |
| [name] | <code>String</code> | <p>文件名</p> |
| [callback] | <code>function</code> | <p>回调</p> |

**Example**  
```javascript
downloadLink(getFileURL(dataURLToBlob || imageToBlob),saveName)
//其他： window.location.href(如果错误返回，页面跳转失败) || window.open(url,'_blank') mp3之类是打开播放
//场景：静态链接中返回数据流
```
