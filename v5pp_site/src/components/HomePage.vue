<template>
  <div id="loginpage">
    <MenuBar></MenuBar>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import router from '@/routers'

export default {
  name: 'HomePage',
  components: {
    MenuBar
  },
  mounted() {
    router.push({name: "HomePageCarousel"});
  }
}
</script>
