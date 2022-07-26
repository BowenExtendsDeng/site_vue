<template>
    <div id="loginframe">
        <v-text class="header">队 员 登 录 通 道</v-text>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item style="display:inline-block" label="用户名" prop="username">
                <el-input style="width:300px" type="text" v-model="ruleForm.username"></el-input>
            </el-form-item>
            <br />
            <el-form-item style="display:inline-block" label="密码" prop="password">
                <el-input style="width:300px" type="password" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <br />
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button @click="toHomePage">返回</el-button>
            </el-form-item>
        </el-form>
        <br />
    </div>
</template>

<script>
import router from '@/routers';

export default {
    name: "LoginFrame",
    data() {
        var validateUsername = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入正确的用户名"));
            }
            else {
                var uPattern = /^[a-zA-Z0-9_]{4,16}$/;
                if (uPattern.test(value)) {
                    callback();
                }
                callback(new Error("用户名只能包含字母，数字，下划线，且长度为4-16位"));
            }
        };
        var validatePassword = (rule, value, callback) => {
            if (value === "") {
                callback(new Error("请输入密码"));
            }
            else {
                callback();
            }
        };
        return {
            ruleForm: {
                username: "",
                password: ""
            },
            rules: {
                username: [
                    { validator: validateUsername, trigger: "blur" }
                ],
                password: [
                    { validator: validatePassword, trigger: "blur" }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.$alert("", "登陆成功", {
                        confirmButtonText: "确定",
                    });
                    router.push({ name: "UserPage" });
                }
                else {
                    this.$alert("登录信息不全或有误", "登陆失败", {
                        confirmButtonText: "确定",
                    });
                    return false;
                }
                alert("TODO：跳转未写完！");
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        toHomePage() {
            this.$router.push("/");
        }
    }
}
</script>

<style scoped>
.header {
    font-size: 4ex;
    color: rgb(0, 84, 163);
    font-family: '楷体';
    font-weight: bold;
    text-align: middle;
}
</style>