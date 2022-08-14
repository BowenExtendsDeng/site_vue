<template>
  <div id="phonebook">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="buyer" label="发起人">
      </el-table-column>
      <el-table-column prop="buyTime" label="日期">
      </el-table-column>
      <el-table-column prop="remark" label="购买事项">
      </el-table-column>
      <el-table-column prop="amount" label="金额">
      </el-table-column>
      <el-table-column prop="isInvoiceElectronicForm" label="是否为电子发票">
      </el-table-column>
      <el-table-column prop="invoicePath" label="电子发票路径">
      </el-table-column>
      <el-table-column prop="stage" label="采购阶段">
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
  },
  mounted() {
    console.log(getCookie("username"))
    this.$axios
        .post("http://localhost:8849/ledger/getByStaffName", {
              username: getCookie("username")
            }
        ).then(successResponse => {
      console.log(successResponse.data);
      successResponse.data.forEach(element => {
        const date = new Date(element.buyTime);
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        element.buyTime = year + "-" + month + "-" + day;
        if(element.isInvoiceElectronicForm === 1){
          element.isInvoiceElectronicForm = "是";
        }else{
          element.isInvoiceElectronicForm = "否";
        }
        if(element.stage === 1){
          element.stage = "发起采购";
        }else if(element.stage === 2){
          element.stage = "审批通过,请尽快上传发票";
        }else if(element.stage === 3){
          element.stage = "审批不通过";
        }else{
          element.stage = "已提交发票，采购结束";
        }
        element.buyer = getCookie("username");
      });
      this.tableData = successResponse.data;
    });
  }
}
</script>

<style scoped>

</style>
