## setRemoteImgInfo(data, callback)
<p>批量替换远程图片为本地</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> \| <code>Array</code> \| <code>Stting</code> | <p>处理数据</p> |
| callback | <code>function</code> | <p>成功回调</p> |

**Example**  
```javascript
export const setRemoteImgInfo = function (...arg) {
    // 添加缓存记录
    // if(!window.$$global.RemoteImgInfo) window.$$global.RemoteImgInfo = {}
    // let RemoteImgInfo = window.$$global.RemoteImgInfo;
    return _for(arg, (_) => _setRemoteImgInfo(_));
};
setRemoteImgInfo({'err':'https://'})
setRemoteImgInfo(["https://"])
setRemoteImgInfo("https://")
```
