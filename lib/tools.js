/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/bases.js":
/*!**********************!*\
  !*** ./src/bases.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\n/**\r\n * @param  {[type]}    arr\r\n * @param  {Function}  fn  function(el,ix,arr)\r\n * @return {[type]}\r\n */\nvar forEach = function forEach(arr, fn) {\n    if (!arr.length || !fn) return;\n    var i = -1;\n    var len = arr.length;\n    while (++i < len) {\n        var item = arr[i];\n        fn(item, i, arr);\n    }\n};\n\n/**\r\n * @param {Array} arr1\r\n * @param {Array} arr2\r\n * @description 得到两个数组的交集, 两个数组的元素为数值或字符串\r\n */\nvar getIntersection = function getIntersection(arr1, arr2) {\n    var len = Math.min(arr1.length, arr2.length);\n    var i = -1;\n    var res = [];\n    while (++i < len) {\n        var item = arr2[i];\n        if (arr1.indexOf(item) > -1) res.push(item);\n    }\n    return res;\n};\n\n/**\r\n * @param {Array} arr1\r\n * @param {Array} arr2\r\n * @description 得到两个数组的并集, 两个数组的元素为数值或字符串\r\n */\nvar getUnion = function getUnion(arr1, arr2) {\n    return Array.from(new Set([].concat(_toConsumableArray(arr1), _toConsumableArray(arr2))));\n};\n\n/**\r\n * @param {Array} target 目标数组\r\n * @param {Array} arr 需要查询的数组\r\n * @description 判断要查询的数组是否至少有一个元素包含在目标数组中\r\n */\nvar hasOneOf = function hasOneOf(targetarr, arr) {\n    return targetarr.some(function (_) {\n        return arr.indexOf(_) > -1;\n    });\n};\n\n/**\r\n * @param {String|Number} value 要验证的字符串或数值\r\n * @param {*} validList 用来验证的列表\r\n */\nfunction oneOf(value, validList) {\n    for (var i = 0; i < validList.length; i++) {\n        if (value === validList[i]) {\n            return true;\n        }\n    }\n    return false;\n}\n\n/**\r\n * @param {Number} timeStamp 判断时间戳格式是否是毫秒\r\n * @returns {Boolean}\r\n */\nvar isMillisecond = function isMillisecond(timeStamp) {\n    var timeStr = String(timeStamp);\n    return timeStr.length > 10;\n};\n\n/**\r\n * @param {Number} timeStamp 传入的时间戳\r\n * @param {Number} currentTime 当前时间时间戳\r\n * @returns {Boolean} 传入的时间戳是否早于当前时间戳\r\n */\nvar isEarly = function isEarly(timeStamp, currentTime) {\n    return timeStamp < currentTime;\n};\n\n/**\r\n * @param {Number} num 数值\r\n * @returns {String} 处理后的字符串\r\n * @description 如果传入的数值小于10，即位数只有1位，则在前面补充0\r\n */\nvar getHandledValue = function getHandledValue(num) {\n    return num < 10 ? '0' + num : num;\n};\n\n/**\r\n * @param {Number} timeStamp 传入的时间戳\r\n * @param {Number} startType 要返回的时间字符串的格式类型，传入'year'则返回年开头的完整时间\r\n */\nvar getDate = function getDate(timeStamp, startType) {\n    var d = new Date(timeStamp * 1000);\n    var year = d.getFullYear();\n    var month = getHandledValue(d.getMonth() + 1);\n    var date = getHandledValue(d.getDate());\n    var hours = getHandledValue(d.getHours());\n    var minutes = getHandledValue(d.getMinutes());\n    var second = getHandledValue(d.getSeconds());\n    var resStr = '';\n    if (startType === 'year') resStr = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + second;else resStr = month + '-' + date + ' ' + hours + ':' + minutes;\n    return resStr;\n};\n\n/**\r\n * @param {String|Number} timeStamp 时间戳\r\n * @returns {String} 相对时间字符串\r\n */\nvar getRelativeTime = function getRelativeTime(timeStamp) {\n    // 判断当前传入的时间戳是秒格式还是毫秒\n    var IS_MILLISECOND = isMillisecond(timeStamp);\n    // 如果是毫秒格式则转为秒格式\n    if (IS_MILLISECOND) Math.floor(timeStamp /= 1000);\n    // 传入的时间戳可以是数值或字符串类型，这里统一转为数值类型\n    timeStamp = Number(timeStamp);\n    // 获取当前时间时间戳\n    var currentTime = Math.floor(Date.parse(new Date()) / 1000);\n    // 判断传入时间戳是否早于当前时间戳\n    var IS_EARLY = isEarly(timeStamp, currentTime);\n    // 获取两个时间戳差值\n    var diff = currentTime - timeStamp;\n    // 如果IS_EARLY为false则差值取反\n    if (!IS_EARLY) diff = -diff;\n    var resStr = '';\n    var dirStr = IS_EARLY ? '前' : '后';\n    // 少于等于59秒\n    if (diff <= 59) resStr = diff + '秒' + dirStr;\n    // 多于59秒，少于等于59分钟59秒\n    else if (diff > 59 && diff <= 3599) resStr = Math.floor(diff / 60) + '分钟' + dirStr;\n        // 多于59分钟59秒，少于等于23小时59分钟59秒\n        else if (diff > 3599 && diff <= 86399) resStr = Math.floor(diff / 3600) + '小时' + dirStr;\n            // 多于23小时59分钟59秒，少于等于29天59分钟59秒\n            else if (diff > 86399 && diff <= 2623859) resStr = Math.floor(diff / 86400) + '天' + dirStr;\n                // 多于29天59分钟59秒，少于364天23小时59分钟59秒，且传入的时间戳早于当前\n                else if (diff > 2623859 && diff <= 31567859 && IS_EARLY) resStr = getDate(timeStamp);else resStr = getDate(timeStamp, 'year');\n    return resStr;\n};\n\n/**\r\n * @returns {String} 当前浏览器名称\r\n */\nvar getExplorer = function getExplorer() {\n    var ua = window.navigator.userAgent;\n    var isExplorer = function isExplorer(exp) {\n        return ua.indexOf(exp) > -1;\n    };\n    if (isExplorer('MSIE')) return 'IE';else if (isExplorer('Firefox')) return 'Firefox';else if (isExplorer('Chrome')) return 'Chrome';else if (isExplorer('Opera')) return 'Opera';else if (isExplorer('Safari')) return 'Safari';\n};\n\n/**\r\n * @description 绑定事件 on(element, event, handler)\r\n */\nvar on = function () {\n    if (document.addEventListener) {\n        return function (element, event, handler) {\n            if (element && event && handler) {\n                element.addEventListener(event, handler, false);\n            }\n        };\n    } else {\n        return function (element, event, handler) {\n            if (element && event && handler) {\n                element.attachEvent('on' + event, handler);\n            }\n        };\n    }\n}();\n\n/**\r\n * @description 解绑事件 off(element, event, handler)\r\n */\nvar off = function () {\n    if (document.removeEventListener) {\n        return function (element, event, handler) {\n            if (element && event) {\n                element.removeEventListener(event, handler, false);\n            }\n        };\n    } else {\n        return function (element, event, handler) {\n            if (element && event) {\n                element.detachEvent('on' + event, handler);\n            }\n        };\n    }\n}();\n\n/**\r\n * 判断一个对象是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性\r\n * 如果没有传入key这个参数，则判断obj对象是否有键值对\r\n */\nvar hasKey = function hasKey(obj, key) {\n    if (key) return key in obj;else {\n        var keysArr = Object.keys(obj);\n        return keysArr.length;\n    }\n};\n\n/**\r\n * 判断一个是否存在key，如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性\r\n * 如果没有传入key这个参数，则判断obj对象是否有键值对\r\n */\nvar someKey = function someKey(arr, key) {\n    return arr.some(function (_) {\n        return _.key == key;\n    });\n};\n\n/**\r\n * @class  过滤数据查询某一个值的集合\r\n */\nvar getNameOrKey = function getNameOrKey(arr, queryFn, queryKey) {\n    var reArrs = arr;\n\n    if (queryFn.constructor === Function) reArrs = arr.filter(queryFn);else if (queryFn.constructor === String) reArrs = arr.filter(function (_) {\n        return _[queryFn];\n    });\n\n    if (queryKey) reArrs = reArrs.map(function (_) {\n        return _[queryKey];\n    });\n    return reArrs;\n};\n\n/**\r\n * @param {*} obj1 对象\r\n * @param {*} obj2 对象\r\n * @description 判断两个对象是否相等，这两个对象的值只能是数字或字符串\r\n */\nvar objEqual = function objEqual(obj1, obj2) {\n    var keysArr1 = Object.keys(obj1);\n    var keysArr2 = Object.keys(obj2);\n    if (keysArr1.length !== keysArr2.length) return false;else if (keysArr1.length === 0 && keysArr2.length === 0) return true;\n    /* eslint-disable-next-line */\n    else return !keysArr1.some(function (key) {\n            return obj1[key] != obj2[key];\n        });\n};\n\nexports.default = {\n    forEach: forEach,\n    getIntersection: getIntersection,\n    getUnion: getUnion,\n    hasOneOf: hasOneOf,\n    oneOf: oneOf,\n    getRelativeTime: getRelativeTime,\n    getExplorer: getExplorer,\n    on: on,\n    off: off,\n    hasKey: hasKey,\n    someKey: someKey,\n    getNameOrKey: getNameOrKey,\n    objEqual: objEqual\n};\n\n//# sourceURL=webpack:///./src/bases.js?");

/***/ }),

/***/ "./src/checks.js":
/*!***********************!*\
  !*** ./src/checks.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//验证邮件\nvar checkEmail = function checkEmail(val) {\n    'use strict';\n\n    var filter = /^([a-zA-Z0-9_\\\\.\\\\-])+\\\\@(([a-zA-Z0-9\\\\-])+\\.)+([a-zA-Z0-9]{2,4})+$/;\n\n    if (filter.test(val)) return true;else return false;\n};\n\n//验证手机\nvar checkPhone = function checkPhone(val) {\n    'use strict';\n\n    var filter = /^1\\d{10}$/;\n\n    if (filter.test(val)) return true;else return false;\n};\n\nexports.default = {\n    checkEmail: checkEmail, //验证邮件\n    checkPhone: checkPhone //验证手机\n};\n\n//# sourceURL=webpack:///./src/checks.js?");

/***/ }),

/***/ "./src/colors.js":
/*!***********************!*\
  !*** ./src/colors.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n//十六进制颜色值的正则表达式\nvar colorReg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n\n/**\r\n * @class  16进制颜色转为RGB格式\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {String}    sColor #34538b\r\n * @return {[type]}\r\n */\nvar colorRgb = function colorRgb(sColor) {\n    'use strict';\n\n    sColor = sColor.toLowerCase();\n\n    if (sColor && colorReg.test(sColor)) {\n        if (sColor.length === 4) {\n            var sColorNew = \"#\";\n            for (var i = 1; i < 4; i += 1) {\n                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));\n            };\n            sColor = sColorNew;\n        };\n\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i = 1; i < 7; i += 2) {\n            sColorChange.push(parseInt(\"0x\" + sColor.slice(i, i + 2)));\n        };\n        return \"RGB(\" + sColorChange.join(\",\") + \")\";\n        //return sColorChange;\n    } else {\n        return sColor;\n    };\n};\n\n/**\r\n * @class  RGB颜色转换为16进制\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {String}    sRgb RGB(23, 245, 56)\r\n * @return {[type]}\r\n */\nvar colorHex = function colorHex(sRgb) {\n    'use strict';\n\n    if (/^(rgb|RGB)/.test(sRgb)) {\n        var aColor = sRgb.replace(/(?:\\(|\\)|rgb|RGB)*/g, \"\").split(\",\");\n        var strHex = \"#\";\n\n        for (var i = 0; i < aColor.length; i++) {\n            var hex = Number(aColor[i]).toString(16);\n            if (hex === \"0\") {\n                hex += hex;\n            };\n            strHex += hex;\n        };\n        if (strHex.length !== 7) {\n            strHex = sRgb;\n        };\n        return strHex;\n    } else if (colorReg.test(sRgb)) {\n        var aNum = sRgb.replace(/#/, \"\").split(\"\");\n        if (aNum.length === 6) {\n            return sRgb;\n        } else if (aNum.length === 3) {\n            var numHex = \"#\";\n\n            for (var i = 0; i < aNum.length; i += 1) {\n                numHex += aNum[i] + aNum[i];\n            };\n            return numHex;\n        };\n    } else {\n        return sRgb;\n    };\n};\n\n//获取随机颜色\nvar getRandomColor = function getRandomColor() {\n    'use strict';\n\n    var rgb = [];\n\n    for (var i = 0; i < 3; ++i) {\n        var color = Math.floor(Math.random() * 256).toString(16);\n\n        color = color.length == 1 ? \"0\" + color : color;\n        rgb.push(color);\n    };\n    return '#' + rgb.join('');\n};\n\nexports.default = {\n    colorRgb: colorRgb, //16进制颜色转为RGB格式\n    colorHex: colorHex, //RGB颜色转换为16进制\n    getRandomColor: getRandomColor //获取随机颜色\n};\n\n//# sourceURL=webpack:///./src/colors.js?");

/***/ }),

/***/ "./src/copyObject.js":
/*!***************************!*\
  !*** ./src/copyObject.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _deepCopy = function _deepCopy(obj) {\n    var result = Array.isArray(obj) ? [] : {};\n    for (var key in obj) {\n        if (obj.hasOwnProperty(key)) {\n            if (_typeof(obj[key]) === 'object') {\n                result[key] = deepCopy(obj[key]); //递归复制\n            } else {\n                result[key] = obj[key];\n            };\n        };\n    };\n    return result;\n};\n\nvar _cloneObj = function _cloneObj(obj) {\n    'use strict';\n    //obj.constructor == Object\n\n    var newObj = Array.isArray(obj) ? [] : {};\n    if (JSON) {\n        try {\n            newObj = JSON.parse(JSON.stringify(obj));\n        } catch (err) {\n            newObj = _deepCopy(obj);\n        };\n    } else {\n        newObj = _deepCopy(obj);\n    };\n    return newObj;\n};\n\n//js复制对象 && 深拷贝\n/*module.exports = {\r\n    _cloneObj,\r\n};*/\nexports.default = {\n    _cloneObj: _cloneObj\n};\n\n//# sourceURL=webpack:///./src/copyObject.js?");

/***/ }),

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar formatNumber = function formatNumber(n) {\n    'use strict';\n\n    n = n.toString();\n    return n[1] ? n : '0' + n;\n};\n/**\r\n * @param  {[type]}    date \r\n * @param  {[type]}    fmt  yyyy-MM-DD hh:mm:ss\r\n */\nvar _formatDate = function _formatDate(date, fmt) {\n    var o = {\n        'M+': date.getMonth() + 1, // 月份\n        'D+': date.getDate(), // 日\n        'h+': date.getHours(), // 小时\n        'm+': date.getMinutes(), // 分\n        's+': date.getSeconds(), // 秒\n        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度\n        'S': date.getMilliseconds() // 毫秒\n    };\n\n    if (/(y+)/.test(fmt)) {\n        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));\n    };\n    for (var k in o) {\n        if (new RegExp('(' + k + ')').test(fmt)) {\n            fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));\n        };\n    };\n    return fmt;\n};\n\nvar _getAllDate = function _getAllDate(date) {\n    var weekEnArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];\n\n    var year = date.getFullYear(),\n        month = date.getMonth() + 1,\n        day = date.getDate(),\n        hour = date.getHours(),\n        minute = date.getMinutes(),\n        second = date.getSeconds(),\n        obj = {\n        'year': year,\n        'month': month,\n        'day': day,\n        'hour': hour,\n        'minute': minute,\n        'second': second\n    };\n\n    for (var p in obj) {\n        obj[p] = formatNumber(obj[p]);\n    };\n    obj['week_key'] = date.getDay();\n    obj['week'] = weekEnArr[date.getDay()];\n    return obj;\n};\n\nexports.default = {\n    _getAllDate: _getAllDate, //获取日期各种参数 \n    _formatDate: _formatDate //日期格式化\n};\n\n//# sourceURL=webpack:///./src/dates.js?");

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar isString = function isString(a) {\n    'use strict';\n\n    return typeof a === 'string' || a instanceof String;\n};\n\nvar isFunction = function isFunction(a) {\n    'use strict';\n\n    var getType = {};\n    return a && getType.toString.call(a) === '[object Function]';\n};\n\nvar isArray = function isArray(a) {\n    'use strict';\n\n    return a.constructor === Array;\n    //return Object.prototype.toString.call(o) == '[object Array]';\n};\n\nvar isUndefined = function isUndefined(value) {\n    'use strict';\n\n    return typeof value === 'undefined';\n};\n\n/**\r\n * @class  判断是否是汉字\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {[type]}    charValue 验证数据\r\n * @return {[type]}\r\n */\nvar isCharacter = function isCharacter(charValue) {\n    'use strict';\n\n    return (/^[\\u4e00-\\u9fa5]{0,}$/.test(charValue)\n    );\n};\n\n/**\r\n * @class  标准化扩展名 || Standardidize extension name\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {String}    std\r\n * @return {[type]}\r\n */\nvar stdExtName = function stdExtName(std) {\n    'use strict';\n\n    return std.replace(/[_-]||\\s/g, '').toLowerCase();\n};\n\n/**\r\n * @class  去掉字符串空格\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {String}    str       字符串\r\n * @param  {Boolean}   is_global 是否去除全部空格 || 默认去除首尾空格\r\n * @return {[type]}\r\n */\nvar _trim = function _trim(str, is_global) {\n    'use strict';\n\n    var result = str.replace(/(^\\s+)|(\\s+$)/g, \"\");\n    //str.replace(/(^\\s*)|(\\s*$)/g, \"\")\n\n    if (is_global) {\n        result = result.replace(/\\s/g, \"\");\n    };\n\n    return result;\n};\n\n/**\r\n * @class  判断是否是数字\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {[type]}    numberValue 字符串或数值\r\n * @return {[type]}\r\n */\nvar isNumber = function isNumber(numberValue) {\n    'use strict';\n\n    var reg1 = /^[0-9]{0,}$/;\n    var reg2 = /^[1-9]{1}[0-9]{0,}$/;\n\n    if (numberValue == null || numberValue.length == 0) return false;\n    //numberValue = _trim(numberValue);\n\n    //判断当数字只有1位时 \n    if (numberValue.length < 2) return reg1.test(numberValue);\n    return reg2.test(numberValue);\n};\n\n//浮点数计算\nvar _float = function _float(f, digit) {\n    'use strict';\n\n    var m = Math.pow(10, digit);\n    return Math.round(f * m) / m;\n};\n\n//获取数组最大最小值\nvar getMaximin = function getMaximin(maximin, arr) {\n    'use strict';\n\n    if (maximin == \"max\") {\n        //return Math.max.apply(Math,arr); \n        return Math.max.apply(null, arr);\n    } else if (maximin == \"min\") {\n        return Math.min.apply(null, arr);\n    };\n};\n\n//比较字符串版本\nvar _compareVersion = function _compareVersion(v1, v2) {\n    'use strict';\n\n    v1 = v1.split('.');\n    v2 = v2.split('.');\n    var len = Math.max(v1.length, v2.length);\n\n    while (v1.length < len) {\n        v1.push('0');\n    };\n    while (v2.length < len) {\n        v2.push('0');\n    };\n\n    for (var i = 0; i < len; i++) {\n        var num1 = parseInt(v1[i]);\n        var num2 = parseInt(v2[i]);\n\n        if (num1 > num2) {\n            return 1;\n        } else if (num1 < num2) {\n            return -1;\n        };\n    };\n\n    return 0;\n};\n\n//生成不重复的唯一值\nvar _keyid = function _keyid() {\n    'use strict';\n\n    return Number(Math.random().toString().substr(3, 8) + Date.now()).toString(36);\n};\n/**\r\n * 签名相关\r\n * X位随机数 || 盐值\r\n */\nvar _seedId = function _seedId(maxNum) {\n    'use strict';\n\n    var Num = '0';\n    if (maxNum) {\n        for (var i = 0; i < maxNum; i++) {\n            Num += Math.floor(Math.random() * 10);\n        };\n    };\n    return Number(Num);\n};\n\nexports.default = {\n    /*基础判断*/\n    isString: isString, //是否是字符串\n    isFunction: isFunction, //是否是函数\n    isArray: isArray, //是否是数组\n    isUndefined: isUndefined, //是否是Undefined\n    isCharacter: isCharacter, //判断是否是汉字\n    isNumber: isNumber, //判断是否是数字\n\n    /*基础计算*/\n    _float: _float, //浮点数计算 || 保留小数点后几位\n    getMaximin: getMaximin, //获取数组最大最小值\n    _compareVersion: _compareVersion, //比较字符串版本\n    _trim: _trim, //去掉字符串空格\n\n    _seedId: _seedId, //X位随机数\n    _keyid: _keyid, //生成不重复的唯一值\n    stdExtName: stdExtName //标准化扩展名\n};\n\n//# sourceURL=webpack:///./src/helper.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _copyObject = __webpack_require__(/*! ./copyObject */ \"./src/copyObject.js\");\n\nvar _copyObject2 = _interopRequireDefault(_copyObject);\n\nvar _helper = __webpack_require__(/*! ./helper */ \"./src/helper.js\");\n\nvar _helper2 = _interopRequireDefault(_helper);\n\nvar _params = __webpack_require__(/*! ./params */ \"./src/params.js\");\n\nvar _params2 = _interopRequireDefault(_params);\n\nvar _colors = __webpack_require__(/*! ./colors */ \"./src/colors.js\");\n\nvar _colors2 = _interopRequireDefault(_colors);\n\nvar _checks = __webpack_require__(/*! ./checks */ \"./src/checks.js\");\n\nvar _checks2 = _interopRequireDefault(_checks);\n\nvar _dates = __webpack_require__(/*! ./dates */ \"./src/dates.js\");\n\nvar _dates2 = _interopRequireDefault(_dates);\n\nvar _session = __webpack_require__(/*! ./session */ \"./src/session.js\");\n\nvar _session2 = _interopRequireDefault(_session);\n\nvar _bases = __webpack_require__(/*! ./bases */ \"./src/bases.js\");\n\nvar _bases2 = _interopRequireDefault(_bases);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//基础类\n\n//日期时间类\n//颜色类\n//帮助判断类\nvar findKeyParentIndex = function findKeyParentIndex(list, key) {};\n\n/**\r\n * @class  两个对象数组合并\r\n * @author liumouliang 2019-06-27\r\n *\r\n * @param  {Array}     json1 \r\n * @param  {Array}     json2 \r\n * @param  {String}    key   匹配值\r\n * @return {[type]}\r\n */\n//会话缓存\n//表单验证类\n//url参数类\n//深层复制\nvar jsonArrMerge = function jsonArrMerge() {\n    var json1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n    var json2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n    var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'id';\n\n    var json = json1.concat(json2);\n    var newJson = [];\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = json[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            item1 = _step.value;\n\n            var flag = true;\n            var _iteratorNormalCompletion2 = true;\n            var _didIteratorError2 = false;\n            var _iteratorError2 = undefined;\n\n            try {\n                for (var _iterator2 = newJson[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n                    item2 = _step2.value;\n\n                    if (item1[key] == item2[key]) flag = false;\n                }\n            } catch (err) {\n                _didIteratorError2 = true;\n                _iteratorError2 = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion2 && _iterator2.return) {\n                        _iterator2.return();\n                    }\n                } finally {\n                    if (_didIteratorError2) {\n                        throw _iteratorError2;\n                    }\n                }\n            }\n\n            if (flag) newJson.push(item1);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    ;\n    return newJson;\n};\n\n/**\r\n * @class  基础数据生成一次性树结构\r\n * @author liumouliang 2019-06-27\r\n *\r\n * @param  {[type]}    list     \r\n * @param  {Number}    vaule    \r\n * @param  {String}    parentId \r\n * @param  {String}    id      \r\n * @return {[type]}\r\n */\nvar afreshAuthorityTree = function afreshAuthorityTree(list) {\n    var vaule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var parentId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"parentId\";\n    var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : \"id\";\n\n    return list.filter(function (item) {\n        if (item.type) {\n            item.isMenu = item.type == 1;\n            item.isPermission = item.type == 2;\n        };\n        if (item[parentId] == vaule) {\n            if (item.hasChild) {\n                item.children = afreshAuthorityTree(list, item[id]);\n                item.checked = false;\n            } else {\n                item.checked = item.isChecked;\n            };\n            return item;\n        }\n    });\n};\n\n/**\r\n * @class  获取formData\r\n * @author liumouliang 2019-06-10\r\n *\r\n * @param  {Object}    params 业务参数\r\n * @param  {Object}    files  {file1: [file],file2:[]}\r\n * \r\n */\nvar getFormData = function getFormData() {\n    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n    var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    var fd = new FormData();\n    for (var key in params) {\n        fd.append(key, params[key]);\n    };\n    for (var _key in files) {\n        if (files[_key] && files[_key].length) {\n            var fileArr = files[_key];\n            for (var ix = 0, len = fileArr.length; ix < len; ix++) {\n                fd.append(_key, fileArr[ix]);\n            };\n        }\n    };\n    return fd;\n};\n\nvar Tools = {\n    findKeyParentIndex: findKeyParentIndex, //发现所在元素根目录索引\n    getFormData: getFormData,\n    afreshAuthorityTree: afreshAuthorityTree\n};\n\nTools = Object.assign(_session2.default, //会话缓存\n_checks2.default, //表单验证类\n_params2.default, //url参数类\n_dates2.default, //日期类\n_colors2.default, //颜色类\n_copyObject2.default, //复制类\n_helper2.default, //判断类\n_bases2.default, //基础类\nTools //公共类\n);\n// console.log('Tools',Tools);\nwindow.Tools = Tools;\nexports.default = Tools;\n// module.exports = Tools;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/params.js":
/*!***********************!*\
  !*** ./src/params.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n/**\r\n * @class  对象参数转url字符串\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {Object}    params 对象参数\r\n * @return {[type]}\r\n */\nvar _paramsToString = function _paramsToString(params) {\n    var newArr = [];\n    for (var key in params) {\n        var itemString = params[key].constructor === String ? params[key] : JSON.stringify(params[key]);\n        newArr.push(key + \"=\" + itemString);\n    };\n    return newArr;\n};\n\n/**\r\n * @class  获取URL字符串的参数\r\n * @author liumouliang 2017-11-23\r\n *\r\n * @param  {String}    url 地址\r\n * @return {[type]}\r\n */\nvar _getParams = function _getParams(url) {\n    'use strict';\n\n    url = url || window.location.href;\n    var search = url.substring(url.lastIndexOf(\"?\") + 1);\n    var obj = {};\n    var reg = /([^?&=]+)=([^?&=]*)/g;\n    search.replace(reg, function (rs, $1, $2) {\n        var name = decodeURIComponent($1);\n        var val = decodeURIComponent($2);\n        val = String(val);\n        obj[name] = val;\n        return rs;\n    });\n    return obj;\n};\n\nvar getparams2 = function getparams2(url) {\n    'use strict';\n\n    var ret = {},\n        seg = url.match(/([^\\?]+)/g);\n    if (seg.length > 1) seg = seg[1].split('&');else return ret;\n    var len = seg.length,\n        i = 0,\n        s = void 0;\n    for (; i < len; i++) {\n        if (!seg[i]) {\n            continue;\n        };\n        s = seg[i].split('=');\n        ret[s[0]] = s[1];\n    };\n    return ret;\n};\n\nexports.default = {\n    _paramsToString: _paramsToString, //对象参数转url字符串\n    _getParams: _getParams //获取URL字符串的参数\n};\n\n//# sourceURL=webpack:///./src/params.js?");

/***/ }),

/***/ "./src/session.js":
/*!************************!*\
  !*** ./src/session.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar session = {\n    get: function get(key, type) {\n        var value = sessionStorage.getItem(key) || '';\n        //对象转换\n        if (type) {\n            try {\n                value = JSON.parse(value);\n            } catch (err) {\n                value = {};\n            };\n        };\n        return value;\n    },\n    set: function set(key, value, type) {\n        if (type) {\n            try {\n                value = JSON.stringify(value);\n            } catch (err) {\n                value = '';\n            };\n        };\n        sessionStorage.setItem(key, value);\n    },\n    clear: function clear(str) {\n        if (str) sessionStorage.removeItem(str);else sessionStorage.clear();\n    },\n    info: function info() {\n        //本地数据存储的大小限制为 5MB || currentSize(已使用)：KB\n        var size = 0;\n        for (var item in window.sessionStorage) {\n            if (window.sessionStorage.hasOwnProperty(item)) {\n                size += window.sessionStorage.getItem(item).length;\n            };\n        };\n        return { currentSize: (size / 1024).toFixed(2) };\n    }\n};\n\nexports.default = { session: session };\n\n//# sourceURL=webpack:///./src/session.js?");

/***/ })

/******/ });
if (typeof module !== "undefined" && module.exports) {
    module.exports = Tools;
}
// AMD/requirejs: Define the module
else if (typeof define === 'function' && define.amd) {
    define(function() {
        return Tools;
    });
}
// Browser: Expose to window
else {
    window.Tools = Tools;
}