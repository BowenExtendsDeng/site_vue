<template>
  <div id="UserSettings">
    <el-dropdown split-button type="primary" @click="handleClick">
      选 择 一 笔 账 单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button type="primary">确认收款</el-button>
  </div>

</template>

<script>
export default {
  name: "UserSettings"
}
</script>

<style scoped>

</style>
