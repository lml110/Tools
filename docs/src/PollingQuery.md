## PollingQuery
**Date**: 2023-11-10  
**Author**: liumouliang  
### new PollingQuery()
<p>异步轮询</p>

**Example**  
```javascript
const promiseFn = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('处理中');
            resolve('promiseFn')
        },3000);
    });
}
const polling = new PollingQuery({
    long: 6e4, //总长度：2分钟
    space: 2000, //间隔时间 2秒
    isError: true, //是否报错直接完成
    complete: (a,b) => {
        console.log('已完成', a,b);
    }, //完成函数
    ifs: (data,a,b) => { //data-成功数据 || a,b == start参数
        const flowStatusCode = getObjVal(data,'flowStatusCode')
        if(flowStatusCode == 20){ //待付款
            this._goPay(callback);
            return false;
        }else if(flowStatusCode == 52){ //保全失败 - 跳转详情
            this.submit_complete(); //出现错误，但轮询并未全部走完
            return false;
        }
        return true;
    }, // 判断函数
})
polling.start(promiseFn, '传参',()=>{
    console.log('回调');
})
```
