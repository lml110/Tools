# applyBaseInfo

> 2.15.6 以下版本基础信息组件

## Props

| Prop name  | Description | Type           | Values | Default |
| ---------- | ----------- | -------------- | ------ | ------- |
| spanNum    |             | number         | -      | 12      |
| labelWidth |             | number\|string | -      | 86      |
| apis       |             | array          | -      |         |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             | <br>     |

---

## 示例

```js
getApis(baseInfo){
    let apiList = []
    this.$for(this.infoList,(row,ix)=>{
        let item = {...row}
        if(row.key === 'birthday'){
            item.value = this.$formatDate(baseInfo[row.key],'yyyy-MM-DD')
        }else{
            item.value = baseInfo[row.key]
        }
        item.hide = !(item.value || item.value===0 || item.value===false)
        apiList[ix] = item
    })
    this.apiList = apiList;
},
```
