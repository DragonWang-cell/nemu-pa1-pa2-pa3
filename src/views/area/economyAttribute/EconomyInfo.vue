<template>
  <page-header-wrapper
    :title="title"
  >
    <!-- actions -->
    <template v-slot:extra>
    </template>

    <template v-slot:content>
      <a-card :bordered="false">
        <a-descriptions>
          <a-descriptions-item label="区域总GDP">XXXX</a-descriptions-item>
          <a-descriptions-item label="比去年增长">XXXX</a-descriptions-item>
        </a-descriptions>
        <a-card type="inner" title="三大产业">
          <a-descriptions title="第一产业" size="small">
            <a-descriptions-item label="第一产业增加值">X1</a-descriptions-item>
          </a-descriptions>
          <a-divider style="margin: 16px 0" />
          <a-descriptions title="第二产业" size="small" :col="1">
            <a-descriptions-item label="第二产业增加值">X2</a-descriptions-item>
          </a-descriptions>
          <a-divider style="margin: 16px 0" />
          <a-descriptions title="第三产业" size="small" :col="2">
            <a-descriptions-item label="第三产业增加值">X3</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </a-card>
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
    return {
      title: this.$route.meta.title + '：'
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
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
