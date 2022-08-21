<template>
  <div id="loginframe">
    <v-text class="header">采 购 项 目 申 请</v-text>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item style="display:inline-block" label="采购项说明" prop="description">
        <el-input style="width:300px" type="text" v-model="ruleForm.description"></el-input>
      </el-form-item>
      <br/>
      <el-form-item style="display:inline-block" label="预算金额" prop="amount">
        <el-input style="width:300px" type="number" v-model="ruleForm.amount"></el-input>
      </el-form-item>
      <br/>
      <el-tooltip class="item" effect="dark" content="有电子发票需要提交电子发票，有纸质发票需要向管理员提交纸质发票"
                  placement="top">
        <el-switch
            v-model="ruleForm.isInvoiceElectronicForm"
            active-text="有电子发票"
            inactive-text="无电子发票"
        >
        </el-switch>
      </el-tooltip>
      <br/>
      <br/>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="toHomePage">返回</el-button>
      </el-form-item>
    </el-form>
    <br/>
  </div>
</template>

<script>

import {getCookie} from "@/cookie";

export default {
  name: "LoginFrame",
  data() {
    const validateDescription = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入采购项说明"));
      } else {
        callback();
      }
    };
    const validateAmount = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入申请预算金额"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        amount: 0,
        buyer: getCookie("username"),
        description: "",
        isInvoiceElectronicForm: false,
      },
      rules: {
        description: [
          {validator: validateDescription, trigger: "blur"},
          {min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur'}
        ],
        amount: [
          {validator: validateAmount, trigger: "blur"}
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post("http://localhost:8849/ledger/addApplication", this.ruleForm).then(response => {
            if (response.data.code === 0) {
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.toHomePage();
            } else {
              this.$message({
                message: response.data.msg,
                type: "error"
              });
            }
          });
        } else {
          this.$alert("登录信息不全或有误", "登陆失败", {
            confirmButtonText: "确定",
          });
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toHomePage() {
      this.$router.push("/user/budgetOverview");
    },
  }
}
</script>

<style scoped>
.form-application {
  padding: 20px;
  display: inline-block;
}
</style>
