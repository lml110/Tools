# formButton

> 表单按钮组件

Author: liumouliang

## Props

| Prop name  | Description    | Type   | Values                                               | Default   |
| ---------- | -------------- | ------ | ---------------------------------------------------- | --------- |
| size       | 尺寸           | string | -                                                    | "medium"  |
| loading    | 加载状态       | null   | -                                                    |           |
| disabled   | 禁用状态       | null   | -                                                    |           |
| icon       | 图标类名       | null   | -                                                    |           |
| circle     | 圆形样式       | null   | -                                                    |           |
| plain      | 缕空样式       | null   | -                                                    |           |
| round      | 圆角样式       | null   | -                                                    |           |
| nativeType | 原生 type 属性 | null   | -                                                    |           |
| type       | 类型           | string | `primary / success / warning / danger / info / text` | "primary" |
| render     | 事件函数       | func   | -                                                    |           |

## Events

| Event name | Properties | Description |
| ---------- | ---------- | ----------- |
| click      |            |

## Slots

| Name    | Description | Bindings |
| ------- | ----------- | -------- |
| default |             |          |

---

## 示例

```vue
<form-button type>{{txt}}22</form-button>
```
