<template>
  <div>
    <layout>
      <div slot="text">Email Sent</div>
      <div slot="subtext">
        If you don’t receive an email from us within 5 minutes, please check
        your SPAM folder, still no email?
      </div>
      <div slot="icon">
        <i class="fas fa-check fa-6x"></i>
      </div>
      <div slot="buttontitle">Resend Password</div>
      <span slot="backtitle">Back to Login</span>
    </layout>
  </div>
</template>

<script>
import layout from "../extra/layout.vue";
export default {
  components: { layout },
  name: "sentemail",
};
</script>

<style></style>
