# formPopup

> 表单弹窗

Author: liumouliang

Since: 部分 props 引入 apply-dialog

## Props

| Prop name     | Description          | Type    | Values | Default |
| ------------- | -------------------- | ------- | ------ | ------- |
| labelWidth    | 标题宽度             | string  | -      | 'auto'  |
| labelPosition | 标题位置             | string  | -      | 'right' |
| info          | 操作数据             | object  | -      | {}      |
| isFooter      | 是否展示底部按钮区域 | boolean | -      | true    |

## Events

| Event name | Properties                        | Description      |
| ---------- | --------------------------------- | ---------------- |
| input      |                                   |
| cancel     |                                   | 取消按钮点击触发 |
| ok         | **requedata** `Object` - 请求数据 | 验证成功后触发   |
| err        |                                   | 验证失败后触发   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| header  | 头部扩展    |          |
| default |             |          |
| bottom  | 底部扩展    |          |

---

## 示例

```vue
<template>
  <form-popup
    v-model="isShow"
    title="发送短信"
    ok-text="发送"
    label-width="78px"
    width="500px"
    :info="SMS_Info"
    :loading="save_loading"
    @ok="SMS_OK"
  >
    <form-item
      required
      prop="userIdOrMobile"
      :forms="SMS_Form.userIdOrMobile"
    />
    <form-item required prop="businessType" :forms="BusinessTypeData" />
    <form-item
      v-show="SMS_Info.businessType"
      required
      prop="businessIndex"
      :forms="templateData"
    />
    <div v-show="SMS_Info.businessIndex">
      <form-item prop="content" :forms="SMS_Form.content" />
      <form-item prop="params" :forms="SMS_Form.params" />
    </div>
  </form-popup>
</template>
```

```js
export default {
  name: "smsPopup",
  props: ["value", "userId"],
  components: {},
  data() {
    return {
      save_loading: false,
      SMS_Info: {
        businessType: "",
        businessIndex: "",
        userIdOrMobile: this.userId, //保险师ID-未知
        content: "",
        templateCode: "",
        params: ""
      },
      SMS_Form: {
        userIdOrMobile: {
          tips: "请输入发送对象手机号或ID",
          label: "手机号/ID",
          type: "input"
        },
        params: {
          label: "模版参数",
          tips: '请输入模版所需参数,多个参数用","分隔【投被保人】',
          type: "input"
        },
        content: {
          label: "模版内容",
          disabled: true,
          autosize: true,
          dataType: "textarea",
          type: "input"
        }
      },
      templateData: {
        tips: "请选择模板名称",
        label: "模板名称",
        type: "select",
        list: [],
        "list-name": "templateName",
        change: this.templateData_change
      },
      BusinessTypeData: {
        tips: "请选择业务范围",
        label: "业务范围",
        type: "select",
        change: this.BusinessTypeData_change,
        "list-name": "name",
        "list-key": "type",
        list: {}
      }
    };
  },
  computed: {
    isShow: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      }
    }
  },
  created() {
    this._BusinessType();
  },
  methods: {
    BusinessTypeData_change(val) {
      this.SMS_Info.businessIndex = "";
      if (val) this._SmsTemplate();
      else this.templateData.list = [];
    },
    templateData_change(val) {
      let curs = this.templateData.list[val];
      this.SMS_Info.content = curs ? curs.content : "";
      this.SMS_Info.templateCode = curs ? curs.templateCode : "";
    },
    _BusinessType() {
      return this.$get("listCustomSmsTemplateBusinessType").then(data => {
        this.BusinessTypeData.list = data;
      });
    },
    _SmsTemplate() {
      return this.$get("listCustomSmsTemplate", {
        type: this.SMS_Info.businessType
      })
        .then(data => {
          this.templateData.list = data.map(function(el, ix) {
            el.value = "" + ix;
            return el;
          });
        })
        .catch(err => {
          this.templateData.list = [];
        });
    },
    SMS_OK(requedata) {
      let needParams = requedata.content.match(/{+\d+}/g);
      let contentParams =
        (requedata.params && requedata.params.split(",")) || [];
      if (needParams && contentParams.length !== needParams.length)
        return this.$tipsMessage("入模版所需参数与填写的参数数量不符");
      /*let curs = this.templateData.list[requedata.businessIndex];
            requedata = Object.assign(requedata,{
                businessName: curs.businessName,
                templateName: curs.templateName,
            });*/
      delete requedata.businessIndex;
      this.save_loading = true;
      this.$post("sendSmsForCustom", requedata)
        .then(data => {
          this.save_loading = false;
          this.$tipsMessage("发送成功", 1);
          this.isShow = false;
        })
        .catch(err => {
          this.save_loading = false;
          this.$tipsMessage("发送失败");
        });
    }
  },
  mounted() {},
  watch: {
    userId(val) {
      this.SMS_Info.userIdOrMobile = val;
    }
  }
};
```
