## getAllLeftTime
**Date**: 2022-11-23  
**Author**: liumouliang  
### new getAllLeftTime([options])
<p>class-获取剩余时间的方法类</p>


| Param | Type | Description |
| --- | --- | --- |
| [options] | <code>\*</code> | <p>配置信息</p> |

**Example**  
```javascript
//# Key: ['w','d','h','m','s','milliscd']
//# isDebounce 防止时间变动时宽度变化而抖动 - 增加`span.time-num`容器

// 配置
const allLeftTime = new getAllLeftTime({ isDebounce: true});
allLeftTime.setKeys(['d','h','m'])
allLeftTime.unit['m'].label = '分钟'

const _leftTime = new getAllLeftTime();
const aa = 100*24*36e5+1564564
console.log(_leftTime.getLeftTimeList(aa)); //[{}]
console.log(_leftTime.getLeftTimeStr(aa)); //14周02天00小时26分04秒
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
## setLabel(options)
<p>设置unit-label</p>


| Param | Type | Description |
| --- | --- | --- |
| options | <code>\*</code> | <p>unit-label</p> |

**Example**  
```javascript
const _allLeftTime = new getAllLeftTime();
_allLeftTime.setLabel({
    'd': '天: ',
    'h': '小时: ',
    'm': '分钟: ',
});
console.log(_allLeftTime.getLeftTimeStr(36 * 60 * 60 * 1000));
```
