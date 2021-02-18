<template>
  <div>
    <navbar />
    <div>
      <div class="blog__header px-14">
        <h1 class="text-center my-12">
          Welcome to TeklabSpace <span class="text-green-500">Blog!</span>
        </h1>

        <div class="blog__content mb-5">
          <div class="blog__grid">
            <div>
              <img src="../assets/img/blog_img.png" alt="" />
              <img src="../assets/img/blog_img.png" alt="" />
            </div>
            <div>
              <img
                style="width: 100%; height: auto"
                src="../assets/img/blog_img2.png"
                alt=""
              />
            </div>
            <div>
              <img src="../assets/img/blog_img.png" alt="" />
              <img src="../assets/img/blog_img.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <h1 class="mb-4 text-3xl font-bold">Recent Posts</h1>
          <div class="flex justify-between mb-8">
            <div class="mr-3">
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
            <div class="mr-3">
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
            <div>
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
          </div>

          <div class="flex justify-between">
            <div class="mr-3">
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
            <div class="mr-3">
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
            <div>
              <div class="relative">
                <img src="../assets/img/blog_img.png" alt="" />
                <img class="avatart_img" src="../assets/img/user.jpg" alt="" />
              </div>
              <div class="mt-3">
                <p class="text-sm font-bold mb-0">
                  Joker’s Stash Carding Market to Call it Quits
                </p>
                <span class="text-xs font-italic">Uploaded on July 2020</span>
              </div>
            </div>
          </div>

          <div class="flex justify-center my-20">
            <div class="flex">
              <div
                class="bg-gray-300 text-white cursor-pointer h-8 w-8 rounded-full flex justify-center items-center"
              >
                <i class="fas fa-arrow-left"></i>
              </div>
              <div class="flex mx-4">
                <span
                  class="bg-pink text-white h-8 w-8 cursor-pointer rounded-full flex font-bold justify-center items-center mr-3"
                  >1</span
                >
                <span
                  class="font-bold h-8 w-8 cursor-pointer rounded-full flex font-bold justify-center items-center mr-3"
                  >2</span
                >
                <span
                  class="font-bold h-8 w-8 cursor-pointer rounded-full flex font-bold justify-center items-center mr-3"
                  >3</span
                >
                <span
                  class="font-bold h-8 w-8 cursor-pointer rounded-full flex font-bold justify-center items-center"
                  >4</span
                >
              </div>
              <div
                class="bg-pink text-white h-8 w-8 cursor-pointer rounded-full flex justify-center items-center"
              >
                <i class="fas fa-arrow-right"></i>
              </div>
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
// import ImageBanner from "@/components/extra/ImageBanner";
import MainFooter from "@/components/extra/MainFooter";

export default {
  name: "Blog",
  components: {
    navbar,
    // ImageBanner,
    MainFooter,
  },
};
</script>

<style>
.blog__grid {
  display: flex;
}

.blog__grid > :not(:last-child) {
  margin-right: 15px;
}

.blog__grid > :nth-child(1),
.blog__grid > :nth-child(3) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.avatart_img {
  width: 40px;
  height: 40px;
  position: absolute;
  border-radius: 50%;
  bottom: 9%;
  right: 6%;
}
</style>