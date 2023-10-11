# formItem

> 表单控制单元

Author: liumouliang

## Props

| Prop name  | Description | Type          | Values | Default |
| ---------- | ----------- | ------------- | ------ | ------- |
| value      |             | null          | -      |         |
| prop       | 属性字段    | string        | -      | ''      |
| required   | 是否必填    | boolean       | -      | false   |
| labelWidth | 标题宽度    | string        | -      |         |
| infos      | 操作数据    | object        | -      |         |
| forms      | 类型数据    | object        | -      | {}      |
| list       |             | array\|object | -      |         |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| change     |            |

## Slots

| Name          | Description | Bindings |
| ------------- | ----------- | -------- |
| extend-header |             |          |
| formRow.slot  |             |          |
| default       |             |          |
| extend-bottom |             |          |

---

## 示例

```vue
<el-form ref="formValidate" label-width="76px" size="small" :model="formInfo">
    <el-row :gutter="7">
        <!-- select控件为空 -->
        <el-col :span="6">
            <form-item required prop="serviceType" :forms="forms.serviceType" >
                <template slot="empty">
                    <form-button type="text" >添加</form-button>
                </template>
            </form-item>
        </el-col>
        <el-col :span="6">
            <form-item required prop="serviceId" :forms="forms.serviceId">
                <template slot="suffix" v-if="forms.serviceId.slot">
                    <form-button type="text" >添加</form-button>
                </template>
            </form-item>
        </el-col>
        <el-col :span="6">
            <form-item required prop="returnVisitTime" :forms="formManege.returnVisitTime" />
        </el-col>
        <el-col :span="6">
            <form-item required prop="id" :forms="formManege.id" />
        </el-col>
        <el-col :span="6">
            <form-item required prop="je" :forms="formManege.je" />
        </el-col>
        <el-col :span="6">
            <form-item required prop="smsTemplate" :forms="formManege.smsTemplate" />
        </el-col>
        <el-col :span="12">
            <form-item required prop="check" :forms="formManege.check" />
        </el-col>
        <el-col :span="12">
            <form-item required prop="radio" :forms="formManege.radio" />
        </el-col>
    </el-row>
    <form-item required prop="000001" :forms="formManege['000001']" />
    <form-item>
        <form-button @click="click_submit">保存</form-button>
    </form-item>
    <form-item required prop="content" :forms="formManege.content" />
</el-form>
```

```js
export default {
  name: "formItem",
  data() {
    return {
      formInfo: {
        serviceType: "",
        serviceId: "",
        content: "",
        returnVisitTime: "",
        je: void 0,
        check: [],
        smsTemplate: [],
      },
      formManege: {
        id: {
          label: "用户ID",
          rule: "number",
        },
        je: {
          label: "金额",
          pre: 2,
          type: "input-number",
        },
        smsTemplate: {
          type: "select",
          label: "短信模板",
          list: [],
          multiple: true,
          allowCreate: true,
          // clearable: '',
          "list-name": "templateName",
        },
        serviceType: {
          type: "select",
          label: "服务类型",
          slot: "empty",
          list: {
            1: "客户来电",
            2: "电话回访",
            3: "运营外呼",
          },
        },
        serviceId: {
          label: "关联服务",
          type: "input",
          slot: "suffix",
        },
        content: {
          label: "反馈内容",
          disabled: false,
          autosize: true,
          type: "textarea",
          max: 500,
        },
        returnVisitTime: {
          type: "date",
          label: "预约回访",
          options: {
            disabledDate: this.mon2now,
          },
        },
        check: {
          isButton: true,
          border: true,
          trueVal: "1",
          falseVal: "2",
          size: "small",
          label: "多选",
          type: "check",
          // disabled: true,
          listName: "多选",
          list: [
            "麻醉1",
            "麻醉2",
            { label: "label1", value: "11" },
            { label: "label2", value: "22", disabled: true },
          ],
          change(v) {
            console.log("check", v);
          },
        },
        radio: {
          // isButton: true,
          border: true,
          // disabled: true,
          listName: "单选",
          label: "单选",
          type: "radio",
          size: "small",
          list: [
            "麻醉1",
            "麻醉2",
            { label: "label1", value: "11" },
            { label: "label2", value: "22", disabled: true },
          ],
          change(v) {
            console.log("radio", v);
          },
        },
      },
    };
  },
  methods: {
    click_submit() {
      this.$refs["formValidate"].validate((valid, props) => {
        if (valid) console.log("formValidate", valid, props);
      });
    },
  },
  created() {},
  mounted() {},
};
```
