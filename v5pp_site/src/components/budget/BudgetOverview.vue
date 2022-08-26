<template>
  <div id="phonebook">
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column label="发起人" prop="buyer">
      </el-table-column>
      <el-table-column label="日期" prop="buyTime">
      </el-table-column>
      <el-table-column label="购买事项" prop="remark">
      </el-table-column>
      <el-table-column label="金额" prop="amount">
      </el-table-column>
      <el-table-column label="是否为电子发票" prop="isInvoiceElectronicForm">
      </el-table-column>
      <el-table-column label="电子发票路径" prop="invoicePath">
      </el-table-column>
      <el-table-column label="采购阶段" prop="stage">
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
      tableData: [],
    };
  },
  methods: {},
  mounted() {
    console.log(getCookie("username"))
    this.$axios
        .post(this.$url + "/ledger/getByStaffName", {
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
        if (element.isInvoiceElectronicForm === 1) {
          element.isInvoiceElectronicForm = "是";
        } else {
          element.isInvoiceElectronicForm = "否";
        }
        if (element.stage === 0) {
          element.stage = "发起采购,审批中";
        } else if (element.stage === 1) {
          element.stage = "审批通过,请尽快上传发票";
        } else if (element.stage === 2) {
          element.stage = "审批不通过，请通过邮件查看原因";
        } else {
          element.stage = "已提交发票，采购结束";
        }
        element.buyer = getCookie("username");
      });
      this.tableData = successResponse.data;
    });
  },
}
</script>
