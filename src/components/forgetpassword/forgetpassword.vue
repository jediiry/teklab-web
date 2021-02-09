<template>
  <div>
    <layout>
      <div slot="text">Forget Password</div>
      <div slot="subtext">
        Email your email and we’ll send you a link to reset your password
      </div>
      <div slot="icon">
        <i class="fas fa-lock fa-6x"></i>
      </div>
      <div slot="buttontitle">Reset Password</div>
      <span slot="backtitle">Back to Login</span>
      <div slot="field">
        <input
          type="text"
          class="form-control"
          placeholder="Enter your email address"
        />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "../extra/layout.vue";
export default {
  components: { layout },
  name: "forgetpassword",
};
</script>

<style></style>
