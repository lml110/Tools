## Cookies()
<p>Cookie集合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
document.cookie = 'escaped=%u5317'
document.cookie = 'default=%E5%8C%97'
var cookies = Cookies.withConverter({
  read: function (value, name) {
    if (name === 'escaped') {
      return unescape(value)
    }
    // Fall back to default for all other cookies
    return Cookies.converter.read(value, name)
  }
})
cookies.get('escaped') // 北
cookies.get('default') // 北
cookies.get() // { escaped: '北', default: '北' }
```
## get(key) ⇒ <code>Value</code>
<p>获取</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

**Example**  
```javascript
Cookies.get(key)
```
## info() ⇒ <code>Object</code>
<p>缓存信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Cookies.info()
```
## keys() ⇒ <code>Array</code>
<p>key值集合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Cookies.keys()
```
## set(key, value, options)
<p>设置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>无key清空</p> |
| value | <code>Value</code> | <p>空值过期</p> |
| options | <code>Object</code> | <p>配置信息</p> |

**Example**  
```javascript
//options.expires - 过期时间 [Date|Number] 1-加一天 || new Date('2019-1-20')
//options.path - 指定路径 | 默认 '/'
//options.domain - 域
//options.secure - 安全
Cookies.set(key, value)
```
## remove(key) ⇒ <code>null</code>
<p>删除单个</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

**Example**  
```javascript
Cookies.remove(key)
```
## clear(key) ⇒ <code>null</code>
<p>删除</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>删除值|默认全部删除</p> |

**Example**  
```javascript
Cookies.clear()
```
## withAttributes(attributes) ⇒ <code>Object</code>
<p>初始属性集合</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| attributes | <code>Object</code> | <p>属性配置</p> |

**Example**  
```javascript
Cookies.withAttributes({ path: '/' })
```
## withConverter(converter) ⇒ <code>Object</code>
<p>初始转码函数</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| converter | <code>Object</code> | <p>转码函数</p> |

**Example**  
```javascript
Cookies.withConverter({
          read(value, name){}
          write(value, name){}
        })
```
