## imageLoaded(source, iscross) ⇒ <code>Promise</code>
<p>处理图片加载完毕</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>Array</code> \| <code>String</code> |  |
| iscross | <code>Boolean</code> | <p>是否跨域 | 默认：true</p> |

**Example**  
```javascript
imageLoaded(source)
// 加载单图
imageLoaded('https://example.com/image.jpg')
  .then(img => console.log('Loaded', img.width))
  .catch(console.error);

// 加载多图
imageLoaded(['img1.jpg', 'img2.jpg'])
  .then(images => console.log('All loaded', images))
  .catch(console.error);
```
