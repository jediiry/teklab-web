<template>
  <div>
    <layout>
      <div slot="text">Password Changed</div>
      <div slot="subtext">
        Welldone! Your password has been changed successfully. Kindly sign in
        with your new passord to access your account.
      </div>
      <div slot="icon">
        <i class="fas fa-check fa-6x"></i>
      </div>
      <div slot="buttontitle">Sign In</div>
      <span slot="backtitle">Back to Login</span>
    </layout>
  </div>
</template>

<script>
import layout from "../extra/layout.vue";
export default {
  components: { layout },
  name: "passwordchanged",
};
</script>

<style></style>
