<template>
  <page-header-wrapper>
    <a-card :bordered="false">
      <div class="table-page-search-wrapper">
        <a-form layout="inline">
          <a-row :gutter="48">
            <a-col :md="8" :sm="24">
              <a-form-item label="所在公司">
                <a-input v-model="queryParam.name" placeholder=""/>
              </a-form-item>
            </a-col>
            <a-col :md="8" :sm="24">
              <a-form-item label="演习地点">
                <a-input v-model="queryParam.fr" placeholder=""/>
              </a-form-item>
            </a-col>
            <template v-if="advanced">
              <a-col :md="8" :sm="24">
                <a-form-item label="演习时间">
                  <a-date-picker v-model="queryParam.address" placeholder=""/>
                </a-form-item>
              </a-col>
            </template>
            <a-col :md="!advanced && 8 || 24" :sm="24">
              <span class="table-page-search-submitButtons" :style="advanced && { float: 'right', overflow: 'hidden' } || {} ">
                <a-button type="primary" @click="$refs.table.refresh(true)">查询</a-button>
                <a-button style="margin-left: 8px" @click="() => this.queryParam = {}">重置</a-button>
                <a @click="toggleAdvanced" style="margin-left: 8px">
                  {{ advanced ? '收起' : '展开' }}
                  <a-icon :type="advanced ? 'up' : 'down'"/>
                </a>
              </span>
            </a-col>
          </a-row>
        </a-form>
      </div>

      <div class="table-operator">
        <a-button type="primary" icon="plus" @click="handleAdd">新建</a-button>
      </div>

      <s-table
        ref="table"
        size="default"
        rowKey="key"
        :columns="columns"
        :data="loadData"
        :alert="true"
        :rowSelection="rowSelection"
        showPagination="auto"
      >
        <span slot="address" slot-scope="text">
          <ellipsis :length="10" tooltip>{{ text }}</ellipsis>
        </span>

        <span slot="action" slot-scope="text, record">
          <template>
            <a @click="handleEdit(record)">修改</a>
            <a-divider type="vertical" />
            <a @click="handleSub(record)">删除</a>
          </template>
        </span>
      </s-table>

      <escape-drill-form
        ref="createModal"
        :visible="visible"
        :loading="confirmLoading"
        :model="mdl"
        @cancel="handleCancel"
        @ok="handleOk"
      />
    </a-card>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getTest } from '@/api/manage'
// import enterpriseApi, { getEnterpriseList } from '@/api/enterprise'

import EscapeDrillForm from './modules/EscapeDrillForm'
// import request from '@/utils/request'

const columns = [
  {
    title: '所在公司',
    dataIndex: 'key1',
    scopedSlots: { customRender: 'key1' }
  },
  {
    title: '演习地点',
    dataIndex: 'key2',
    scopedSlots: { customRender: 'key2' }
  },
  {
    title: '演习时间',
    dataIndex: 'key3',
    scopedSlots: { customRender: 'key3' }
  },
  {
    title: '参与人数',
    dataIndex: 'key4',
    scopedSlots: { customRender: 'key4' }
  },
  {
    title: '演习目的',
    dataIndex: 'key5',
    scopedSlots: { customRender: 'key5' }
  },
  {
    title: '演习结果',
    dataIndex: 'key6',
    scopedSlots: { customRender: 'key6' }
  },
  {
    title: '备注',
    dataIndex: 'key7',
    scopedSlots: { customRender: 'key7' }
  },
  {
    title: '操作',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    EscapeDrillForm
  },
  data () {
    this.columns = columns
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)
        return getTest()
          .then(res => {
            const result = []
            const totalCount = parseInt(101)
            const pageNo = parseInt(requestParameters.pageNo)
            const pageSize = parseInt(requestParameters.pageSize)
            const totalPage = Math.ceil(totalCount / pageSize)
            const key = (pageNo - 1) * pageSize
            const next = (pageNo >= totalPage ? (pageNo === totalPage ? (totalCount - pageSize * (pageNo - 1)) : 0) : pageSize) + 1

            for (let i = 1; i < next; i++) {
              const tmpKey = key + i
              result.push({
                key1: '所在公司' + tmpKey,
                key2: '演习地点' + tmpKey,
                key3: '演习时间' + tmpKey,
                key4: '参与人数' + tmpKey,
                key5: '演习目的' + tmpKey,
                key6: '演习结果' + tmpKey,
                key7: '备注' + tmpKey
              })
            }
            return {
              pageSize: pageSize,
              pageNo: pageNo,
              totalCount: totalCount,
              totalPage: totalPage,
              data: result
            }
          })
      },
      selectedRowKeys: [],
      selectedRows: []
    }
  },
  filters: {
  },
  computed: {
    rowSelection () {
      return {
        selectedRowKeys: this.selectedRowKeys,
        onChange: this.onSelectChange
      }
    }
  },
  methods: {
    handleAdd () {
      this.mdl = null
      this.visible = true
    },
    handleEdit (record) {
      this.visible = true
      this.mdl = { ...record }
    },
    handleOk () {
      const form = this.$refs.createModal.form
      this.confirmLoading = true
      form.validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
          if (values.id > 0) {
            // 修改 e.g.
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('修改成功')
            })
          } else {
            // 新增
            new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve()
              }, 1000)
            }).then(res => {
              this.visible = false
              this.confirmLoading = false
              // 重置表单数据
              form.resetFields()
              // 刷新表格
              this.$refs.table.refresh()

              this.$message.info('新增成功')
            })
          }
        } else {
          this.confirmLoading = false
        }
      })
    },
    handleCancel () {
      this.visible = false

      const form = this.$refs.createModal.form
      form.resetFields() // 清理表单数据（可不做）
    },
    handleSub (record) {
      if (record.status !== 0) {
        this.$message.info(`删除成功`)
        this.$refs.table.refresh(false) // 删除后更新列表
      } else {
        this.$message.error(`删除失败`)
      }
    },
    onSelectChange (selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys
      this.selectedRows = selectedRows
    },
    toggleAdvanced () {
      this.advanced = !this.advanced
    },
    resetSearchForm () {
      this.queryParam = {
        date: moment(new Date())
      }
    }
  }
}
</script>
