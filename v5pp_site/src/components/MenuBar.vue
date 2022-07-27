<template>
  <div id="menubar" style="font-weight: bold;">
    <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" @click="toHomepageIntro">基 地 简 介</el-menu-item>
      <el-menu-item index="2" @click="toHomePageCarousel">基 地 新 闻</el-menu-item>
      <el-menu-item index="3" @click="toStructureOverview">组 织 架 构 图</el-menu-item>
      <el-submenu index="4">
        <template slot="title">部 门 简 介</template>
        <el-menu-item index="4-1" style="font-weight: bold;" @click="toV5">V 5 + + 组</el-menu-item>
        <el-menu-item index="4-2" style="font-weight: bold;" @click="toFish">水 下 实 物 组</el-menu-item>
        <el-menu-item index="4-3" style="font-weight: bold;" @click="toHuman">人 型 实 物 组</el-menu-item>
        <el-menu-item index="4-4" style="font-weight: bold;" @click="toWheel">轮 式 实 物 组</el-menu-item>
        <el-menu-item index="4-5" style="font-weight: bold;" @click="toStandard">标 准 平 台 组</el-menu-item>
        <el-menu-item index="4-6" style="font-weight: bold;" @click="toDouble">创 新 创 业 组</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">技 术 组 简 介</template>
        <el-menu-item index="5-1" style="font-weight: bold;" @click="toVision">软 件 视 觉 组</el-menu-item>
        <el-menu-item index="5-2" style="font-weight: bold;" @click="toNavi">软 件 定 位 导 航 组</el-menu-item>
        <el-menu-item index="5-3" style="font-weight: bold;" @click="toStrategy">软 件 策 略 组</el-menu-item>
        <el-menu-item index="5-4" style="font-weight: bold;" @click="toHardware">硬 件 嵌 入 式 组</el-menu-item>
        <el-menu-item index="5-5" style="font-weight: bold;" @click="toMach">机 械 制 造 组</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">招 新 考 核</template>
        <el-menu-item index="6-1" style="font-weight: bold;">软 件 组 考 核</el-menu-item>
        <el-menu-item index="6-4" style="font-weight: bold;">硬 件 组 考 核</el-menu-item>
        <el-menu-item index="6-5" style="font-weight: bold;">机 械 组 考 核</el-menu-item>
      </el-submenu>
      <div style="float:left;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="7">加 入 我 们</el-menu-item>
      </div>
      <div style="float:left;background-color:rgb(200, 200, 250);font-weight: bold;">
        <el-menu-item index="8" disabled>足 基 文 创 商 城</el-menu-item>
      </div>
      <div style="float:right;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="9" @click="toLogin">队 员 登 录</el-menu-item>
      </div>
      <div style="float:right;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="10">录 取 注 册</el-menu-item>
      </div>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push('/login');
    },
    toHomepageIntro() {
      this.$router.push({name: 'HomePageIntro'});
    },
    toHomePageCarousel() {
      this.$router.push({name: 'HomePageCarousel'});
    },
    toStructureOverview() {
      this.$router.push({name: 'StructureOverview'});
    },
    toV5() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/v5',
          amount: 29
        }
      });
    },
    toFish() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/fish',
          amount: 9
        }
      });
    },
    toWheel() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/wheel',
          amount: 19
        }
      });
    },
    toStandard() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/standard',
          amount: 9
        }
      });
    },
    toHuman() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/human',
          amount: 19
        }
      })
    },
    toDouble() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/department/double',
          amount: 5
        }
      })
    },
    toVision() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/tech/vision',
          amount: 1
        }
      })
    },
    toStrategy() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/tech/strategy',
          amount: 1
        }
      })
    },
    toNavi() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/tech/navi',
          amount: 1
        }
      })
    },
    toHardware() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/tech/hardware',
          amount: 1
        }
      })
    },
    toMach() {
      this.$router.push({
        name: 'PptProjector',
        params: {
          imageDirPath: '../assets/tech/mach',
          amount: 1
        }
      })
    }
  }
}
</script>
