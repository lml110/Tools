
# 介绍

<p >
  <a href="https://www.npmjs.com/package/lml-tools"><img src="https://img.shields.io/npm/v/lml-tools.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/lml-tools"><img src="https://img.shields.io/npm/l/lml-tools.svg?sanitize=true" alt="License"></a>
  <a href="https://github.com/lml110/Tools"><img src="https://img.shields.io/github/checks-status/lml110/Tools/master.svg?sanitize=true" alt="License"></a>
  <a href="https://lml110.github.io/Tools/#/"><img src="https://res.wyins.net/autoUpload/common/4762872c-b3e2-42cf-a2a4-6839d8c54450.svg" alt="Doc"></a>
</p>

- https://lml110.github.io/Tools/#/
- http://lmlmyfok.gitee.io/lmltools/#/
- https://docs.winbaoxian.cn/tools/#/

# 辅助函数库

## 常用

> **[debounce](/src/debounce)** - 防抖函数 
>
> **[definePros](/src/definePros)** - 对象绑定- 使附加的方法为只读 
>
> **[getFileExtName](/src/getFileExtName)** - 获取后缀名并转换小写 
>
> **[getFileName](/src/getFileName)** - 获取文件名称 
>
> **[getFormData](/src/getFormData)** - 获取formData 
>
> **[throttle](/src/throttle)** - 节流函数 
>
> **[trace](/src/trace)** - 控制台输出信息 
>
> **[typeOf](/src/typeOf)** - 判断数据类型 
>
> **[warning](/src/warning)** - 控制台输出警告信息 
>
> **[_cloneObj](/src/_cloneObj)** - 深拷贝数据 
>
> **[_deepCopy](/src/_deepCopy)** - 深拷贝数据-递归 
>
> **[_error](/src/_error)** - 抛出错误信息 
>
> **[_tco](/src/_tco)** - 尾递归优化 
>
> **[_toString](/src/_toString)** - 转字符串 

### `rjs`重构

> **[awaitTo](/src/awaitTo)** - 优化await异常转换 
>
> **[classWeakMap](/src/classWeakMap)** - class-重构WeakMap，使其可以遍历 
>
> **[installModuleClass](/src/installModuleClass)** - class类绑定this指向 
>
> **[promiseAllSettled](/src/promiseAllSettled)** - 模拟Promise.allSettled 
>
> **[_filter](/src/_filter)** - 数据过滤-不递归 
>
> **[_findName](/src/_findName)** - 查询数组内数据值 
>
> **[_for](/src/_for)** - 遍历数据 
>
> **[_forEach](/src/_forEach)** - 遍历数组数据 
>
> **[_forObject](/src/_forObject)** - 遍历对象数据 
>
> **[_interval](/src/_interval)** - 通用计时函数 
>
> **[_stringify](/src/_stringify)** - 转字符串 
>
> **[_timeout](/src/_timeout)** - class-setTimeout延时函数 
>
> **[_trim](/src/_trim)** - 去掉字符串空格 

### `rank`计算

> **[arr2Merger](/src/arr2Merger)** - 简单数组的合并去重 
>
> **[deepMerge](/src/deepMerge)** - 深层合并对象 
>
> **[getCombine](/src/getCombine)** - 从数组中取出n个元素的所有组合 
>
> **[getMaximin](/src/getMaximin)** - 获取简单一维数组中的最大值 
>
> **[getNameOrKey](/src/getNameOrKey)** - 过滤数据查询某一个值的集合 -- filterList重合 - 废弃 
>
> **[getPermutation](/src/getPermutation)** - 计算数组中所有的排列方式 
>
> **[getRandomArrayElements](/src/getRandomArrayElements)** - 随机获取数组中的元素组合 
>
> **[isArrRepeat](/src/isArrRepeat)** - 判断一维数组中是否存在重复元素 
>
> **[locusCircularTimes](/src/locusCircularTimes)** - 秒针转动一圈的轨迹 
>
> **[mergeJson](/src/mergeJson)** - 根据标识合并多个单层数组或对象 
>
> **[mergeJsonMixed](/src/mergeJsonMixed)** - 根据标识获取多个单层数组的交集 
>
> **[specPermutation](/src/specPermutation)** - 二维数组中数组元素的全排列 == 规格 废弃 与arrayToTree相同 
>
> **[_swapArray](/src/_swapArray)** - 复杂数组数据交换 

### undefined


### `business`复杂

> **[afreshSetTree](/src/afreshSetTree)** - 一维数组生成一次性树结构 
>
> **[arrayToTree](/src/arrayToTree)** - 数组转树结构 
>
> **[filterData](/src/filterData)** - 深度过滤数据 
>
> **[filterList](/src/filterList)** - 递归查询数组数据 
>
> **[findTarget](/src/findTarget)** - 遍历获取数组中的对应目标节点 
>
> **[nestedProperty](/src/nestedProperty)** - 嵌套对象处理方法 
>
> **[treeToArray](/src/treeToArray)** - 递归查询数组 

### 数组处理

> **[arr2Union](/src/arr2Union)** - 获取数组的并集 
>
> **[arrayToString](/src/arrayToString)** - 数组转字符串 
>
> **[findForStatic](/src/findForStatic)** - 根据静态枚举查询对应值 
>
> **[getOneArr](/src/getOneArr)** - 获取单层级数组 - 浅拷贝 
>
> **[getTreeValueToParentKeys](/src/getTreeValueToParentKeys)** - 根据parentKeys获取值列表 

### 对象处理

> **[getOneObj](/src/getOneObj)** - 获取单层级对象 - 浅拷贝 

### 柯里化缓存

> **[cacheCalculate](/src/cacheCalculate)** - 缓存计算值 
>
> **[cacheFnParams](/src/cacheFnParams)** - 缓存函数参数 

## 数据处理


### 数据转换

> **[_toJson](/src/_toJson)** - 转json 
>
> **[formatJsonStr](/src/formatJsonStr)** - 格式json字符串 
>
> **[_toNumber](/src/_toNumber)** - 转数字 
>
> **[_toFixed](/src/_toFixed)** - 重构toFixed //四舍五入 
>
> **[_toNumFixed](/src/_toNumFixed)** - 转数字 

### 随机生成

> **[_seedId](/src/_seedId)** - 生成不重复的唯一值-数值型 
>
> **[_keyid](/src/_keyid)** - 生成不重复的唯一值-固定字符型 
>
> **[numberRandom](/src/numberRandom)** - 生成随机数 

### 字符串处理

> **[Cutsubstr](/src/Cutsubstr)** - 截取字符串+... 中英文区分 
>
> **[strlen](/src/strlen)** - 计算数据长度 
>
> **[strlenUnit](/src/strlenUnit)** - 转换带单位数据 
>
> **[_compareVersion](/src/_compareVersion)** - 比较字符串版本 
>
> **[_getStr](/src/_getStr)** - 获取有效的字符串 

### 数字处理

> **[numberClamp](/src/numberClamp)** - 限制数值范围 
>
> **[numberComma](/src/numberComma)** - 用于分割数字，一般用于格式化金额 
>
> **[numberPad](/src/numberPad)** - 补充差值，过滤负数|字符 
>
> **[_float](/src/_float)** - 浮点数计算 

### 颜色处理

> **[colorHex](/src/colorHex)** - RGB颜色转换为16进制 
>
> **[colorRgb](/src/colorRgb)** - 16进制颜色转为RGB格式 
>
> **[getRandomColor](/src/getRandomColor)** - 获取随机颜色值 

### 时间处理

> **[classEndDate](/src/classEndDate)** - class-获取截止时间的方法类 
>
> **[formatDurationToFriendly](/src/formatDurationToFriendly)** - 秒转换成友好格式 (四舍五入) 
>
> **[getAllLeftTime](/src/getAllLeftTime)** - class-获取剩余时间的方法类 
>
> **[getEndDateToMonth](/src/getEndDateToMonth)** - 通过月份获取截止时间 
>
> **[getServerTime](/src/getServerTime)** - 获取服务器时间 
>
> **[getTimeStamp](/src/getTimeStamp)** - 获取不同地区的时间戳 
>
> **[parseAboutTime](/src/parseAboutTime)** - 解析当前时间的大致差时 
>
> **[getTimeStamp](/src/getTimeStamp)** - 设置不同地区的时间戳 
>
> **[endDate](/src/endDate)** - 直接使用-classEndDate 
>
> **[_formatDate](/src/_formatDate)** - 格式化时间 
>
> **[_getAllDate](/src/_getAllDate)** - 获取时间内所有基础信息 
>
> **[_getDate](/src/_getDate)** - 获取时间元数据 
>
> **[_getDateDefaultUnit](/src/_getDateDefaultUnit)** - 获取默认时间单位 
>
> **[_getMonthDays](/src/_getMonthDays)** - 获取某一年某一月的总天数 
>
> **[_isLeapYear](/src/_isLeapYear)** - 判断某一年是否是闰年 
>
> **[allLeftTime](/src/allLeftTime)** - 直接使用getAllLeftTime 
>
> **[_parseDate](/src/_parseDate)** - 日期反向解析 

### 文件处理

> **[clearFileURL](/src/clearFileURL)** - 清除文件路径 
>
> **[downloadBlob](/src/downloadBlob)** - 数据流下载 
>
> **[downloadFile](/src/downloadFile)** - 下载文件 
>
> **[downloadLink](/src/downloadLink)** - 地址文件下载 
>
> **[getFileURL](/src/getFileURL)** - 兼容生成文件路径 
>
> **[linkToBlob](/src/linkToBlob)** - 图片链接转Blob 
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
> **[reFileName](/src/reFileName)** - 重命文件名称 
>
> **[uploadFile](/src/uploadFile)** - 原生js上传多图 

### `ifs`判断处理

> **[checkEmail](/src/checkEmail)** - 验证邮件 
>
> **[checkPhone](/src/checkPhone)** - 验证手机 
>
> **[envWxMiniApp](/src/envWxMiniApp)** - 微信小程序环境环境 
>
> **[getIdCardInfo](/src/getIdCardInfo)** - 解析身份证信息 
>
> **[getIdCardLastChar](/src/getIdCardLastChar)** - 获取身份证号第18位校验码 
>
> **[getObjVal](/src/getObjVal)** - 查询嵌套对象的属性 
>
> **[hasObjEqual](/src/hasObjEqual)** - 判断两个对象是否相等 
>
> **[hasObjKey](/src/hasObjKey)** - 查询嵌套对象是否具有给定的属性 
>
> **[isAfterIphoneX](/src/isAfterIphoneX)** - 判断是否是iphoneX及之后的机型 
>
> **[isArray](/src/isArray)** - 判断是否是数组数据 
>
> **[isChinese](/src/isChinese)** - 判断是否是汉字 
>
> **[isChineseName](/src/isChineseName)** - 是否是中文名字 
>
> **[isEmptyObject](/src/isEmptyObject)** - 是否是空对象 
>
> **[isInteger](/src/isInteger)** - 是否是整数 
>
> **[isIphone](/src/isIphone)** - 判断是否是phone 
>
> **[isIphoneX](/src/isIphoneX)** - 判断是否是iphoneX和iphoneXS 
>
> **[isNulls](/src/isNulls)** - 判断除对象外的空值 
>
> **[isObject](/src/isObject)** - 判断是否是对象 
>
> **[isPromise](/src/isPromise)** - 是否是promise 
>
> **[isScreenSzie](/src/isScreenSzie)** - 是否是屏幕尺寸-全屏 
>
> **[isString](/src/isString)** - 是否是字符串类型 
>
> **[isThisBoolean](/src/isThisBoolean)** - 过滤非boolean时的默认值设置 
>
> **[isUndefined](/src/isUndefined)** - 是否为undefined 
>
> **[isValidIDCard](/src/isValidIDCard)** - 是否为身份证号 
>
> **[isValidIP](/src/isValidIP)** - 是否是ip地址 
>
> **[isWechat](/src/isWechat)** - 判断是否是微信环境 
>
> **[setObjVal](/src/setObjVal)** - 设置嵌套对象的属性 
>
> **[_isValue](/src/_isValue)** - 判断是有效值 
>
> **[_noValue](/src/_noValue)** - 检查给定的值是否为“无值”状态。 

### 富文本数据处理

> **[_regAngle](/src/_regAngle)** - 替换英文字符为全角字符 
>
> **[_trimSpecial](/src/_trimSpecial)** - 去除特殊占位符号 
>
> **[_trimEmoji](/src/_trimEmoji)** - 去除表情符号 
>
> **[clearEmptyTags](/src/clearEmptyTags)** - 去除空标签 
>
> **[regHtmlBreakList](/src/regHtmlBreakList)** - 替换回车换行符 

## HTTP处理

> **[getStorageSzie](/src/getStorageSzie)** - 获取缓存容量 

### 浏览器缓存

> **[Cookies](/src/Cookies)** - prott-Cookie集合 
>
> **[cookie](/src/cookie)** - cookie简易版操作 
>
> **[Locals](/src/Locals)** - prott-本地缓存集合 
>
> **[local](/src/local)** - 本地缓存简化版 
>
> **[localExpires](/src/localExpires)** - 本地+生存周期 
>
> **[Sessions](/src/Sessions)** - prott-会话缓存集合 
>
> **[session](/src/session)** - Sessions简化版 

### 参数处理

> **[_getParams](/src/_getParams)** - 获取URL字符串的参数 
>
> **[_getParamsByName](/src/_getParamsByName)** - 根据参数获取链接中的对应值 
>
> **[_getAllParams](/src/_getAllParams)** - 获取Http全部信息 
>
> **[_paramsToString](/src/_paramsToString)** - 对象参数转url字符串 
>
> **[_paramsToSimpleList](/src/_paramsToSimpleList)** - 对象完全转换简单列表 
>
> **[_getHttpCodeMsg](/src/_getHttpCodeMsg)** - 获取http状态码的提示信息 
>
> **[setURLParams](/src/setURLParams)** - 设置url中参数覆盖 
>
> **[removeURLParameter](/src/removeURLParameter)** - 移除URL某个参数 
>
> **[_encode](/src/_encode)** - URL编码转换 
>
> **[_decode](/src/_decode)** - 重构decodeURIComponent 
>
> **[getOneEncode](/src/getOneEncode)** - 获取encodeURIComponent后的字符串(单次判断) 
>
> **[setUrlHttps](/src/setUrlHttps)** - 设置链接协议为https 

## 浏览器操作

> **[addXSupport](/src/addXSupport)** - 兼容X适配-加上viewport-fit=cover 
>
> **[_browser](/src/_browser)** - 获取移动端设备环境类 
>
> **[copyHandler](/src/copyHandler)** - 复制文本 
>
> **[getNetwork](/src/getNetwork)** - 移动端获取网络状态 
>
> **[getOrientationStatus](/src/getOrientationStatus)** - 获取横竖屏状态 
>
> **[readyDOM](/src/readyDOM)** - 兼容document加载完成事件 
>
> **[scrollBackTop](/src/scrollBackTop)** - 回到顶部 - 流畅 
>
> **[versions](/src/versions)** - 获取移动端设备版本信息 

### 元素处理

> **[createCover](/src/createCover)** - 创建透明蒙层(应用场景：点击触发后其他操作不可触发) 
>
> **[domIsHidden](/src/domIsHidden)** - 是否是隐藏元素 
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
>
> **[addClass](/src/addClass)** - 过滤添加class类 
>
> **[hasClass](/src/hasClass)** - 判断类名是否存在目标类 
>
> **[removeClass](/src/removeClass)** - 从指定元素中移除指定的类名。 
>
> **[_replaceClass](/src/_replaceClass)** - description 

### 事件处理

> **[EventBus](/src/EventBus)** - class-事件总线（数组） 
>
> **[stopDefault](/src/stopDefault)** - 阻止默认事件 
>
> **[stopTouch](/src/stopTouch)** - 弹窗显示时禁止页面滑动 
>
> **[triggerEvent](/src/triggerEvent)** - 兼容性click元素触发 
>
> **[_off](/src/_off)** - 解绑事件 
>
> **[_on](/src/_on)** - 绑定事件 

### 图片处理

> **[downloadIamge](/src/downloadIamge)** - 下载图片 
>
> **[getImgeInfo](/src/getImgeInfo)** - 获取图片元素信息 
>
> **[getImgSize](/src/getImgSize)** - 获取base64图片储存大小 
>
> **[getPixelRatio](/src/getPixelRatio)** - 获取canvas渲染的像素倍数 
>
> **[imageLoaded](/src/imageLoaded)** - 处理图片加载完毕 
>
> **[_iosRepairImg](/src/_iosRepairImg)** - 修复IOS中图片旋转问题 
>
> **[_rotateImg](/src/_rotateImg)** - 旋转图片 

### 图片转码

> **[blobToCanvas](/src/blobToCanvas)** - 文件流转Canvas 
>
> **[blobToString](/src/blobToString)** - blobToString 
>
> **[canvasToDataURL](/src/canvasToDataURL)** - canvas转DataURL 
>
> **[dataURLToBlob](/src/dataURLToBlob)** - dataURL转Blob 
>
> **[dataURLToBuffer](/src/dataURLToBuffer)** - dataURL转Buffer 
>
> **[dataURLToFile](/src/dataURLToFile)** - dataURL转File 
>
> **[fileToDataURL](/src/fileToDataURL)** - 文件流转DataURL 
>
> **[imageToBlob](/src/imageToBlob)** - 图片链接转Blob 
>
> **[imageToCanvas](/src/imageToCanvas)** - 图片链接转canvas 

## 正则处理

> **[babelToFileName](/src/babelToFileName)** - bebel文件名互换 
>
> **[getChinese](/src/getChinese)** - 获取字符中的中文字符 
>
> **[regDesensitized](/src/regDesensitized)** - 脱敏函数 
>
> **[regHtmlRepImg](/src/regHtmlRepImg)** - 替换编辑图片标签 
>
> **[WordFirstUper](/src/WordFirstUper)** - 单词首字符大写 
>
> **[_telFormat](/src/_telFormat)** - 手机号格式转换 

## 业务处理

> **[asyncStateErrorMsg](/src/asyncStateErrorMsg)** - 异步处理错误状态(如有错误，后续不进行请求) 
>
> **[classCountDown](/src/classCountDown)** - class-倒计时 
>
> **[classWatcherMap](/src/classWatcherMap)** - class-监听控制 
>
> **[PageList](/src/PageList)** - 分页处理方法 
>
> **[PollingQuery](/src/PollingQuery)** - 异步轮询 
>
> **[TaskQueue](/src/TaskQueue)** - 任务队列-并发控制器 
>
> **[useStateErrorMsg](/src/useStateErrorMsg)** - hook-封装errMsg的赋值 

## 单元方法

> **[contentTypeList](/src/contentTypeList)** - contentType枚举 
>
> **[devicePixelRatio](/src/devicePixelRatio)** - devicePixelRatio 
>
> **[document](/src/document)** - document 
>
> **[history](/src/history)** - history 
>
> **[location](/src/location)** - location 
>
> **[navigator](/src/navigator)** - navigator 
>
> **[regColorHex](/src/regColorHex)** - regColorHex 
>
> **[requestAnimationFrame](/src/requestAnimationFrame)** - requestAnimationFrame 
>
> **[root](/src/root)** - 根变量 
>
> **[screen](/src/screen)** - screen 
>
> **[URL](/src/URL)** - URL 
>
> **[XMLHttpRequest](/src/XMLHttpRequest)** - XMLHttpRequest 
