<template>
    <div id="phonebook">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="userId" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="grade" label="地址">
            </el-table-column>
            <el-table-column prop="major" label="地址">
            </el-table-column>
            <el-table-column prop="phone" label="地址">
            </el-table-column>
            <el-table-column prop="email" label="地址">
            </el-table-column>
            <el-table-column prop="sex" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    userId: '2020300849',
                    name: '邓博文',
                    grade: '2020级',
                    major: '软件工程',
                    phone: '15202475956',
                    email: '2631702650@qq.com',
                    sex: '男'
                },
                {
                    userId: '2019302479',
                    name: '吴沛恒',
                    grade: '2019级',
                    major: '电子信息工程',
                    phone: '18000000001',
                    email: '1800000000@qq.com',
                    sex: '男'
                }

            ]
        };
    },
    methods: {
    }
}
</script>