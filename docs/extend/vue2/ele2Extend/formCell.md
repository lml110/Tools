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

## Methods

### getEleComponent

> 获取 ele 对应内置组件

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| input      |            |
| change     |            |

## Slots

| Name     | Description | Bindings |
| -------- | ----------- | -------- |
| row.slot |             |          |

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
<!-- 地址 -->
<form-cell
  v-model="selectAddress"
  type="cascader"
  :row="areaConfig"
  :list="areaCodeList"
  @change="change_areaList"
/>
<el-form :disabled="!isEdit" class="process-form-box">
    <form-cell v-model="transitStatus" type="radio" :list="transitList" @change="transit_change" />
    <form-cell v-if="transitStatus==3" class="process-form-remark" v-model="remark" type="textarea" :row="remarkRow" />
</el-form>
```

```js
export default {
  data() {
    return {
      //# radio
      transitStatus: "",
      transitList: [
        { label: "通过", value: "2" },
        { label: "不通过", value: "3" },
      ],
      //# textarea
      remark: "",
      remarkRow: {
        autosize: { minRows: 3, maxRows: 8 },
        tips: "请填写不通过原因",
      },

      lmldata: [],
      dateList: [],
      selectAddress: {},

      forms: {
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
          "list-key": "templateKey",
        },
        serviceType: {
          type: "select",
          label: "服务类型",
          list: {
            1: "客户来电",
            2: "电话回访",
            3: "运营外呼",
          },
        },
        serviceId: {
          label: "关联服务",
          type: "input",
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
            { label: "需要", value: 1 },
            { label: "不需要", value: 0 },
            // '麻醉1',
            // '麻醉2',
            // {label: 'label1',value:'11'},
            // {label: 'label2',value:'22',disabled:true},
          ],
          change(v) {
            console.log("radio", v);
          },
        },
        //地址address
        areaConfig: {
          // label: '开户地',
          // type: 'cascader',
          showAlLevels: true, //显示全部
          changeOnSelect: true,
          filterable: true, //是否搜索
          tips: "请选择地址级联",
          isOnlyLastLevel: true, //选中数据只有最后一级
          props: {
            label: "name",
            value: "code",
            checkStrictly: true, //单选
            multiple: false, //多选
          },
          _initFn(v) {
            //初始化
            let res = [];
            _for(v, (el) => {
              if (el.code) {
                res.push(el.code);
              }
            });
            return res;
          },
        },
        areaCodeList: [],
      },
      lmls: {
        radio: {
          type: "radio",
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
        select: {
          "list-key": "id",
          "list-name": "name",
        },
        switch: {
          // disabled: true,
          active: {
            text: "激活",
            value: "a1",
            color: "red",
          },
          inactive: {
            text: "关闭",
            value: "b1",
            color: "blue",
          },
          change(v) {
            console.log("switch", v);
          },
        },
        datetimerange: {
          // tips: ['开始','结束'],
          value: [],
          separator: "到",
          // range: 'daterange',
          dateType: "datetimerange",
          defaultTime: ["00:00:00", "23:59:59"],
          change(val) {
            console.log("datetimerange", val);
          },
        },
      },
    };
  },
  methods: {
    transit_change(status) {
      if (status != 3) {
        this.remark = "";
      }
    },
    _findAreaName(list, code) {
      const obj = findTarget(list, (_) => _.code == code, "children") || {};
      return obj.name || "";
    },
    // 正常的开户地传值
    change_areaList(val, props, list, resFn) {
      const [provinceCode, cityCode] = val;
      let res = {
        provinceCode,
        provinceName: this._findAreaName(list, provinceCode),
      };
      if (cityCode) {
        res = Object.assign(res, {
          cityCode,
          cityName: this._findAreaName(list, cityCode),
        });
      }
      this.groupPolicyRefundInfo = Object.assign(
        this.groupPolicyRefundInfo,
        res
      );
      return resFn(res);
    },
    change_areaList(val, props, list, resFn) {
      let res = {};

      if (val.length == 3) {
        const [provinceCode, cityCode, areaCode] = val;
        res = this.getAreaData(provinceCode, cityCode, areaCode);
        trace("change_areaList", res);
      } else {
        this.clearSelectAddress();
      }
      return resFn(res);
    },
  },
};
```
