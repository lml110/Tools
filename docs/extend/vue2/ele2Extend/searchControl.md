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
| init       |            |

---

## 示例

```vue
<template>
  <search-control
    v-model="queryData"
    :data="queryForm"
    :reset="resetOption"
    :search="searchOption"
    @reset="click_reset"
    @search="click_search"
  />
</template>
```

```js
export default {
  data() {
    return {
      queryForm: [
        {
          type: "select",
          key: "productId",
          list: [],
          label: "产品名称",
          "list-key": "id",
          "list-name": "name",
        },
        { type: "input", key: "groupName", value: "", label: "公司名称" },
        {
          type: "date",
          key: "policyTime",
          dateType: "datetimerange",
          label: "保单止期",
          tips: ["开始日期", "结束日期"],
          start: "startTime",
          end: "endTime",
          value: [],
          format: "yyyy-MM-dd HH:mm:ss",
        },
        { type: "input", key: "policySn", value: "", label: "保单号" },
        {
          type: "button",
          label: "新增",
          is: "warning",
          show: true,
          render: this.click_new,
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    initData() {
      return getQueryQroduct()
        .then((data) => {
          this.queryForm[0].list = data;
          return this.GetList();
        })
        .catch((err) => {});
    },
    click_search(row) {
      let params = this._getQueryData(searchKeys);
      params = this._setQueryDataNum(params, "auditStatus");
      this.GetList(params);
    },
    click_reset() {
      this.GetList();
    },
    click_new() {},
    // 刷新
    GetList(params = {}) {},
  },
};
```

```js
// import listMainMixin from '@/mixins/common/search-list-mixin';
import { _for, typeOf, getObjVal, _noValue } from "tools";
export default {
  data() {
    return {
      queryData: {},
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
    // params = this._setQueryDataNum(params,'auditStatus');
    _setQueryDataNum(params = {}, key) {
      if (params[key]) params[key] = +params[key];
      return params;
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
  },
  computed: {},
  watch: {},
  components: {},
};
```
