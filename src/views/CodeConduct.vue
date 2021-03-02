<template>
  <div>
    <navbar />
    <image-banner
      img="coc.png"
      date="Update on 16th January, 2021"
      title="CODE OF CONDUCT"
      subtitle="To ensure that we server you better, we created our code of conduct. Kindly read through and agree before sign up to our services"
    ></image-banner>

    <div class="main__wrapper">
      <sectiondisplay
        :menuList="menuList"
        :content="array.tandc"
      ></sectiondisplay>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import navbar from "@/components/extra/navbar";
import ImageBanner from "@/components/extra/ImageBanner";
import MainFooter from "@/components/extra/MainFooter";
import array from "./code";
import sectiondisplay from "@/components/extra/sectiondisplay";

export default {
  name: "codeConduct",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
    sectiondisplay,
  },
  data() {
    return {
      menuList: [
        { name: "About", active: true },
        { name: "What we require", active: false },
        { name: "Disclosure Guidelines", active: false },
        { name: "Prohibited Behaviour", active: false },
        { name: "Consequences", active: false },
        // { name: "General Restriction", active: false },
        { name: "Terms & Condition", active: false },
        // { name: "Standard Disclosure Policy", active: false },
      ],
      array: {},
    };
  },
  mounted() {
    this.array = array;
  },
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 8%;
  padding: 50px 55px;
}
/* 
.side__menu{
    border: 1px dashed;
}

.content{
    border: 1px dashed;
} */

.menu__bullet {
  width: 30px;
  display: inline-block;
  height: 30px;
  border-radius: 50%;
  position: relative;
  margin-right: 10px;
}

.menu__bullet span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>