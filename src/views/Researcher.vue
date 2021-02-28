<template>
  <div>
    <navbar />
    <image-banner
      title="RESEARCHERS"
      subtitle=""
      img="reseacherheader.png"
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
        <div class="rounded-md p-6 pt-16 bg-light-pink">
          <div class="mb-3 text-center">
            <i class="fas fa-edit color-pink text-6xl"></i>
          </div>
          <p class="color-pink text-center font-bold text-base mb-2">
            Signup on Teklabspace
          </p>
          <p class="text-xs text-center">
           Its easy to create an account. and verify that you are human 
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-green-50">
          <div class="mb-3 text-center">
            <i class="fas fa-handshake text-green-600 text-6xl"></i>
          </div>
          <p class="text-green-600 text-center font-bold text-base mb-2">
           Accept the Code of conduct
          </p>
          <p class="text-xs text-center">
            We provide a friendly enviroment for people with diffrent race, culture, religious belife, political affiliation and personal orientation on Teklabspace. We only allow positive vibes and inter personal respect when attempting the rules of engagement
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-gray-50">
          <div class="mb-3 text-center">
            <i class="fas fa-file-alt text-grey-600 text-6xl"></i>
          </div>
          <p class="text-gray-600 text-center font-bold text-base mb-2">
           Check Up open programs
          </p>
          <p class="text-xs text-center">
            As a new user you have limited view to programs listed on the Discouvery after signin. To increase your chance of wild range of program, you can submit security vulnerability on open programs and fufill your KYC
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-green-50">
          <div class="mb-3 text-center">
            <i class="fas fa-file-import text-green-600 text-6xl"></i>
          </div>
          <p class="text-green-600 text-center font-bold text-base mb-2">
            Submit a report on Safe House
          </p>
          <p class="text-xs text-center">
            
Found something in the wild and dont know how to go about it. Teklabspace provide a secured and safe way to reachout to the organization without any legal action against the hacker. Take advatantage of this featuure.
          </p>
        </div>
        <div class="rounded-md p-6 pt-16 bg-gray-50">
          <div class="mb-3 text-center">
            <i class="fa fa-glass-martini-alt text-gray-600 text-6xl"></i>
          </div>
          <p class="text-gray-600 text-center font-bold text-base mb-2">
            Get recommended by Teklabspace
          </p>
          <p class="text-xs text-center">
            Submit verified report and be invited for a drink on a round table. Be consistent in submiting valid report on programs.
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