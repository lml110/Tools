## wxTips(content, title, apis) ⇒ <code>Promise</code>
<p>内置提示对话框</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | <p>提示信息</p> |
| title | <code>String</code> | <p>标题||默认为空</p> |
| apis | <code>Object</code> | <p>扩展</p> |

**Example**  
```javascript
// https://developers.weixin.qq.com/miniprogram/dev/api/ui/interaction/wx.showModal.html
wxTips(
    '取消授权，可能会使部分服务无法使用',null,
    {
        confirmText: '重新授权',
        cancelText: "我知道了",
    }).then(openS_fn).catch(reject);
```
