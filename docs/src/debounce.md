## debounce(func, wait, options) ⇒ <code>any</code>
<p>防抖函数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> |  |
| wait | <code>Number</code> | <p>可选-需要延迟的毫秒数（默认requestAnimationFrame）</p> |
| options | <code>Object</code> | <p>选项对象</p> |

**Example**  
```javascript
//[options.leading=false] (boolean): 指定在延迟开始前调用。
//[options.maxWait] (number): 设置 func 允许被延迟的最大值。
//[options.trailing=true] (boolean): 指定在延迟结束后调用。
debounce(func, wait)
```
