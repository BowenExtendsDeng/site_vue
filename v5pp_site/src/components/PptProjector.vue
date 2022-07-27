<template>
  <div class="demo-image__placeholder">
    <div class="block">
      <el-image :src="src[index - 1]" v-for="index in size" :key="index"></el-image>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size:0,
      src: [],
      prefix:'https://tomcat-oss.oss-cn-beijing.aliyuncs.com/v5ppAssets/',
      imgPath:''
    }
  },
  props:{
    path:{
      type: String,
      default: ''
    },
    amount:{
      type: String,
      default: ''
    }
  },
  mounted() {
    this.size = parseInt(this.amount);
    this.imgPath = this.prefix + this.path + '/';
    for (let i = 1; i <= this.amount; i++) {
      this.src.push(this.imgPath + i + '.PNG');
    }
  }
}
</script>
