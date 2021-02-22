<template>
  <div>
    <div class="h-screen grid grid-rows-3 bg-pink-50">
      <div>
        <navbar></navbar>
      </div>
      <div class="grid grid-cols-9 gap-10 items-center">
        <div class="col-span-6 col-start-3 md:col-start-2 md:col-span-4">
          <h2 class="text-3xl md:text-5xl font-bold">
            Africa’s <span class="text-green-600">First</span> Ethical Hacking
            and Crowdsourced Security platform
          </h2>
          <p class="text-xs md:text-lg">
            Cyber criminals are evolving in their activities and there is a need
            for an advancement in the way organizations deal with these threats.
            Harness the power of crowd source security to deal with these
            threats and fix security vulnerabilities.
          </p>
          <div>
            <b-btn class="mx-1 my-2">Get Started</b-btn>
            <b-btn variant="outline-danger">Go to Safe House</b-btn>
          </div>
        </div>
        <div class="col-span-3">
          <img
            src="../assets/img/main.png"
            class="w-85 hidden md:block Imagebanner"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="bg-white p-5">
      <p class="text-center text-3xl font-bold">Trusted Partners</p>
      <div class="flex justify-evenly mt-5">
        <img src="../assets/img/3.svg" class="h-12" alt="" />
        <img src="../assets/img/5.svg" class="h-12" alt="" />
        <img src="../assets/img/1.svg" class="h-12" alt="" />
        <img src="../assets/img/4.svg" class="h-12" alt="" />
        <img src="../assets/img/2.svg" class="h-12" alt="" />
      </div>
    </div>
    <div class="bg-gray-100 p-10">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Services</p>
      <p class="text-center mx-10 md:px-12">
        At TeklabSpace we offers services that ensures that you harness the
        power of crowd source security to enable you deal with these threats and
        to fix your vulnerabilities as well
      </p>
      <div class="px-10 py-3">
        <div class="grid grid-cols-3 gap-5">
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <img src="../assets/img/Icon1.svg" alt="" />
            <p class="text-xl font-bold mt-3">
              Vulnerability Assessment and Penetration Testing
            </p>
            <p>
              (VAPT) describes a broad range of security testing services
              designed to identify and help address cyber security exposures on
              your organization digital assets.
            </p>
            <span class="text-pink-600"
              >Learn More <i class="fas fa-arrow-circle-right"></i
            ></span>
          </div>
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
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
            <span class="text-pink-600"
              >Learn More <i class="fas fa-arrow-circle-right"></i
            ></span>
          </div>
          <div
            class="bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <img src="../assets/img/Icon3.svg" alt="" />
            <p class="text-xl font-bold mt-3">Bug Bounty Program</p>
            <p>
              New breaches are in the news every day, and some of the victims
              include some of the largest businesses. Bug bounties are one way
              to help your business avoid the headlines.
            </p>
            <span class="text-pink-600"
              >Learn More <i class="fas fa-arrow-circle-right"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-yellow-50 p-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Don’t take our word for it</p>
      <p class="text-center mx-10 md:px-12">
        We asked few people for what they think about TeklabSpace and here is
        what they said
      </p>
      <div class="p-3">
        <div class="grid grid-cols-6 gap-10">
          <div class="p-5">
            <i class="fas fa-arrow-circle-left text-gray-300 fa-3x"></i>
          </div>
          <div
            class="col-span-4 bg-white border-3 border-solid border-gray-800 rounded p-5"
          >
            <div class="flex flex-wrap items-center">
              <div class="flex-1">
                <img
                  class="rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD1ZXGicrI8Z9bmLG1CZzfqrCpUpYqMCZhBg&usqp=CAU&ec=45774421"
                  alt=""
                />
              </div>
              <div class="ml-4 flex-6">
                <p>
                  Teklabspace promises a thorough job discovering
                  vulnerabilities and tightening system security. Great
                  communication with very useful results, their penetration
                  tests provided major insight on some flaws in our system, they
                  also got us detailed instructions on how we could avoid the
                  issues detected, and as well improve the overall strength of
                  the system.
                </p>
              </div>
              <div class="w-full text-right">
                <span class="text-2xl">Bello Suleiman</span> <br />
                <span>Product Manager, Thrive Moni</span>
              </div>
            </div>
          </div>
          <div class="p-5">
            <i class="fas fa-arrow-circle-right text-pink-600 fa-3x"></i>
          </div>
        </div>
      </div>
      <div class="controllers">
        <span></span>
        <span></span>
        <span></span>
        <span class="active"></span>
      </div>
    </div>
    <div class="bg-white p-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Blog</p>
      <div class="grid grid-cols-5">
        <div class="col-span-3 col-start-2">
          <div class="flex items-center">
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
    <div class="bg-yellow-50 p-5">
      <div class="flex justify-center">
        <hr class="divider" />
      </div>
      <p class="text-center text-3xl font-bold">Our Videos</p>
      <div class="grid grid-cols-6">
        <div class="col-span-4 col-start-2">
          <div class="flex">
            <div class="flex-1 flex justify-end mx-1">
              <div
                class="relative rounded h-64 w-full video"
                style="
                  background-image: url('https://recordstoreday.com/Photo/418460158312');
                "
              >
                <i class="fas fa-play-circle fa-3x text-yellow-500"></i>
                <div class="absolute bottom-0 bg-black w-full text-white p-3">
                  <p>About the TeklabSpace</p>
                </div>
              </div>
            </div>
            <div class="flex-1 flex justify-start">
              <div
                class="relative rounded h-64 w-full video"
                style="
                  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxA-9bY8y5yeG2RtJWG7V36Kvvj5ozi5TvSA&usqp=CAU');
                "
              >
                <i class="fas fa-play-circle fa-3x text-yellow-500"></i>
                <div class="absolute bottom-0 bg-black w-full text-white p-3">
                  <p>Our Testimonials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4">
      <div class="col-span-2 col-start-2">
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
</style>