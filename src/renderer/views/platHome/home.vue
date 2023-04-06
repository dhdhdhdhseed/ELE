<template>
  <platHeader></platHeader>
  <!-- 导航栏 -->
  <div class="flatHome-nav">

  </div>
  <div class="flatHome-content">
    <router-view></router-view>
  </div>
  <platFooter></platFooter>
</template>

<script>
import platHeader from "./components/platHeader.vue"
import platFooter from "./components/platFooter.vue"
export default {
  components: {
    platHeader,
    platFooter
  }

}
</script>

<style lang="scss">
.flatHome-nav {
  display: flex;
}
</style>