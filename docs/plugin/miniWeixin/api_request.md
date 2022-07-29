## 异步扩展
<p>基于wx.request的通用配置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| getApiUrl | <code>Function</code> | <p>请求地址的重写</p> |
| isLoading | <code>Boolean</code> | <p>是否展示loading动画-否（默认微信）</p> |
| showLoading | <code>Function</code> | <p>自定义Loading框-显示</p> |
| hideLoading | <code>Function</code> | <p>自定义Loading框-隐藏</p> |
| logManager | <code>Boolean</code> | <p> 是否记录请求的错误日志 </p> |
| sucessCode | <code>Function</code> | <p> 成功状态 默认:code === 200 && success </p> |
| getRequeData | <code>Function</code> | <p> 请求拦截 请求前的处理方法 </p> |
| sucessAPI | <code>Function</code> | <p> 请求成功后数据处理方法 </p> |
| errAPI | <code>Function</code> | <p> 请求错误后处理方法 </p> |

**Example**  

```js
'use strict';
import APIURL from './APIURL';
import { API } from "tools";

export const getApiUrl = function(route) {
    return APIURL[route] || route;
};

const apis = new API({
    getApiUrl,
    isLoading: true,
    logManager: true,
    sucessCode(data){
        return data.success;
    }
});

```



### $request(route, requedata, hasSessionId, method, apiObj) ⇒ <code>Promise</code>

<p>请求重构</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param        | Type                 | Description           |
| ------------ | -------------------- | --------------------- |
| route        | <code>String</code>  | <p>地址</p>           |
| requedata    | <code>Object</code>  | <p>请求数据</p>       |
| hasSessionId | <code>Boolean</code> | <p>是否需签名登录</p> |
| method       | <code>String</code>  | <p>默认get</p>        |
| apiObj       | <code>Object</code>  | <p>微信API</p>        |

**Example**  

```js
export const $request = apis.$request
export const $get = apis.$get;
export const $post = apis.$post;
```

```js
//get
return this.$get('coUser/selectUserList') //参数可省略
return this.$get('coUser/selectUserList',{}).then(data => {}).catch((err)=>{});

//post
this.$post('userService/selectUserList',{})
this.$post('userService/selectUserList',requedata).then(data => {
}).catch((err)=>{});

```


