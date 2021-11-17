## \_queryFn
<p>-重构find
-递归查询
-查到后退出</p>
<p>缺点：不能查询对象</p>

## findTarget(sourceArr, queryFn, childKey) ⇒ <code>Value</code>
<p>遍历获取数组中的对应目标节点</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| sourceArr | <code>Array</code> |  |
| queryFn | <code>function</code> | <p>查询函数</p> |
| childKey | <code>function</code> \| <code>string</code> | <p>递归处理</p> |

**Example**  
```javascript
console.log('findTarget',findTarget(apilist,_=>_.id==2,'childList'));
```
