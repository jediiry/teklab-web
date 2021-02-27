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
      header: "VAPT",
      title: "ABOUT VAPT",
      message: `Premium Pentest is typically designed to check the box on Teklabspace gives you so much more. We start by working with you to align the project’s scope with your needs. We’ll then gather details on your attack surface and ensure hackers are fully aware of your unique targets and goals. As hackers use real-world tactics to assess your scope for vulnerabilities, they’ll submit reports through our platform, giving you instant visibility into findings and potential risks. At the conclusion of the pentest, you’ll receive a detailed report of findings, recommendations, and remediation results to share with your auditors and use to improve your overall security..   `,
      img: "vapt-header.png",
      imageurl: "vapt.png",
    };
  },
  components: {
    howitworks,
  },
};
</script>

<style>
</style>