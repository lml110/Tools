## PageList
**Date**: 2017-11-23  
**Author**: liumouliang  
### new PageList()
<p>分页处理方法</p>

**Example**  
```javascript
const page_list = new PageList();
page_list.getParams = function(){
    console.log('ss');
    let ps = page_list._getParams();
    ps[11] = '22'
    return ps;
};
$('.pageList').click(function(event) {
    page_list.getList();
});
```
