## \_getAllParams(url) ⇒ <code>Object</code>
<p>获取Http全部信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| url | <code>String</code> | 

**Example**  
```javascript
// 对SPA中带#的链接取的参数值有问题
console.log(_getAllParams('https://brokerage-admin.wyins.net.cn/#/home?nw=1&productId=880'));
_getAllParams('https://www.baidu.com:888/uuid/uuid2/demo.php?aaa=111&bbb=222&ccc=333#username')

// 多页面之间的跳转
function getWebPath() {
    const { authority, protocol, directory } = _getAllParams();
    let path = protocol + '://' + authority + directory;
    return path;
};
export function $go(url, params) {
    if (!url) _error('跳转地址不存在');

    let pageUrl = getWebPath() + url + '.html'
    let paramsUrl = _paramsToString(params, '?')

    pageUrl += paramsUrl;
    window.location.href = pageUrl;
};
```
