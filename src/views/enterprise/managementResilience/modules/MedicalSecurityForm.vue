<template>
  <a-modal
    title="医疗保障"
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
              <a-input v-decorator="['key', { initialValue: 0 }]" disabled />
            </a-form-item>
            <a-form-item
              label="所在公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key1']"
                placeholder="输入所在公司"
              >
                <a-select-option value="1">公司1</a-select-option>
                <a-select-option value="2">公司2</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="医疗措施"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key2']"
                placeholder="输入医疗措施"
              >
                <a-select-option value="1">医院</a-select-option>
                <a-select-option value="2">诊所</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="事故流程预案"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="10"
                v-decorator="['key3']"
                placeholder="输入事故流程预案" />
            </a-form-item>
            <a-form-item
              label="医疗设置规模"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key4']"
                placeholder="输入医疗设置规模" />
            </a-form-item>
            <a-form-item
              label="爆炸救治"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key5']"
                placeholder="输入爆炸救治" />
            </a-form-item>
            <a-form-item
              label="中毒救治"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key6']"
                placeholder="输入中毒救治" />
            </a-form-item>
            <a-form-item
              label="腐蚀救治"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key7']"
                placeholder="输入腐蚀救治" />
            </a-form-item>
            <a-form-item
              label="伤亡救治"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key8']"
                placeholder="输入伤亡救治" />
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
const fields = ['key', 'key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8']
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
