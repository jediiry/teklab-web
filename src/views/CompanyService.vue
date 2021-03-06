<template>
  <div>
    <navbar />
    <image-banner
      title="HARNESS THE POWER OF CROWD SOURCE"
      subtitle=""
      img="companyheader.png"
      date=""
    ></image-banner>
    <div class="p-5 md:p-16">
      <div>
        <h1 class="text-2xl font-bold color-pink mb-1">
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
      <div class="grid md:grid-cols-2 my-16 gap-16">
        <div
          class="col-span-1 flex flex-col justify-center py-4 order-1 md:order-2"
        >
          <h2 class="color-pink mb-2 font-bold">TEKLABSPACE VDP</h2>
          <h3 class="text-uppercase mb-3 font-bold text-base underline">
            Respond Quickly To Security Flaws
          </h3>
          <p>
            Every organization should welcome the assistance of individuals
            seeking to point out potential vulnerabilities. A Vulnerability
            Disclosure Policy (VDP) provides clear guidelines to hackers and
            researchers for reporting vulnerabilities. It's also a best practice
            and a regulatory expectation. Teklabspace guides hackers to submit
            findings through the proper channels, ensures submissions are
            received quickly and in a consistent format, and integrates incoming
            reports with your existing security workflows for faster
            remediation.
          </p>
          <div>
            <button
              class="bordered-btn font-bold"
              @click.prevent="$router.push('/how-it-works')"
            >
              How it Works
            </button>
          </div>
        </div>
        <div class="col-span-1 order-2 md:order-1">
          <img src="../assets/img/service_img.png" alt="" />
        </div>
      </div>

      <div class="grid md:grid-cols-2 my-16 gap-16">
        <div class="col-span-1">
          <img src="../assets/img/secimg.png" alt="" />
        </div>
        <div class="col-span-1 flex flex-col justify-center py-4">
          <h2 class="color-pink mb-2 font-bold">TEKLABSPACE BOUNTY</h2>
          <h3 class="text-uppercase mb-3 font-bold text-base underline">
            AWARD BOUNTIES FOR CONTINUOUS COVERAGE
          </h3>
          <p>
            Bug bounty programs give ethical hackers an incentive to test your
            organization’s security. They leverage the talent, creativity,
            experience, and continuous efforts of these hackers to search for
            potential vulnerabilities in pinpoint areas or across broad attack
            surfaces, and continuously or for limited-duration events.
            Teklabspace Bounty enlists the assistance of a global community of
            hackers, and adds the largest, most robust database of valid
            vulnerabilities, to help you find and mitigate security gaps.
            Programs can be private, public, time-bound, or even live virtual or
            in-person events. Teklabspace adds powerful solutions to track
            performance, integrate with your existing bug tracking and
            mitigation tools, and benchmark your efforts against similar
            programs.
          </p>
          <div>
            <button
              class="bordered-btn font-bold"
              @click.prevent="$router.push('/bounty')"
            >
              How it Works
            </button>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 my-16 gap-16">
        <div class="col-span-1 flex flex-col justify-center py-4">
          <h2 class="color-pink mb-2 font-bold">TEKLABSPACE VAPT</h2>
          <h3 class="text-uppercase mb-3 font-bold text-base underline">
            PREMIUM PENTESTS TO MAINTAIN COMPLIANCE
          </h3>
          <p>
            Every organization should welcome the assistance of individuals
            seeking to point out potential vulnerabilities. A Vulnerability
            Disclosure Policy (VDP) provides clear guidelines to hackers and
            researchers for reporting vulnerabilities. It's also a best practice
            and a regulatory expectation. Teklabspace guides hackers to submit
            findings through the proper channels, ensures submissions are
            received quickly and in a consistent format, and integrates incoming
            reports with your existing security workflows for faster
            remediation.
          </p>
          <div>
            <button
              class="bordered-btn font-bold"
              @click.prevent="$router.push('/vapt')"
            >
              How it Works
            </button>
          </div>
        </div>
        <div class="col-span-1">
          <img src="../assets/img/sec3.png" alt="" />
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
  name: "CompanyService",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
  },
};
</script>

<style>
.bordered-btn {
  border: 1px solid #da04f2;
  color: #da04f2;
  padding: 4px 27px;
}
</style>