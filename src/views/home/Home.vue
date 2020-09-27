<template>
  <page-header-wrapper>
    <template v-slot:content>
      <div class="page-header-content">
        <div class="avatar">
          <a-avatar size="large" :src="currentUser.avatar"/>
        </div>
        <div class="content">
          <div class="content-title">
            {{ timeFix }}，{{ user.name }}<span class="welcome-text"></span>
          </div>
          <div>区域风险指数管理系统</div>
        </div>
      </div>
    </template>

    <div>
      <a-row :gutter="24">
        <a-card
          class="project-list"
          style="margin-bottom: 24px;"
          :bordered="false"
          title="天津市16区数据完善程度"
          :body-style="{ padding: 0 }">
          <s-table
            style="margin-bottom: 24px"
            row-key="id"
            :columns="areaData"
            :data="loadAreaData">
          </s-table>
        </a-card>
      </a-row>
    </div>
  </page-header-wrapper>
</template>

<script>
import { timeFix } from '@/utils/util'
import { mapState } from 'vuex'
import { STable } from '@/components'

export default {
  name: 'Workplace',
  components: {
    STable
  },
  data () {
    return {
      areaData: [
        {
          title: '区域名称',
          dataIndex: 'id',
          key: 'id'
        },
        {
          title: '危险性',
          dataIndex: 'k1',
          key: 'k1'
        },
        {
          title: '脆弱性',
          dataIndex: 'k2',
          key: 'k2',
          align: 'right'
        },
        {
          title: '防范能力',
          dataIndex: 'k3',
          key: 'k3',
          align: 'right'
        },
        {
          title: '历史事件数据完善情况',
          dataIndex: 'k4',
          key: 'k4',
          align: 'right'
        },
        {
          title: '预警风险',
          dataIndex: 'k5',
          key: 'k5',
          align: 'right'
        }
      ],
      loadAreaData: () => {
        return new Promise(resolve => {
          resolve({
            data: [
              {
                id: '和平区',
                name: '和平区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '河东区',
                name: '河东区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '河西区',
                name: '河西区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '南开区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '河北区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '红桥区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '东丽区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '西青区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '津南区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '北辰区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '武清区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '宝坻区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '滨海新区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '宁河区',
                name: '宁河区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '静海区',
                name: '静海区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              },
              {
                id: '蓟州区',
                name: '蓟州区',
                k1: '1', // 危险性
                k2: '2', // 脆弱性
                k3: '3', // 防范能力
                k4: '90%', // 历史事件数据完善情况
                k5: '一般风险' // 预警风险
              }
            ],
            pageSize: 20,
            pageNo: 1,
            totalPage: 1,
            totalCount: 16
          })
        }).then(res => {
          console.log(res)
          return res
        })
      },
      timeFix: timeFix(),
      avatar: '',
      user: {}
    }
  },
  computed: {
    ...mapState({
      nickname: (state) => state.user.nickname,
      welcome: (state) => state.user.welcome
    }),
    currentUser () {
      return {
        name: 'Serati Ma',
        avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
      }
    },
    userInfo () {
      return this.$store.getters.userInfo
    }
  },
  created () {
    this.user = this.userInfo
    this.avatar = this.userInfo.avatar
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
@import "./home.less";

.project-list {

  .card-title {
    font-size: 0;

    a {
      color: rgba(0, 0, 0, 0.85);
      margin-left: 12px;
      line-height: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;

      &:hover {
        color: #1890ff;
      }
    }
  }

  .card-description {
    color: rgba(0, 0, 0, 0.45);
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }

  .project-item {
    display: flex;
    margin-top: 8px;
    overflow: hidden;
    font-size: 12px;
    height: 20px;
    line-height: 20px;

    a {
      color: rgba(0, 0, 0, 0.45);
      display: inline-block;
      flex: 1 1 0;

      &:hover {
        color: #1890ff;
      }
    }

    .datetime {
      color: rgba(0, 0, 0, 0.25);
      flex: 0 0 auto;
      float: right;
    }
  }

  .ant-card-meta-description {
    color: rgba(0, 0, 0, 0.45);
    height: 44px;
    line-height: 22px;
    overflow: hidden;
  }
}

.item-group {
  padding: 20px 0 8px 24px;
  font-size: 0;

  a {
    color: rgba(0, 0, 0, 0.65);
    display: inline-block;
    font-size: 14px;
    margin-bottom: 13px;
    width: 25%;
  }
}

.members {
  a {
    display: block;
    margin: 12px 0;
    line-height: 24px;
    height: 24px;

    .member {
      font-size: 14px;
      color: rgba(0, 0, 0, .65);
      line-height: 24px;
      max-width: 100px;
      vertical-align: top;
      margin-left: 12px;
      transition: all 0.3s;
      display: inline-block;
    }

    &:hover {
      span {
        color: #1890ff;
      }
    }
  }
}

.mobile {

  .project-list {

    .project-card-grid {
      width: 100%;
    }
  }

  .more-info {
    border: 0;
    padding-top: 16px;
    margin: 16px 0 16px;
  }

  .headerContent .title .welcome-text {
    display: none;
  }
}

</style>
