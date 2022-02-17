# 快速上手
## 使用`npm`引入

```bash
npm i -D lml-tools
```

全局引入
```js
import tools from 'lml-tools'
tools.isAndorIosNoWe()
```

按需引入
```js
import { warning, _cloneObj, trace, _keyid } from 'tools';

//import
['import', {
    libraryName: 'tools',
    libraryDirectory: 'lib',
}, 'tools']
//component
[
  	'component', {
    	libraryName: 'tools',
    	libDir: 'lib',
  	}
]
```

## 使用CDN引入
```html
<script src="//res.wyins.net/autoUpload/common/xxx.js" type="text/javascript"></script>

<script>
tools.isAndorIosNoWe()
const { typeOf, _getParams, setDocumentTitle, regHtmlRepImg, browser, cookie } = tools;
</script>
```
详细的JS-SDK链接请看 [发布历史](common/changelog)