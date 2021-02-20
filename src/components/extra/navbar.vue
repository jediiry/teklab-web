<template>
  <div class="flex justify-evenly items-end px-3 md:px-5 pt-3">
    <div>
      <img src="../../assets/img/Logo.svg" class="w-32" alt="" />
    </div>
    <div class="mobilemenu">
      <i class="fas fa-bars" style="font-size: 30px"></i>
    </div>
    <div class="webmenu items-center">
      <div class="flex">
        <span class="webmenu-item">
          <router-link to="/">Home</router-link>
        </span>
        <span class="webmenu-item">
          <router-link to="/company-service"> Company</router-link>
        </span>
        <span class="webmenu-item">
          <router-link to="/researcher">Researcher</router-link>
        </span>
        <span class="webmenu-item">
          <router-link to="/hack-collage">Hack Collage</router-link>
        </span>
        <span class="webmenu-item">
          <router-link to="/contact-us">Contact Us</router-link>
        </span>
      </div>
      <b-btn class="ml-5 bg-pink">
        <router-link to="/sign-in">Login</router-link>
      </b-btn>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.webmenu {
  display: none;
}
.webmenu .webmenu-item {
  padding: 0 1rem;
}
.mobilemenu {
  display: flex;
}

@media only screen and (min-width: 768px) {
  /* Styles */
  .webmenu {
    display: flex;
  }
  .mobilemenu {
    display: none;
  }
}
router-link {
  text-decoration: none;
}
</style>