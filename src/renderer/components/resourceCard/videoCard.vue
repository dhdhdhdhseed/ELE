<template>
  <div class="videoCard">
    <img src="@/assets/local/img/img1.png" alt="">
    <div>
      <div>视频资源{{cardItem}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "videoCard",
  props: {
    cardItem: {
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.videoCard {
  img {
    width: 100%;
  }
}
</style>