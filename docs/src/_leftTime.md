## allLeftTime
<p>直接使用getAllLeftTime</p>

**Example**  
```javascript
// 应用场景：只用于相同的配置
_leftTime.setLabel({
    'd': '天: ',
    'h': '小时: ',
    'm': '分钟: ',
});
_leftTime.getLeftTimeStr(36*3600)
// 最大单位不计算
_leftTime.unit['w'].unit = 0
delete _leftTime.unit['w']

const aa = 100*24*36e5+1564564
console.log(_leftTime.getLeftTimeList(aa));
console.log(_leftTime.getLeftTimeStr(aa));
```
