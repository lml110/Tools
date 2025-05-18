## promiseAllSettled(promiseList, config) ⇒ <code>\*</code>
<p>模拟Promise.allSettled</p>

**Date**: 2021-12-22  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| promiseList | <code>Array.&lt;Promise.&lt;any&gt;&gt;</code> | <p>处理对象</p> |
| config | <code>Object</code> | <p>配置对象</p> |

**Example**  
```javascript
部分浏览器暂不支持Promise.allSettled，所以自己实现一个
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(21);
const promise3 = Promise.resolve(13);
const AllSettled = await promiseAllSettled([promise1,()=>{}, promise2, '都觉得',promise3])
console.log(AllSettled[1].status === 'fulfilled');

【可配置标识id】
idKey: 'id',
promiseKey: 'promise',

const requests = [
  { id: 'user', promise: fetch('/api/user') },
  { id: 'posts', promise: fetch('/api/posts') }
];
promiseAllSettled(requests)
```
