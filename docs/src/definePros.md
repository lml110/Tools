## definePros(source, params, aloneKey) ⇒ <code>null</code>
<p>对象绑定</p>

**Date**: 2019-06-10  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>null</code> | <p>原值</p> |
| params | <code>Object</code> |  |
| aloneKey | <code>key</code> |  |

**Example**  
```javascript
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
