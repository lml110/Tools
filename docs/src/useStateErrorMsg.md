## useStateErrorMsg([initialMsg], [ifFN]) ⇒ <code>Object</code>
<p>hook-封装errMsg的赋值</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| [initialMsg] | <code>\*</code> | <p>// 初始值</p> |
| [ifFN] | <code>\*</code> | <p>// 判断条件</p> |

**Example**  
```javascript
setErr(msg：错误提示 || 错误对象(继承)，data: 提示对应数据)
const [ err, setErr ] = useStateErrorMsg();

let [err1, setErr1] = useStateErrorMsg();
console.log(useStateErrorMsg(err)); //初始化赋值 setErr也能赋值，但会增加额外操作，如增加有效值

//resObj 已设数据
//curMsg 当前文案
//curData 当前赋值数据
let [err2, setErr2] = useStateErrorMsg('', (resObj, curMsg, curData)=>{
    console.log('=== ',resObj.msg, resObj, curMsg, curData);
    return true
});
setErr1('22', {aa: '测试'})
setErr2('订单')
setErr1('sa')
setErr2('订单22')
console.log('useStateErrorMsg === ', err1, err2); // useStateErrorMsg ===  {count: 2, valid: 1, msg: '22', data: {aa: '测试'}} {count: 2, valid: 2, msg: '订单22'}

// 使用示例
async verify_insurance_create(params){
    const [ err, setErr ] = useStateErrorMsg();
    if(this.isSpecialCustomizedProduct){
        setErr(await this.special_product_verify(params || true));
        setErr(await this.submitErrMsg_specialVerify(params), { errStatus: 1}); //返回的err.msg
    };
    setErr(await this.check_submitData_errMsg(params)); //直接返回的err
    if(err.msg){
        const errStatus = getObjVal(err, 'data.status');
        if(errStatus === 1) {
            const [ dialogErr, dialogData ] = await awaitTo(this.$messagebox.dialog(err.msg, {
                showCancel: false,
                confirmButtonText: '知道了',
            }));
        } else {
            this.toast(err.msg)
        };
    }
    return err.msg;
},

const css = function(){
    const [ err, setErr ] = useStateErrorMsg();
    setErr('试试', { errStatus: 2 })
    return err;
}
const [ err, setErr ] = useStateErrorMsg();
setErr('', { errStatus: 1 });
setErr(css()); //直接返回的err
setErr('ddfff2', { errStatus: 3 });
console.log(err); // {count: 3, valid: 2, data: {…}, msg: '试试'}
```
