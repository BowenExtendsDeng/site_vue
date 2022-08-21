<template>
  <div>
    <el-select v-model="value" placeholder="请选择一笔账单">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
      </el-option>
    </el-select>
    <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
      <i class="el-icon-upload" style="height: 300ex"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>
<script>
import {getCookie} from "@/cookie";

export default {
  data() {
    return {
      buy_items: [],
      options: [],
      value: '',
      fileList: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    SendToServer() {

    }
  },
  mounted() {
    console.log(getCookie("username"))
    this.$axios
        .post("http://localhost:8849/ledger/getByStaffName", {
              username: getCookie("username")
            }
        ).then(successResponse => {
      console.log(successResponse.data);
      this.buy_items = successResponse.data;
      this.buy_items.forEach(element => {
        if (element.stage === 2) {
          this.options.push({
            value: element.uuid,
            label: element.remark
          })
        }
      })
      console.log(this.options)
      if (this.options.length === 0) {
        this.$alert('查询到您没有需要上传发票的账单')
      }
    });
  }
}
</script>
