## addXSupport()
<p>兼容X适配-加上viewport-fit=cover</p>

**Date**: 2017-11-23  
**Author**: liumouliang  
**Example**  
```javascript
addXSupport()

# fiex布局不支持-解决
<bxs-popup v-model="showPopup" class="comments-popup" :class="isAfterIphoneX && 'IphoneX-bottom'" position="bottom">
.comments-popup.bx-popup.bx-popup--bottom{
  min-height: 40%;
  &.IphoneX-bottom{
    .share-comment .my-comment{
      bottom: constant(safe-area-inset-bottom) !important;
      bottom: env(safe-area-inset-bottom)!important;
    }
  }
}
```
