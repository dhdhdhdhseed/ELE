<template>
  <div class="videoCard">
    <img :src="'http://172.16.25.111:4003/'+cardItem.src" alt="">
    <div>
      <div>{{cardItem.resourcesName}}</div>
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