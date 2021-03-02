<template>
  <div>
    <navbar />
    <image-banner
      img="slaheader.png"
      date="Update on 16th January, 2021"
      title="SERVICE LEVEL AGREEMENT"
      subtitle="To ensure that we server you better, we created our code of conduct. Kindly read through and agree before sign up to our services"
    ></image-banner>

    <div class="main__wrapper">
      <sectiondisplay
        :menuList="menuList"
        :content="array.sla"
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
  name: "ServiceLevelAgreement",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
    sectiondisplay,
  },
  data() {
    return {
      menuList: [
        { name: "Definitions", active: true },
        { name: "Services", active: false },
        { name: "No Subcontrator", active: false },
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
</style>