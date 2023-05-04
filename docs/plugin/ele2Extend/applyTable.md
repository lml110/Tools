# applyTable

> 基础表格组件

Author: liumouliang

## Props

| Prop name     | Description | Type           | Values | Default  |
| ------------- | ----------- | -------------- | ------ | -------- |
| value         | 操作数据    | array          | -      |          |
| height        | 高度        | string\|number | -      |          |
| maxHeight     | 最大高度    | string\|number | -      |          |
| stripe        | 条纹        | boolean        | -      | true     |
| border        | 边框        | boolean        | -      | true     |
| size          | 尺寸        | string         | -      | 'medium' |
| columns       | 格式数据    | array          | -      | []       |
| loading       | 加载状态    | boolean        | -      | false    |
| showSummary   |             | boolean        | -      | false    |
| rowClassName  |             | func           | -      |          |
| summaryMethod |             | func           | -      |          |

## Events

| Event name            | Properties | Description |
| --------------------- | ---------- | ----------- |
| handleSelectionChange |            |

## Slots

| Name      | Description | Bindings        |
| --------- | ----------- | --------------- |
| item.slot |             | <br/><br/><br/> |

---

## 示例

```vue
<apply-table v-model="apidata" :columns="columns">
    <template slot-scope="{ row }" slot="optionId">
        <form-button type="text" @click="delete_Insured(row)" >删除</form-button>
    </template>
</apply-table>
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
      apidata: [],
      columns: [
        { type: "selection", align: "center", width: 36 },
        { type: "index", title: "序号", align: "center", width: 60 },
        { key: "name", title: "被保人姓名", align: "center" },
        { key: "relationToApplicant", title: "与投保人关系", align: "center" },
        { key: "idNo", title: "被保人证件号码", align: "center" },
        {
          title: "操作",
          slot: "optionId",
          width: 80,
          align: "center",
          fixed: "right"
        }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    delete_Insured(row) {}
  }
};
```
