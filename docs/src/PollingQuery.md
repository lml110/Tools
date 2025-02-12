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
    isError: true, //是否报错直接完成 == 如果有这个参数，建议在完成函数中加入判断result === 'completed'，判断是否是正常完成
    complete: (data,a,b) => { //完成函数 //处理结果，包含错误中断(传参处理)
        console.log('已完成', a,b);
    }, //完成函数
    // 判断函数 == 非必填(成功继续，失败直接中断不进入complete，除非在判断内执行)
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
});

// 示例：轮询过程中只有待付款状态才能支付，其他状态只能进入详情结果
function polling_ifs(result, callback){
    const flowStatusCode = getObjVal(result,'flowStatusCode')
    console.log('flowStatusCode == ',flowStatusCode);
    if(flowStatusCode == 20){ //待付款
        go_pay(callback);
        return false;
    }else if(flowStatusCode == 52){ //保全失败 - 跳转详情
        go_detail(callback);
        return false;
    }
    return true; //一直轮训到结束->complete
}
function go_detail(callback){
    callback && callback();
    console.log('====== 去详情页 =======');
}
function go_pay(callback){
    callback && callback();
    console.log('====== 去支付页 =======');
}
function hide_loading(){
    console.log('====== 加载状态处理 =======');
}
function get_api(params){
    console.log('get_api == ', params);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({
                flowStatusCode: 52,
            })
        },3000);
    });
};
function submit_complete1(result, callback){
    console.log('====== 轮训完成 =======', result);
    return go_detail(callback);
};
function submit_complete2(result, callback){
    // result === 'completed' // 轮询完成
    console.log('====== 轮训完成 =======', result);
    callback();
    if(result == 20){ //待付款
        go_pay();
        return false;
    };
    //52-中断并完成，其他或接口异常都会一直运行到结束才执行
    return go_detail();
};
//轮询过程
function polling_press(){
    return new Promise((resolve, reject) => {
        return get_api('参数').then(result => {
            const flowStatusCode = getObjVal(result, 'flowStatusCode')
            console.log('polling_press == ', result, flowStatusCode);
            if([20, 52].includes(flowStatusCode)){ //待付款
                reject(flowStatusCode);
            }else{
                resolve(flowStatusCode || 0);
            }
        }).catch(resolve);
    });
};

//## 第一种有判断并直接中断
const polling1 = new PollingQuery({
    long: 1e4, //10s
    space: 1000, //间隔1s后执行
    complete: submit_complete1, //完成函数
    ifs: polling_ifs, // 判断函数
});
//## 第二种全部通过完成函数执行
const polling2 = new PollingQuery({
    long: 1e4, //10s
    space: 1000, //间隔1s后执行
    complete: submit_complete2, //完成函数
    isError: true,
});
const button = document.getElementById('lml1');

// 为按钮添加点击事件处理函数
button.addEventListener('click', function() {
    polling2.start(
        polling_press,
        hide_loading,
    );
    // polling1.start(
    //     () => get_api('参数'),
    //     hide_loading,
    // );
});
```
