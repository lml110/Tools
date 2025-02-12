## \_timeout
**Date**: 2022-11-23  
**Author**: liumouliang  
### new \_timeout()
<p>class-setTimeout延时函数</p>

**Example**  
```javascript
const timer = new _timeout();
timer.start(()=>{
    console.log('测试1');
    timer.clear();
    timer.start(()=>{
        console.log('测试2');

    }, 1000);
}, 1000);

this.$once('hook:beforeDestroy',()=>{
    console.log('destroyed');
    clearInterval(timer);
    timer = null;
})
```
