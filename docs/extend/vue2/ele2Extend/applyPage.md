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
<template>
  <applyPage
    v-if="hasPage"
    :size="size"
    :page-index="pageIndex"
    :page-size="pageSize"
    :total="total"
    @current="pageChange"
    @change="pageSizeChange"
  />
  <applyPage
    hideSinglePage
    :page-index="pageIndex"
    :page-size="pageSize"
    :total="totalPage"
    @current="pageChange"
    @change="pageSizeChange"
  />
</template>
```

```js
import { _for, typeOf, getObjVal, _noValue } from "tools";
export default {
  data() {
    return {
      totalPage: 0,
      pageSize: 20,
      pageIndex: 1,
    };
  },
  created() {},
  mounted() {},
  methods: {
    GetList(params) {
      if (!params) params = this._getQueryData();
      return this.$post("api/List", params)
        .then((data) => {
          this.apidata = data.content || [];
          this.initSetPage(data.totalElements);
        })
        .catch((err) => {});
    },
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
    initSetPage(totalPage) {
      this.totalPage = totalPage;
    },
    // let params = this._getQueryData(searchKeys);
    _getQueryData(searchKeys = {}, queryData = this.queryData || {}) {
      const { pageIndex, pageSize } = this;
      const resData = {
        page: pageIndex,
        pageSize,
      };
      _for(queryData, (item, key) => {
        if (typeOf(item) === "array") {
          _for(item, (el, ix) => {
            const name = getObjVal(searchKeys, `${key}.${ix}`);
            if (name && !_noValue(el)) resData[name] = el;
          });
        } else if (!_noValue(item)) {
          resData[key] = item;
        }
      });
      return resData;
    },
  },
  computed: {},
  watch: {},
  components: {},
};
```
