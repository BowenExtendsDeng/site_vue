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
        <el-menu-item index="6-1" style="font-weight: bold;" disabled>软 件 组 考 核</el-menu-item>
        <el-menu-item index="6-4" style="font-weight: bold;" disabled>硬 件 组 考 核</el-menu-item>
        <el-menu-item index="6-5" style="font-weight: bold;" disabled>机 械 组 考 核</el-menu-item>
      </el-submenu>
      <div style="float:left;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="7" @click="toJoinUs">加 入 我 们</el-menu-item>
      </div>
      <div style="float:left;background-color:rgb(200, 200, 250);font-weight: bold;">
        <el-menu-item index="8" disabled>足 基 文 创 商 城</el-menu-item>
      </div>
      <div style="float:right;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="9" @click="toLogin">队 员 登 录</el-menu-item>
      </div>
      <div style="float:right;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="10" @click="toAdmissionRegistration">录 取 注 册</el-menu-item>
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
      this.$router.push({name: 'V5Pro'});
    },
    toFish() {
      this.$router.push({name: 'FishPro'});
    },
    toWheel() {
      this.$router.push({name: 'WheelPro'});
    },
    toStandard() {
      this.$router.push({name: 'StandardPro'});
    },
    toHuman() {
      this.$router.push({name: 'HumanPro'});
    },
    toDouble() {
      this.$router.push({name: 'DoublePro'});
    },
    toVision() {
      this.$router.push({name: 'VisionPro'});
    },
    toStrategy() {
      this.$router.push({name: 'StrategyPro'});
    },
    toNavi() {
      this.$router.push({name: 'NaviPro'});
    },
    toHardware() {
      this.$router.push({name: 'HardwarePro'});
    },
    toMach() {
      this.$router.push({name: 'MachPro'});
    },
    toJoinUs() {
      this.$router.push({name: 'JoinUs'});
    },
    toAdmissionRegistration() {
      this.$router.push({name: 'AdmissionRegistration'});
    },
  }
}
</script>
