# 工具包

## 介绍
工具类库，提高开发效率

https://docsify.js.org/#/quickstart

## 构成

### tools

```
工具函数
柯里化，事件总线，防抖节流
缓存，时间，字符串，深拷贝，循环，正则，url
移动端
设备信息，图片转码
业务函数
number类型匹配
```

#### sever

- 基础类
  
> bases
  >
  > helper
  >
  > rank
  >
  > business

- 颜色 - colors

- 深拷贝 - copys

- 时间 - dates

- URL处理 - params

- 正则 - reg-exp

- 验证 - checks

#### client

- 编码转换 - encode
- 缓存 - session
- 文件 - files
- dom操作 - operation
- 图片处理 - make-pic

#### mobile

- 移动设备 - mobile
- 移动兼容 - mobile-bug
- 初始Jquery - initJQ
- 微信类 - wechat

#### 使用说明

##### 基础

- typeOf - 判断数据类型
- stdExtName - 标准化扩展名
- _cloneObj - 深拷贝
- _deepCopy - 深拷贝(对象函数)
- on || off - 事件绑定
- forEach

##### 杂类

- _float - 浮点数计算 || 保留小数点后几位
- getMaximin - 获取数组最大最小值
- _compareVersion - 比较字符串版本
- _trim - 去掉字符串空格
- _keyid - 生成不重复的唯一值
- _seedId - X位随机数 || 签名盐值
- Cutsubstr - 截取字符串
- firstUpperCase - 首字符大写

##### 颜色

- colorRgb - 16进制颜色转为RGB格式
- colorHex - RGB颜色转换为16进制
- getRandomColor - 获取随机颜色

##### 日期

- _formatDate - 格式化日期 
- _getAllDate - 获取日期全部参数

##### 验证

- checkEmail - 验证邮件
- checkPhone - 验证手机

##### URL

- _paramsToString - 对象参数转url字符串
- _getParams - 获取URL字符串的参数

##### 缓存

- session.get
- session.set
- session.clear
- session.info

##### 其他

- getNameOrKey - 过滤数据查询某一个值的集合
- objEqual - 判断两个对象是否相等，这两个对象的值只能是数字或字符串

##### 移动端

- getPixelRatio - 获取canvas渲染的像素倍数
- getImgeInfo - 获取图片元素信息
- fileToDataURL - 文件转base64
- dataURLtoBlob - base64转blob

- wxFontHandle - 强制禁止用户修改微信客户端的字体大小
- isWechat - 是否微信
- isIOS - 是否iphone
- isAndroid - 是否安卓
- isAndorIosNoWe - 是否移动App

### plugin

**基于tools开发的扩展组件，包含通用组件，业务扩展**






