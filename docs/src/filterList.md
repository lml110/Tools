## filterList(sourceArr, queryFn, levelFn, [childSuccessFn]) ⇒ <code>Array</code>
<p>递归查询数组数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>数组json</p> |
| queryFn | <code>function</code> | <p>查询函数</p> |
| levelFn | <code>function</code> \| <code>string</code> | <p>判断递归，返回字段</p> |
| [childSuccessFn] | <code>function</code> | <p>处理已完成的子数组</p> |

**Example**  
```javascript
//- parent - 上级元素的参数
//- parentKeys - 元素在数据中的对应位置
//- levelv - 目前在哪个层级
const data = [{ aa: 11, 'children': [{ children: [{ aa: 33, bb: 31, children: [{ aa: 33, bb: 32 }, { aa: 44 }] }], aa: 22, }] }]
filterList(this.coInsuranceCompanyList, _=> _.bb); //只返回bb数据
filterList(this.coInsuranceCompanyList, _=> _.bb && _); //如果bb存在则返回全部

let list = filterList(data, function(cur, parents, parentKeys, level) {
    // 数组没有进行拷贝，不要随便更改属性
    if (cur.code == 150303) {
        // console.log(cur, parents, parentKeys, level);
        return {
            cur: getOneObj(cur, ['children']),
            parentKeys: parentKeys.slice(0),
            level,
        }
    }else{
        return false;
    }
}, 'children'); // [{"aa":33,"bb":31},{"aa":33,"bb":32}]

let list2 = filterList(data, function(el, parents) {
    if (el.aa == 33) return getOneObj(el, ['children'])
}, 'children',(res,list)=>{
    return list
}); // [{"aa":33,"bb":32}] == 只返回了最后处理的元素
```
