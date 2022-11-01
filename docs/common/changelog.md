##  全局链接
======================================

📎[Tools](https://res.wyins.net/autoUpload/common/a03eebe9-666d-4f91-88cf-596549f31ef0.js)

**H5-扩展：**
📎[wechatExtend](https://res.wyins.net/autoUpload/common/f0c0a24c-2a0e-4903-b57b-544f365b1b2a.js)

**element-扩展：**
📎[ele2Extend](https://res.wyins.net/autoUpload/common/ac61fb07-bffb-4583-aad7-03760b616af1.js)

**小程序-扩展：**
📎[小程序](https://res.wyins.net/autoUpload/common/miniWeixin_5af8e269a54a111.js)

======================================

## 发展历程
======================================

> 单纯的函数工具 ==> 扩展

======================================

# 改动日志

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
