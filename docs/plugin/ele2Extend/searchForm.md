# searchForm

> 搜索列表页面集成组件

Author: liumouliang

## Props

| Prop name   | Description                                                                                                                                         | Type           | Values                                                                                                                      | Default                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| pages       | 初始分页数据                                                                                                                                        | object         | `{size: 'pageSize'`, `index: 'page'`, `total: 'total'`, `list: 'list'`, `meth: '$get'`, `pageSize: 20`, `pageIndex: 1`, `}` | {}                                           |
| value       |                                                                                                                                                     | null           | -                                                                                                                           |                                              |
| recover     |                                                                                                                                                     | null           | -                                                                                                                           |                                              |
| sizeSearch  | 微易-特殊搜索区尺寸                                                                                                                                 | null           | `medium`                                                                                                                    |                                              |
| size        | 尺寸                                                                                                                                                | string         | -                                                                                                                           | 'medium'                                     |
| maxHeight   | 表格最大高度                                                                                                                                        | string\|number | -                                                                                                                           |                                              |
| height      | 表格高度                                                                                                                                            | string\|number | -                                                                                                                           |                                              |
| query       | 控制台数据                                                                                                                                          | array          | -                                                                                                                           | []                                           |
| hasPage     | 是否有分页                                                                                                                                          | boolean        | -                                                                                                                           | true                                         |
| noSearch    | 是否一开始不需要搜索                                                                                                                                | boolean        | -                                                                                                                           | false                                        |
| columns     | 表格类型数据                                                                                                                                        | array          | -                                                                                                                           | []                                           |
| url         | 请求地址                                                                                                                                            | string         | -                                                                                                                           |                                              |
| params      | 请求参数                                                                                                                                            | object         | -                                                                                                                           |                                              |
| recoveryFn  | 重置函数                                                                                                                                            | null           | -                                                                                                                           |                                              |
| listApiFn   | 列表数据重置函数                                                                                                                                    | null           | -                                                                                                                           |                                              |
| resApiFn    | 数据处理后执行函数                                                                                                                                  | null           | -                                                                                                                           |                                              |
| beforeApiFn | 数据处理前执行函数                                                                                                                                  | null           | -                                                                                                                           |                                              |
| queryFormFn | 筛选数据数据处理函数                                                                                                                                | null           | -                                                                                                                           |                                              |
| isLoaded    | 基础数据是否已经加载完成-等待数据加载完成                                                                                                           | boolean        | -                                                                                                                           | true                                         |
| isCompute   | 是否需要计算剩余高度给表格                                                                                                                          | boolean        | -                                                                                                                           | false                                        |
| controls    | 控制默认操作按钮（搜索+重置）<br/>controls:{reset: true, search: true}<br/>controls:{reset: {render:Function,label:'new',show:false}, search: true} | object         | -                                                                                                                           | {<br/> reset: true,<br/> search: true,<br/>} |

## Methods

### GetList

> 请求列表数据

#### Params

| Param name | Type     | Description |
| ---------- | -------- | ----------- |
| callback   | Function | 回调        |

## Events

| Event name            | Properties                    | Description |
| --------------------- | ----------------------------- | ----------- |
| input                 |                               |
| reset                 | **this** `Object` - undefined | 触发重置    |
| search                | **this** `Object` - undefined | 触发搜索    |
| handleSelectionChange |                               |

## Slots

| Name     | Description         | Bindings        |
| -------- | ------------------- | --------------- |
| header   | 头部扩展            |                 |
| default  | 中间扩展-可放置 tab |                 |
| col.slot |                     | <br/><br/><br/> |
| page     | 分页                |                 |

---

## 示例

```vue
<template>
  <page-container isCompute>
    <search-form
      ref="searchFrom"
      v-model="queryForm"
      isCompute
      sizeSearch="medium"
      :isLoaded="isPageLoaded"
      :query="queryData"
      :columns="columns"
      :pages="initPages"
      :params="initParams"
      :resApiFn="_resApiFn"
      :url="url"
    >
      <template slot-scope="{ row }" slot="optionId">
        <form-button type="text" @click="showSurrenderDetail(row)"
          >退款详情</form-button
        >
      </template>
    </search-form>
    <apply-detail ref="applyDetail" :isRefundsPage="true"></apply-detail>
  </page-container>
</template>
```

```js
export default {
  data() {
    return {
      isPageLoaded: false,
      url: "refund/refundFundsList",
      initPages: {
        total: "totalElements",
        list: "content",
        index: "pageNum",
        pageIndex: 0,
        meth: "$post",
      },
      initParams: {
        evaluationMonth: "2023-04",
      },
      queryForm: {},
      queryData: [
        { type: "input", key: "policyUuid", value: "", tips: "订单号" },
        {
          type: "date",
          key: "allTimes",
          dateType: "datetimerange",
          label: "起止时间",
          tips: ["开始日期", "结束日期"],
          start: "startTime",
          end: "endTime",
          value: [],
          className: "dateTime",
          format: "yyyy-MM-dd HH:mm:ss",
          vformat: "yyyy-MM-dd HH:mm:ss",
        },
        {
          type: "date",
          vformat: "yyyy-MM",
          dateType: "month",
          key: "evaluationMonth",
          value: "",
          tips: "考核月份",
        },
        {
          type: "select",
          key: "hasBasicLawBonus",
          list: { 0: "否", 1: "是" },
          tips: "是否涉及",
        },
        {
          type: "select",
          key: "companyId",
          list: [],
          tips: "保险公司",
          "list-key": "companyId",
          "list-name": "companyName",
        },
        {
          type: "cascader",
          key: "accountDepartment",
          list: [],
          value: [],
          tips: "核算机构筛选",
          props: {
            value: "id",
            label: "name",
            children: "children",
          },
          showAlLevels: false,
          filterable: true,
        },
        {
          type: "button",
          label: "实收导入",
          show: true,
          render: () => (this.show_importPaid = true),
        },
      ],
      columns: [
        { type: "index", title: "序号", align: "center", width: 50 },
        { key: "policyUuid", title: "订单号", align: "center" },
        {
          key: "refundStatusDesc",
          title: "审核状态",
          align: "center",
          width: 80,
        },
        {
          key: "refundPremiumStatusDesc",
          title: "退款状态",
          align: "center",
          width: 80,
        },
        {
          key: "refundAmount",
          title: "退款金额(元)",
          align: "center",
          width: 90,
        },
        { key: "policySn", title: "保单号", align: "center" },
        { key: "userId", title: "保险师ID", align: "center", width: 95 },
        { key: "insuredName", title: "投保人名称", width: 130 },
        { key: "productName", title: "产品名称/ID", width: 120 },
        { key: "companyName", title: "保险公司", align: "center", width: 80 },
        { key: "payTypeDesc", title: "收款方式", align: "center", width: 100 },
        { key: "payAmount", title: "收款金额(元)", align: "center", width: 90 },
        { key: "applicantTime", title: "申请时间", align: "center", width: 84 },
        { key: "applicantName", title: "申请人", align: "center", width: 84 },
        {
          title: "操作",
          slot: "optionId",
          align: "center",
          width: 72,
          fixed: "right",
        },
      ],
    };
  },
  methods: {
    getNameOrKey,
    ...mapMutations(["closeNoTag"]),
    GetList() {
      if (this.$refs.searchFrom) return this.$refs.searchFrom.GetList();
    },
    //查看详情
    go_detail(state = 2, id = "new") {
      this.$go(
        {
          name: "PayHelpListDetail",
          replace: false,
          params: { id: id },
          query: { s: state },
        },
        this.$router,
        1
      );
    },
    _resApiFn(res) {
      res.content.map((el, ix) => {
        el.refundStatusDesc = findTarget(
          this.refundStatusList,
          el,
          "refundStatus",
          "value"
        );
        el.refundPremiumStatusDesc = findTarget(
          refundPremiumStatusList,
          el,
          "refundPremiumStatus"
        );
        el.productName = findTarget(
          this.productList,
          el,
          "productId",
          "productId",
          "productName"
        );
        el.applicantTime = formatDate(el.applicantTime);
        el.visitTimeStr = this.$formatDate(el.visitTime);
        el.refundTypeDesc = findTarget(
          refundConservationList_Type,
          el,
          "refundType"
        );
        return el;
      });
      return res;
    },
    _tips: _tips2,
  },
};
```
