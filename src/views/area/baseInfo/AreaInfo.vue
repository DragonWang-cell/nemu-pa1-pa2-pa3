<template>
  <page-header-wrapper
    :title="title"
  >
    <template v-slot:content>
      <a-row :gutter="24">
        <a-col :md="24" :lg="7">
          <a-card
            style="margin-top: 24px"
            :bordered="false"
          >
            <img style="width: 100%" :src="areaImg">
          </a-card>
        </a-col>
        <a-col :md="24" :lg="17">
          <!-- 操作 -->
          <a-card
            style="margin-top: 24px"
            :bordered="false"
          >
            <p v-for="profile in areaProfile" :key="profile" style="text-indent:30px;">
              {{ profile }}
            </p>
          </a-card>
        </a-col>
      </a-row>
      <a-row :gutter="24" style="margin: 0" id="baseInfo">
        <a-descriptions
          title="基本信息"
          size="small"
          :column="1"
          :bordered="true">
          <a-descriptions-item label="地理位置">位于XXX，XXXXXX</a-descriptions-item>
          <a-descriptions-item label="地理分布">天津位于海河下游，地跨海河两岸，北南长189千米，西东宽117千米。陆界长1137千米，海岸线长153千米。</a-descriptions-item>
          <a-descriptions-item label="经纬度">东经XXX-XXX，北纬XXX-XXX</a-descriptions-item>
          <a-descriptions-item label="气候特征">北温带，海洋气候</a-descriptions-item>
          <a-descriptions-item label="温度情况">天津的年平均气温约为14℃，7月最热，月平均温度28℃；历史最高温度是41.6℃。1月最冷，月平均温度-2℃。历史最低温度是-17.8℃</a-descriptions-item>
          <a-descriptions-item label="面积">XXX</a-descriptions-item>
          <a-descriptions-item label="海拔">XXX</a-descriptions-item>
          <a-descriptions-item label="人口">XXX</a-descriptions-item>
          <a-descriptions-item label="民族">共有54个少数民族，少数民族总人口为33.14万人</a-descriptions-item>
        </a-descriptions>
        <a-descriptions
          size="small"
          :column="5"
          layout="vertical"
          :bordered="true">
          <a-descriptions-item label="地区">和平区</a-descriptions-item>
          <a-descriptions-item label="人口（人）">273466</a-descriptions-item>
          <a-descriptions-item label="2000年比重（%）">3.22</a-descriptions-item>
          <a-descriptions-item label="2010年比重（%）">2.11</a-descriptions-item>
          <a-descriptions-item label="人口密度（人/平方公里）">27347</a-descriptions-item>
        </a-descriptions>
      </a-row>
    </template>
    <!-- actions -->
    <template v-slot:extra>
      <a-button type="primary" >修改</a-button>
    </template>
  </page-header-wrapper>
</template>

<script>
import { baseMixin } from '@/store/app-mixin'
import { getTest } from '@/api/manage'

export default {
  name: 'Advanced',
  mixins: [baseMixin],
  data () {
    // 根据路由名称，确定显示的区域
    // console.log(this.$route.name.split('_')[0])
    // TODO api获取区域信息

    return {
      title: this.$route.meta.title + '：',
      areaProfile: [
          '和平区，隶属天津市，位于天津市区中部，海河干流西岸，介于北纬39°06′—39°08′10″，东经117°10′16″—117°12′53″之间，总面积9.98平方千米。和平区属温带半湿润大陆季风型气候，四季分明，温差较大。',
          '截止到2019年，和平区辖南市、劝业场、南营门、小白楼、五大道、新兴6个街道、64个社区， 户籍人口42.02万人，常住人口35.07万人。',
          '和平区拥有天津市76%的历史风貌建筑和名人故居，五大道文化旅游区完整保存着各式风格建筑2185栋，有“万国建筑博览会”之称，是中国近现代百年历史风云变幻的见证，是国家4A级旅游景区。 ',
          '2009年10月，和平区被全国爱卫办授予“国家卫生区”称号，2017年11月，经复查确认继续保留全国文明城市荣誉称号。2018年度《中国国家旅游》最佳全域旅游目的地。',
          '2018年，和平区地区生产总值920亿元，同比增长6.0%，服务业增加值占经济总量比重达到98.6%，区级财政收入45亿元，其中税收占比达到84%，同比提高12个百分点，社会消费品零售总额508亿元，同比增长4.1%；内、外资到位额分别达到100亿元和495万美元。'
      ],
      areaImg: 'http://140.143.19.229/mng/area.png',
      operationTabList: [
        {
          key: '1',
          tab: '操作日志一'
        },
        {
          key: '2',
          tab: '操作日志二'
        },
        {
          key: '3',
          tab: '操作日志三'
        }
      ],
      operationActiveTabKey: '1',

      operationColumns: [
        {
          title: '操作类型',
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: '操作人',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '执行结果',
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '操作时间',
          dataIndex: 'updatedAt',
          key: 'updatedAt'
        },
        {
          title: '备注',
          dataIndex: 'remark',
          key: 'remark'
        }
      ],
      operation1: [
        {
          key: 'op1',
          type: '订购关系生效',
          name: '曲丽丽',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op2',
          type: '财务复审',
          name: '付小小',
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: '不通过原因'
        },
        {
          key: 'op3',
          type: '部门初审',
          name: '周毛毛',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op4',
          type: '提交订单',
          name: '林东东',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '很棒'
        },
        {
          key: 'op5',
          type: '创建订单',
          name: '汗牙牙',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        }
      ],
      operation2: [
        {
          key: 'op2',
          type: '财务复审',
          name: '付小小',
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: '不通过原因'
        },
        {
          key: 'op3',
          type: '部门初审',
          name: '周毛毛',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        },
        {
          key: 'op4',
          type: '提交订单',
          name: '林东东',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '很棒'
        }
      ],
      operation3: [
        {
          key: 'op2',
          type: '财务复审',
          name: '付小小',
          status: 'reject',
          updatedAt: '2017-10-03  19:23:12',
          remark: '不通过原因'
        },
        {
          key: 'op3',
          type: '部门初审',
          name: '周毛毛',
          status: 'agree',
          updatedAt: '2017-10-03  19:23:12',
          remark: '-'
        }
      ]
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
    statusFilter (status) {
      const statusMap = {
        'agree': '成功',
        'reject': '驳回'
      }
      return statusMap[status]
    },
    statusTypeFilter (type) {
      const statusTypeMap = {
        'agree': 'success',
        'reject': 'error'
      }
      return statusTypeMap[type]
    }
  },
  methods: {
  }
}
</script>

<style scoped>
#baseInfo >>> th{
  width: 200px;
}
</style>
