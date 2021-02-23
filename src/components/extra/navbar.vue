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
        <router-link class="webmenu-item" to="/">Home</router-link>

        <router-link class="webmenu-item" to="/company-service">
          Company</router-link
        >

        <router-link class="webmenu-item" to="/researcher"
          >Researcher</router-link
        >

        <router-link class="webmenu-item" to="/hack-collage"
          >Hack Collage</router-link
        >

        <router-link class="webmenu-item" to="/contact-us"
          >Contact Us</router-link
        >
      </div>
      <b-btn class="ml-5 bg-pink" to="/sign-in"> Login </b-btn>
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
  padding: 1rem;
  color: black;
  text-decoration: none;
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
.webmenu .router-link-exact-active {
  border-top: 3px solid #da04f2;
}
</style>