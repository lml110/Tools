## classWatcherMap
**Date**: 2022-11-23  
**Author**: liumouliang  
### new classWatcherMap()
<p>class-重构WeakMap，使其可以遍历</p>

**Example**  
```javascript
let data1 = {
    message: 'Hello',
    aa: '鞍山市'
};
let data2 = {
    lml: '快递费'
};

// 创建管理平台
const managePlatform = new tools.classWatcherMap(data1);
// 创建观察成员
new managePlatform.watcher('message', newValue => {
    console.log('message1', newValue);
    input_1.value = data1.message
});
new managePlatform.watcher('message', newValue => {
    console.log('message2', newValue, managePlatform);
});
new managePlatform.watcher('aa', function(newValue){
    console.log('aa333', this, newValue);
});

// watchers.observer(data1)
setTimeout(() => {
    data1.message = '第三点1';
    data1.aa = '第三点2';
    // managePlatform.clear('message');
    setTimeout(() => {
        data1.message = '尽快答复1';
        data1.aa = '尽快答复2';
    }, 5000);
}, 1000);

const watchers2 = new tools.classWatcherMap(data2);
new managePlatform.watcher('lml', function(newValue){
    console.log('lml', this, newValue, watchers2);
});
setTimeout(() => {
    data2.lml = '没拿到';
}, 5000);
```
