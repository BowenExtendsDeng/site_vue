<template>
  <div>
    <div id="loginpage">
      <el-descriptions style="background-color:rgb(220, 230, 256);font-weight: bold;" title="我 的 信 息"
                       direction="vertical" :column="2" border>
        <el-descriptions-item label="组 别">{{ teamName }}</el-descriptions-item>
        <el-descriptions-item label="基 地 余 额">{{ budget }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div id="phonebook">
      <el-table
          :data="tableData"
          style="width: 100%">
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
  </div>
</template>

<script>
import {getCookie} from "@/cookie";

export default {
  name: "BudgetOverView",
  data() {
    return {
      teamName: "",
      budget: "",
      radio: false,
      tableData: [],
      showData: []
    };
  },
  methods: {},
  mounted() {
    console.log(getCookie("username"))
    this.$axios
        .post("http://localhost:8849/ledger/getByViceCaptain", {
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
      });
      this.tableData = successResponse.data;
      this.tableData.forEach(element => {
            if (element.stage === "发起采购,审批中" || element.stage === "审批通过,请尽快上传发票") {
              this.showData.push(element);
            }
          }
      );
    });
    this.$axios
        .post("http://localhost:8849/team/getTeamByName", {
              username: getCookie("username")
            }
        ).then(successResponse => {
      alert(successResponse.data);
      this.teamName = successResponse.data.name;
      this.budget = successResponse.data.budget;
    });
  }
}
</script>
