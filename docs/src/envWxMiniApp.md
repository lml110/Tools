## envWxMiniApp() ⇒ <code>Promise.&lt;void&gt;</code>
<p>微信小程序环境环境</p>

**Date**: 2022-12-22  
**Author**: liumouliang  
**Example**  
```javascript
异步方法
envWxMiniApp().then(res=>{
    //res.miniprogram //res有值则是getEnv判断，无值则是变量判断
    // 微信小程序环境下逻辑
}).catch((err)=>{
    if(err){
        // 微信环境下逻辑
    }else{
        // 其他环境下逻辑
    }
});
```
