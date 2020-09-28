<template>
  <a-modal
    title="高危工艺"
    :width="1440"
    :visible="visible"
    :confirmLoading="loading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <a-row :gutter="48">
          <a-col :md="12" :sm="24">
            <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
            <a-form-item v-show="model && model.id > 0" label="主键ID">
              <a-input v-decorator="['id', { initialValue: 0 }]" disabled />
            </a-form-item>
            <a-form-item
              label="所属公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入所属公司" />
            </a-form-item>
            <a-form-item
              label="高危工艺"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入高危工艺" />
            </a-form-item>
            <a-form-item
              label="是否备案"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="操作流程监管方案"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-upload
                list-type="picture"
              >
                <a-button> <a-icon type="upload" />选择文件</a-button>
              </a-upload>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-spin>
  </a-modal>
</template>

<script>
import pick from 'lodash.pick'

// 表单字段
const fields = ['name', 'fr', 'zczj', 'area', 'address']
export default {
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    model: {
      type: Object,
      default: () => null
    }
  },
  data () {
    this.formLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 13 }
      }
    }
    return {
      labelCol: { lg: { span: 7 }, sm: { span: 17 } },
      wrapperCol: { lg: { span: 10 }, sm: { span: 19 } },
      form: this.$form.createForm(this)
    }
  },
  created () {
    console.log('custom modal created')

    // 防止表单未注册
    fields.forEach(v => this.form.getFieldDecorator(v))

    // 当 model 发生改变时，为表单设置值
    this.$watch('model', () => {
      this.model && this.form.setFieldsValue(pick(this.model, fields))
    })
  }
}
</script>
