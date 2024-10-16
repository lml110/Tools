## classWeakMap
**Date**: 2022-11-23  
**Author**: liumouliang  
### new classWeakMap()
<p>class-重构WeakMap，使其可以遍历</p>

**Example**  
```javascript
let aa = {lml:'测试1'}
const lml = new classWeakMap();
lml.set(aa, ()=>{
    console.log('lml');
})
console.log('==', lml.get(aa));
setTimeout(()=>{
    aa = {lml:'测试1'}
    console.log('==1', lml, lml.get(aa));
},3000)
```
