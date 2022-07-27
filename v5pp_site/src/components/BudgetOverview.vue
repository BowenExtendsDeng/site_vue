<template>
  <div id="phonebook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="type" label="收入/支出" width="180">
      </el-table-column>
      <el-table-column prop="amount" label="金额">
      </el-table-column>
      <el-table-column prop="operator" label="发起人">
      </el-table-column>
      <el-table-column prop="description" label="采购项描述">
      </el-table-column>
      <el-table-column prop="manager" label="财务管理员">
      </el-table-column>
      <el-table-column prop="stage" label="当前阶段">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "BudgetOverView",
  data() {
    return {
      tableData: [
        {
          date: '2020-01-01',
          type: '支出',
          amount: '100',
          operator: '王子涵',
          description: '餐饮费',
          manager: '邓博文',
          stage: '流程结束'
        },
        {
          date: '2020-01-02',
          type: '支出',
          amount: '100',
          operator: '王子涵',
          description: '餐饮费',
          manager: '邓博文',
          stage: '待上传发票'
        },
        {
          date: '2020-01-01',
          type: '支出',
          amount: '100',
          operator: '王子涵',
          description: '餐饮费',
          manager: '邓博文',
          stage: '待上传发票'
        },
        {
          date: '2020-01-01',
          type: '支出',
          amount: '100',
          operator: '王子涵',
          description: '餐饮费',
          manager: '邓博文',
          stage: '待管理员拨款'
        },
        {
          date: '2020-01-01',
          type: '支出',
          amount: '100',
          operator: '王子涵',
          description: '餐饮费',
          manager: '邓博文',
          stage: '审核中'
        }]
    };
  }
}
</script>

<style scoped>

</style>
