## getIdCardInfo(idCard, isAge) ⇒ <code>Object</code>
<p>解析身份证信息</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| idCard | <code>String</code> \| <code>Number</code> |  |
| isAge | <code>boolean</code> | <p>是否需要包含年龄</p> |

**Example**  
```javascript
console.log(getIdCardInfo(331081198609201016,1));
// 身份证类型时自动填充
change_insuredIdNo(insuredIdNo,formInfo = this.formInfo){
    if(!insuredIdNo) return false;
    const { insuredIdType } = formInfo;
    if(insuredIdType==1){
        const idCardInfo = getIdCardInfo(insuredIdNo);
        if(!idCardInfo.birth) return false;
        if(!formInfo.birthDay) this.formInfo.birthDay = formInfo.birthDay = idCardInfo.birth;
        if(!formInfo.insuredSex) this.formInfo.insuredSex = formInfo.insuredSex = idCardInfo.sex;
    };
},
// sex: 1-男 2-女
// birth: 生日
// age: 年龄
```
