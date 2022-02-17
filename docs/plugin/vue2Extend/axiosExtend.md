## 异步扩展
<p>基于axios的通用配置</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| request | <code>Function</code> | <p>应用的函数</p> |
| APIURL | <code>Object</code> | <p> URL地址集合 </p> |
| axiosOptions | <code>Object</code> | <p> 全局默认配置 </p> |
| postApi | <code>Object</code> | <p> post默认值：{isNoString: true,contentTypeNum:1} </p> |
| isResOk | <code>Function</code> | <p> 成功状态 </p> |
| sucessOk | <code>Function</code> | <p> 成功方法 </p> |
| openLoading | <code>Function</code> | <p> loading开启 </p> |
| closeLoading | <code>Function</code> | <p> loading关闭 </p> |
| invalid | <code>Function</code> | <p> 登出状态 </p> |
| autoLogout | <code>Function</code> | <p> 登出方法 </p> |
| errCodeFn | <code>Function</code> | <p> 各种错误状态返回的code </p> |
| getErrorMsg | <code>Function</code> | <p> 各种错误状态返回的msg </p> |
| promptMsg | <code>Function</code> | <p> 报错时的自动弹窗提示 </p> |
| instanceRequest | <code>Function</code> | <p> 请求拦截处理 </p> |
| instanceResponse | <code>Function</code> | <p> 请求响应处理 </p> |

- 方法
| Param | Description |
| --- | --- |
| $clearCancleApi | <p> 清除所有正在请求的异步 </p> |

**使用**  

```js
//get
return this.$get('coUser/selectUserList') //参数可省略
return this.$get('coUser/selectUserList',{}).then(data => {}).catch((err)=>{});

//post
this.saveLoading = true;
this.$post('userService/selectUserList',requedata).then(data => {
    this.saveLoading = false;
    this.$tipsMessage('保存成功',1);
    this.isEdit = false;
    this.$emit('submit')
}).catch((err)=>{
    this.saveLoading = false;
});

```

- 通用字典

```js
import APIS from "_libs/API"
import { _for } from 'tools'
const { API } =  APIS

//获取产品列表
export const getProductList = function(){
	return API.$fetch('post','product/list',function(data){
		_for(data,function(el){
			el.productId = el.productId+'';
			el.productName = el.productName+' - '+el.productId;
		});
		return data;
	});
};

```

**Example**  

- 项目中已存在异步函数

```js
'use strict';
import fetch from 'utils/fetch';
import APIURL from '_libs/APIURL';

export default {
    API: {
        request: fetch,
        APIURL,
    }
};

```

- 项目中未创建异步函数

```js
'use strict';
// import request from '@/utils/request';
import APIURL from '_libs/APIURL';
import config from "_libs/config";
import store from '../store'
import { Loading, Message } from 'element-ui';
import { getKeyToken, removeToken } from '@/utils/auth'
import { downloadBlob } from "tools";

function showLoading(options){
    Loading.service(options);
}
function hideLoading (){
    let loadingInstance = Loading.service();
    loadingInstance.close();
}
function promptMsg(msg){
    return msg && Message({
        message: msg,
        type: 'error',
        duration: 5000
    });
}
export default {
	config,
    API:{
        // request: fetch,
        APIURL,
        config: {
            openLoading: showLoading,
            closeLoading: hideLoading,
            invalid(res){
                return res.code && res.code === 401;
            },
            autoLogout(res){
                removeToken()
                store.dispatch('user/FedLogOut').then(() => {
                    location.reload()// 为了重新实例化vue-router对象 避免bug
                });
            },
            axiosOptions: {
                baseURL: process.env.BASE_API, // api的base_url
                timeout: 40000, // 请求超时时间
                headers: {'Content-Type': 'application/json'},
                withCredentials: true
            },
            promptMsg,
            errCodeFn(res){
                if (res.code && res.code === 403) { // 登录成功，但是登录账号没有该系统的权限
                    router.push('/403');
                }else if(res.code !== 200){
                    if(res.success){
                        return res.data
                    }
                    hideLoading();
                    promptMsg(res.msg);
                }
                return false;
            },
            instanceRequest(config){
                console.log(config);
                if (config.exportExcel) {
                    showLoading()
                }
                // if (store.getters['user/token']) {
                //   // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
                // }
                //console.log("tore.getters",store.getters['user/token'])
                if(store.getters['user/token']){
                    if( config.url!== "/oss/getAuthInfo") {
                        config.headers['Authorization'] = getKeyToken('authorization')
                    } else {
                        delete config.headers['Authorization']
                    }
                }
                //
                return config
            },
            instanceResponse(res){
                if(res.config.exportExcel) {
                    let fileName = Date.parse(new Date()) + '.xlsx'
                    downloadBlob(res.data,fileName,'application/vnd.ms-excel')
                    hideLoading()
                    return true;
                }
                return false;
            },
        }
    }
};
```

