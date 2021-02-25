<template>
  <div
    class="grid grid-cols-1 md:grid-cols-5 bg-gray-900 gap-10 text-white p-5 md:p-20"
  >
    <div class="md:col-span-2">
      <p class="text-5xl font-bold">Stay Connected</p>
      <p>Join over 500+ people who receive our weekly newsletters</p>
      <div class="flex">
        <input
          type="text"
          placeholder="Your email address"
          class="form-control rounded-0"
        /><b-btn class="rounded-0 bg-pink">Subscribe</b-btn>
      </div>
      <div class="mt-6">
        <i class="fab fa-facebook mx-2 fa-2x"></i>
        <i class="fab fa-instagram mx-2 fa-2x"></i>
        <i class="fab fa-twitter mx-2 fa-2x"></i>
        <i class="fab fa-youtube mx-2 fa-2x"></i>
      </div>
    </div>
    <div class="md:col-span-1 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">Contact Us</p>
      <p>Office Address: Ikoyi, Lagos, Nigeria</p>
      <p>Phone: +234-703-100-6005 (SMS)</p>
      <p>Email: +info@teklabspace.com</p>
    </div>
    <div class="md:col-span-1 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">Useful Links</p>
      <p>How it works (Researchers)</p>
      <p>How it works (Company)</p>
      <p>Hall of Fame</p>
      <p>Learn to Hack</p>
      <p>
        <router-link class="route" to="/hack-collage">Hack Collage</router-link>
      </p>
      <p>
        <router-link class="route" to="/safe-house-discosure"
          >Safe House</router-link
        >
      </p>
    </div>
    <div class="md:col-span-1 text-sm text-gray-500">
      <p class="font-bold text-2xl text-white">TEKLABSPACE</p>
      <p><router-link class="route" to="/about">About Us</router-link></p>
      <p><router-link class="route" to="/careers">Career</router-link></p>
      <p>Newsletter</p>
      <p>Privacy policy</p>
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
  color: rgb(112, 112, 112);
}
</style>