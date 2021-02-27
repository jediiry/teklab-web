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

    <div class="centered">
      <h1 class="mb-2 font-bold">{{ title }}</h1>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageBanner",
  props: ["title", "subtitle", "date", "img"],
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