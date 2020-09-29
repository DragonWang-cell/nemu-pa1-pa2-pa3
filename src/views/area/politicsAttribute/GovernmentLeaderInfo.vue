<template>
  <page-header-wrapper
    :title="title"
    id="GovernmentLeaderInfo"
  >
    <!-- actions -->
    <template v-slot:extra>
    </template>

    <template v-slot:content>
      <a-card type="inner" title="政府领导组成" id="test">
        <a-descriptions
          title="中国共产党天津市委员会"
          size="small"
          style="margin-bottom: 30px"
          :column="1"
          :bordered="true">
          <a-descriptions-item label="书记">李鸿忠</a-descriptions-item>
          <a-descriptions-item label="副书记">阴和俊、廖国勋</a-descriptions-item>
          <a-descriptions-item label="市委常委">张玉卓、喻云林、邓修明、赵飞、陈浙闽、冀国强、李毅、马顺清、李军</a-descriptions-item>
        </a-descriptions>
        <a-descriptions
          title="天津市人民代表大会常务委员会"
          size="small"
          style="margin-bottom: 30px"
          :column="1"
          :bordered="true">
          <a-descriptions-item label="主任">段春华</a-descriptions-item>
          <a-descriptions-item label="副主任">于世平、陈永川、杨福刚、梁宝明、王小宁、李虹（女）</a-descriptions-item>
          <a-descriptions-item label="秘书长">贾凤山</a-descriptions-item>
        </a-descriptions>
        <a-descriptions
          title="天津市人民政府"
          size="small"
          style="margin-bottom: 30px"
          :column="1"
          :bordered="true">
          <a-descriptions-item label="市长、党组书记">廖国勋</a-descriptions-item>
          <a-descriptions-item label="副市长">马顺清、曹小红、孙文魁、李树起、康义、金湘军、董家禄、王卫东</a-descriptions-item>
          <a-descriptions-item label="秘书长">孟庆松</a-descriptions-item>
          <a-descriptions-item label="副秘书长">李彩良</a-descriptions-item>
        </a-descriptions>
        <a-descriptions
          title="中国人民政治协商会议天津市委员会"
          size="small"
          style="margin-bottom: 30px"
          :column="1"
          :bordered="true">
          <a-descriptions-item label="主席">盛茂林</a-descriptions-item>
          <a-descriptions-item label="副主席">魏大鹏、高玉葆、沈中阳、黎昌晋、李绍洪、尚斌义、赵仲华、张金英、齐成喜</a-descriptions-item>
          <a-descriptions-item label="秘书长">高学忠</a-descriptions-item>
        </a-descriptions>
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
  components: {
  },
  data () {
    return {
      title: this.$route.meta.title + '：',
      areaInfo: []
    }
  },
  created: function () {
    // 根据路由名称，确定显示的区域
    this.areaId = this.$route.name.split('_')[0]
    this.title += this.constGlobal.areaList[this.areaId].name
    // TODO api获取区域信息

    getTest()
      .then(res => {
      })
  },
  filters: {
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
.ant-descriptions >>> .ant-descriptions-title {
  margin-bottom: 10px !important;
}
</style>
