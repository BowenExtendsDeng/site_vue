<template>
  <div>
    <img :src="require(imagePath[index])" alt="logo" width="100%" id="ppt" v-for="index in amount"
         :key="index">
  </div>
</template>

<script>
export default {
  name: "PptProjector",
  data() {
    return {
      amount: 0,
      imagePath: []
    }
  },
  methods: {},
  computed: {},
  mounted() {
    this.amount = this.$route.params.amount;
    for (let i = 1; i <= this.amount; i++) {
      this.imagePath.push(this.$route.params.imageDirPath + "/" + i + '.PNG');
    }
    alert(this.imagePath);
  },
}
</script>

<style scoped>
div {
  width: 60%;
  height: 60%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
