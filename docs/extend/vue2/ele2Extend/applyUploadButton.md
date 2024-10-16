# applyUploadButton

> 上传导入按钮

Author: liumouliang
参考 https://element.eleme.cn/#/zh-CN/component/upload

## Props

| Prop name       | Description                              | Type    | Values                             | Default                             |
| --------------- | ---------------------------------------- | ------- | ---------------------------------- | ----------------------------------- |
| value           | v-model                                  | array   | -                                  | []                                  |
| title           | 按钮名称                                 | string  | -                                  |                                     |
| accept          | 接受上传的文件类型                       | string  | `image/*`, `.xls`, `.xlsx`, `.csv` | '.xls,.xlsx'                        |
| autoUpload      | 是否在选取文件后立即进行上传             | boolean | -                                  | true                                |
| limit           | 最大允许上传个数 - 1                     | number  | -                                  | 1                                   |
| multiple        | 是否支持多选文件                         | boolean | -                                  | false                               |
| withCredentials | 支持发送 cookie 凭证信息                 | boolean | -                                  | false                               |
| listType        | 文件列表的类型                           | string  | `text`, `picture`, `picture-card`  | 'text'                              |
| icon            |                                          | string  | -                                  | 'el-icon-plus avatar-uploader-icon' |
| fileList        | 初始上传的文件列表                       | array   | -                                  | []                                  |
| httpRequest     | 覆盖默认的上传行为，可以自定义上传的实现 | func    | -                                  |                                     |
| disabled        | 是否禁用                                 | boolean | -                                  | false                               |
| drag            | 是否启用拖拽上传                         | boolean | -                                  | false                               |
| showFileList    | 是否显示已上传文件列表                   | boolean | -                                  | true                                |

## Methods

### submit

> 手动上传

### clearFiles

> 清除文件

### getUploadFile

> 获取上传文件

### getUploadRef

> 获取 ele 上传组件

### hasSubmitFile

> 是否存在上传文件

### isAllFileSuccess

> 文件是否全部上传成功

#### Params

| Param name | Type   | Description |
| ---------- | ------ | ----------- |
| uploadFile | Object | 上传文件    |

#### Return

| Type    | Description |
| ------- | ----------- |
| Boolean | false       |

## Events

| Event name   | Properties                                                                                                 | Description                                        |
| ------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| beforeUpload | **file** `file` - 文件                                                                                     | 上传文件之前的钩子                                 |
| beforeRemove | **file** `file` - 文件<br/>**fileList** `Array` - 文件列表                                                 | 删除文件之前的钩子                                 |
| preview      | **file** `file` - 文件                                                                                     | 点击文件列表中已上传的文件时的钩子                 |
| exceed       | **file** `file` - 文件<br/>**fileList** `Array` - 文件列表                                                 | 文件超出个数限制时的钩子                           |
| input        |                                                                                                            | v-model (只有成功和删除才触发)<br/>预防意外赋值    |
| change       | **file** `file` - 文件<br/>**fileList** `Array` - 文件列表<br/>**status** `String` - 状态 change \| remove | 文件状态改变时的钩子(添加文件、上传成功和上传失败) |
| success      | **response** `Object` - 成功后的结果<br/>**file** `file` - 文件<br/>**fileList** `Array` - 文件列表        | 文件上传成功时的钩子                               |
| error        | **err** `Object` - 错误信息<br/>**file** `file` - 文件<br/>**fileList** `Array` - 文件列表                 | 文件上传失败时的钩子                               |
| on-progress  | **event** `event` - 进度<br/>**file** `file` - 文件<br/>**fileList** `Array` - 文件列表                    | 文件上传时的钩子                                   |

## Slots

| Name   | Description | Bindings |
| ------ | ----------- | -------- |
| extend | extend 扩展 |          |

---

## 示例 - 基础

```vue
<template>
  <apply-upload-button
    multiple
    accept="image/*"
    v-model="uploadButtonImgs[1]"
    list-type="picture"
    title="上传行业类别配置"
    :http-request="importGroupIndustryInfo"
  />
  <apply-upload-button
    multiple
    accept="image/*"
    v-model="uploadButtonImgs[0]"
    list-type="picture"
    title="上传行业类别配置"
    :http-request="importGroupIndustryInfo"
  />
  <el-form-item prop="appListImg" label="产品缩略图">
    <apply-upload-button
      accept="image/*"
      title="上传图片"
      listType="picture"
      v-model="fileList"
    >
      <span slot="extend" class="el-upload__tip" style="margin-left:12px;"
        >只能上传jpg/png/jpeg文件，不超过500kb，且不可多张上传。<span
          style="color:red;"
          >此图片同时也用于 计划书、团险频道页中 团险产品的缩略图展示</span
        ></span
      >
    </apply-upload-button>
  </el-form-item>
  <apply-upload-button
    ref="uploadButton"
    title="上传行业类别配置"
    :http-request="importGroupIndustryInfo"
    @error="error_invoiceExcel"
    @success="success_invoiceExcel"
    @preview="uploadButton_preview"
  >
    <form-button
      class="flex-row-button"
      @click="click_downTemplate"
      slot="extend"
      type
      size="small"
      >下载行业码表模板</form-button
    >
  </apply-upload-button>
</template>
```

```js
export default {
  data() {
    return {
      uploadButtonImgs: [
        [],
        [
          {
            name: "没地方",
            url: "https://media.wyins.net/invoiceUpload/groupadmin/20230905/848f14f13f80486ab0fd80e033fc456b.jpg",
          },
        ],
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    importGroupIndustryInfo(file) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          //自动更新url
          resolve({
            url: "http://media.wyins.net/invoiceUpload/groupadmin/20231019/111406_3ed73e7a66a919a9dfa64b37e02fdf48.png",
            name: "测试",
          });
        }, 3000);
      });
    },
    uploadButton_preview(files) {
      console.log("预览", files);
    },
  },
};
```

## 示例-手动上传

```vue
<template>
  <apply-upload-button ref="uploadButton" title="请选择文件"
  accept=".xls,.xlsx,.csv" :autoUpload="false"
  :http-request="import_invoiceExcel" @error="error_invoiceExcel" / >
</template>
```

```js
import { getObjVal, setObjVal } from "tools";
export default {
  data() {
    return {};
  },
  created() {},
  computed: {
    fileList: {
      get({ form }) {
        const appListImg = getObjVal(form, "appListImg") || "";
        return appListImg ? [{ name: appListImg, url: appListImg }] : [];
      },
      set(list) {
        const url = getObjVal(list, "0.url") || "";
        setObjVal(this, "form.appListImg", url);
      },
    },
  },
  methods: {
    dialog_ok() {
      const Fn = getObjVal(this, "$refs.uploadButton.submit");
      return Fn && Fn();
    },
    dialog_cancel() {
      const Fn = getObjVal(this, "$refs.uploadButton.clearFiles");
      return Fn && Fn();
    },
    import_invoiceExcel(file) {
      const url = `/api/invoice/importInvoiceExcel`;
      const fileData = { file: [file] };
      return new Promise((resolve, reject) => {
        return this.$post(url, {}, { fileData }, { responseType: "blob" })
          .then((data) => {
            const tt = typeOf(data),
              size = getObjVal(data, "size");
            console.log(tt, size, data);
            if (tt == "Blob" && size) {
              const fileName = getFileName(file.name);
              const extName = getFileExtName(file.name);
              downloadBlob(data, `${fileName}_${+new Date()}.${extName}`);
              reject("失败");
            } else {
              this.$tipsMessage("专票快递单号提交成功！", 1);
              resolve("成功");
            }
          })
          .catch((err) => {
            console.error("上传失败", err);
            reject("失败");
          });
      });
    },
    error_invoiceExcel() {
      this.isShow = false; //防止其一直上传
      this.$tipsMessage(`存在失败的订单，参考自动下载的表格进行处理`, 3);
      return false;
    },
  },
};
```

## 示例-初始赋值

```vue
<template>
  <apply-upload-button title="上传引导图" accept="image/*" list-type="picture"
  multiple v-model="row._guideUrlList" :http-request="file =>
  uploadRequest(file,row,'_guideUrlList')" / >
</template>
```

```js
export default {
  data() {
    return {
      _guideUrlList: [{ url: "", name: "" }],
    };
  },
  created() {},
  computed: {},
  methods: {
    _setFileList(el, tag) {
      const urls = el[tag] ? el[tag].split(",") : [];
      let resList = [];
      this.$for(urls, (url) => {
        if (url) {
          resList.push({
            url,
            name: getFileExtName(url, true),
          });
        }
      });
      return resList;
    },
    _getFileList(el, tag) {
      const list = el[tag] || [];
      let res_url = [];
      this.$for(list, (el) => {
        res_url.push(el.url);
      });
      return res_url.join(",");
    },
    uploadRequest(file) {},
  },
};
```
