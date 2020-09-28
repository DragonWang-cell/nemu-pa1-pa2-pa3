<template>
  <a-modal
    title="逃生演习"
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
              label="演习地点"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="10"
                placeholder="输入演习地点" />
            </a-form-item>
            <a-form-item
              label="演习时间"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入演习时间" />
            </a-form-item>
            <a-form-item
              label="参与人数"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入参与人数" />
            </a-form-item>
            <a-form-item
              label="演习目的"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入演习目的" />
            </a-form-item>
            <a-form-item
              label="演习结果"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入演习结果" />
            </a-form-item>
            <a-form-item
              label="备注"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
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
