<template>
  <div>
    <navbar />
    <image-banner
      title="ABOUT US"
      subtitle="Get to know what inspires us, our core values and our Team"
      img="about.png"
      date=""
    ></image-banner>
    <div class="px-5 md:px-40 py-10">
      <div class="md:flex items-center my-5">
        <div class="flex-3">
          <h1 class="title font-bold">What Inspires Us</h1>
          <p class="pt-3 pr-5">
            As technologies transcend and agile solution development implements
            changes at blistering speeds, new threats and vulnerabilities arise
            at same paste. The ever-changing cybersecurity landscape requires
            reliable and continuous risk detection methods and strategy to be
            effective in the technology ecosystem. The protection of digital
            assets is a common concern as it affects all organizations and not a
            battle we are supposed to fight alone individually.
          </p>
        </div>
        <div class="flex-2">
          <img src="../assets/img/imageone.png" class="w-full" alt="" />
        </div>
      </div>
      <div class="md:flex items-center my-5">
        <div class="flex-2 ">
          <img src="../assets/img/imagetwo.png" class="w-full" alt="" />
        </div>
        <div class="flex-3 md:pl-5 ">
          <h1 class="title font-bold">For Organizations</h1>
          <p class="pt-3 pr-5">
            Our platform enables organizational businesses to effectively
            implement DevSecOps which refers to continuous applications and
            systems security testing for numerous assets, with the assistance of
            a scalable custom crowd of security researchers that fits the needs.
            Reporting is done in a secure and structured way, generating
            actionable data that can be seamlessly implemented in development
            cycles. Incoming testing results are validated by a team of security
            professionals that help throughout the journey.
          </p>
        </div>
      </div>
    </div>
    <div class="rel md:p-10">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Services</p>

      <div class="px-10 py-3">
        <div class="grid md:grid-cols-3 gap-5">
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <div class="flex justify-center">
              <img src="../assets/img/greenicon.png" alt="" />
            </div>
            <p class="text-xl font-bold mt-3 text-center">Reliability</p>
            <p class="text-center">
              We deliver professional and world class service. leverage on our
              compitency pool from ethical hackers with reputable track records
              with speed in delivery and at a very competitive afordable cost
            </p>
          </div>
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <div class="flex justify-center">
              <img src="../assets/img/blackicon.png" alt="" />
            </div>
            <p class="text-xl font-bold mt-3 text-center">Commitment</p>
            <p class="text-center">
              To be Africa #1 ethical hacking and bug bounty platform, that will
              help organizations improve their security posture, identify
              threats quickly and also assist to protect their digital assets
            </p>
          </div>
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <div class="flex justify-center">
              <img src="../assets/img/imagelogo.png" alt="" />
            </div>
            <p class="text-xl font-bold mt-3 text-center">Integrity</p>
            <p class="text-center">
              Hear what our partners and customers are talking about us on how
              our platform provides an easy and friendly platform enviroment
              with trust.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="p-10">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Meet Our Team</p>

      <div class="px-10 py-3 flex justify-center items-center">
        <div class="grid md:grid-cols-2 gap-6">
          <div class="text-center">
            <img src="../assets/img/1.png" alt="" />
            <div class="mt-3">
              <span class="text-2xl font-bold">Stephen Ogu</span><br />
              <span class="italic">Founder, CEO</span>
            </div>
          </div>
          <div class="text-center">
            <img src="../assets/img/emma.png" alt="" />
            <div class="mt-3">
              <span class="text-2xl font-bold">Emmanuel Afolabi</span><br />
              <span class="italic">Co-Founder, CTO</span>
            </div>
          </div>
          <div class="text-center">
            <img src="../assets/img/3.png" alt="" />
            <div class="mt-3">
              <span class="text-2xl font-bold">Iyanu Ogundipe</span><br />
              <span class="italic">CIO</span>
            </div>
          </div>
          <div class="text-center">
            <img src="../assets/img/4.png" alt="" />
            <div class="mt-3">
              <span class="text-2xl font-bold">Kojusola Tolani</span><br />
              <span class="italic">Product Manager</span>
            </div>
          </div>
        </div>
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
  name: "about",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
  },
  data() {
    return {
      options: [
        { id: 1, name: "Security Creator YouTube channel list", list: true },
        { id: 2, name: "OSCP Video Tutorial", list: false },
        { id: 3, name: "Bug Bounty Cheat Sheet useful resource", list: false },
        {
          id: 4,
          name: "Online Practical Hacking platform & CTF Challenges",
          list: false,
        },
        { id: 5, name: "Another Useful list", list: false },
      ],
    };
  },
  methods: {
    toggleHistory(e) {
      e.target.classList.toggle("panel__active");
      if (e.target.classList.contains("panel__header")) {
        let panel = e.target.nextElementSibling;
        console.log(panel);
        if (panel.style.display === "block") {
          panel.style.display = "none";
          e.target.children[1].classList.add("fa-plus");
          e.target.children[1].classList.remove("fa-minus");
        } else {
          panel.style.display = "block";
          e.target.children[1].classList.remove("fa-plus");
          e.target.children[1].classList.add("fa-minus");
        }
      }
    },
  },
};
</script>

<style>
.bg-lightred {
  background: #fbdadd;
}

.color-red {
  color: #e93747;
}

.border__red {
  border: 1px solid #e93747;
}

.panel__header {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.panel__body {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
.title {
  border-left: 4px solid #da04f2;
  padding-left: 2rem;
}
.rel {
  background: #fdf0ff;
}
</style>