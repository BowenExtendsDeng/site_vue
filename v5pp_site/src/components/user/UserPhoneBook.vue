<template>
    <div id="phonebook">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="session" label="年级">
            </el-table-column>
            <el-table-column prop="major" label="专业">
            </el-table-column>
            <el-table-column prop="phone" label="电话">
            </el-table-column>
            <el-table-column prop="email" label="邮箱">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: [
        {
          name: '邓博文',
          session: '2020级',
          major: '软件工程',
          phone: '15202475956',
          email: '2631702650@qq.com',
          sex: '男'
        },
        {
          userId: '2019302479',
          name: '吴沛恒',
          session: '2019级',
          major: '电子信息工程',
          phone: '18000000001',
          email: '1800000000@qq.com',
          sex: '男'
        }

      ]
    };
  },
  methods: {},
  mounted() {
    axios({
      method:"GET",
      url:"http://localhost:8849/staff/getAllStaffs",
    }).then(response=>{
      alert(response.data);
    })
  }
}
</script>
