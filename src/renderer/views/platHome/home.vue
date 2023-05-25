<template>
  <div class="home">
    <div class="DN_card_row" >
      <div class="DN_card_row_5_list" v-for="item in 18" :key="item.id">
        <videoCard :cardItem="item"></videoCard>
      </div>
    </div>
  </div>
</template>

<script>
import videoCard from "@/components/resourceCard/videoCard.vue"
export default {
  name: "platHome",
  components: {
    videoCard,
  },
  data() {
    return {
      videoList: {
        title: '视频区',
        list: []
      }
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      // this.$api('http://172.16.25.111:4003/platform/commonResources/index.json', {}, { method: 'get' }).then((result => {
      //   this.videoList.list = result
      //   console.log('请求数据',result, this.commonVideo.list);
      // }))
    },
  }
}
</script>

<style lang="scss">
</style>