<template>
  <div id="menubar" style="font-weight: bold;">
    <el-menu :default-active="this.$router.path" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" class="list-group-item active" @click="toUserInfo">我 的 信 息</el-menu-item>
      <el-menu-item index="2" @click="toUserPhoneBook">组 员 联 系 方 式</el-menu-item>
      <el-submenu index="3">
        <template slot="title">我 的 经 费</template>
        <el-menu-item index="3-1" style="font-weight: bold;" @click="toBudgetOverView">概 览</el-menu-item>
        <el-menu-item index="3-2" style="font-weight: bold;" @click="toBudgetApplication">经 费 申 请</el-menu-item>
        <el-menu-item index="3-3" style="font-weight: bold;" @click="toUploadFile">发 票 上 传</el-menu-item>
      </el-submenu>
      <el-menu-item index="4" disabled>我 的 比 赛 日 程</el-menu-item>
      <el-menu-item index="5">管 理 招 新</el-menu-item>
      <el-submenu index="6" v-if="role==='vice_captain'">
        <template slot="title">管 理 账 目</template>
        <el-menu-item index="6-1" style="font-weight: bold;" @click="toManageBudgetOverview">概 览</el-menu-item>
        <el-menu-item index="6-2" style="font-weight: bold;" @click="toManageBudgetApplication">经 费 审 批
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="7" @click="toUserSettings">用 户 设 置</el-menu-item>
      <div style="float:right;background-color:rgb(220, 230, 256);font-weight: bold;">
        <el-menu-item index="5" @click="toLogin">返 回 主 页</el-menu-item>
      </div>
    </el-menu>
    <div class="line"></div>
  </div>
</template>

<script>
import {getCookie} from "@/cookie";

export default {
  data() {
    return {
      role: getCookie("role"),
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toLogin() {
      this.$router.push('/');
    },
    toUserInfo() {
      this.$router.push('/user/info');
    },
    toUserPhoneBook() {
      this.$router.push('/user/phonebook');
    },
    toBudgetOverView() {
      this.$router.push({name: 'budgetOverview'});
    },
    toBudgetApplication() {
      this.$router.push({name: 'budgetApplication'});
    },
    toUploadFile() {
      this.$router.push({name: 'uploadBill'});
    },
    toUserSettings() {
      this.$router.push({name: 'UserSettings'});
    },
    toManageBudgetOverview() {
      this.$router.push({name: 'ManageBudgetOverview'});
    },
    toManageBudgetApplication() {
      this.$router.push({name: 'ManageBudgetApplication'});
    },
  },
}
</script>
