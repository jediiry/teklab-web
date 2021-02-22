<template>
  <div
    class="h-screen grid grid-cols-6 justify-center md:items-center md:bg-gray-200"
  >
    <div
      class="col-span-6 grid grid-cols-5 text-center md:col-span-4 md:col-start-2 bg-white rounded"
    >
      <div
        class="col-span-5 md:col-span-2 backeffect flex justify-center items-center"
      >
        <img src="../../assets/img/main.svg" alt="" />
      </div>
      <div class="col-span-5 md:col-span-3 bg-white p-5">
        <div class="flex justify-end">
          Don’t have an account?
          <span @click.prevent="router('/about')">Sign Up</span>
        </div>
        <div class="text-center md:mt-5">
          <h2 class="text-xxl font-bold mt-10">Welcome Back!</h2>
        </div>
        <div class="w-full flex justify-center">
          <div class="w-full md:w-2/3">
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Email Address"
            />
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Password"
            />
            <b-btn class="mt-2 w-full">Sign In</b-btn>
            <div class="flex justify-between mt-4 items-end">
              <div class="text-xs">
                <input type="checkbox" />
                Remember me
              </div>
              <div class="text-xs text-danger" @click="router('/forget')">
                Forgot password?
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
  methods: {
    router(param) {
      this.$router.push(param);
    },
  },
};
</script>

<style>
.backeffect {
  background-image: linear-gradient(180deg, #d10de2, #4e4ea5);
}
</style>
