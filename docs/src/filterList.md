## \_queryFn
<p>目标：</p>
<ol>
<li>遍历所有元素，同时添加满足条件的元素，元素可重新定义</li>
<li>_levelFn：判断是否进行递归，并返回递归字段</li>
<li>_childSuccessFn：处理已完成的子数组，=== 可用于treeToArray</li>
</ol>

## filterList(sourceArr, queryFn, levelFn, childSuccessFn) ⇒ <code>Array</code>
<p>递归查询数组</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> | <p>数组json</p> |
| queryFn | <code>function</code> | <p>查询函数</p> |
| levelFn | <code>function</code> \| <code>string</code> | <p>判断递归，返回字段</p> |
| childSuccessFn | <code>function</code> | <p>已完成的处理函数</p> |

**Example**  
```javascript
let res = filterList(data,function(el,ps){
    // if(el.childNodeList && el.childNodeList.length==0) delete el.childNodeList
    return {label:el.nodeName,level:el.level};
},'childNodeList',function(res,list){
    res = res.concat(list)
    return res;
});
```
