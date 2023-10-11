# applyDialog

> 基础弹窗组件

Author: liumouliang

## Props

| Prop name    | Description            | Type    | Values | Default                                                                      |
| ------------ | ---------------------- | ------- | ------ | ---------------------------------------------------------------------------- |
| value        |                        | boolean | -      |                                                                              |
| customClass  | 自定义类名             | string  | -      |                                                                              |
| title        | 标题文本               | string  | -      | ''                                                                           |
| titleIcon    | 标题图标               | string  | -      | ''                                                                           |
| width        | 全局宽度               | string  | -      | '50%'                                                                        |
| size         | 尺寸                   | string  | -      | 'medium'                                                                     |
| top          | 位置 top               | string  | -      | '8vh'                                                                        |
| appendToBody | 是否插入至 body 元素上 | boolean | -      | false                                                                        |
| loading      | 加载状态               | boolean | -      | false                                                                        |
| isFooter     | 是否需要底部区域       | boolean | -      | false                                                                        |
| cancelText   | 取消按钮文本           | string  | -      | '取消'                                                                       |
| okText       | 确认按钮文本           | string  | -      | '确认'                                                                       |
| options      |                        | object  | -      | {<br/> close_on_press_escape: false,<br/> close_on_click_modal: false,<br/>} |
| notCencel    | 是否取消触发时隐藏     | boolean | -      | false                                                                        |

## Events

| Event name | Properties | Description    |
| ---------- | ---------- | -------------- |
| input      |            | value 状态变化 |
| cancel     |            | 取消后触发     |
| ok         |            | 确认后触发     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| title   |             |          |
| default |             |          |
| footer  |             |          |

---

## 示例

```vue
<template>
  <apply-dialog
    v-model="isShow"
    title="请选择处理的流程"
    width="300px"
    isFooter
    okText="下一步"
    @cancel="dialog_cancel"
    @ok="dialog_ok"
  >
    <form-cell v-model="filed" type="radio" :row="form_radio"></form-cell>
  </apply-dialog>
</template>
```

```js
import { relationToApplicantJson } from "_libs/static";
export default {
  props: {
    value: Boolean,
    uuid: String,
  },
  components: {},
  data() {
    return {
      filed: "",
      form_radio: {
        listName: "保全减人",
        listKey: "decreaseInsured",
      },
    };
  },
  created() {},
  computed: {
    isShow: {
      get({ value }) {
        return value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
  },
  methods: {
    dialog_ok() {
      if (!this.filed) return this.$tipsMessage("请选择项目");
      this.isShow = false;
      this.decrease_visible = true;
      this.getPolicyPreservationDetail();
    },
    dialog_cancel() {
      this.filed = "";
    },
  },
};
```

```vue
<template>
  <fragment>
    <apply-dialog
      v-model="isShow"
      title="险种复效"
      width="960px"
      class="recheck-popup"
    >
      <el-tabs v-model="recheckActive">
        <el-tab-pane label="可复效险种" name="first">
          <search-form
            v-model="queryForm"
            no-search
            hasPage
            :max-height="maxHeight"
            :url="listUrl"
            :query="from_query"
            :columns="columns1"
            :pages="pageParams"
          >
            <template #optionId="{ row }">
              <form-button type="text" @click="click_option(row)"
                >复效</form-button
              >
            </template>
          </search-form>
        </el-tab-pane>
        <el-tab-pane label="复效记录" name="second">
          <search-form
            v-model="queryForm"
            no-search
            hasPage
            :max-height="maxHeight"
            :url="listUrl"
            :query="from_query2"
            :columns="columns2"
            :pages="pageParams"
          >
          </search-form>
        </el-tab-pane>
      </el-tabs>
    </apply-dialog>
    <apply-dialog
      v-model="confirmShow"
      title="险种复效"
      width="300px"
      isFooter
      okText="复效"
      :loading="confirmLoading"
      @cancel="dialog_cancel"
      @ok="dialog_ok"
    >
      <div class="recheck-confirm-main dialogBodyLineH">
        <div>是否立即对当前险种进行复效？复效后产生以下影响：</div>
        <div>1、险种状态改为 【{险种状态}】</div>
        <div>2、当期实收保费按当期应收保费计入</div>
        <div>3、进入续期结算，更新续期数据</div>
        <div>4、继续率若重刷</div>
      </div>
    </apply-dialog>
  </fragment>
</template>
```

```js
export default {
  props: {
    value: Boolean,
  },
  data() {
    return {
      recheckActive: "first",
      queryForm: {},
      maxHeight: "360px",
      listUrl: "listCustomerServiceCoupon",
      pageParams: {
        total: "totalElements",
        list: "content",
        index: "pageNum",
        pageIndex: 0,
        // meth: '$post',
      },
      from_query: [
        { type: "input", label: "保单号", key: "activityNo", value: "" },
        {
          type: "select",
          label: "险种名称",
          key: "activityStatus",
          selectList: [],
        },
        {
          type: "date",
          key: "allTime",
          dateType: "datetimerange",
          key: "lml",
          label: "应收时间",
          value: [],
        },
      ],
      columns: [
        { type: "index", title: "编号", align: "center", width: 50 },
        { key: "name", title: "应收时间", align: "center" },
        { key: "name", title: "保单号", align: "center" },
        { key: "name", title: "险种ID", align: "center" },
        { key: "name", title: "险种名称", align: "center" },
        { key: "name", title: "险种状态", align: "center" },
        { key: "name", title: "续期期数", align: "center" },
        { key: "name", title: "当期应收保费", align: "center" },
      ],
      from_query2: [],
      columns1: [],
      columns2: [],
      confirmShow: false,
      confirmLoading: false,
    };
  },
  created() {
    this.from_query2 = this.$cloneObj(this.from_query);
    this.from_query2.splice(2, 0, {
      type: "input",
      label: "操作人",
      key: "activityNo",
      value: "",
    });
    this.columns1.push(...this.columns, {
      title: "操作",
      slot: "optionId",
      align: "center",
      width: 72,
      fixed: "right",
    });
    this.columns2.push(
      ...this.columns,
      { key: "name", title: "操作人", align: "center" },
      { key: "name", title: "操作时间", align: "center" }
    );
  },
  computed: {
    isShow: {
      get({ value }) {
        return value;
      },
      set(v) {
        this.$emit("input", v);
      },
    },
    recheckActiveFirst({ recheckActive }) {
      return recheckActive === "first";
    },
  },
  methods: {
    click_option(row) {
      this.confirmShow = true;
    },
    click_close() {
      this.isShow = false;
    },
    click_tab() {
      // return this.$nextTick(this.GetList);
    },

    dialog_cancel() {
      this.confirmLoading = false;
    },
    dialog_ok() {
      this.confirmLoading = true;
    },
  },
};
```

```css
<style lang="less">
@import "~_css/theme.less";
.submit-import-tips.applyDialog{
    .applyDialog-title{
        font-size: 16px;
        font-weight: bold;
    }
    .el-icon-warning{
        color: #F43030;
        font-size: 22px;
    }
}
</style>
```
