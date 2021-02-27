<template>
  <div
    class="flex justify-between md:justify-evenly items-center md:items-end p-3 pt-3 sticky top-0 z-50 bg-white shadow-md"
  >
    <div>
      <img src="../../assets/img/Logo.svg" class="w-32" alt="" />
    </div>
    <div class="mobilemenu">
      <i class="fas fa-bars" v-b-toggle.sidebar-1 style="font-size: 30px"></i>
      <b-sidebar
        width="100%"
        id="sidebar-1"
        bg-variant="dark"
        text-variant="light"
        title="TeklabSpace"
        header-class="mb-20 mt-5"
        shadow
      >
        <div class="px-3 py-2">
          <div class="mobile">
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
        </div>
        <b-btn class="ml-3 bg-pink" to="/sign-in"> Login </b-btn>
      </b-sidebar>
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
      <div>
        <b-btn class="ml-5 pink-btn" to="/sign-in"> Login </b-btn>
        <b-btn class="ml-2 pink-btn-outline" to="/signup"> Get Started </b-btn>
      </div>
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
.mobile {
  display: flex;
  flex-wrap: wrap;
}
.mobile .webmenu-item {
  width: 100%;
  padding: 1rem 1rem;
  background: #fdf2f8;
  margin: 0.2rem;
  text-decoration: none;
  color: black;
}
</style>