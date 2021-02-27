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
  name: "bounty",
  data() {
    return {
      header: "BUG BOUNTY",
      title: "ABOUT BUG BOUNTY",
      message: `Bounty programs pay hackers when they find a valid security vulnerability, and Teklabspace Bounty puts you in total control of your program. You’ll start by detailing your program’s scope of targets, what types of findings are eligible, the rewards hackers can earn, and what information hackers should include in their reports. We’ll then help you invite select hackers to a private program or promote a public program to our community of hundreds of thousands of global hackers. As new bug reports start arriving, your team or our white-glove optional triage services team will use the Teklabspace platform to communicate with the hacker, validate the reported bug, and standardize the reported information. Teklabspace then pushes that information to your remediation teams and systems, and then pays the hacker their earned bounty. Along the way, you gain instant visibility into report trends, bug details, bounty payments, and more, to continuously improve your security efforts. Our experts will design, manage, and support your bug bounty.`,
      img: "bounty-header.png",
      imageurl: "bounty.png",
    };
  },
  components: {
    howitworks,
  },
};
</script>

<style>
</style>