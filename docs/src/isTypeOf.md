## isTypeOf(obj, type, [is]) ⇒ <code>T</code> \| <code>void</code>
<p>验证类型 判断+类型检测</p>


| Param | Type | Description |
| --- | --- | --- |
| obj | <code>unknown</code> |  |
| type | <code>string</code> |  |
| [is] | <code>unknownType.&lt;T&gt;</code> | <p>指定类型-默认any</p> |

**Example**  
```javascript
TS:
const rr = isTypeOf(res, function, Function)
if(rr){
    rr: function
}
const rr = isTypeOf(res, array, Array)
if(rr){
    rr: array
}
const rr = isTypeOf(res, array)
if(rr){
    rr: any
}
```

* [isTypeOf(obj, type, [is])](#isTypeOf) ⇒ <code>T</code> \| <code>void</code>
    * [~any](#isTypeOf..any) : <code>any</code>
    * [~res](#isTypeOf..res) : <code>T</code>

### isTypeOf~any : <code>any</code>
### isTypeOf~res : <code>T</code>
