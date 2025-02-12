## classWeakMap
**Date**: 2022-11-23  
**Author**: liumouliang  
### new classWeakMap()
<p>class-重构WeakMap，使其可以遍历</p>

**Example**  
```javascript
let aa = {lml:'测试1'}
let a1 = {};
let a2 = {}
const lml = new classWeakMap();
lml.set(aa, ()=>{
    console.log('lml');
})
console.log('==', lml.get(aa));
setTimeout(()=>{
    aa = {lml:'测试1'}
    console.log('==1', lml, lml.get(aa));
},3000)
lml.set(a1, ()=>{
    console.log('a1');
})
lml.set(a2, ()=>{
    console.log('a2');
})
setTimeout(()=>{
    console.log(lml);
    for (const key of lml.keys) {
      if(lml.has(key)) {
        lml.get(key)()
      }
    }
},1000)
```
