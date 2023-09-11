# searchControl

> 行内搜索筛选器

Author: liumouliang

## Props

| Prop name | Description  | Type            | Values | Default  |
| --------- | ------------ | --------------- | ------ | -------- |
| value     | 操作数据     | object          | -      |          |
| data      | 筛选数据     | array           | -      | []       |
| search    | 搜索按钮配置 | boolean\|object | -      | true     |
| reset     | 重置按钮配置 | boolean\|object | -      | true     |
| size      | 尺寸         | string          | -      | 'medium' |
| recover   | 重置状态     | boolean         | -      | false    |

## Methods

### getInit

> 重置组件

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |
| search     |            | 触发搜索    |
| reset      |            | 触发重置    |

---

## 示例

```vue
<template>
  <search-control
    v-model="queryForm"
    :data="query"
    :reset="resetOption"
    :search="searchOption"
    @reset="click_reset"
    @search="click_search"
  />
</template>
```

```js
export default {
  name: "standardPopup",
  props: {},
  data() {
    return {
      query: [
        { type: "input", key: "standardName", value: "", tips: "标准权益名称" },
        {
          type: "button",
          label: "新增",
          is: "warning",
          show: true,
          render: this.click_new
        }
      ],
      queryForm: {},
      resetOption: {
        icon: "el-icon-refresh-right",
        show: true
      },
      searchOption: {
        icon: "el-icon-search",
        show: true,
        label: "搜索"
      }
    };
  },
  created() {},
  mounted() {},
  methods: {
    click_search(row) {
      const {
        apiList,
        queryForm: { standardName }
      } = this;
      if (!standardName) return this.click_reset();
      this.apiList = apiList.filter(_ => _.standardName === standardName);
    },
    click_reset() {
      this.apiList = this.res;
    },
    click_new() {}
  },
  computed: {},
  components: {}
};
```
