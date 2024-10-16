## \_getParams(url, [name]) ⇒ <code>Object</code> \| <code>String</code>
<p>获取URL字符串的参数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>地址</p> |
| [name] | <code>String</code> | <p>可选-单值</p> |

**Example**  
```javascript
_getParams('https://www.baidu.com:888/uuid/uuid2/demo.php?aaa=111&bbb=222&ccc=333#username?a=1&b=2') == {a: '1', b: '2'}
```
