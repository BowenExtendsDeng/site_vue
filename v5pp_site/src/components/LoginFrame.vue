<template>
  <div id="loginframe" class="login_background">
    <br/><br/><br/><br/><br/><br/>
    <div class="lg_form">
      <br/>
      <p class="header">队 员 登 录 通 道</p>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
        <br/>
        <el-form-item label="用户名" prop="username" style="display:inline-block;">
          <el-input v-model="ruleForm.username" style="width:300px" type="text"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="密码" prop="password" style="display:inline-block">
          <el-input v-model="ruleForm.password" style="width:300px" type="password"></el-input>
        </el-form-item>
        <br/>
        <vCode :show="isShow" @close="onClose" @success="onSuccess"></vCode>
        <el-form-item style="transform: translateX(-2em)">
          <el-button type="primary" @click="submit">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <el-button @click="toHomePage">返回</el-button>
        </el-form-item>
      </el-form>
      <br/>
    </div>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>
import vCode from "vue-puzzle-vcode";
import router from '@/routers';
import {setCookie} from '@/cookie';

export default {
  components: {
    vCode,
  },
  name: "LoginFrame",
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入正确的用户名"));
      } else {
        const uPattern = /^[a-zA-Z0-9_]{4,16}$/;
        if (uPattern.test(value)) {
          callback();
        }
        callback(new Error("用户名只能包含字母，数字，下划线，且长度为4-16位"));
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      isShow: false,
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {validator: validateUsername, trigger: "blur"}
        ],
        password: [
          {validator: validatePassword, trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$axios
          .post("http://localhost:8849/auth/login", {// 请求后台登陆接口
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }).then(successResponse => {
        console.log(successResponse.data);
        if (successResponse.data.code === "200") {
          setCookie("username", successResponse.data.data.username);
          setCookie("password", successResponse.data.data.password);
          setCookie("role", successResponse.data.data.role);
          setCookie("isRetired", successResponse.data.data.isRetired);
          router.push({name: "UserPage"});
        } else {
          this.$message({
            message: successResponse.data.msg,
            type: "error"
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toHomePage() {
      this.$router.push("/");
    },
    submit() {
      let formName = "ruleForm";
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.isShow = true;
        } else {
          this.$alert("登录信息不全或有误", "登陆失败", {
            confirmButtonText: "确定",
          });
          return false;
        }
      });
    },
    onSuccess() {
      this.isShow = false; // 通过验证后，需要手动关闭模态框
      this.submitForm();
    },

    onClose() {
      this.isShow = false;
    },
  }
}
</script>

<style scoped>
.header {
  font-size: 4ex;
  color: rgb(0, 84, 163);
  font-family: '楷体';
  font-weight: bold;
}

.login_background {
  background-image: url("../assets/RMUA调车.jpg");
  max-width: 100%;
  height: auto;
  background-size: cover;
  text-align: center;
  background-repeat: no-repeat;
}

.lg_form {
  max-width: 80ex;
  background: #b6b6b6;
  text-align: center;
  border-radius: 2em;
  font-weight: bold;
  font-family: 黑体;
  opacity: 0.88;
  transform: translate(32em, 8em);
}

.el-main {
  height: 50ex;
}
</style>
