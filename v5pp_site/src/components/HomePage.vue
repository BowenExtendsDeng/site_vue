<template>
<el-container>
  <el-header>
    <HeadLine></HeadLine>
  </el-header>
  <el-main>
    <MenuBar></MenuBar>
    <HomePageCarousel></HomePageCarousel>
  </el-main>
  <el-footer>Footer</el-footer>
</el-container>
</template>

<script>
import HeadLine from './HeadLineFrame.vue'
import MenuBar from './MenuBar.vue'
import HomePageCarousel from './HomePageCarousel.vue'

export default {
  name: 'HomePage',
  components: {
    HeadLine,
    MenuBar,
    HomePageCarousel
}
}
</script>

<style>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>