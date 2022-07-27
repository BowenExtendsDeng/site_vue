<template>
    <div id="loginpage">
        <el-descriptions style="float:middle;background-color:rgb(220, 230, 256);font-weight: bold;" title="我 的 信 息"
            direction="vertical" :column="2" border>
            <el-descriptions-item label="队 员 姓 名">{{ name }}</el-descriptions-item>
            <el-descriptions-item label="队 员 职 称">{{ role }}</el-descriptions-item>
            <el-descriptions-item label="队 员 届 次">{{ grade }}</el-descriptions-item>
            <el-descriptions-item label="队 员 专 业">{{ major }}</el-descriptions-item>
            <el-descriptions-item label="手 机 号 码">{{ phone }}</el-descriptions-item>
            <el-descriptions-item label="电 子 邮 箱">{{ email }}</el-descriptions-item>
            <el-descriptions-item label="队 员 学 号">{{ userId }}</el-descriptions-item>
            <el-descriptions-item label="出 生 日 期">{{ birthday }}</el-descriptions-item>
            <el-descriptions-item label="性 别">
                <el-tag size="small">{{ sex }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item label="毕 业 高 中">{{ highSchool }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '邓博文',
            userId: '2020300849',
            grade: '2020级',
            major: '软件工程',
            phone: '15202475956',
            email: '2631702650@qq.com',
            birthday: '2001-09-06',
            role: '副队长',
            sex: '男',
            highSchool: '西工大附中'
        };
    },
    methods: {
    }
}
</script>