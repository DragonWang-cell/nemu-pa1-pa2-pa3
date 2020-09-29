<template>
  <a-modal
    title="下属街道"
    :width="640"
    :visible="visible"
    :confirmLoading="loading"
    @ok="() => { $emit('ok') }"
    @cancel="() => { $emit('cancel') }"
  >
    <a-spin :spinning="loading">
      <a-form :form="form" v-bind="formLayout">
        <a-row :gutter="48">
          <a-col :md="24" :sm="24">
            <!-- 检查是否有 id 并且大于0，大于0是修改。其他是新增，新增不显示主键ID -->
            <a-form-item v-show="model && model.id > 0" label="主键ID">
              <a-input v-decorator="['key', { initialValue: 0 }]" disabled />
            </a-form-item>
            <a-form-item
              label="街道名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['name']"
                placeholder="输入街道名称" />
            </a-form-item>
            <a-form-item
              label="位置"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="10"
                v-decorator="['name']"
                placeholder="输入位置" />
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
const fields = ['key', 'name', 'fr', 'zczj', 'area', 'address']
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
