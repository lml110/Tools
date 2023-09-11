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
| showMessage   |                      | boolean | -      | false   |

## Events

| Event name | Properties                        | Description      |
| ---------- | --------------------------------- | ---------------- |
| input      |                                   |
| cancel     |                                   | 取消按钮点击触发 |
| ok         | **requedata** `Object` - 请求数据 | 验证成功后触发   |
| err        | **props** `Object` - 验证数据     | 验证失败后触发   |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| header  | 头部扩展    |          |
| default |             |          |
| bottom  | 尾部扩展    |          |
| footer  |             |          |

---

## 示例

```vue
<template>
  <form-popup
    v-model="decrease_visible"
    title="测试"
    ok-text="提交"
    isFooter
    width="750px"
    label-width="120px"
    :info="decreaseData"
    :loading="save_loading"
    @cancel="modal_cencel"
    @ok="Modal_ok"
    @err="decreaseData_err"
  >
    <template #header>
      <div style="margin-bottom:18px;">
        操作提示：当前只支持短险，因处理后，不管犹豫期内还是犹豫期外，根据剩余保费比例，进行佣金扣除。（包含佣金、任务、红包，不包含基本法）
      </div>
    </template>
    <form-item required prop="newInsuredList" :forms="newInsuredList_form" />
    <form-item>
      <apply-table v-model="orderInsuredList" :columns="columns">
        <template slot-scope="{ row }" slot="optionId">
          <form-button type="text" @click="delete_Insured(row)"
            >删除</form-button
          >
        </template>
      </apply-table>
    </form-item>
    <form-item prop="totalPremium" :forms="decreaseForm.totalPremium" />
    <form-item
      required
      prop="afterPreservationPremium"
      :forms="decreaseForm.afterPreservationPremium"
    />
    <form-item
      required
      prop="preservationDate"
      :forms="decreaseForm.preservationDate"
    />
    <form-item prop="proof" :forms="decreaseForm.proof">
      <cUploadButton
        @ossFileList="handleFileList"
        @onRemove="onRemove"
        :limit="1"
        :fileList="decreaseData.proof"
      >
      </cUploadButton>
    </form-item>
  </form-popup>
</template>
```

```js
import { relationToApplicantJson } from "_libs/static";
import cUploadButton from "@/components/Upload/c-upload-button";
export default {
  props: {
    value: Boolean,
    uuid: String
  },
  components: { cUploadButton },
  data() {
    return {
      filed: "",
      decrease_visible: false,
      decreaseData: {
        filed: "decreaseInsured",
        moduleKey: "insured",
        newInsuredList: [],
        afterPreservationPremium: void 0,
        totalPremium: void 0,
        preservationDate: "",
        proof: []
      },
      newInsuredList_form: {
        type: "select",
        label: "选择减人",
        tips: "选择被保人",
        list: [],
        multiple: true,
        "list-name": "name",
        change: this.newInsuredList_change
      },
      decreaseForm: {
        totalPremium: {
          label: "原保费",
          type: "input-number",
          pre: 2,
          disabled: true
        },
        afterPreservationPremium: {
          label: "保全后的保费",
          tips: "请输入数字，不能大于原总保费",
          type: "input-number",
          pre: 2
        },
        preservationDate: {
          label: "保全时间",
          tips: "请选择保全时间",
          type: "date"
        },
        proof: {
          label: "上传凭证"
        }
      },

      save_loading: false,
      orderInsuredList: [], //保全人信息 - 删除表格
      orderSummary: {}, //概要信息
      columns: [
        { key: "name", title: "被保人姓名", align: "center" },
        { key: "relationToApplicant", title: "与投保人关系", align: "center" },
        { key: "idNo", title: "被保人证件号码", align: "center" }
        // {title: '操作',slot:"optionId",width:80,align:'center'},
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    Modal_ok(formInfo) {},
    newInsuredList_change(val) {
      const list = this.newInsuredList_form.list;
      this.orderInsuredList = val.map(el => {
        return list[el];
      });
      // console.log(list.slice(index,1));
    },
    delete_Insured(row) {},
    getPolicyPreservationDetail() {
      return this.$get("preservation/getPolicyPreservationDetail", {
        policyUuid: this.uuid
      })
        .then((data = {}) => {
          const { orderInsuredList, orderSummary } = data;
          this.newInsuredList_form.list = orderInsuredList.map(el => {
            el.relationToApplicant =
              relationToApplicantJson[el.relationToApplicant];
            return el;
          });
          this.decreaseData.totalPremium = +orderSummary.totalPremium;
          this.orderSummary = orderSummary;
        })
        .catch(err => {});
    },
    handleFileList(fileList) {
      this.decreaseData.proof = fileList;
    },
    onRemove(fileList) {
      this.decreaseData.proof = fileList;
    }
  }
};
```

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
    //确认按钮
    decreaseData_ok(requedata) {
      const { productAllList, productEditId, type, formPopupTitle } = this;
      requedata.productList = requedata.productList.map(id => {
        let el = productAllList.find(_ => _.productId == id) || {};
        return {
          productId: id,
          productName: el._productName
        };
      });
      Object.assign(requedata, { type });
      let url = "product/createGroupProductVerification";
      if (productEditId) {
        url = "product/updateGroupProductVerification";
        requedata["id"] = productEditId;
      }
      return this.$post(url, requedata)
        .then(data => {
          this.$tipsMessage(`${formPopupTitle}成功`, 1);
          this.verification_show = false;
          return this.GetList();
        })
        .catch(err => {
          console.log(err);
        });
    },
    //验证错误
    decreaseData_ok(props) {
      this.$tipsMessage("必填信息不能为空");
    },
    //新增
    create_group() {
      this.productEditId = 0;
      this.productList_data.productList = [];
      this.verification_show = true;
    },
    //编辑
    edit_item({ id, productList }) {
      this.productEditId = id;
      this.verification_show = true;
      //编辑时防止重置数据被覆盖
      this.$nextTick(() => {
        this.productList_data.productList = productList.map(
          _ => "" + _.productId
        );
      });
    },
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
