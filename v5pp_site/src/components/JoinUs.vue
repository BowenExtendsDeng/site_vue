<template>
  <div>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item style="display: inline-block" label="真实姓名：" prop="name">
        <keep-alive>
          <el-input style="width: 60ex" type="text" v-model="ruleForm.name"></el-input>
        </keep-alive>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="学号：" prop="id">
        <el-input style="width: 60ex" type="text" v-model="ruleForm.id"></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="密码：" prop="pass">
        <el-input style="width: 60ex" type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="密码强度：">
        <PasswordStrength style="width: 40ex" :password="ruleForm.pass"></PasswordStrength>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block" label="确认密码：" prop="checkPass">
        <el-input style="width: 60ex" type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block;width: 64ex" label="意向方向：">
        <el-radio v-model="ruleForm.intention" label="1">软 件 组</el-radio>
        <el-radio v-model="ruleForm.intention" label="2">硬 件 组</el-radio>
        <el-radio v-model="ruleForm.intention" label="3">机 械 组</el-radio>
        <el-radio v-model="ruleForm.intention" label="4">双 创 组</el-radio>
      </el-form-item>
      <br/>
      <el-form-item style="display: inline-block;width: 64ex" label="选择届次：">
        <el-radio v-model="ruleForm.session" label="1" @click="setSession(year - 1)">{{ year - 1 }}</el-radio>
        <el-radio v-model="ruleForm.session" label="2" @click="setSession(year)">{{ year }}</el-radio>
      </el-form-item>
      <br/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import PasswordStrength from "../components/utils/PasswordStrength";

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
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入真实姓名'));
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
        intention: 0,
        name: '',
        id: '',
        pass: '',
        checkPass: '',
        age: '',
        session: 0,
      },
      rules: {
        name: [
          {validator: validateName, trigger: 'blur'}
        ],
        id: [
          {validator: validatePass, trigger: 'blur'}
        ],
        age: [
          {validator: validatePass, trigger: 'blur'}
        ],
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
        session: [
          {validator: validatePass, trigger: 'blur'}
        ],
        intention: [
          {validator: validatePass, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          alert(this.ruleForm.session);
          alert(this.ruleForm.intention);
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

