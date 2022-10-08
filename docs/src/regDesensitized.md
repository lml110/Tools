## \_getCommonNo(str, begin, end, fils) ⇒ <code>string</code>
<p>脱敏公用</p>


| Param | Description |
| --- | --- |
| str | <p>脱敏字符串</p> |
| begin | <p>起始保留长度，从0开始</p> |
| end | <p>结束保留长度，到str.length结束</p> |
| fils | <p>保留索引，到str.length结束</p> |

## regDesensitized(str, type, end, fils) ⇒ <code>String</code>
<p>脱敏函数</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> |  |
| type | <code>String</code> \| <code>Number</code> | <p>类型 || 公共开始值</p> |
| end | <code>String</code> \| <code>Number</code> | <p>替换可选参数 || 公共结束值</p> |
| fils | <code>Array</code> | <p>公共保留索引值</p> |

**Example**  
```javascript
console.log(regDesensitized('330523199912233124',3,4,[6,7,8,9])); //微易-身份证
console.log('idNo',regDesensitized('330523199912233124','id'));
console.log('mobile',regDesensitized('13888888888','phone'));
console.log('mobile',regDesensitized('13888888888','phone','***'));
console.log('name',regDesensitized('张三','name'));
console.log('addr',regDesensitized('四川省成都市高新区xxx小区31栋123号','addr'));
console.log('bank',regDesensitized('33052319930206水电费开店24154015','bank'));
```
