# 快速上手
## 使用`npm`引入

函数库发布在公司私有的npm仓库，需要切换成公司的npm源
```bash
nrm add weiyi https://nexus.winbaoxian.cn/repository/bxsnpm-group/
nrm use weiyi
npm i weiyi-jax -S
```

全局引入
```js
import Jax from 'weiyi-jax'

Jax.isApp()
```

按需引入
```js
import isApp from 'weiyi-jax/isApp'

isApp()
```

## 使用CDN引入
```html
<script src="xxx.js" type="text/javascript"></script>

<script>
  window.onload = function() {
    Jax.isApp()
  }
</script>
```
详细的JS-SDK链接请看 [发布历史](common/changelog)