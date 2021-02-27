<template>
  <div
    class="grid grid-cols-1 md:grid-cols-10 bg-gray-900 gap-10 text-white p-5 md:p-20"
  >
    <div class="md:col-span-3 md:col-start-2">
      <p class="text-5xl font-bold">Stay Connected</p>
      <p>Join over 500+ people who receive our weekly newsletters</p>
      <div class="flex w-80">
        <input
          type="text"
          placeholder="Your email address"
          class="form-control rounded-0"
        /><b-btn class="rounded-0 bg-pink">Subscribe</b-btn>
      </div>
      <div class="mt-6">
        <a class="text-white" href="https://web.facebook.com/teklabspace"
          ><i class="fab fa-facebook mx-2 fa-2x"></i
        ></a>
        <a class="text-white" href="https://twitter.com/teklabspace">
          <i class="fab fa-instagram mx-2 fa-2x"></i
        ></a>
        <a class="text-white" href="https://www.instagram.com/teklabspace"
          ><i class="fab fa-twitter mx-2 fa-2x"></i
        ></a>
        <a
          class="text-white"
          href="https://www.linkedin.com/company/teklabspace"
        >
          <i class="fab fa-linkedin mx-2 fa-2x"></i
        ></a>
        <a
          class="text-white"
          href="https://www.youtube.com/channel/UCnX3UuDJUi5fZC9RyjRjcVg"
        >
          <i class="fab fa-youtube mx-2 fa-2x"></i
        ></a>
      </div>
    </div>
    <div class="md:col-span-2 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">Contact Us</p>
      <p>Office Address: Ikoyi, Lagos, Nigeria</p>
      <p>Phone: +234-(0)8089397019 (SMS)</p>
      <p>Email: info@teklabspace.com</p>
    </div>
    <div class="md:col-span-2 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">Useful Links</p>

      <p>
        <router-link class="route" to="/researcher"
          >How it works (Researchers)</router-link
        >
      </p>
      <p>
        <router-link class="route" to="/company-service"
          >How it works (Company)</router-link
        >
      </p>
      <p>
        <a href="https://teklabspacehacker.netlify.app/leadership" class="route"
          >Hall of Fame</a
        >
      </p>

      <p>
        <router-link class="route" to="/hack-collage"
          >Learn to Hack</router-link
        >
      </p>
      <p>
        <router-link class="route" to="/hack-collage">Hack Collage</router-link>
      </p>
      <p>
        <router-link class="route" to="/safe-house-discosure"
          >Safe House</router-link
        >
      </p>
    </div>
    <div class="md:col-span-2 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">TEKLABSPACE</p>
      <p><router-link class="route" to="/about">About Us</router-link></p>
      <p><router-link class="route" to="/careers">Career</router-link></p>
      <p>
        <router-link class="route" to="/code-of-conduct"
          >Code of conduct</router-link
        >
      </p>
      <p>
        <router-link class="route" to="/sla">SLA</router-link>
      </p>

      <p>
        <router-link class="route" to="/terms-condition"
          >Terms and Conditions</router-link
        >
      </p>
      <p>
        <router-link class="route" to="/service-level-agreement"
          >Legal Information</router-link
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
};
</script>

<style>
.route {
  text-decoration: none;
  color: #486b6c;
}
</style>