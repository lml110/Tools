# 拓展插件库

### VUE基础拓展

> **[异步扩展](/plugin/vue2Extend/axiosExtend)** 

### 饿了么拓展

因多个管理后台是基于`elementUI`开发，同时布局相似

> **[applyBaseInfo](/plugin/ele2Extend/applyBaseInfo)** - 2.15.6 以下版本基础信息组件
>
> **[applyDescriptions](/plugin/ele2Extend/applyDescriptions)** - 2.15.6 以上版本基础信息组件
>
> **[applyDialog](/plugin/ele2Extend/applyDialog)** - 基础弹窗组件
>
> **[applyPage](/plugin/ele2Extend/applyPage)** - 基础分页组件
>
> **[applyTable](/plugin/ele2Extend/applyTable)** - 基础表格组件
>
> **[formButton](/plugin/ele2Extend/formButton)** - 表单按钮组件
>
> **[formCell](/plugin/ele2Extend/formCell)** - 表单单元控件
>
> **[formItem](/plugin/ele2Extend/formItem)** - 表单控制单元
>
> **[formPopup](/plugin/ele2Extend/formPopup)** - 表单弹窗
>
> **[pageContainer](/plugin/ele2Extend/pageContainer)** - 自动计算剩余高度
>
> **[searchControl](/plugin/ele2Extend/searchControl)** - 行内搜索筛选器
>
> **[searchForm](/plugin/ele2Extend/searchForm)** - 搜索列表页面集合组件

#### 扩展函数
> **[ele2Extend_util](/plugin/ele2Extend/ele2Extend_util)** 

### 微信拓展

以微信H5为主，附加APP嵌入页
兼容两套UI，因微易本身UI组件库bug太多，功能不具有拓展性，但很多项目有用到，并且其中有对一些业务做的专属组件，所以迫不得已，附加`vant`为辅，虽然可整合，但没啥意义，好处太少
- 如果整合集成在一起，代码融入到新组件库中，那么对于之前的项目而言
	1. 替换之前组件引用，这样改动大，同时容易出错，维护时如果只改一套，就会让原来的出现差异，如此递增下去，差异越大越难改
	2. 组件集成兼容原来的组件库的引用，使效果一致，维护性较之高

### 小程序拓展