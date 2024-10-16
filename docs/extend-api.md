# 拓展插件库

## VUE2拓展

### 基础拓展

封装了异步，埋点，常用方法
异步以`axios`为基础，适用于业务中每一个不同类型的框架

> **[异步扩展](/extend/vue2/vue2Extend/axiosExtend)** 

### 饿了么拓展

根据业务中管理后台都是基于`elementUI`开发，对每一个业务后台进行分析后，封装的通用组件，方法及业务拓展

> **[applyBaseInfo](/extend/vue2/ele2Extend/applyBaseInfo)** - 2.15.6 以下版本基础信息组件
>
> **[applyDescriptions](/extend/vue2/ele2Extend/applyDescriptions)** - 2.15.6 以上版本基础信息组件
>
> **[applyDialog](/extend/vue2/ele2Extend/applyDialog)** - 基础弹窗组件
>
> **[applyPage](/extend/vue2/ele2Extend/applyPage)** - 基础分页组件
>
> **[applyTable](/extend/vue2/ele2Extend/applyTable)** - 基础表格组件
>
> **[formButton](/extend/vue2/ele2Extend/formButton)** - 表单按钮组件
>
> **[formCell](/extend/vue2/ele2Extend/formCell)** - 表单单元控件
>
> **[formItem](/extend/vue2/ele2Extend/formItem)** - 表单控制单元
>
> **[formPopup](/extend/vue2/ele2Extend/formPopup)** - 表单弹窗
>
> **[pageContainer](/extend/vue2/ele2Extend/pageContainer)** - 自动计算剩余高度
>
> **[searchControl](/extend/vue2/ele2Extend/searchControl)** - 行内搜索筛选器
>
> **[searchForm](/extend/vue2/ele2Extend/searchForm)** - 搜索列表页面集合组件
>
> **[apply-upload-button](/extend/vue2/ele2Extend/applyUploadButton)** - 上传导入按钮

#### 扩展函数

封装了些业务中的通用处理方案

> **[ele2Extend_util](/extend/vue2/ele2Extend/ele2Extend_util)** 

### 微信拓展

#### 意见分析

```js
兼容两套UI，因微易本身UI组件库bug太多，功能不具有拓展性，但很多项目有用到，并且其中有对一些业务做的专属组件，所以迫不得已，附加`vant`为辅，虽然可整合，但没啥意义，好处太少
- 如果整合集成在一起，代码融入到新组件库中，那么对于之前的项目而言
	1. 替换之前组件引用，这样改动大，同时容易出错，维护时如果只改一套，就会让原来的出现差异，如此递增下去，差异越大越难改
	2. 组件集成兼容原来的组件库的引用，使效果一致，维护性较之高
```

## 小程序拓展

通用库整理，因为小程序部分代码不能放入通用库中，入需使用需按需加载
拥有部分组件，部分业务整合，与风格统一处理

### 内置方法

> **[wxAuthorize](/plugin/miniWeixin/_authorize)** - 提前向用户发起授权请求
>
> **[wxOpenSetting](/plugin/miniWeixin/_openSetting)** - 调起客户端小程序设置界面
>
> **[wxGetSetting](/plugin/miniWeixin/wxGetSetting)** - 查询用户的当前设置 有限频
>
> **[_authorize](/plugin/miniWeixin/_authorize)** - 不查询，直接授权
>
> **[_request](/plugin/miniWeixin/_request)** - 内置小程序请求
>
> **[wxLoading](/plugin/miniWeixin/_showLoading)** - 内置loading提示框
>
> **[wxTips](/plugin/miniWeixin/_showModal)** - 内置提示对话框
>
> **[wxToast](/plugin/miniWeixin/_showToast)** - 内置消息提示框
>
> **[getImageInfo](/plugin/miniWeixin/getImageInfo)** - 获取图片信息
>
> **[reportAnalytics](/plugin/miniWeixin/reportAnalytics)** - 线上统计请求的错误信息
>
> **[setRemoteImgInfo](/plugin/miniWeixin/setRemoteImgInfo)** - 批量替换远程图片为本地
>
> **[uploadImage](/plugin/miniWeixin/uploadImage)** - 上传图片
>
> **[wxBarLoading](/plugin/miniWeixin/wxBarLoading)** - 设置导航栏加载状态
>
> **[wxClipData](/plugin/miniWeixin/wxClipData)** - 内置复制内容
>
> **[wxNavito](/plugin/miniWeixin/wxNavito)** - 跳转页面
>
> **[wxSetBarTitle](/plugin/miniWeixin/wxSetBarTitle)** - 设置导航标题
>
> **[wxSysInfo](/plugin/miniWeixin/wxSysInfo)** - 同步获取系统信息

### 其他扩展

> **[异步扩展](/plugin/miniWeixin/api_request)**
>
> **[日志管理](/plugin/miniWeixin/log)** 
>
> **[单元方法](/plugin/miniWeixin/util)** 
>
> **[config配置](/plugin/miniWeixin/config)** 
