<template>
  <a-modal
    title="人员培训"
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
              label="文件名"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入文件名" />
            </a-form-item>
            <a-form-item
              label="所在公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入所在公司"
              >
                <a-select-option value="1">公司1</a-select-option>
                <a-select-option value="2">公司2</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="培训内容"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="10"
                placeholder="输入培训内容" />
            </a-form-item>
            <a-form-item
              label="主讲师"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入主讲师" />
            </a-form-item>
            <a-form-item
              label="培训时间"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入培训时间" />
            </a-form-item>
            <a-form-item
              label="参与人员"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入参与人员" />
            </a-form-item>
            <a-form-item
              label="文件"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-upload
              >
                <a-button> <a-icon type="upload" />选择文件</a-button>
              </a-upload>
            </a-form-item>
            <a-form-item
              label="备注"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="10"
                placeholder="输入备注" />
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
