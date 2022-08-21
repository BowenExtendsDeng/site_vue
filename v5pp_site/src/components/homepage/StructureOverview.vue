<template>
  <div class="img">
    <el-image :src="require('../../assets/structure.png')" alt="组织架构图" fit="cover"/>
  </div>
</template>

<script>
export default {
  name: "StructureOverview",
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
