<template>
  <div id="app">
    <el-container>
      <el-header>
        <HeadLineFrame></HeadLineFrame>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>@2003-2022足球机器人创新实践基地版权所有：<a href="https://beian.miit.gov.cn/"
                                                             target="_blank">您的备案号</a></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadLineFrame from './components/HeadLineFrame.vue'

export default {
  name: 'App',
  components: {
    HeadLineFrame,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 50px;
}

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
  line-height: 60px;
  height: 85ex;
}

.el-header {
  background-color: white;
  color: #333;
  text-align: center;
  line-height: 50px;
}

body > .el-cont
ainer {
  margin-bottom: 50px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 50px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 50px;
}
</style>
