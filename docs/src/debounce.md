## debounce()
**Example**  
```javascript
// 窗口变动事件jQuery(window).on('resize', debounce(calculateLayout, 150))// 点击事件jQuery(element).on('click', debounce(sendMail, 300, {  'leading': true,  'trailing': false}))// 通信事件const debounced = debounce(batchLog, 250, { 'maxWait': 1000 })const source = new EventSource('/stream')jQuery(source).on('message', debounced)// 返回事件 - 取消一个 trailing 的防抖动调用jQuery(window).on('popstate', debounced.cancel) // 检查是否还在调用const status = debounced.pending() ? "Pending..." : "Ready"
```
