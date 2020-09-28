<template>
  <a-modal
    title="企业"
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
              label="企业名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['name']"
                placeholder="输入企业名称" />
            </a-form-item>
            <a-form-item
              label="统一社会信用代码"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入统一社会信用代码" />
            </a-form-item>
            <a-form-item
              label="所属区域"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['area']"
                placeholder="输入所属区域"
              >
                <a-select-option value="1">南开区</a-select-option>
                <a-select-option value="2">河西区</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="成立日期"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入成立日期" />
            </a-form-item>
            <a-form-item
              label="注册资金"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['zczj']"
                placeholder="输入注册资金" />
            </a-form-item>
            <a-form-item
              label="注册地址"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入注册地址" />
            </a-form-item>
            <a-form-item
              label="法人"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['fr']"
                placeholder="输入法人" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item
              label="经营范围"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入经营范围" />
            </a-form-item>
            <a-form-item
              label="企业地址"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['address']"
                placeholder="输入企业地址" />
            </a-form-item>
            <a-form-item
              label="经度"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入经度" />
            </a-form-item>
            <a-form-item
              label="纬度"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入纬度" />
            </a-form-item>
            <a-form-item
              label="联系人"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入联系人" />
            </a-form-item>
            <a-form-item
              label="联系电话"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入联系电话" />
            </a-form-item>
            <a-form-item
              label="联系邮箱"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入联系邮箱" />
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
