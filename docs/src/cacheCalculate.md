## cacheCalculate(Fn) ⇒ <code>function</code>
<p>缓存计算值</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| Fn | <code>function</code> | <p>处理函数</p> |

**Example**  
```javascript
const calculateFn = (num)=>{
    console.log("大数计算")
    const startTime = new Date()
    for(let i=0;i<num;i++){} // 大数计算
    const endTime = new Date()
    console.log(num, endTime - startTime)
    return {
        num,
        time: endTime - startTime
    }
}
let cashedCalculate = cacheCalculate(calculateFn)
// 缓存参数：值相同时很快返回
console.log(cashedCalculate(10_0_00_000_000));
console.log(cashedCalculate(10_000_000_000));
console.log(cashedCalculate(1e10));
```
