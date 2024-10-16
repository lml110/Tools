## Locals()
<p>prott-本地缓存集合</p>

## get(key) ⇒ <code>any</code>
<p>获取</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 

**Example**  
```javascript
Locals.get(key)
```
## set(key, [value])
<p>设置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>String</code> | <p>无key清空</p> |
| [value] | <code>any</code> | <p>空值过期</p> |

**Example**  
```javascript
Locals.set(key, value)
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
Locals.remove(key)
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
Locals.clear()
```
## keys() ⇒ <code>Array</code>
<p>key值集合</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Locals.keys()
```
## info() ⇒ <code>Object</code>
<p>缓存信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
Locals.info()
```
