<template>
  <div>
    <howitworks
      :title="title"
      :img="img"
      :message="message"
      :imageurl="imageurl"
      :header="header"
    ></howitworks>
  </div>
</template>

<script>
import howitworks from "@/components/extra/howitworks";

export default {
  name: "How",
  data() {
    return {
      header: "VULNERABILITY DISCLOSURE",
      title: "ABOUT VDP",
      message: `A VDP is the digital equivalent of “if you see something, say something.” Teklabspace makes it easy to get started working directly with hackers to minimize risk. We’ll help you draft your VDP using NISTrecommended practices tailored for your unique needs. We’ll then publish it and start directing friendly hackers to submit findings through our platform. Every submission will then arrive to those who need to be aware in a consistent format, and, if validated, the information will integrate seamlessly with your existing systems and workflows. `,
      img: "vdp.png",
      imageurl: "how_img.jpg",
    };
  },
  components: {
    howitworks,
  },
};
</script>

<style>
</style>