<template>
  <div id="menubar" style="font-weight: bold;">
    <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">基 地 简 介</el-menu-item>
      <el-menu-item index="2">组 织 架 构 图</el-menu-item>
      <el-menu-item index="3">杰 出 往 届 队 员</el-menu-item>
      <el-submenu index="4">
        <template slot="title">部 门 简 介</template>
        <el-menu-item index="4-1" style="font-weight: bold;">V 5 + + 组</el-menu-item>
        <el-menu-item index="4-2" style="font-weight: bold;">水 下 实 物 组</el-menu-item>
        <el-menu-item index="4-3" style="font-weight: bold;">人 型 实 物 组</el-menu-item>
        <el-menu-item index="4-4" style="font-weight: bold;">轮 式 实 物 组</el-menu-item>
        <el-menu-item index="4-5" style="font-weight: bold;">标 准 平 台 组</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">技 术 组 简 介</template>
        <el-menu-item index="5-1" style="font-weight: bold;">软 件 视 觉 组</el-menu-item>
        <el-menu-item index="5-2" style="font-weight: bold;">软 件 导 航 组</el-menu-item>
        <el-menu-item index="5-3" style="font-weight: bold;">软 件 定 位 组</el-menu-item>
        <el-menu-item index="5-4" style="font-weight: bold;">硬 件 嵌 入 式 组</el-menu-item>
        <el-menu-item index="5-5" style="font-weight: bold;">机 械 制 造 组</el-menu-item>
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
        <el-menu-item index="8">足 基 文 创 商 城</el-menu-item>
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
    }
  }
}
</script>
