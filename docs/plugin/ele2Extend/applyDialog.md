# applyDialog

> 基础弹窗组件

Author: liumouliang

## Props

| Prop name    | Description            | Type    | Values | Default  |
| ------------ | ---------------------- | ------- | ------ | -------- |
| value        |                        | boolean | -      |          |
| title        | 标题文本               | string  | -      | ''       |
| width        | 全局宽度               | string  | -      | '50%'    |
| size         | 尺寸                   | string  | -      | 'medium' |
| top          | 位置 top               | string  | -      | '15vh'   |
| appendToBody | 是否插入至 body 元素上 | boolean | -      | false    |
| loading      | 加载状态               | boolean | -      | false    |
| isFooter     | 是否需要底部区域       | boolean | -      | false    |
| cancelText   | 取消按钮文本           | string  | -      | '取消'   |
| okText       | 确认按钮文本           | string  | -      | '确认'   |

## Events

| Event name | Properties | Description    |
| ---------- | ---------- | -------------- |
| input      |            | value 状态变化 |
| cancel     |            | 取消后触发     |
| ok         |            | 确认后触发     |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

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
    uuid: String
  },
  components: {},
  data() {
    return {
      filed: "",
      form_radio: {
        listName: "保全减人",
        listKey: "decreaseInsured"
      }
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
      }
    }
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
    }
  }
};
```
