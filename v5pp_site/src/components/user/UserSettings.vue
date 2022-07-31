<template>
  <div>
    <p style="text-align: center;font-weight: bold;color: #23425e;font-size: large">重置密码</p>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item style="display: inline-block" label="密码" prop="pass">
        <el-input style="width: 60ex" type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="密码强度">
        <PasswordStrength style="width: 40ex" :password="ruleForm.pass"></PasswordStrength>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="确认密码" prop="checkPass">
        <el-input style="width: 60ex" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <br/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
      <br/>
      <p style="text-align: center;font-weight: bold;color: #23425e;font-size: large">我要退役</p>
      <el-form-item style="display:inline-block" label="确认退役？">
        <el-button type="primary" @click="submitRetirement">确认</el-button>
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
      alert('submit!');
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
