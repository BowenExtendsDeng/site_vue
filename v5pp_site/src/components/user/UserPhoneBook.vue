<template>
  <div id="phonebook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="姓名" prop="name">
      </el-table-column>
      <el-table-column label="性别" prop="sex">
      </el-table-column>
      <el-table-column label="年级" prop="session">
      </el-table-column>
      <el-table-column label="院系" prop="college">
      </el-table-column>
      <el-table-column label="专业" prop="major">
      </el-table-column>
      <el-table-column label="电话" prop="telephone">
      </el-table-column>
      <el-table-column label="邮箱" prop="email">
      </el-table-column>
      <el-table-column label="QQ" prop="qqId">
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
