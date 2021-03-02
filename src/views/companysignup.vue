<template>
  <div
    class="h-screen grid md:grid-cols-8 justify-center md:items-center md:bg-white"
  >
    <div
      class="col-span-6 grid grid-cols-5 text-center md:col-span-4 md:col-start-3 bg-white rounded shadow-lg"
    >
      <div
        class="col-span-5 md:col-span-2 backeffect flex justify-center items-center"
      >
        <img src="../assets/img/main.svg" alt="" />
      </div>
      <div class="col-span-5 md:col-span-3 bg-white p-10 md:p-20">
        <div class="flex justify-end">
          Already have an account?
          <span
            class="text-pink-600 cursor-pointer"
            @click.prevent="router('/sign-in')"
            >Sign In</span
          >
        </div>
        <div class="text-center md:mt-5">
          <h2 class="text-xxl font-bold mt-10">
            Create your <span class="text-green-500">Company</span> account
          </h2>
        </div>
        <div class="w-full flex justify-center">
          <div class="w-full md:w-full">
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Company Name"
            />
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Company Phone number"
            />
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Company email"
            />
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Password"
            />
            <input
              type="text"
              class="form-control mt-2"
              placeholder="Confirm Password"
            />
            <div class="flex mt-4 items-end">
              <div class="text-xs text-left">
                <input type="checkbox" />
                By clicking sign up, you hereby are in agreement with our
                <router-link class="text-red-500" to="/terms-condition"
                  >Terms & Conditions</router-link
                >
                and
                <router-link class="text-red-500" to="/code-of-conduct"
                  >Code of conduct</router-link
                >
              </div>
              <!-- <div class="text-xs text-danger" @click="router('/forget')">
                Forgot password?
              </div> -->
            </div>
            <b-btn class="mt-2 w-full bg-pink">Sign Up</b-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "company",
  methods: {
    router(param) {
      this.$router.push(param);
    },
  },
};
</script>

<style>
.backeffect {
  background-image: url("./../assets/img/companyside.png");
  background-size: cover;
}
</style>
