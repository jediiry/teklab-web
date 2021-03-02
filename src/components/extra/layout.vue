<template>
  <div
    class="min-h-screen grid grid-cols-12 justify-center items-center md:bg-gray-200 px-1"
  >
    <div
      class="col-span-6 text-center md:col-span-4 md:col-start-5 bg-white p-5 rounded"
    >
      <h2 class="text-xxl font-bold md:mt-10">
        <slot name="text"></slot>
      </h2>
      <div class="my-4">
        <slot name="icon"></slot>
      </div>

      <div class="flex justify-center flex-wrap">
        <p class="text-xs w-100">
          <slot name="subtext"></slot>
        </p>
        <div class="w-100 flex justify-center">
          <div class="w-full md:w-1/2">
            <slot name="field"></slot>
          </div>
        </div>
        <div class="w-full md:w-1/2 md:mb-10">
          <b-btn class="shadow-md w-full mt-3 bg-pink">
            <slot name="buttontitle"></slot>
          </b-btn>
          <p
            class="mt-8 cursor-pointer"
            @click.prevent="$router.push('/sign-in')"
          >
            <i class="fas fa-arrow-left"></i>

            <slot name="backtitle"></slot>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "layout",
};
</script>

<style></style>
