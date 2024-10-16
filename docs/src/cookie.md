## cookie(key, value, options) ⇒ <code>any</code>
<p>cookie简易版操作</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> |  |
| value | <code>any</code> |  |
| options | <code>Object</code> | <p>配置信息</p> |

**Example**  
```javascript
/// cookie('key') //取值
/// cookie('key',val) 设置
/// cookie('key',null) //删除

cookie('lml',null)

cookie('lml','魔尊')
console.log(cookie('lml'),Cookies.keys(),Cookies.info());

cookie('token',null,{domain:'.wyins.net.cn'})
cookie('lml','123',{
	path: '/',
	domain: '.wyins.net.cn',
})
cookie('lml1','1231')
document.cookie = "username=Darren;path=/;domain=.wyins.net.cn"
```
