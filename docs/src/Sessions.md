## Sessions()
<p>prott-会话缓存集合</p>

## get(key) ⇒ <code>any</code>
<p>获取</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

**Example**  
```javascript
Sessions.get(key)
```
## set(key, [value])
<p>设置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> |  |
| [value] | <code>any</code> | <p>空值删除</p> |

**Example**  
```javascript
Sessions.set(key, value)
```
## remove(key) ⇒ <code>any</code>
<p>删除单个</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

**Example**  
```javascript
Sessions.remove(key)
```
## clear([key]) ⇒ <code>any</code>
<p>删除</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| [key] | <code>String</code> | <p>删除值|默认全部删除</p> |

**Example**  
```javascript
Sessions.clear()
```
## keys() ⇒ <code>Array</code>
<p>key值集合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Sessions.keys()
```
## info() ⇒ <code>Object</code>
<p>缓存信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Sessions.info()
```
