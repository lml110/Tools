## mergeJson(keyName, refs) ⇒ <code>Array</code>
<p>根据标识合并多个单层数组对象并去重</p>

**Date**: 2019-06-27  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| keyName | <code>String</code> | <p>唯一标识（存在时，合并标识元素，无时，都合并）</p> |
| refs | <code>Array</code> | <p>arguments 单层数组对象</p> |

**Example**  
```javascript
console.log(mergeJson('name',[{name:11,aa:'1',bb:'2'}],[{aa:'5',bb:'3'}]));
// [{"name":11,"aa":"1","bb":"2"}]

const aa = {aa:'5',bb:'3'}
console.log(mergeJson('',[{name:11,aa:'1',bb:'2'},aa,aa],[aa])); //有重名
console.log(mergeJson('',[{name:11,aa:'1',bb:'2'},{aa:'5',bb:'3'},{aa:'5',bb:'3'}],[{aa:'5',bb:'3'}])); //无重名
```
