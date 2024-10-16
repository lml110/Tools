## cacheFnParams(Fn, presetArgs) ⇒ <code>function</code>
<p>缓存函数参数</p>

**Date**: 2022-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| Fn | <code>function</code> | <p>操作</p> |
| presetArgs | <code>array</code> | <p>参数</p> |

**Example**  
```javascript
const partialFn = (url, data, callback) => {
    return callback && callback(url, data);
}
let ajaxTest1 = cacheFnParams(partialFn,'http://www.test.com/test1')
ajaxTest1([1,2],(url, data)=>{
    console.log(url, data);
})
let ajaxTest2 = cacheFnParams(partialFn,'http://www.test.com/test2',[2,3])
ajaxTest2((url, data)=>{
    console.log(url, data);
})
```
