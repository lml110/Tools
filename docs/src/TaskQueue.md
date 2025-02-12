## TaskQueue
**Date**: 2023-11-10  
**Author**: liumouliang  
### new TaskQueue()
<p>任务队列</p>

**Example**  
```javascript
const request_test1 = (a) => {
    return new Promise((resolve, reject) => {
        console.log('处理开始',a);
        // console.time('处理中');
        setTimeout(()=>{
            // console.timeEnd('处理中');
            console.log('处理结束',a);
            resolve('request_test1')
        },3000);
    });
}

const task = new TaskQueue(1);

task.addTask(request_test1,'a1'); //添加任务
task.addTask(request_test1,'a2');
task.addTask(request_test1,'a3');
task.addTask(request_test1,'a4');
task.addTask(request_test1,'a5');
console.log('dd',task);
setTimeout(()=>{
    task.abort(); //中断的同时会将中断的函数重新记录到队列中
},5000);
lmlDOM1.addEventListener('click', function(e) {
    task.continue();
});
//使用示例
globalAddressTaskQueue.addTask(this.global_getAddressJson,this.productId, callBack);
或者 //推荐
async initData(){
    const rep = await this.global_getAddressJson(this.productId);
    return rep;
}
globalAddressTaskQueue.addTask(this.initData);
```
