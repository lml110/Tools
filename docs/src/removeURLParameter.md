## removeURLParameter(url, parameter) ⇒ <code>String</code>
<p>移除URL某个参数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> |  |
| parameter | <code>String</code> | <p>移除值</p> |

**Example**  
```javascript
console.log(removeURLParameter("https://broker-2a.winbaoxian.cn/account-merge.html?aa=1#ss/?q=1&mg=1&pop=3","mg"));
// https://broker-2a.winbaoxian.cn/account-merge.html?q=1&pop=3
console.log(removeURLParameter("https://broker-2a.winbaoxian.cn/account-merge.html#ss/?q=1&mg=1&pop=3","mg"));
// https://broker-2a.winbaoxian.cn/account-merge.html#ss/?q=1&pop=3
```
