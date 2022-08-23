<template>
  <div>
    <p style="text-align: center;font-weight: bold;color: #23425e;font-size: large">重置密码</p>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
      <el-form-item label="密码" prop="pass" style="display: inline-block">
        <el-input v-model="ruleForm.pass" autocomplete="off" style="width: 60ex" type="password"></el-input>
      </el-form-item>
      <br/>
      <el-form-item label="密码强度" style="display: inline-block">
        <PasswordStrength :password="ruleForm.pass" style="width: 40ex"></PasswordStrength>
      </el-form-item>
      <br/>
      <el-form-item label="确认密码" prop="checkPass" style="display: inline-block">
        <el-input v-model="ruleForm.checkPass" autocomplete="off" style="width: 60ex" type="password"></el-input>
      </el-form-item>
      <br/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <br/>
      <p style="text-align: center;font-weight: bold;color: #23425e;font-size: large">我要退役</p>
      <el-form-item v-if="isDisabled" label="确认退役？" style="display:inline-block">
        <el-button :disabled="isDisabled()" type="primary" @click="submitRetirement">确认</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import PasswordStrength from "../../components/utils/PasswordStrength";
import {getCookie} from "@/cookie";

export default {
  components: {
    PasswordStrength
  },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      isRetired: getCookie("isRetired"),
      ruleForm: {
        pass: '',
        checkPass: ''
      },
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios
              .post("http://localhost:8849/staff/updatePassword", {
                username: getCookie("username"),
                password: this.ruleForm.pass
              }).then(response => {
            if (response.data.code === "200") {
              this.$message({
                message: "修改成功",
                type: "success"
              });
            } else {
              this.$message({
                message: "修改失败",
                type: "error"
              });
            }
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    submitRetirement() {
      this.$confirm('此操作将不可以申请生产实习证明，同时之后将不会再收到基地任何邮件通知, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$alert('感谢您对V5++所作出的贡献，您的退役礼物将在7个工作日内寄出', '退役成功', {
          confirmButtonText: '确定',
          callback: () => {
            this.$axios
                .post("http://localhost:8849/staff/updateRetirement", {
                  username: getCookie("username")
                }).then(response => {
              if (response.data.code === "200") {
                this.$message({
                  message: "退役成功",
                  type: "success"
                });
                this.$router.push("/");
              } else {
                this.$message({
                  message: "提交退役失败，请稍后再试",
                  type: "error"
                });
              }
            })
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '操作已取消'
        });
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    isDisabled() {
      return this.isRetired === "true";
    }
  }
}
</script>
