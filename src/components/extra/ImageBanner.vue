<template>
    <div class="banner__container">
        <img src="../../assets/img/banner_img.jpg" alt="Snow" style="width:100%;">
        <div class="bottom-right italic">{{ date }}</div>
        <div class="centered">
            <h1 style="width: max-content;" class="mb-2 font-bold">{{ title }}</h1>
            <p>{{ subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ImageBanner',
    props: ['title', 'subtitle', 'date', 'img']
}
</script>

<style>
.banner__container {
    position: relative;
    text-align: center;
    color: white;
    max-height: 350px;
    height: 350px;
    overflow-y: hidden;
    margin-top: 18px;
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
}
</style>