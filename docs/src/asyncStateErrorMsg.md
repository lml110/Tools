## asyncStateErrorMsg(err, Fun, callBack) ⇒ <code>Promise</code>
<p>自定义错误对象</p>

**Date**: 2022-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>\*</code> | <p>// 错误对象-ErrorMessage</p> |
| Fun | <code>function</code> | <p>// 执行函数</p> |
| callBack | <code>function</code> | <p>// 返回处理函数， 返回的参数类型最好是 Errormessage || String</p> |

**Example**  
```javascript
this.showLoading();
const [err, setErr] = useStateErrorMsg();

setErr(await asyncStateErrorMsg(err, riskAgentRealFn && riskAgentRealFn.bind(this, true)));
setErr(await asyncStateErrorMsg(err, () => riskFn(params)));
setErr(await asyncStateErrorMsg(err, riskFn.bind(this, params)));
setErr(await asyncStateErrorMsg(err, riskFn));

setErr(await asyncStateErrorMsg(err, riskFn, (data) => {
    if(data) {
        setErr('错误')
    }
    return err; //返回的参数类型最好是 Errormessage || String
}));

this.hideLoading();
if(err.msg) {
    return false;
}
```
