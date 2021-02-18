<template>
  <div>
      <navbar/>
        <image-banner 
            title="HARNESS THE POWER OF CROWD SOURCE"
            subtitle=""
            img="banner_img.jpg"
            date=""
        ></image-banner>

        <div class="p-16">
            <div>
                <h1 class="text-xl font-bold color-pink mb-1">ABOUT VDP</h1>
                <p>
                    A VDP is the digital equivalent of “if you see something, say something.” Teklabspace makes it easy to get started working directly with hackers to minimize risk. We’ll help you draft your VDP using NISTrecommended practices tailored for your unique needs. We’ll then publish it and start directing friendly hackers to submit findings through our platform. Every submission will then arrive to those who need to be aware in a consistent format, and, if validated, the information will integrate seamlessly with your existing systems and workflows.      
                </p> 
            </div>

            <div class="my-12">
                <h1 class="text-4xl font-bold mb-12 text-center">How it Works</h1>
                <img src="../assets/img/how_img.jpg" alt="">
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
    name: 'How',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
}
</script>

<style>

</style>