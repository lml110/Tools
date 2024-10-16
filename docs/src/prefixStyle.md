## prefixStyle(style) ⇒ <code>String</code>
<p>自动添加适配浏览器样式前缀</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type |
| --- | --- |
| style | <code>String</code> | 

**Example**  
```javascript
this.spinner.style.webkitTransform =
this.spinner.style.MozTransform =
this.spinner.style.msTransform =
this.spinner.style.OTransform =
this.spinner.style.transform = myTransform;

transform = prefixStyle('transform'),
transitionProperty = prefixStyle('transitionProperty'),
transitionDuration = prefixStyle('transitionDuration'),
transformOrigin = prefixStyle('transformOrigin'),
transitionTimingFunction = prefixStyle('transitionTimingFunction'),
transitionDelay = prefixStyle('transitionDelay'),
```
