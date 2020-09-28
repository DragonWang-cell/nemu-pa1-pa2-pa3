<template>
  <a-modal
    title="事故/隐患"
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
              label="所属公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key1']"
                placeholder="输入所属公司" />
            </a-form-item>
            <a-form-item
              label="隐患名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key3']"
                placeholder="输入隐患名称" />
            </a-form-item>
            <a-form-item
              label="隐患排查时间"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                v-decorator="['key2']"
                placeholder="输入隐患排查时间" />
            </a-form-item>
            <a-form-item
              label="隐患地点"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key4']"
                placeholder="输入隐患地点" />
            </a-form-item>
            <a-form-item
              label="隐患类别"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key6_id']"
                placeholder="输入隐患类别"
              >
                <a-select-option value="1">泄露</a-select-option>
                <a-select-option value="2">爆炸</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="隐患级别"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                v-decorator="['key7_id']"
                placeholder="输入隐患级别"
              >
                <a-select-option value="1">一级</a-select-option>
                <a-select-option value="2">二级</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="治理要求"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                v-decorator="['key10']"
                placeholder="输入治理要求" />
            </a-form-item>
            <a-form-item
              label="治理时限"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                v-decorator="['key9']"
                placeholder="输入治理时限" />
            </a-form-item>

          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item
              label="隐患内容"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-textarea
                :rows="15"
                v-decorator="['key5']"
                placeholder="输入隐患内容" />
            </a-form-item>
            <a-form-item
              label="安全防范措施和应急预案"
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
const fields = ['key1', 'key2', 'key3', 'key4', 'key5', 'key6', 'key7', 'key8', 'key9', 'key10']
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

<style scoped>
  /* tile uploaded pictures */
  .upload-list-inline >>> .ant-upload-list-item {
    float: left;
    width: 200px;
    margin-right: 8px;
  }
  .upload-list-inline >>> .ant-upload-animate-enter {
    animation-name: uploadAnimateInlineIn;
  }
  .upload-list-inline >>> .ant-upload-animate-leave {
    animation-name: uploadAnimateInlineOut;
  }
</style>
