<template>
  <div>
    <br/>
    <el-carousel :autoplay="true" :interval="4000" height="80ex" style="position: relative;max-width: 300ex"
                 type="card">
      <el-carousel-item v-for="item in news" :key="item" style="text-align: center">
        <div class="carousel-item" v-bind:style="{backgroundImage:'url('+ item.img + ')'}" style="text-align: center">
          <div class="carousel-item-title">
            <a href="https://www.baidu.com" style="color: #595959">
              <p>{{ item.title }}</p>
            </a>
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
          title: '前大疆CTO周谷越教授到访我组',
          img: require('../../assets/zgy_smile.jpg'),
          content: '../../assets/md/Shiro.md',
        },
        {
          title: 'V5++的RMUA国际赛之行',
          img: require('../../assets/RMUA合影.jpg'),
          content: '../../assets/md/Shiro.md',
        },
        {
          title: '[我们毕业啦]我与V5这4年',
          img: require('../../assets/合影/DSC01062.jpg'),
          content: '内容3'
        },
        {
          title: 'v5++秋招进行中...',
          img: require('../../assets/RMUA观察.jpg'),
          content: '内容4'
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
.carousel-item-title {
  font-family: 楷体;
  font-size: 4.2ex;
  font-weight: bold;
  margin: 2ex auto;
  width: 90ex;
  height: 36.5ex;
  border: transparent;
  position: relative;
  text-align: left;
  color: #414141;
  background: linear-gradient(transparent, transparent, transparent, #c5c5c5);
  transform: translateX(-1em);
  background-size: cover;
}

.carousel-item-title a {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateX(2em)
}

.carousel-item {
  max-width: 100%;
  height: auto;
  background-size: cover;
  text-align: center;
  background-repeat: no-repeat;
}
</style>
