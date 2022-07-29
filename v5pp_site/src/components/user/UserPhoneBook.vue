<template>
  <div id="phonebook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名">
      </el-table-column>
      <el-table-column prop="sex" label="性别">
      </el-table-column>
      <el-table-column prop="session" label="年级">
      </el-table-column>
      <el-table-column prop="college" label="院系">
      </el-table-column>
      <el-table-column prop="major" label="专业">
      </el-table-column>
      <el-table-column prop="telephone" label="电话">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="qqId" label="QQ">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tableData: []
    };
  },
  methods: {},
  mounted() {
    axios({
      method: "GET",
      url: "http://localhost:8849/staff/getAllStaffs",
    }).then(response => {
      this.tableData = response.data;
    });
  }
}
</script>
