## \_imageLoaded
<p>图片是否加载完毕
//原生
xiu.onload = xiu.onreadystatechange = function() {
if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
1、IE8及以下版本不支持onload事件，但支持onreadystatechange事件；
2、readyState是onreadystatechange事件的一个状态，值为loaded或complete的时候，表示已经加载完毕。</p>

