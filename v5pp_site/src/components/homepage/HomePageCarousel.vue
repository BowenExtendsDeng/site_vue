<template>
  <div>
    <br/>
    <el-carousel :autoplay="true" :interval="4000" type="card" height="600px" fit="cover" style="position: relative; ">
      <el-carousel-item v-for="item in news" :key="item">
        <div class="carousel-item">
          <el-image :src="item.img" fit="cover" :ratio="item.ratio" @click="toNews(item.content)"></el-image>
          <div class="carousel-item-title">
            <p>{{ item.title }}</p>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>

</template>

<script>
export default {
  data() {
    return {
      news: [
        {
          title: '清华大学Air实验室主任周谷越老师来我组交流',
          img: require('../../assets/zgy_smile.jpg'),
          content: '内容1',
        },
        {
          title: '清华大学Air实验室主任周谷越老师来我组交流',
          img: require('../../assets/RMUA合影.jpg'),
          content: '../../assets/md/Shiro.md',
        },
        {
          title: '清华大学Air实验室主任周谷越老师来我组交流',
          img: require('../../assets/合影/DSC01062.jpg'),
          content: '内容3'
        }
      ]
    }
  },
  methods: {
    toNews(e) {
      this.$router.push({
        name: 'news',
        params: {
          id: e.target.dataset.id
        }
      })
    }
  }
}
</script>
<style scoped>
.el-image {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0.95; /*设置透明度*/
  z-index: -1;
}

.p {
  position: absolute;
  font-size: 80px;
  color: #000000;
  text-align: center;
  top: 70%;
  left: 20%;
  z-index: 999;
}

.md {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
  font-size: 20px;
  text-align: left;
  line-height: normal;
}
</style>
