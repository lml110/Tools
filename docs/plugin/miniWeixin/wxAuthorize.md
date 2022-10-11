## wxAuthorize(authInfo) ⇒ <code>Promise</code>
<p>提前向用户发起授权请求 查询+授权</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| authInfo | <code>String</code> | <p>明确授权值 必填</p> |

**Example**  
```javascript
//小程序插件中不支持
//求纯函数调用是否支持
//authorize - 如果用户之前已经同意授权，则不会出现弹窗，直接返回成功

//官方 - authInfo
// https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html

//授权设备
//微信推出新政策，部分不能使用(wxGetSetting)
//有限额
handAuth({ commit, state }) {
    commit('setSysInfo')
    return new Promise((resolve, reject) => {
        //lml-cs
        // if(!IS_RELEASE) return resolve();
        return _authorize('camera').then(data => {
            return _authorize('record')
        }).then(data => {
            setGlobalAuthInfo((authInfo)=>{
                authInfo['camera'] = true;
                authInfo['record'] = true;
                return authInfo;
            });
            const sysInfo = state.sysInfo
            if (sysInfo.microphoneAuthorized && sysInfo.cameraAuthorized) {
                return resolve(data)
            } else {
                reject(sysInfo)
                return tipMassage('请在手机设置中打开微信的麦克风与相机的权限');
            }
        }).catch((err)=>{
            setGlobalAuthInfo((authInfo)=>{
                authInfo['camera'] = false;
                authInfo['record'] = false;
                return authInfo;
            });
            reject(err);
        });
    });
},
//授权用户信息
//微信推出新政策，已经不能再使用
//不能获取微信的用户信息，只能通过用户自定义配置
handLoginAuth({ commit, state, dispatch }) {
    return wxGetUserInfo().then(data => {
        return dispatch("handAuth")
    }).then(data => {
        return Promise.resolve(data);
    }).catch((err) => {
        return wxOpenSetting('userInfo');
    }).then(data => {
        return Promise.resolve(data)
    }).catch((err) => {
        return Promise.reject(err);
    });
}
```
