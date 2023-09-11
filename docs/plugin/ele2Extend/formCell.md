# formCell

> 表单单元控件

Author: liumouliang

## Props

| Prop name | Description  | Type          | Values | Default |
| --------- | ------------ | ------------- | ------ | ------- |
| value     |              | null          | -      |         |
| type      | 控件类型     | null          | -      |         |
| row       | 控件类型数据 | object        | -      | {}      |
| list      | 控件源数据   | array\|object | -      |         |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |
| change     |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

## 示例

```vue
<form-cell
  v-model="lmldata[2]"
  type="select"
  :row="lmls.select"
  :list="statusList"
></form-cell>
<form-cell v-model="lmldata[3]" type="check" :row="lmls.check"></form-cell>

<form-cell v-model="lmldata[4]" type="radio" :row="lmls.radio"></form-cell>
<form-cell v-model="lmldata[5]" type="switch" :row="lmls.switch"></form-cell>
<form-cell v-model="dateList" type="date" :row="lmls.datetimerange"></form-cell>
<form-cell v-model="lmldata[6]" type="date"></form-cell>
```

```js
export default {
  data() {
    return {
      lmldata: [],
      dateList: [],
      forms: {
        id: {
          label: "用户ID",
          rule: "number"
        },
        je: {
          label: "金额",
          pre: 2,
          type: "input-number"
        },
        smsTemplate: {
          type: "select",
          label: "短信模板",
          list: [],
          multiple: true,
          allowCreate: true,
          // clearable: '',
          "list-name": "templateName",
          "list-key": "templateKey"
        },
        serviceType: {
          type: "select",
          label: "服务类型",
          list: {
            "1": "客户来电",
            "2": "电话回访",
            "3": "运营外呼"
          }
        },
        serviceId: {
          label: "关联服务",
          type: "input"
        },
        content: {
          label: "反馈内容",
          disabled: false,
          autosize: true,
          type: "textarea",
          max: 500
        },
        returnVisitTime: {
          type: "date",
          label: "预约回访",
          options: {
            disabledDate: this.mon2now
          }
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
            { label: "label2", value: "22", disabled: true }
          ],
          change(v) {
            console.log("check", v);
          }
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
            { label: "需要", value: 1 },
            { label: "不需要", value: 0 }
            // '麻醉1',
            // '麻醉2',
            // {label: 'label1',value:'11'},
            // {label: 'label2',value:'22',disabled:true},
          ],
          change(v) {
            console.log("radio", v);
          }
        }
      },
      lmls: {
        radio: {
          type: "radio",
          list: [
            "麻醉1",
            "麻醉2",
            { label: "label1", value: "11" },
            { label: "label2", value: "22", disabled: true }
          ],
          change(v) {
            console.log("radio", v);
          }
        },
        switch: {
          // disabled: true,
          active: {
            text: "激活",
            value: "a1",
            color: "red"
          },
          inactive: {
            text: "关闭",
            value: "b1",
            color: "blue"
          },
          change(v) {
            console.log("switch", v);
          }
        },
        datetimerange: {
          // tips: ['开始','结束'],
          value: [],
          separator: "到",
          // range: 'daterange',
          dateType: "datetimerange",
          change(val) {
            console.log("datetimerange", val);
          }
        }
      }
    };
  }
};
```
