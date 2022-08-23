<template>
  <div class="whole">
    <br/><br/>
    <div class="input-group">
      <br/>
      <p style="font-size: 20px">请 填 写 个 人 简 历</p>
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" class="demo-ruleForm" label-width="100px" status-icon>
        <el-form-item label="真实姓名：" prop="name" style="display: inline-block">
          <keep-alive>
            <el-input v-model="ruleForm.name" style="width: 60ex" type="text"></el-input>
          </keep-alive>
        </el-form-item>
        <br/>
        <el-form-item label="学号：" prop="id" style="display: inline-block">
          <el-input v-model="ruleForm.id" style="width: 60ex" type="text"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="意向方向：" style="display: inline-block;width: 64ex" prop="intention">
          <el-radio v-model="ruleForm.intention" label="1">软 件 组</el-radio>
          <el-radio v-model="ruleForm.intention" label="2">硬 件 组</el-radio>
          <el-radio v-model="ruleForm.intention" label="3">机 械 组</el-radio>
        </el-form-item>
        <br/>
        <el-form-item label="选择届次：" style="display: inline-block;width: 64ex" prop="session">
          <el-radio v-model="ruleForm.session" label="1" @click="setSession(year - 1)">{{ year - 1 }}</el-radio>
          <el-radio v-model="ruleForm.session" label="2" @click="setSession(year)">{{ year }}</el-radio>
        </el-form-item>
        <br/>
        <el-form-item label="选择性别：" style="display: inline-block;width: 64ex" prop="sex">
          <el-radio v-model="ruleForm.sex" label="1" @click="setSex('男')">{{ '男' }}</el-radio>
          <el-radio v-model="ruleForm.sex" label="2" @click="setSex('女')">{{ '女' }}</el-radio>
        </el-form-item>
        <br/>
        <el-form-item label="联系电话：" style="display: inline-block" prop="telephone">
          <el-input v-model="ruleForm.telephone" style="width: 60ex" type="text"></el-input>
        </el-form-item>
        <br/>
        <el-form-item label="联系邮箱：" prop="email" style="display: inline-block">
          <el-input v-model="ruleForm.email" style="width: 60ex" type="text"></el-input>
        </el-form-item>
        <br/>
        <div style="margin: 20px 0;"></div>
        <p>自我介绍</p>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="ruleForm.textarea"
            maxlength="200"
            show-word-limit
            style="display: inline-block;text-align: center;max-width: 70ex"
        >
        </el-input>
        <br/><br/>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="transform: translateX(-4em)">提交</el-button>
          <el-button @click="resetForm('ruleForm')" style="transform: translateX(-4em)">重置</el-button>
        </el-form-item>
      </el-form>
      <br/>
    </div>
    <br/><br/><br/><br/><br/><br/><br/>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    const validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入真实姓名'));
      } else {
        const uPattern = /^[\u4E00-\u9FA5]{2,10}$/;
        if (uPattern.test(value)) {
          callback();
        }
        callback(new Error('真实姓名需要为2-10位汉字，如有标点请省略，请安要求填写'));
      }
    };
    const validateSex = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请选择自己的性别'));
      } else {
        if (this.ruleForm.sex !== '') {
          this.$refs.ruleForm.validateField('sex');
        }
        callback();
      }
    };
    const validateTelephone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系电话'));
      } else {
        const uPattern = /(^1[3|4|5|7|8|9]\d{9}$)|(^09\d{8}$)/;
        if (uPattern.test(value)) {
          callback();
        }
        callback(new Error('请输入有效的电话号码'));
      }
    };
    const validateIntention = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error('请填写意向组别'));
      } else {
        if (this.ruleForm.intention !== '') {
          this.$refs.ruleForm.validateField('intention');
        }
        callback();
      }
    };
    const validateSession = (rule, value, callback) => {
      if (value === 0) {
        callback(new Error('请选择自己的届次'));
      } else {
        if (this.ruleForm.session !== 0) {
          this.$refs.ruleForm.validateField('session');
        }
        callback();
      }
    };
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入联系邮箱号'));
      } else {
        const uPattern = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (uPattern.test(value)) {
          callback();
        }
        callback(new Error('请输入有效的邮箱号'));
      }
    };
    const validateId = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入自己的学号'));
      } else {
        //这个正则可以用到2099年，之后记得更换
        const uPattern = /^20\d{8}$/;
        if (uPattern.test(value)) {
          callback();
        }
        callback(new Error('请输入有效的学号'));
      }
    };
    return {
      ruleForm: {
        intention: 0,
        name: '',
        sex: '',
        id: '',
        session: 0,
        telephone: '',
        email: '',
        textarea: '',
      },
      rules: {
        name: [
          {validator: validateName, trigger: 'blur'}
        ],
        id: [
          {validator: validateId, trigger: 'blur'}
        ],
        session: [
          {validator: validateSession, trigger: 'blur'}
        ],
        intention: [
          {validator: validateIntention, trigger: 'blur'}
        ],
        telephone: [
          {validator: validateTelephone, trigger: 'blur'}
        ],
        email: [
          {validator: validateEmail, trigger: 'blur'}
        ],
        sex: [
          {validator: validateSex, trigger: 'blur'}
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          this.$alert("信息不全或有误，请仔细核对")
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    setSession(num) {
      this.$data.ruleForm.session = num;
    },
    setSex(para) {
      this.$data.ruleForm.sex = para;
    }
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style scoped>
.whole {
  background-image: url("../assets/RMUA调车.jpg");
  max-width: 100%;
  height: auto;
  background-size: cover;
  text-align: center;
  background-repeat: no-repeat;
}

.input-group {
  max-width: 100ex;
  transform: translateX(60%);
  background: #b6b6b6;
  text-align: center;
  border-radius: 2em;
  font-weight: bold;
  font-family: 黑体;
  opacity: 0.88;
}
</style>
