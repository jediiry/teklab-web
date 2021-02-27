<template>
  <div>
    <navbar />

    <image-banner :title="header" subtitle="" :img="img" date=""></image-banner>

    <div class="p-16">
      <div>
        <h1 class="text-xl font-bold color-pink mb-1">{{ title }}</h1>
        <p>
          {{ message }}
        </p>
      </div>

      <div class="my-12">
        <h1 class="text-4xl font-bold mb-12 text-center">How it Works</h1>
        <img :src="require(`@/assets/img/${imageurl}`)" alt="" />
      </div>
    </div>

    <main-footer></main-footer>
  </div>
</template>

<script>
import navbar from "@/components/extra/navbar";
import ImageBanner from "@/components/extra/ImageBanner";
import MainFooter from "@/components/extra/MainFooter";

export default {
  name: "How",
  props: ["title", "message", "imageurl", "img", "header"],
  components: {
    navbar,
    ImageBanner,
    MainFooter,
  },
};
</script>

<style>
</style>