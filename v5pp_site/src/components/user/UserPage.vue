<template>
  <div id="loginpage">
    <UserBar></UserBar>
    <router-view></router-view>
  </div>
</template>
<script>
import router from '@/routers';
import UserBar from '../UserBar.vue';

export default {
  name: 'LoginPage',
  components: {
    UserBar
  },
  mounted() {
    router.push({name: "UserInfo"});
  }
}
</script>
