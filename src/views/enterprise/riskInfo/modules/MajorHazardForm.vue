<template>
  <a-modal
    title="重大危险源"
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
              label="重大危险源名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入重大危险源名称" />
            </a-form-item>
            <a-form-item
              label="所属公司"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入所属公司"
              >
                <a-select-option value="1">公司1</a-select-option>
                <a-select-option value="2">公司2</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="重大危险源备案号"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入重大危险源备案号" />
            </a-form-item>
            <a-form-item
              label="投用时间"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入投用时间" />
            </a-form-item>
            <a-form-item
              label="单元类型"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入单元类型"
              >
                <a-select-option value="1">生成单元</a-select-option>
                <a-select-option value="2">存储单元</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="单元编码"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入单元编码" />
            </a-form-item>
            <a-form-item
              label="评价单位"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-date-picker
                placeholder="输入评价单位" />
            </a-form-item>
            <a-form-item
              label="评价报告"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-upload
                list-type="picture"
              >
                <a-button> <a-icon type="upload" />选择文件</a-button>
              </a-upload>
            </a-form-item>
            <a-form-item
              label="是否位于化工园区"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="化工园区名称"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入化工园区名称" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :sm="24">
            <a-form-item
              label="重大危险源辨识与分级的标准依据（国标）"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入重大危险源辨识与分级的标准依据（国标）"
              >
                <a-select-option value="1">GB18218-2018</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="是否是重大危险源"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="重大危险源级别"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select
                placeholder="输入重大危险源级别"
              >
                <a-select-option value="1">一级</a-select-option>
                <a-select-option value="2">二级</a-select-option>
                <a-select-option value="3">等</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="是否采用事故后果模拟"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol"
            >
              <a-select>
                <a-select-option value="1">是</a-select-option>
                <a-select-option value="0">否</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item
              label="图片"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-upload
                list-type="picture"
              >
                <a-button> <a-icon type="upload" />选择文件</a-button>
              </a-upload>
            </a-form-item>
            <a-form-item
              label="R值"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入R值" />
            </a-form-item>
            <a-form-item
              label="α值"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-input
                placeholder="输入α值" />
            </a-form-item>
            <a-form-item
              label="易发生事故类型"
              :labelCol="labelCol"
              :wrapperCol="wrapperCol">
              <a-select
                mode="multiple"
                :default-value="['1', '2']"
                placeholder="输入易发生事故类型" >
                <a-select-option value="1">爆炸</a-select-option>
                <a-select-option value="2">火灾</a-select-option>
                <a-select-option value="3">中毒</a-select-option>
              </a-select>
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
