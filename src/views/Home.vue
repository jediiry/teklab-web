<template>
  <div>
    <navbar></navbar>
    <div class="md:h-screen bg-pink-50 flex items-center py-10">
      <div class="grid">
        <div class="grid grid-cols-9 gap-10 md:items-end">
          <div class="col-span-6 col-start-2 md:col-start-2 md:col-span-4">
            <div>
              <h2 class="text-4xl md:text-6xl font-bold">
                Africa’s <span class="text-green-600">First</span> Ethical
                <br />
                Hacking and Crowdsourced <br />
                Security platform
              </h2>
              <p class="text-md md:text-2xl md:mt-5">
                Cyber criminals are evolving in their activities and there is a
                need for an advancement in the way organizations deal with these
                threats. Harness the power of crowd source security to deal with
                these threats and fix security vulnerabilities.
              </p>
              <div class="md:mt-5">
                <b-btn size="lg" to="/signup" class="pink-btn mr-3 my-2"
                  >Get Started</b-btn
                >
                <b-btn
                  size="lg"
                  class="pink-btn-outline"
                  to="/safe-house-discosure"
                  >Go to Safe House</b-btn
                >
              </div>
            </div>
          </div>
          <div class="col-span-3">
            <img
              src="../assets/img/main.png"
              width="45%"
              class="hidden md:block Imagebanner"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white p-5">
      <p class="text-center text-3xl font-bold">Trusted Partners</p>
      <div class="flex justify-center mt-5 w-100">
        <div class="w-full md:w-2/3">
          <carousel
            :touchDrag="false"
            :autoWidth="true"
            :autoplay="true"
            :autoplaySpeed="3"
            :loop="true"
            :margin="20"
            :nav="false"
            :items="3"
            :responsive="{0:{items:1, nav:false},600:{items:3, nav:false}}"
          >
            <img src="../assets/img/3.svg" class="h-12 mx-5" alt="" />
            <img src="../assets/img/5.svg" class="h-12 mx-5" alt="" />
            <img src="../assets/img/1.svg" class="h-12 mx-5" alt="" />
            <img src="../assets/img/4.svg" class="h-12 mx-5" alt="" />
            <img src="../assets/img/2.svg" class="h-12 mx-5" alt="" />
          </carousel>
        </div>
        <!-- <swiper :slides-per-view="4" :space-between="50" virtual>
          <swiper-slide>
            <img src="../assets/img/3.svg" class="h-12" alt=""
          /></swiper-slide>
          <swiper-slide>
            <img src="../assets/img/5.svg" class="h-12" alt=""
          /></swiper-slide>
          <swiper-slide>
            <img src="../assets/img/1.svg" class="h-12" alt=""
          /></swiper-slide>
          <swiper-slide>
            <img src="../assets/img/4.svg" class="h-12" alt=""
          /></swiper-slide>
          <swiper-slide>
            <img src="../assets/img/2.svg" class="h-12" alt=""
          /></swiper-slide>
        </swiper> -->
      </div>
    </div>
    <div class="bg-gray-100 px-3 md:p-10">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Services</p>
      <p class="text-center mx-10 md:px-12">
        At TeklabSpace we offers services that ensures that you harness the
        power of crowd source security to enable you deal with these threats and
        to fix your vulnerabilities as well
      </p>
      <div class="md:px-10 py-3">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div class="cardstyle">
            <img src="../assets/img/Icon1.svg" alt="" />
            <p class="text-xl font-bold mt-3">
              Vulnerability Assessment and Penetration Testing
            </p>
            <p>
              (VAPT) describes a broad range of security testing services
              designed to identify and help address cyber security exposures on
              your organization digital assets.
            </p>
            <b-btn variant="transparent" to="/vapt"
              ><span class="text-pink-600"
                >Learn More <i class="fas fa-arrow-circle-right"></i
              ></span>
            </b-btn>
          </div>
          <div class="cardstyle">
            <img src="../assets/img/Icon2.svg" alt="" />
            <p class="text-xl font-bold mt-3">
              Vulnerability Disclosure Program
            </p>
            <p>
              Vulnerability disclosure program is a way of creating a safe
              harbor for hackers who find a security vulnerability in your
              system without legal action carried out against them for finding
              and reporting these issues to you.
            </p>
            <b-btn variant="transparent" to="/how-it-works"
              ><span class="text-pink-600"
                >Learn More <i class="fas fa-arrow-circle-right"></i
              ></span>
            </b-btn>
          </div>
          <div class="cardstyle">
            <img src="../assets/img/Icon3.svg" alt="" />
            <p class="text-xl font-bold mt-3">Bug Bounty Program</p>
            <p>
              New breaches are in the news every day, and some of the victims
              include some of the largest businesses. Bug bounties are one way
              to help your business avoid the headlines.
            </p>
            <b-btn variant="transparent" to="/bounty"
              ><span class="text-pink-600"
                >Learn More <i class="fas fa-arrow-circle-right"></i
              ></span>
            </b-btn>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-50 p-3 md:p-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Don’t take our word for it</p>
      <p class="text-center mx-10 md:px-12">
        We asked few people for what they think about TeklabSpace and here is
        what they said
      </p>
      <div class="md:p-3">
        <div class="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div class="p-5 hidden md:block">
            <i
              class="fas fa-arrow-circle-left text-gray-300 fa-3x"
              @click.prevent="next"
            ></i>
          </div>
          <div
            class="md:col-span-4 border-3 border-solid border-gray-800 rounded"
          >
            <carousel
              :touchDrag="true"
              :autoplay="true"
              :autoplaySpeed="3"
              :loop="true"
              :margin="20"
              :nav="false"
              :items="1"
              ref="carousel"
            >
              <div class="md:flex bg-white p-5 flex-wrap items-center">
                <div class="flex-2 flex justify-center">
                  <div class="h-36 w-36 rounded-circle bg-green-600"></div>
                  <!-- <img
                    class="rounded-circle w-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1ZXGicrI8Z9bmLG1CZzfqrCpUpYqMCZhBg&usqp=CAU&ec=45774421"
                    alt=""
                  /> -->
                </div>
                <div class="flex-5 mt-2">
                  <p class="text-xl">
                    Teklabspace promises a thorough job discovering
                    vulnerabilities and tightening system security. Great
                    communication with very useful results, their penetration
                    tests provided major insight on some flaws in our system,
                    they also got us detailed instructions on how we could avoid
                    the issues detected, and as well improve the overall
                    strength of the system.
                  </p>
                </div>
                <div class="w-full md:text-right">
                  <span class="text-2xl font-bold">Bello Suleiman</span> <br />
                  <span>Product Manager, Thrive Moni</span>
                </div>
              </div>
              <div class="md:flex bg-white p-5 flex-wrap items-center">
                <div class="flex-2 flex justify-center">
                  <div class="h-36 w-36 rounded-circle bg-pink-600"></div>
                </div>
                <div class="flex-5 mt-2">
                  <p class="text-xl">
                    “When we were looking to meet compliance and make sure there
                    are no loop holes in our application before launching to
                    production that was when Teklabsapace came in and carried a
                    thorough VAPT on our application. The results in the report
                    helps us to prevent future reoccurence,”
                  </p>
                </div>
                <div class="w-full md:text-right">
                  <span class="text-2xl font-bold">Bayo</span> <br />
                  <span>CTO, Clear Codes Lab</span>
                </div>
              </div>
              <div class="md:flex bg-white p-5 flex-wrap items-center">
                <div class="flex-2 flex justify-center">
                  <div class="h-36 w-36 rounded-circle maincolor"></div>
                </div>
                <div class="flex-5 mt-2">
                  <p class="text-xl">
                    I've never seen such a thorough and exhaustive VAPT scan as
                    the one that was provided by Teklabspace. The results
                    provided a-lot of insights and was very detailed .
                  </p>
                </div>
                <div class="w-full md:text-right">
                  <span class="text-2xl font-bold">Bolu</span> <br />
                  <span>CTO, Metisbay</span>
                </div>
              </div>
            </carousel>
          </div>
          <div class="p-5 hidden md:block">
            <i class="fas fa-arrow-circle-right text-pink-600 fa-3x"></i>
          </div>
        </div>
      </div>
      <!-- <div class="controllers">
        <span></span>
        <span></span>
        <span></span>
        <span class="active"></span>
      </div> -->
    </div>
    <div class="bg-white p-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Blog</p>
      <div class="grid grid-cols-1 md:grid-cols-5">
        <div class="md:col-span-3 md:col-start-2">
          <div class="md:flex items-center text-center md:text-left">
            <div class="flex-1">
              <p class="text-3xl font-bold">
                Hey there, Check <br />
                out our blog today
              </p>
              <p>We have tons of amazing content for you!</p>
              <b-btn to="/blog">Visit Blog</b-btn>
            </div>
            <div class="flex-1">
              <img src="../assets/img/blog.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-50 p-10 md:py-20 md:px-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Videos</p>
      <div class="grid md:grid-cols-6">
        <div class="md:col-span-4 md:col-start-2">
          <div class="md:flex flex-wrap">
            <div class="flex-1 flex justify-start m-1">
              <div
                class="relative rounded h-64 w-full video"
                style="
                  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxA-9bY8y5yeG2RtJWG7V36Kvvj5ozi5TvSA&usqp=CAU');
                "
              >
                <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/uBvYFNR5wvw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>

                <!-- <i class="fas fa-play-circle fa-3x text-yellow-500"></i> -->
                <!-- <div class="absolute bottom-0 bg-black w-full text-white p-3">
                  <p>Our Testimonials</p>
                </div> -->
              </div>
            </div>
            <div class="flex-1 flex justify-start m-1">
              <div
                class="relative rounded h-64 w-full video"
                style="
                  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxA-9bY8y5yeG2RtJWG7V36Kvvj5ozi5TvSA&usqp=CAU');
                "
              >
                <iframe
                  class="w-full h-full"
                  src="https://www.youtube.com/embed/M8IPTJdQ7uk"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <!-- <i class="fas fa-play-circle fa-3x text-yellow-500"></i> -->
                <!-- <div class="absolute bottom-0 bg-black w-full text-white p-3">
                  <p>Our Testimonials</p>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid md:grid-cols-6 background">
      <div class="col-span-4 col-start-2">
        <div class="flex p-5 justify-between">
          <div class="text-center">
            <h2 class="text-4xl font-bold">100</h2>
            <span>Active Hackers <br /></span>
            <span><i class="fas fa-plus"></i></span>
          </div>
          <div class="text-center">
            <h2 class="text-4xl font-bold">20</h2>
            <span>Trusted Partners <br /></span>
            <span><i class="fas fa-plus"></i></span>
          </div>
          <div class="text-center">
            <h2 class="text-4xl font-bold">500</h2>
            <span>Unique Daily Visitors <br /></span>
            <span><i class="fas fa-plus"></i></span>
          </div>
        </div>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import navbar from "@/components/extra/navbar";
import MainFooter from "@/components/extra/MainFooter";

export default {
  name: "home",
  components: {
    navbar,
    MainFooter,
  },
  methods: {
    next() {
      let a = this.$refs.carousel;
      console.log(a);
    },
  },
};
</script>

<style>
.divider {
  border: 3px solid #da04f2;
  width: 5%;
  border-radius: 4px;
}
.controllers {
  display: flex;
  justify-content: center;
}
.controllers span {
  border: 3px solid #c4c4c4;
  width: 3%;
  border-radius: 4px;
  margin: 0 3px;
}
.controllers .active {
  border-color: #da04f2;
  width: 2%;
}
.video {
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Imagebanner {
  position: absolute;
  right: 10%;
  top: 20%;
}
.background {
  background: url("../assets/img/backkk.png");
  background-size: cover;
  background-repeat: no-repeat;
}
.owl-theme .owl-nav.disabled + .owl-dots {
  margin-top: 40px;
}
.cardstyle {
  background-color: white;
  padding: 4rem;
  border-radius: 10px;
  border: 3px solid black;
}
.maincolor {
  background-color: #da04f2;
}
</style>