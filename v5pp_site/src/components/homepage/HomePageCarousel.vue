<template>
  <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in 3" :key="item">
      <div class="block">
        <el-image :src="src[item - 1]" :key="item"></el-image>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      size: 0,
      src: [],
      prefix: 'https://tomcat-oss.oss-cn-beijing.aliyuncs.com/v5ppAssets/',
      imgPath: ''
    }
  },
  props: {
    path: {
      type: String,
      default: ''
    },
    amount: {
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
