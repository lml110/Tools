## definePros(source, params, aloneKey) ⇒ <code>void</code>
<p>对象绑定- 使附加的方法为只读</p>

**Date**: 2019-06-10  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Object</code> | <p>原值</p> |
| params | <code>Object</code> |  |
| aloneKey | <code>String</code> |  |

**Example**  
```javascript
//# 单独
let resObj = {
    name:'码农',
    sex:'男',
}
definePros(resObj,22,'age') //制度
resObj.age = 33 // 只读赋值会报错
definePros(resObj,{ // 响应式
    get(){
        return (resObj.name || '') + '_get';
    },
    set(newVal){
        console.log('set',newVal);
        resObj.name = newVal;
    }
},'age1')
console.log(resObj);
resObj.name = '221'
console.log(resObj);

//# 批量
 definePros(Vue.prototype,{
    $promise: _promise,
    pointInit: (pageId, isProduct)=>{
        $config.pageId = pageId;
        return WeiyiStatSDK.init({
            pageId: pageId,
            isProduct: isProduct || true,
            projectInfo: $config.projectInfo
        });
    },
    $request,
    $get,
    $post,
    $t,
    $config,
});
```
### definePros~obj : <code>Object</code>
