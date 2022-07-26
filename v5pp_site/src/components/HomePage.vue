<template>
  <div id="loginpage">
    <MenuBar></MenuBar>
    <HomePageCarousel></HomePageCarousel>
  </div>
</template>

<script>
import MenuBar from './MenuBar.vue'
import HomePageCarousel from './HomePageCarousel.vue'

export default {
  name: 'HomePage',
  components: {
    MenuBar,
    HomePageCarousel
  }
}
</script>
