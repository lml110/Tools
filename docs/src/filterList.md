## \_queryFn
<p>目标：</p>
<ol>
<li>遍历所有元素，同时添加满足条件的元素，元素可重新定义</li>
<li>_levelFn：判断是否进行递归，并返回递归字段</li>
<li>_childSuccessFn：处理已完成的子数组，=== 可用于treeToArray</li>
</ol>

## filterList(sourceArr, queryFn, levelFn, childSuccessFn) ⇒ <code>Array</code>
<p>递归查询数组数据</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>数组json</p> |
| queryFn | <code>function</code> | <p>查询函数</p> |
| levelFn | <code>function</code> \| <code>string</code> | <p>判断递归，返回字段</p> |
| childSuccessFn | <code>function</code> | <p>处理已完成的子数组</p> |

**Example**  
```javascript
//- parents - 上级元素的参数
const data = [{ aa: 11, 'children': [{ children: [{ aa: 33, bb: 31, children: [{ aa: 33, bb: 32 }, { aa: 44 }] }], aa: 22, }] }]

let list = filterList(data, function(el, parents) {
    if (el.aa == 33) return getOneObj(el, ['children']) //数组没有进行拷贝，不要随便更改属性
}, 'children'); // [{"aa":33,"bb":31},{"aa":33,"bb":32}]

let list2 = filterList(data, function(el, parents) {
    if (el.aa == 33) return getOneObj(el, ['children'])
}, 'children',(res,list)=>{
    return list
}); // [{"aa":33,"bb":32}] == 只返回了最后处理的元素
```
