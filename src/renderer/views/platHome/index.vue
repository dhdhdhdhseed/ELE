<template>
  <div class="platHome">
    <platHeader></platHeader>
    <!-- banner图 -->
    <div class="platHome-banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>
    <div class="ELE_common-pg platHome-container">
      <!-- 导航栏 -->
      <div class=" platHome-nav">
        <a-menu v-model:selectedKeys="selectedKeys" mode="horizontal" @click="open">
          <template v-if="homeMenus.children && homeMenus.children.length > 0">
            <a-menu-item v-for="item in homeMenus.children" :key="item.path">
              <component :is="$antIcons[item.meta.icon]" />
              <!-- <template #icon>
            </template> -->
              {{item.meta.title}}
            </a-menu-item>
          </template>
        </a-menu>
        <div class="platHome-nav-right">
          <img src="@/assets/img/header.jpg" alt="">
          <div class="manage-nav common-box-shadow">
            <div>个人中心</div>
            <div>资源管理</div>
            <div>平台管理</div>
          </div>
        </div>
      </div>
      <!-- 资源展示 -->
      <div class=" platHome-content">
        <div class="pg-20">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <platFooter></platFooter>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { reactive, toRefs, watch } from 'vue'
import { createNamespacedHelpers, useStore } from 'vuex'
import platHeader from "./components/platHeader.vue"
import platFooter from "./components/platFooter.vue"
const { mapGetters } = createNamespacedHelpers('role')
export default {
  components: {
    platHeader,
    platFooter
  },
  computed: {
    ...mapGetters({
      homeMenus: 'homeMenus',
      collapsed: 'collapsed'
    })
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      openKeys: store.state.role.homeMenus.children.map(({ path }) => path),
      preOpenKeys: [route.path],
      selectedKeys: [route.path]
    })
    watch(() => state.openKeys, (_, oldVal) => {
      state.preOpenKeys = oldVal
    })
    watch(() => store.state.role.collapsed, (val) => {
      state.openKeys = val ? [] : state.preOpenKeys
    })
    watch(() => route.path, (val) => {
      if (val !== state.selectedKeys[0]) {
        state.selectedKeys = [val]
      }
    })
    function open({ key }) {
      router.push({
        path: key
      })
    }

    return {
      ...toRefs(state),
      open,
    }
  }
}
</script>

<style lang="scss">
.common-box-shadow {
  box-shadow: 0px 0px 10px -2px #bbb;
}
.platHome {
  width: 100%;
}
.platHome-banner {
  height: 200px;
  img {
    width: 100%;
    height: 100%;
  }
}
.platHome-container{
  background: url('https://img0.baidu.com/it/u=4162443464,2854908495&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1684256400&t=76103df25fb6da1a549ec78d5b41adcb') 100%/100% no-repeat;
}
.platHome-content{
  height: 500px;
}
.platHome-nav {
  display: flex;
  justify-content: space-between;
  background: rgba($color: #bbb, $alpha: 0.7);
  .platHome-nav-right {
    width: 50px;
    position: relative;
    img {
      height: 48px;
      border-radius: 50%;
    }
    .manage-nav {
      width: 100px;
      border-radius: 10px;
      display: none;
      position: absolute;
      top: 48px;
      left: 0;
      border: 1px solid rgb(216, 216, 216);
      background-color: #fff;
      > div {
        height: 30px;
        text-align: center;
        line-height: 30px;
        margin-bottom: 3px;
        &:hover {
          box-shadow: 0px 0px 10px -2px #bbb;
        }
      }
    }
    &:hover {
      .manage-nav {
        display: block;
      }
    }
  }
}
</style>