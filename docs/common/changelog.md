##  全局链接
======================================

📎[Tools](https://res.wyins.net/autoUpload/common/a03eebe9-666d-4f91-88cf-596549f31ef0.js)

**H5-扩展：**
📎[wechatExtend](https://res.wyins.net/autoUpload/common/c1e92b63-9db7-4d2a-ae00-76becf02e092.js)

**element-扩展：**
📎[ele2Extend](https://res.wyins.net/autoUpload/common/9c39917b-3417-4425-83e8-2368baaf81a7.js)

**小程序-扩展：**
📎[小程序](https://res.wyins.net/autoUpload/common/miniWeixin_5af8e269a54a111.js)

======================================

## 发展历程
======================================

> 单纯的函数工具（完全纯函数组成） 
>
> ==> 对一些复杂插件做扩展（为了不影响核心函数库） 
>
> ==> 根据不同环境对其做扩展（区分H5，小程序，后台）+ 根据使用的组件库做扩展组合 
>
> ==> 根据使用语言做技术扩展（主要区分Vue||React）-- 为了独立依赖于配置将框架附加Monorepo模式

======================================

# 改动日志

## 1.0.1.20230818

- 新增 `v-transition`动画指令
- 修复 `_addClass`样式赋值问题

## 1.0.1.20230724

- 新增 `createCover`创建透明蒙层方法
- 修复 ele扩展中`form-item`的`required`的默认规则
- 增加 ele扩展中`cell-date-picker`的`tips`为空判断

## 1.0.1.20221020

- 升级 webpack5,修复dev模式umd无法添加到window中
- 修复 排除多文件目录中js，html除外的文件入口
- 优化 ele扩展中`page-container`自动计算高度事件
- 新增 ele扩展中表格的`$index`属性
- 新增 ele扩展中表单控件的`tooltip`组件

## 1.1.7.20221008

- 新增 vue本地文件变量
- 新增 git小徽章

## 1.1.5.20220231

- 修复 `_stringify`的无限循环体的转化
- 新增 `_tco`尾递归次数优化函数
- 优化 `_deepCopy`的深拷贝中尾递归的处理

## 1.1.0.20211229

- 新增 提示说明 `warning`-警告 `trace`-专属提示
- 新增 获取服务器时间
- 修复 `vue2Extend`中`$go`函数

## 1.0.10.20210210

- 新增 `plugin`命令的目录检测 -  双模式
- 添加  `min-weixin` 小程序-微信类库
- 添加 `locals ` 小程序本地缓存

## 1.0.10.20210201

- 修复 `regHtmlRepImg` 正则img过滤出现错误
- 修复 `loadResource` promise嵌套返回错误
- 整理工具库引入目录

## 1.0.10.20210115

- 新增 `_toFixed`保留小数点 //好像与`_float`重复了
- 新增 `_toNumberObj` 将数据中number转成金额字符串

## 1.0.10.20210113

- 新增 `afreshSetTree`中参数`sucessFn`
- 优化 `formatJsonStr`对数组的格式化

## 1.0.7.20210108

- 优化 打包`dist:lib`，按需引入
- 新增 `multipage`中的文件忽略列表

## 1.0.7.20201217

- 新增 正则`_trimSpecial`去除特殊字符
- 新增 正则`_trimEmoji`去除表情符号
- 新增 正则`_regAngle`替换英文字符为全角字符

## 1.0.7.20201214

- 修复 `_formatDate`与`_parseDate`的格式化参数不一致的问题
- `dates类`中增加`new Date`判断
- 新增 `_swap`方法，用于数组的交换，拖动等变化排序
- 新增 `_sort`方法对数组进行排序操作

## 1.0.7.20201208

- 提取 build公共配置，增加config文件夹配置
- 修复 make-pic中promise返回参数
- 新增 getImgFiles获取图片file的汇总信息

## 1.0.7.20201001

* 优化 资源加载loadResource，添加promise方法
* 优化 cache缓存方法
* 修复 正则表达式-过滤img标签
* 调整 千分位运算方法
* 新增 单元测试
* 新增 日期方法
* 【plugin插件】
  + 新增 itouch手势操作
