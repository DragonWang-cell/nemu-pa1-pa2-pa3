<template>
  <page-header-wrapper
    :title="title"
  >
    <!-- actions -->
    <template v-slot:extra>
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
