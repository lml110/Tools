## getAllLeftTime() ⇒ <code>Class</code>
<p>获取剩余时间的方法类</p>

**Date**: 2022-11-23  
**Author**: liumouliang  
**Example**  
```javascript
//# Key: ['w','d','h','m','s','milliscd']

const allLeftTime = new getAllLeftTime();
console.log(allLeftTime.getLeftTimeStr(33460007));
```
## getLeftTimeList(millisecond) ⇒ <code>Array</code>
<p>获取剩余时间对应的数据列表</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| millisecond | <code>Number</code> | <p>毫秒</p> |

**Example**  
```javascript
allLeftTime.getLeftTimeList(33460007) //[{}]
```
## getLeftTimeStr(millisecond, filterFn) ⇒ <code>String</code>
<p>获取剩余时间的友好格式</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| millisecond | <code>Number</code> | <p>毫秒</p> |
| filterFn | <code>function</code> | <p>过滤函数</p> |

**Example**  
```javascript
// allLeftTime.getLeftTimeStr(33460000,_=> _.key != 'milliscd')
// allLeftTime.getLeftTimeStr(33460007)
// 09小时17分40秒
```
