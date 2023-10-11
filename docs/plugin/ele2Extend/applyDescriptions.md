# applyDescriptions

> 2.15.6 以上的 ele 的版本才有

Author: liumouliang

## Props

| Prop name | Description                                                                                                  | Type    | Values | Default |
| --------- | ------------------------------------------------------------------------------------------------------------ | ------- | ------ | ------- |
| title     | 标题文本，显示在左上方                                                                                       | string  | -      |         |
| direction | 排列的方向                                                                                                   | string  | -      |         |
| size      | 列表的尺寸                                                                                                   | string  | -      |         |
| column    | 一行 Descriptions Item 的数量                                                                                | number  | -      | 2       |
| colon     | 是否显示冒号                                                                                                 | boolean | -      | false   |
| border    | 边框样式                                                                                                     | boolean | -      | true    |
| apis      | 选项：<br/>value,<br/>label,<br/>hide：是否隐藏,<br/>slot,<br/>def：默认值：'无',<br/>span：区分全局-spanNum | array   | -      | []      |

## Slots

| Name     | Description | Bindings |
| -------- | ----------- | -------- |
| extra    |             |          |
| row.slot |             | <br/>    |

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
