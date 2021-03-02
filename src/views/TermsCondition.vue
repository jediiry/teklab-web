<template>
  <div>
    <navbar />
    <image-banner
      img="tandcheader.png"
      date="Update on 16th January, 2021"
      title="TERMS AND CONDITION"
      subtitle="To ensure that we serve you better, we created our T & C. Kindly read through and agree before signing up to our services"
    ></image-banner>

    <div class="main__wrapper">
      <sectiondisplay
        :menuList="menuList"
        :content="array.maintandc"
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
  name: "TermsCondition",
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
        { name: "No Subcontractor", active: false },
        { name: "Changes", active: false },
        { name: "Third Party Materials and Open Source", active: false },
        { name: "Representations and Warranties", active: false },
        { name: "Inventions and Other Deliverables", active: false },
        { name: "Payment", active: false },
        { name: "Term and Termination", active: false },
        { name: "Independent Contractor", active: false },
        { name: "Confidential Information", active: false },
        { name: "Access to Teklabspace’s Systems and Software", active: false },
        { name: "Indemnification", active: false },
        { name: "Limitation of Liability", active: false },
        { name: "Insurance", active: false },
        { name: "Compliance with Laws and Other Regulations", active: false },
        { name: "Publicity", active: false },
        { name: "Records", active: false },
        { name: "General", active: false },
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

