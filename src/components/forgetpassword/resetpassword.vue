<template>
  <div>
    <layout>
      <div slot="text">New Password</div>
      <div slot="subtext">Enter your new password to continue</div>
      <div slot="icon">
        <i class="fas fa-lock fa-6x"></i>
      </div>
      <div slot="buttontitle">Save New Password</div>
      <span slot="backtitle">Back to Login</span>
      <div slot="field">
        <input type="text" class="form-control mt-3" placeholder="Password" />
        <input
          type="text"
          class="form-control mt-3"
          placeholder="Retype Password"
        />
      </div>
    </layout>
  </div>
</template>

<script>
import layout from "../extra/layout.vue";
export default {
  components: { layout },
  name: "resetpassword",
};
</script>

<style></style>
