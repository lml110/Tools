# applyTable

## Props

| Prop name             | Description                                                                   | Type           | Values | Default  |
| --------------------- | ----------------------------------------------------------------------------- | -------------- | ------ | -------- |
| highlightCurrentRow   | 是否要高亮当前行                                                              | boolean        | -      | false    |
| highlightSelectionRow | 是否要高亮复选框选中行（仅针对开启 selection 有效）                           | boolean        | -      | false    |
| value                 | 操作数据                                                                      | array          | -      |          |
| height                | 高度                                                                          | string\|number | -      |          |
| maxHeight             | 最大高度                                                                      | string\|number | -      |          |
| stripe                | 条纹                                                                          | boolean        | -      | true     |
| border                | 边框                                                                          | boolean        | -      | true     |
| size                  | 尺寸                                                                          | string         | -      | 'medium' |
| columns               | 格式数据                                                                      | array          | -      | []       |
| loading               | 加载状态                                                                      | boolean        | -      | false    |
| showSummary           | 是否在表尾显示合计行                                                          | boolean        | -      | false    |
| rowClassName          | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | func\|string   | -      |          |
| summaryMethod         | 自定义的合计计算方法                                                          | func           | -      |          |

## Methods

### toggleRowSelection

> 用于多选表格，切换某一行的选中状态, 如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）

#### Params

| Param name | Type     | Description |
| ---------- | -------- | ----------- |
| row        | Objct    | 单行数据    |
| selected   | Boolean= | 选中        |

### clearSelection

> 用于多选表格，清空用户的选择

### toggleAllSelection

> 用于多选表格，切换所有行的选中状态

### setCurrentRow

> 用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。

#### Params

| Param name | Type  | Description |
| ---------- | ----- | ----------- |
| row        | Objct | 单行数据    |

## Events

| Event name            | Properties                                                                                 | Description                                |
| --------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------ |
| handleSelectionChange | **selection** `Array` - 选择数据                                                           | 当选择项发生变化时会触发该事件             |
| handleCurrentChange   | **currentRow** `Object` - 选择数据<br/>**oldCurrentRow** `Object` - 老数据                 | 当选择项发生变化时会触发该事件             |
| handleSortChange      | **selection** `Array` - 排序数据                                                           | 当表格的排序条件发生变化的时候会触发该事件 |
| handleRowClick        | **row** `Array` - 选择数据<br/>**column** `Object` - 表格数据<br/>**event** `Event` - 事件 | 当某一行被点击时会触发该事件               |

## Slots

| Name      | Description  | Bindings             |
| --------- | ------------ | -------------------- |
| header    | 头部扩展     | <br/><br/>           |
| item.slot | columns 扩展 | <br/><br/><br/><br/> |

---

## 示例

```vue
<template>
  <apply-table
    v-model="apidata"
    :columns="columns"
    @handleSelectionChange="handleSelectionChange"
  >
    <template slot-scope="{ row, item }" slot="header">
      <form-button
        type="text"
        class="header-button"
        :class="{ red: diffJson[item.key] }"
        @click="click_hdinfo(item)"
        >{{ item.title }}</form-button
      >
    </template>
    <template slot-scope="{ row, item }" slot="nameInput">
      <compare-input
        :productData="productData"
        :isTrue="isTrue"
        :row="row"
        :item="item"
        preview
      />
    </template>
    <template #userName="{ row }">{{
      row.status === 100 ? "" : row.inheritorUserName || row.userName
    }}</template>
    <template slot-scope="{ row }" slot="optionId">
      <form-button type="text" @click="delete_Insured(row)">删除</form-button>
    </template>
  </apply-table>
</template>
```

```js
import { relationToApplicantJson } from "_libs/static";
import cUploadButton from "@/components/Upload/c-upload-button";
export default {
  props: {
    value: Boolean,
    uuid: String,
  },
  components: { cUploadButton },
  data() {
    return {
      apidata: [],
      columns: [
        { type: "selection", align: "center", width: 42 }, //复选
        {
          headerSlot: true,
          slot: "nameInput",
          key: "原产品",
          title: "原产品",
          align: "center",
          width: 240,
        }, //头部扩展
        { type: "index", title: "序号", align: "center", width: 60 },
        { key: "name", title: "被保人姓名", align: "center" },
        {
          key: "modifyTimeStr",
          title: "更新时间",
          align: "center",
          width: 100,
        },
        { key: "relationToApplicant", title: "与投保人关系", align: "center" },
        { key: "idNo", title: "被保人证件号码", align: "center" },
        {
          title: "操作",
          slot: "optionId",
          width: 80,
          align: "center",
          fixed: "right",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    delete_Insured(row) {},
    handleSelectionChange(res) {
      this.idListSelection = res.map((_) => _.id);
    },
  },
};
```
