# applyPage

> 基础分页组件

Author: liumouliang

## Props

| Prop name      | Description        | Type    | Values | Default |
| -------------- | ------------------ | ------- | ------ | ------- |
| size           | 尺寸               | null    | -      |         |
| total          | 总数               | number  | -      | 0       |
| pageIndex      | 当前索引           | number  | -      | 1       |
| pageSize       | 页数               | number  | -      | 20      |
| hideSinglePage | 只有一页时是否隐藏 | boolean | -      | false   |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| current    |            |
| change     |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

## 示例

```vue
<applyPage
  v-if="hasPage"
  :size="size"
  :page-index="pageIndex"
  :page-size="pageSize"
  :total="total"
  @current="pageChange"
  @change="pageSizeChange"
/>
```

```js
export default {
  data() {
    return {
      resetOption: {
        icon: "el-icon-refresh-right",
        show: true,
      },
      searchOption: {
        icon: "el-icon-search",
        show: true,
        label: "搜索",
      },
      totalPage: 0,
      pageSize: 20,
      pageIndex: 1,
    };
  },
  created() {},
  mounted() {},
  methods: {
    _recoveryData(callback) {
      this.totalPage = 0;
      this.pageIndex = 1;
      return callback && callback();
    },
    pageSizeChange(size) {
      this.pageSize = size;
      return this._recoveryData(() => {
        return this.GetList && this.GetList();
      });
    },
    pageChange(value) {
      this.pageIndex = value;
      return this.GetList && this.GetList();
    },
  },
  computed: {},
  watch: {},
  components: {},
};
```
