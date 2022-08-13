<template>
  <div id="phonebook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="buy_time" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="remark" label="购买事项" width="180">
      </el-table-column>
      <el-table-column prop="amount" label="金额">
      </el-table-column>
      <el-table-column prop="operator" label="发起人">
      </el-table-column>
      <el-table-column prop="manager" label="财务管理员">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getCookie} from "@/cookie";

export default {
  name: "BudgetOverView",
  data() {
    return {
      tableData:[]
    };
  },
  methods(){
    this.$axios
        .post("http://localhost:8849/ledger/getByStaffName", {
              username: getCookie("username")
            }
        ).then(successResponse => {
          this.tableData = successResponse.data;
          console.log(successResponse.data);
    });
  }
}
</script>

<style scoped>

</style>
