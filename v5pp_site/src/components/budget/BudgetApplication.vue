<template>
  <div id="UserSettings" class="form=application">
    <keep-alive>
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item style="display: inline-block" label="采购项描述">
          <el-input style="width:100ex" v-model="form.name"></el-input>
        </el-form-item>
        <br/>
        <el-form-item style="display: inline-block" label="采购项金额">
          <el-input style="width:100ex" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">发起申请</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </keep-alive>

  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>
.form-application {
  padding: 20px;
  display: inline-block;
}
</style>
