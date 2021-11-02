## Tools

### 常用

> **[typeOf](/src/typeOf)** - 判断类型
>
> **[_float](/src/_float)** - 浮点数计算
>
> **[getFormData](/src/getFormData)** - 获取formData数据
>
> **[definePros](/src/definePros)** - 对象绑定
>
> **[getFileName](/src/getFileName)** - 获取文件名称
> **[getFileExtName](/src/getFileExtName)** - 获取后缀名并转换小写
>
> **[_cloneObj](/src/_cloneObj)** - 复制数据
> **[_deepCopy](/src/_deepCopy)** - 遍历数据复制
>
> **[debounce](/src/debounce)** - 防抖
> **[throttle](/src/throttle)** - 节流
>
> **[_trim](/src/_trim)** - 默认首尾去空格

#### `rjs`重构

> **[_for](/src/_for)** - 遍历数据-包括对象

#### `business`复杂

> **[treeToArray](/src/treeToArray)** - 树结构反向转换一维数组
>
> **[_filterList](/src/_filterList)** - 递归遍历数组数据
> **[arrayToTree](/src/arrayToTree)** - 数组转树结构
>
> **[findTarget](/src/findTarget)** - 递归查询数据元素
>
> **[nestedProperty](/src/nestedProperty)** - 嵌套属性查询
> **[hasObjKey](/src/hasObjKey)** - 查询对象key值是否存在
> **[getObjVal](/src/getObjVal)** - 获取对象val

### 数据处理

> **[_filter](/src/_filter)** - 数据过滤-不递归-包括对象
>
> **[_compareVersion](/src/_compareVersion)** - 比较字符串版本 - v1>v2 为1
>
> **[Cutsubstr](/src/Cutsubstr)** - 字符串截取 - 包含中文
>
> **[strlen](/src/strlen)** - 计算数据长度
> **[strlenUnit](/src/strlenUnit)** - 转换带单位数据

#### 数据转换

- 字符串转json

  > **[_toJson](/src/_toJson)** - 重构`JSON.parse`，防止报错
  >
  > **[formatJsonStr](/src/formatJsonStr)** - 分隔 | 未知类型转`json`

- 转数字

  > **[_toNumber](/src/_toNumber)** - 基础转
  > **[_toFixed](/src/_toFixed)** - 基础转指定小数
  >
  > **[_toNumFixed](/src/_toNumFixed)** - 表达式转指定小数

#### 随机生成

> 生成不重复的唯一值：
> **[_seedId](/src/_seedId)** - number
>
> **[_keyid](/src/_keyid)** - string - Date.now
>
> **[numberRandom](/src/numberRandom)** - 生成随机数

#### 数字处理

> **[numberPad](/src/numberPad)** - 补充差值
>
> **[numberComma](/src/numberComma)** - 分割数字-格式金额

#### 颜色处理

> **[getRandomColor](/src/getRandomColor)** - 获取随机颜色值
>
> **[colorHex](/src/colorHex)** - RGB颜色转换为16进制
>
> **[colorRgb](/src/colorRgb)** - 16进制颜色转为RGB格式

#### 时间处理

> **[_formatDate](/src/_formatDate)** - 格式化时间
>
> **[_getAllDate](/src/_getAllDate)** - 获取日期全部参数
>
> **[formatDurationToFriendly](/src/formatDurationToFriendly)** - 秒转换成友好格式
>
> **[_isLeapYear](/src/_isLeapYear)** - 判断某一年是否是闰年
>
> **[_parseDate](/src/_parseDate)** - 时间格式反向解析
>
> **[_getMonthDays](/src/_getMonthDays)** - 获取某月的总天数

#### 文件处理

> **[getFileURL](/src/getFileURL)** - 生成文件路径
>
> **[clearFileURL](/src/clearFileURL)** - 清除文件路径
>
> **[downloadBlob](/src/downloadBlob)** - 数据流下载
>
> **[downloadLink](/src/downloadLink)** - 地址文件下载
>
> **[loadResource](/src/loadResource)** - 加载页面资源文件
>
> **[loadResourceCode](/src/loadResourceCode)** - 加载页面代码
>
> **[loadScript](/src/loadScript)** - 加载脚本文件
>
> **[loadStyle](/src/loadStyle)** - 加载css样式表文件
>
> **[preLoadStyle](/src/preLoadStyle)** - 预加载link资源配置
>
> **[uploadFile](/src/uploadFile)** - 原生js上传多图

#### `ifs`判断处理

> **[isAfterIphoneX](/src/isAfterIphoneX)** - 判断是否是iphoneX及之后的机型
>
> **[_isValue](/src/_isValue)** - 判断是有效值
>
> **[_noValue](/src/_noValue)** - 非空并不为0
>
> **[checkEmail](/src/checkEmail)** - 验证邮件格式
>
> **[checkPhone](/src/checkPhone)** - 验证手机
>
> **[getIdCardInfo](/src/getIdCardInfo)** - 解析身份证信息
>
> **[getIdCardLastChar](/src/getIdCardLastChar)** - 获取身份证号第18位校验码
>
> **[hasObjEqual](/src/hasObjEqual)** - 判断两个对象是否相等
>
> **[isArray](/src/isArray)** - 判断是否是数组数据
>
> **[isChinese](/src/isChinese)** - 判断是否是汉字
>
> **[isChineseName](/src/isChineseName)** - 是否是中文名字
>
> **[isEmptyObject](/src/isEmptyObject)** - 是否是空对象
>
> **[isIphone](/src/isIphone)** - 判断是否是phone
>
> **[isIphoneX](/src/isIphoneX)** - 判断是否是iphoneX和iphoneXS
>
> **[isNulls](/src/isNulls)** - 判断除对象外的空值
>
> **[isObject](/src/isObject)** - 判断是否是对象
>
> **[isScreenSzie](/src/isScreenSzie)** - 是否是屏幕尺寸
>
> **[isThisBoolean](/src/isThisBoolean)** - 过滤非boolean时的默认值设置
>
> **[isUndefined](/src/isUndefined)** - 是否为undefined
>
> **[isValidIP](/src/isValidIP)** - 是否是ip地址
>
> **[isWechat](/src/isWechat)** - 判断是否是微信环境


### HTTP处理

#### 缓存处理

> Cookies 不转码存储
> cookie
>
> Locals
> local
> localExpires 本地+生存周期
>
> Sessions
> session

#### 参数处理

> **[_getParams](/src/_getParams)** - 获取URL字符串的参数
> 
> **[_getParamsByName](/src/_getParamsByName)** - 获取某个参数
> 
> **[_getAllParams](/src/_getAllParams)** - 获取Http全部信息
>
> **[_paramsToString](/src/_paramsToString)** - 对象参数转url字符串
>
> **[_getHttpCodeMsg](/src/_getHttpCodeMsg)** - 获取http状态码的提示信息
>
> _encode - URL编码转换
> 
> _decode

### 浏览器操作

> **[addXSupport](/src/addXSupport)** - 兼容X适配-加上viewport-fit=cover
> 
> **[getOrientationStatus](/src/getOrientationStatus)** - 获取横竖屏状态
> 
> **[browser](/src/browser)** - 获取移动端设备环境类
> 
> **[getNetwork](/src/getNetwork)** - 移动端获取网络状态
> 
> **[readyDOM](/src/readyDOM)** - 兼容document加载完成事件
> 
> **[scrollBackTop](/src/scrollBackTop)** - 回到顶部 - 流畅
> 
> **[versions](/src/versions)** - 获取移动端设备版本信息

#### 元素处理

> **[_addClass](/src/_addClass)** - 过滤添加class类
> 
> **[_hasClass](/src/_hasClass)** - 判断类名是否存在目标类
> 
> **[removeClass](/src/removeClass)** - 移除class类
> 
> **[getAllScreen](/src/getAllScreen)** - 获取屏幕screen信息
> 
> **[getClientH](/src/getClientH)** - 获取document的可见高度
> 
> **[getClientSize](/src/getClientSize)** - 根据size获取对应尺寸
> 
> **[getCssStyle](/src/getCssStyle)** - 获取css样式属性
> 
> **[getDocumentBody](/src/getDocumentBody)** - 兼容获取body元素
> 
> **[getRectSize](/src/getRectSize)** - 获取rect边界尺寸
> 
> **[getScrollLeft](/src/getScrollLeft)** - 获取滚动条左边界
> 
> **[getScrollTop](/src/getScrollTop)** - 获取滚动条上边界
> 
> **[getSrcollH](/src/getSrcollH)** - 获取元素的整体高度
> 
> **[prefixStyle](/src/prefixStyle)** - 自动添加适配浏览器样式前缀

#### 事件处理

> **[_off](/src/_off)** - 解绑事件
>
> **[_on](/src/_on)** - 绑定事件
>
> **[EventBus](/src/EventBus)** - 事件总线（数组）
>
> **[stopDefault](/src/stopDefault)** - 阻止默认事件
>
> **[stopTouch](/src/stopTouch)** - 弹窗显示时禁止页面滑动
>
> **[triggerEvent](/src/triggerEvent)** - 兼容性click元素触发

## Plugin

### ele2Extend
基于elementUI开发

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