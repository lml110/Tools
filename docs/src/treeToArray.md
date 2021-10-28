## filterList(list, resObj, parents) ⇒ <code>Array</code>
<p>递归查询数组</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| list | <code>Array</code> | <p>原值</p> |
| resObj | <code>Object</code> | <p>参数</p> |
| parents | <code>Object</code> | <p>父级元素</p> |

**Example**  
```javascript
树结构反向转换一维数组ifFN: 判断是否递归handleFN：处理childListparentFN：添加部分父级元素数据childKey：子键
page_statistics(){
    let list = filterList(routers,{
        ifFN(res){
            return res.children && res.children.length
        },
        childKey: 'children'
    });
    console.log(list);
}
```
