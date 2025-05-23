## arrayToTree(res, options, sucessFn) ⇒ <code>Array</code>
<p>数组转树结构</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Array</code> |  |
| options | <code>Object</code> | <p>参数</p> |
| sucessFn | <code>function</code> | <p>完成后函数</p> |

**Example**  
```javascript
默认参数：
{
    parentProperty: 'parentId',
    childrenProperty: 'children',
    customID: 'id',
    rootID: 0 //默认根-父id的值
    level: '', //areaLevel = 用于区分完全相同的但又不在同一级别的重复元素
    parentFN: null,
    ifFN: null,
    muiErrFn: null, //多个重名错误
}
const result = arrayToTree(menuList, { parentProperty: 'pid', customID: 'id' },routerSort);
//重复地址数据生成树结构
return this.$get('https://bxs.wyins.net.cn/api/getAreaCode?productId=80132').then(data => {
    const provinceList = data.province || [],
    cityList = data.city || [],
    areaList = data.area || [];
    const resList = arrayToTree(
        arr2Merger(
            areaList,cityList,provinceList
        ),{
            customID: 'code',
            level: 'areaLevel'
        })
    this.areaCodeList = resList;
}).catch((err)=>{});
```
