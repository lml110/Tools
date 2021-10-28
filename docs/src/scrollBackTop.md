## scrollBackTop(el, to, callback, duration) ⇒ <code>null</code>
<p>回到顶部 - 流畅</p>

**Date**: 2017-11-23  
**Author**: liumouliang  

| Param | Type | Description |
| --- | --- | --- |
| el | <code>el</code> | <p>元素|默认：root</p> |
| to | <code>Number</code> | <p>位置|默认：0</p> |
| callback | <code>function</code> |  |
| duration | <code>Number</code> | <p>延迟时间|默认：500</p> |

**Example**  
```javascript
scrollBackTop()

back () {
  let target = typeof this.container === 'string' ? this.containerEle : (document.documentElement || document.body)
  const sTop = target.scrollTop
  scrollTop(this.containerEle, sTop, 0, this.duration)
  this.$emit('on-click')
}

$('.kk').on('click',function(){
    scrollBackTop(null,500,function(){
    console.log('动画已结束')
  },5000)
})
document.querySelector(this.container)
scrollBackTop($('.scroll')[0],0,function(){
  console.log('动画已结束')
},5000)
```
