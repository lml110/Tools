## EventBus() ⇒ <code>new</code>
<p>事件总线（数组）</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
let eb=new EventBus();
eb.once('event1',params=>console.log(11,params));
eb.on('event1',params=>console.log('event1-1',params));
eb.on('event1',params=>console.log('event1-2',params));
eb.emit('event1',33)
setTimeout(()=>{
  eb.emit('event1',54)
},1000)
console.log(eb);
```
