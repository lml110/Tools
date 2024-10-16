## awaitTo(promiseRes, ...presetArgs) ⇒ <code>\*</code>
<p>优化await异常转换</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| promiseRes | <code>Promise</code> \| <code>function</code> \| <code>any</code> | <p>处理对象</p> |
| ...presetArgs | <code>any</code> | <p>不定参数</p> |

**Example**  
```javascript
const asyncFN = (...aas) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(aas)
        },1000)
    });
}
const [err,data] = await awaitTo(asyncFN('测0', '测1', '测2')); // [undefined, ['测0', '测1', '测2']]
//可重复利用
const lml = awaitTo(asyncFN,'测0')
const [err,data] = await lml('测1', '测2'); // [undefined, ['测0', '测1', '测2']]
const [err,data] = await lml('测1-1', '测2'); // [undefined, ['测0', '测1-1', '测2']]
console.log(err,data);
//如果err为undefined则为失败
if(err) return false

//对于没有Promise封装的会重新封装，但只适用于同步返回
const asyncFN = (...aas) => {
    if(aas.includes('测err')){
        return false;
    }
    return (aas)
}
const [err,data] = await awaitTo(asyncFN,'ss')('测err')
const [err,data] = await awaitTo(asyncFN,'ss')('测err-1') [['ss', '测err-1']]
```
