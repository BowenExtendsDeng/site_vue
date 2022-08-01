<template>
  <div id="loginpage">
    <el-descriptions style="background-color:rgb(220, 230, 256);font-weight: bold;" title="我 的 信 息"
                     direction="vertical" :column="2" border>
      <el-descriptions-item label="队 员 姓 名">{{ name }}</el-descriptions-item>
      <el-descriptions-item label="队 员 职 称">{{ role }}</el-descriptions-item>
      <el-descriptions-item label="队 员 届 次">{{ session }}</el-descriptions-item>
      <el-descriptions-item label="队 员 专 业">{{ major }}</el-descriptions-item>
      <el-descriptions-item label="手 机 号 码">{{ telephone }}</el-descriptions-item>
      <el-descriptions-item label="电 子 邮 箱">{{ email }}</el-descriptions-item>
      <el-descriptions-item label="队 员 学 号">{{ studentId }}</el-descriptions-item>
      <el-descriptions-item label="出 生 日 期">{{ birthday }}</el-descriptions-item>
      <el-descriptions-item label="性 别">
        <el-tag size="small">{{ sex }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="毕 业 高 中">{{ highSchool }}</el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import {getCookie} from "@/cookie";

export default {
  data() {
    return {
      name: '',
      studentId: '',
      session: '',
      major: '',
      telephone: '',
      email: '',
      birthday: '',
      role: '',
      sex: '',
      highSchool: ''
    }
  },
  methods: {},
  mounted() {
    console.log(getCookie("username"))
    this.$axios
        .post("http://localhost:8849/staff/getStaffById", {
              username: getCookie("username")
            }
        ).then(successResponse => {
      console.log(successResponse.data);
      this.name = successResponse.data.name;
      this.studentId = successResponse.data.studentId;
      this.session = successResponse.data.session;
      this.major = successResponse.data.major;
      this.telephone = successResponse.data.telephone;
      this.email = successResponse.data.email;
      this.birthday = successResponse.data.birthday;
      if(successResponse.data.role === "staff"){
        this.role = "队员";
      }else if(successResponse.data.role === "captain") {
        this.role = "队长";
      }else if(successResponse.data.role === "vice_captain") {
        this.role = "副队长";
      }
      this.sex = successResponse.data.sex;
      this.highSchool = successResponse.data.highSchool;
    });
  }
}
</script>
