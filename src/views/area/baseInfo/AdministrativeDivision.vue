<template>
  <page-header-wrapper
    :title="title"
  >
    <template v-slot:content>
      <a-card :bordered="false">
        <div class="table-page-search-wrapper">
          <a-form layout="inline">
            <a-row :gutter="48">
              <a-col :md="8" :sm="24">
                <a-form-item label="街道名称">
                  <a-input v-model="queryParam.name" placeholder=""/>
                </a-form-item>
              </a-col>
              <template v-if="advanced">
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

        <s-table
          ref="table"
          size="default"
          rowKey="key"
          :columns="columns"
          :data="loadData"
          :alert="true"
          :rowSelection="rowSelection"
          showPagination="false"
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

        <street-form
          ref="createModal"
          :visible="visible"
          :loading="confirmLoading"
          :model="mdl"
          @cancel="handleCancel"
          @ok="handleOk"
        />
      </a-card>
    </template>
  </page-header-wrapper>
</template>

<script>
import moment from 'moment'
import { STable, Ellipsis } from '@/components'
import { getTest } from '@/api/manage'
// import enterpriseApi, { getEnterpriseList } from '@/api/enterprise'

import StreetForm from './modules/StreetForm'
// import request from '@/utils/request'

export default {
  name: 'TableList',
  components: {
    STable,
    Ellipsis,
    StreetForm
  },
  data () {
    return {
      // create model
      visible: false,
      confirmLoading: false,
      mdl: null,
      // 高级搜索 展开/关闭
      advanced: false,
      title: this.$route.meta.title + '：',
      columns: [
        {
          title: '街道名称',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' }
        },
        {
          title: '位置',
          dataIndex: 'position',
          scopedSlots: { customRender: 'position' }
        }
      ],
      // 查询参数
      queryParam: {},
      // 加载数据方法 必须为 Promise 对象
      loadData: parameter => {
        // TODO 获取查询参数
        const requestParameters = Object.assign({}, parameter, this.queryParam)
        console.log('loadData request parameters:', requestParameters)

        // 根据路由名称，确定显示的区域
        this.areaName = this.$route.name.split('_')[0]
        // TODO api获取区域信息
        console.log(this.areaName)

        return getTest()
          .then(res => {
            const result = []
            const totalCount = parseInt(2)
            const pageNo = parseInt(requestParameters.pageNo)
            const pageSize = parseInt(requestParameters.pageSize)
            const totalPage = Math.ceil(totalCount / pageSize)

            switch (this.areaId) {
              case '1':
                result.push({
                  key: '1',
                  name: '长虹街道',
                  position: '天津市南开区长虹街道位于南开区北部偏西，南靠长江道，东、北至津河、南运河，西傍咸阳路。'
                })
                result.push({
                  key: '2',
                  name: '鼓楼街道',
                  position: '南开区辖街道。位于区境东北端，地处老城厢，辖区东起海河，西至西马路，南临荣吉大街、兴安路、南马路，北抵北马路、通北路。'
                })
                break
              case '2':
                result.push({
                  key: '1',
                  name: '南市街道',
                  position: '位于区境西北部、海河西南侧，南以多伦道为界与劝业场街道相邻，东以海河为界与河北区相望，西和北分别以南门外大街、南马路为界与南开区毗连。'
                })
                result.push({
                  key: '2',
                  name: '劝业场街',
                  position: '劝业场街道位于天津市及和平区中心区域。'
                })
                break
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
  created: function () {
    // 根据路由名称，确定显示的区域
    this.areaId = this.$route.name.split('_')[0]
    // TODO api获取区域信息

    getTest()
      .then(res => {
        this.title += this.constGlobal.areaList[this.areaId].name
      })
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
