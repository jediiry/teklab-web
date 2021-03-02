<template>
  <div
    class="min-h-screen grid grid-cols-12 justify-center items-center md:bg-gray-200 px-1"
  >
    <div
      class="col-span-6 text-center md:col-span-4 md:col-start-5 bg-white p-5 rounded"
    >
      <h2 class="text-xxl font-bold md:mt-10">Opps! Page not Found</h2>
      <div class="my-4">
        <i class="fas fa-exclamation-circle fa-6x text-red-500"></i>
      </div>

      <div class="flex justify-center flex-wrap">
        <p class="text-xs w-100">
          The page you are trying to access is not available or has been moved
          temporaily. If you’re sure this is the place you’re trying to go,
          please contact us here OR
        </p>
        <div class="w-100 flex justify-center">
          <div class="w-full md:w-1/2">
            <slot name="field"></slot>
          </div>
        </div>
        <div class="w-full flex md:w-1/2 md:mb-10">
          <b-btn class="shadow-md pink-btn w-50 mt-3 mx-1">
            <i class="fas fa-angle-left"></i> Back
          </b-btn>
          <b-btn to="/" class="pink-btn-outline shadow-md w-50 mt-3 mx-1">
            Home <i class="fas fa-angle-right"></i>
          </b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
};
</script>

<style>
.backeffect {
  background-image: linear-gradient(180deg, #d10de2, #4e4ea5);
}
</style>
