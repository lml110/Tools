## logManager : <code>Object</code>
<p>日志管理</p>

**Example**  
```javascript
this.info()this.warn()this.error()this.setMsg() // 从基础库2.7.3开始支持this.addMsg() // 从基础库2.8.1开始支持
```
## setLog(tag, arg)
<p>自定义日志</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| tag | <code>String</code> | <p>自定义使用日志的类型</p> |
| arg | <code>arg</code> | <p>多个自定义参数</p> |

**Example**  
```javascript
setLog('warn', '发布发生异常=== ' + code, statusCode[code]);
```
## trace() ⇒ <code>null</code>
<p>正常日志</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
//调试+正常日志trace(arguments)
```
## warning() ⇒ <code>null</code>
<p>错误日志</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
//调试+错误日志warning(arguments)
```
