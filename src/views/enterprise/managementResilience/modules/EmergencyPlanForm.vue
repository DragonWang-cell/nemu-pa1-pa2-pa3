<template>
  <a-modal
    title="应急预案"
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
                v-decorator="['key1_id']"
                placeholder="输入所在公司"
              >
                <a-select-option value="1">公司1</a-select-option>
                <a-select-option value="2">公司2</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="应急预案名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key2']"
                placeholder="输入应急预案名称" />
            </a-form-item>
            <a-form-item
              label="应急预案编号"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key3']"
                placeholder="输入应急预案编号" />
            </a-form-item>
            <a-form-item
              label="预案类型"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key4_id']"
                placeholder="输入预案类型"
              >
                <a-select-option value="1">企业预案</a-select-option>
                <a-select-option value="2">政府预案</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="是否用于重大危险源"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key5_id']"
                placeholder="输入是否用于重大危险源"
              >
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="2">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="发布状态"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key6_id']"
                placeholder="输入发布状态"
              >
                <a-select-option value="1">已发布</a-select-option>
                <a-select-option value="2">未发布</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="发布时间"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                v-decorator="['key7']"
                placeholder="输入发布时间" />
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
const fields = ['key', 'key1_id', 'key2', 'key3', 'key4_id', 'key5_id', 'key6_id', 'key7']
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
