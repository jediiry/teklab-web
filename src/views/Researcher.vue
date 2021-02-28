<template>
  <div>
    <navbar />
    <image-banner
      title="RESEARCHERS"
      subtitle="Get to know what inspires us, our core values and our Team"
      img="banner_img.jpg"
      date=""
    ></image-banner>
    <div class="p-5 md:p-16">
      <div>
        <h1 class="text-xl font-bold color-pink mb-1">
          ACT NOW TO STAY AHEAD OF THREATS
        </h1>
        <p>
          Teklabspace products and services enhance your security efforts to
          keep your valuable data safe from those looking to steal your assets,
          tarnish your brand, and undermine your customers’ trust. It’s easy to
          get started, whether you’re a security team of one or you need
          pinpoint expertise to enhance an already mature security apparatus. We
          can help you develop and launch a VDP; add private, public, or focused
          bug bounty programs; get more from your pentests, and advise your
          overall security strategy. Technology moves at a rapid pace. Nearly
          every bit of information we interact with today is now captured,
          stored, processed, and delivered faster than ever. But as this
          personal, financial, and governmental data moves across the cloud and
          connected devices, it becomes an attractive target for those aiming to
          exploit that data. And as more organizations switch to remote work and
          hybrid models, attack surfaces are growing and evolving like never
          before. Fortunately, you can start taking action today. Organizations
          worldwide are hacking for good: inviting experts to identify
          vulnerabilities before they can be exploited, and using these findings
          to prevent future security gaps from opening in the first place. This
          is the future of cybersecurity. It begins right here.
        </p>
      </div>

      <h1 class="font-bold text-center text-4xl my-10">How it Works</h1>
      <div class="grid md:grid-cols-3 grid-rows-2 gap-10">
        <div class="rounded-md p-6 pt-16 bg-green-50">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt text-green-600 text-6xl"></i>
          </div>
          <p class="text-green-600 text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
            Its easy to create an account. and verify that you are human.
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-light-pink">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt color-pink text-6xl"></i>
          </div>
          <p class="color-pink text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
            Its easy to create an account. and verify that you are human.
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-green-50">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt text-green-600 text-6xl"></i>
          </div>
          <p class="text-green-600 text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
            Its easy to create an account. and verify that you are human.
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-light-pink">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt color-pink text-6xl"></i>
          </div>
          <p class="color-pink text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
            Its easy to create an account. and verify that you are human.
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-green-50">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt text-green-600 text-6xl"></i>
          </div>
          <p class="text-green-600 text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
            Its easy to create an account. and verify that you are human.
          </p>
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
  name: "Researcher",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
  },
};
</script>

<style>
.bg-light-pink {
  background: #fcebff;
}
</style>