## EventBus()
<p>class-事件总线（数组）</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
let eb=new EventBus();
eb.once('event1',params=>console.log('once==',params));
eb.on('event1',params=>console.log('event1-1',params));
eb.on('event1',params=>console.log('event1-2',params));
console.log('第三点00',eb._events, eb._events.size);
eb.emit('event1',33)
console.log('第三点11',eb._events, eb._events.size);

setTimeout(()=>{
  eb.emit('event1',54)
},1000)
setTimeout(()=>{
    eb.clear()
},2000)
setTimeout(()=>{
    eb.emit('event1',5334)
    console.log('第三点',eb._events);
},3000)
```
