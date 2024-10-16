## classCountDown
**Date**: 2022-11-23  
**Author**: liumouliang  
### new classCountDown()
<p>class-倒计时</p>

**Example**  
```javascript
// 为了防止内存泄漏，一旦执行了完成事件就会自动触发回收机制
let tt2 = new classCountDown(5, function(counter){
    console.log('测试2',counter, this);
},500);
let tt = new classCountDown(10, function(counter){
    console.log('测试',counter, this);
    tt2.start(function(counter){
        console.log('process-2',counter, this);
    })
},500);
tt.start(function(counter){
    console.log('process',counter, this);
},3)
// 再次发起倒计时，最好不要放到完成方法中，可以另起一个new
setTimeout(()=>{
    tt.start(function(counter){
        console.log('process-1',counter, this);
    }, 5)
},4000)
```
