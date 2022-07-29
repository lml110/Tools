## \_timeout() ⇒ <code>new</code>
<p>通用等待函数</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
this.times = new _timeout()
voiceDiscern_fail(cont = 0) {
    return this.times.start(() => {
        if (!this.isVoiceDiscern) return this.times.clear();
        this.setToast({
            message: '未检测到有效答复',
            icon: 'error',
        });
        cont > 0 && this.voiceDiscern_failEnd()
        return this.voiceDiscern_fail(cont + 1)
    }, 8000)
}
```
