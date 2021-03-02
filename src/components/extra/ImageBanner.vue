<template>
  <div
    class="banner__container"
    :style="{
      'background-image': 'url(' + require(`@/assets/img/${img}`) + ')',
    }"
  >
    <!-- <img
      :src="require(`@/assets/img/${img}`)"
      alt="Snow"
      style="width: 100%; height: 100%"
    /> -->
    <div class="bottom-right italic">{{ date }}</div>

    <div class="centered px-4">
      <h1 class="mb-2 text-4xl md:text-6xl font-bold">{{ title }}</h1>
      <p class="text-lg md:text-2xl">{{ subtitle }}</p>

      <div v-if="btn">
        <b-btn class="pink-btn" :href="btn.url">{{ btn.name }}</b-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBanner",
  props: ["title", "subtitle", "date", "img", "btn"],
  data() {
    return {
      bindStyle: {
        backgroundImage: "",
        
      },
    };
  },
};
</script>

<style>
.banner__container {
  position: relative;
  text-align: center;
  color: white;
  max-height: 450px;
  height: 450px;
  overflow-y: hidden;
  margin-top: 0px;
  background-repeat: no-repeat;
  background-size: cover;
}

/* .banner__container img {
    height: 100%;
} */

.bottom-right {
  position: absolute;
  bottom: 22px;
  right: 39px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>