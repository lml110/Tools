## filterData(source, queryFn) ⇒ <code>Array</code>
<p>深度过滤数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> \| <code>Object</code> | <p>源码</p> |
| queryFn | <code>function</code> | <p>筛选函数</p> |

**Example**  
```javascript
// (当前操作值, 当前索引值, 操作元素, 逐级keys, 上级父元素)
// 用于查询文件目录
let resData = filterData(data, (res, ix,ss, pk,ps) => {
    // console.log(res, ix, ss, pk,ps);
    return ~res.indexOf('index') && {
        name: res,
        path: pk.join('/'),
    }
});
console.log(resData);
// 只给了树结构中的最后一条数据，查询出对应元素的结构,
// 但有个缺点：这是查询所有元素的，即便查询到目标依然会继续查询，这样也可防止出现多个重名情况
// 关联查询 使用 key =='id' && value == 51432 //先查询出具体的值 && curs.level == 3
fill_data(data){
    trace('fill_data',this.dataList)
    const valueData = filterData(this.dataList, (value, key, curs, pk,ps)=>{
        // trace('fill_data == ',value, key)
        if(key =='id' && value == 51432){
            let _valueList = [];
            let _valueKeys = [];
            _for(pk, _ =>{
                _valueKeys.push(_);
                if(_ !== "children"){
                    const obj = getObjVal(this.dataList, _valueKeys.join('.'));
                    if(obj){
                        _valueList.push(getOneObj(obj,'children'));
                    };
                }
            });
            return _valueList;
        }
    },(value, key) => {
        return !!(value.id) || key === 'children'; //查询的是对象并且存在id || 属性是children (value is array)
    })
    trace('valueData == ',valueData)
},
```
