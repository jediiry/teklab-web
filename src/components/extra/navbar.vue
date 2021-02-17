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
        <span class="webmenu-item">Home</span>
        <span class="webmenu-item">Company</span>
        <span class="webmenu-item">Researcher</span>
        <span class="webmenu-item">Hack Collage</span>
        <span class="webmenu-item">Contact Us</span>
      </div>
      <b-btn class="ml-5 bg-pink"> Login </b-btn>
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
</style>