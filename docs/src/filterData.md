## \_filterData()
<p>目标：</p>
<ol>
<li>遍历所有元素中的所有有效值</li>
<li>_levelFn：判断是否进行递归，并返回递归字段</li>
</ol>

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
```
