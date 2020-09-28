<template>
  <a-modal
    title="化学品信息"
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
              label="危化品"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入危化品"
              >
                <a-select-option value="1">氢气</a-select-option>
                <a-select-option value="2">甲烷</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="危化品"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key1']"
                placeholder="输入危化品" />
            </a-form-item>
            <a-form-item
              label="所属公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key2']"
                placeholder="输入所属公司"
              >
                <a-select-option value="1">公司1</a-select-option>
                <a-select-option value="2">公司2</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="是否具有毒性"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
              >
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="通风情况"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入通风情况" />
            </a-form-item>
            <a-form-item
              label="与其他氧化剂距离"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入与其他氧化剂距离" />
            </a-form-item>
            <a-form-item
              label="与明火距离"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入与明火距离" />
            </a-form-item>
            <a-form-item
              label="与其他可燃性距离"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入与其他可燃性距离" />
            </a-form-item>
            <a-form-item
              label="是否设有固定气瓶的支架"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item
              label="是否压力存储"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="压力等级"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入压力等级"
              >
                <a-select-option value="1">常压</a-select-option>
                <a-select-option value="2">低压</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="压力值"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入压力值" />
            </a-form-item>
            <a-form-item
              label="浓度"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入浓度" />
            </a-form-item>
            <a-form-item
              label="环境温度需求"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入环境温度需求" />
            </a-form-item>
            <a-form-item
              label="环境湿度需求"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入环境湿度需求" />
            </a-form-item>
            <a-form-item
              label="数量"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key3']"
                placeholder="输入数量" />
            </a-form-item>
            <a-form-item
              label="数量上限"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key4']"
                placeholder="输入数量上限" />
            </a-form-item>
            <a-form-item
              label="是否备案"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key5']"
              >
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
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
const fields = ['key', 'key1', 'key2', 'key3', 'key4', 'key5']
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
