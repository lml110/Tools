## regDesensitized(str, type, end, [fils]) ⇒ <code>String</code>
<p>脱敏函数</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> |  |
| type | <code>String</code> \| <code>Number</code> | <p>类型 || 公共起始保留值 从0开始</p> |
| end | <code>String</code> \| <code>Number</code> | <p>替换可选参数 || 公共结束保留值</p> |
| [fils] | <code>Array</code> | <p>公共保留索引值 到str.length结束</p> |

**Example**  
```javascript
console.log(regDesensitized('330523199912233124',3,4,[6,7,8,9])); //微易-身份证 330***1999****3124
console.log(regDesensitized('330523199912233124',4,4)); //3305**********3124
console.log('idNo',regDesensitized('330523199912233124','id')); //330523*********124
console.log('mobile',regDesensitized('13888888888','phone')); //138****8888
console.log('mobile',regDesensitized('13888888888','phone','***')); // ***8888
console.log('name',regDesensitized('张三','name')); //张*
console.log('addr',regDesensitized('四川省成都市高新区xxx小区31栋123号','addr')); //四川省成都市高新区************
console.log('bank',regDesensitized('33052319930206水电费开店24154015','bank')); //***********************4015
```
