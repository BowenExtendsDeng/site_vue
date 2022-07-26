<template>
<div id="loginpage">
  <HeadLineFrame></HeadLineFrame>
  <LoginFrame></LoginFrame>
</div>

</template>
<script>
import HeadLineFrame from './HeadLineFrame.vue';
import LoginFrame from './LoginFrame.vue';
export default {
  name: 'LoginPage',
  components: {
    HeadLineFrame,
    LoginFrame
  }
}
</script>