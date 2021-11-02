# applyDescriptions

> 2.15.6 以上的 ele 的版本才有

## Props

| Prop name | Description | Type    | Values | Default |
| --------- | ----------- | ------- | ------ | ------- |
| title     |             | string  | -      |         |
| direction |             | string  | -      |         |
| size      |             | string  | -      |         |
| column    |             | number  | -      | 2       |
| colon     |             | boolean | -      | false   |
| border    |             | boolean | -      | true    |
| apis      |             | array   | -      |         |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| extra   |             |          |
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
