## stopTouch(flag, options)
<p>弹窗显示时禁止页面滑动</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>Boolean</code> | <p>隐藏</p> |
| options | <code>Object</code> | <p>{passive: false,capture: true}</p> |

**Example**  
```javascript
watch: {
    popupStatus(val) {
        return stopTouch(val);
    }
}
```
