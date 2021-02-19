<template>
    <div>
      <navbar/>
        <image-banner 
            title="HACK COLLAGE"
            subtitle="There is a common saying that goes this way - “we see far when we stand on the shoulders of giants”"
            img="banner_img.jpg"
            date=""
        ></image-banner>
        <div class="px-40 py-10">
            <div class="flex items-center bg-lightred px-10 py-3 rounded-md">
                <span class="mr-4 rounded-full border__red w-8 h-8 flex items-center justify-center">
                    <i class="fa fa-exclamation color-red"></i>
                </span>
                <span class="color-red text-xs">Teklabspace did not create contents on these useful links, kindly use them to make the internet more secure and safer for all to use and level up your game</span>
            </div>

            <div class="pt-5 px-16">

                <div 
                @click="toggleHistory($event)" 
                class="mb-3"
                v-for="(item, index) in options"
                :key="index"
                >
                    <button class="panel__header rounded-md flex justify-between">
                        <span>Security Creator YouTube channel list</span>
                        <i class="fas fa-plus text-xl"></i>
                    </button>
                    <div class="panel__body p-3">
                        <ul class="list-none">
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                            <li class="mb-2 underline">https://securitycreators.video/</li>
                        </ul>
                    </div>
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
    name: 'HackCollage',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
    data(){
        return {
            options: [
                {id: 1, name: 'Security Creator YouTube channel list', list: true},
                {id: 2, name: 'OSCP Video Tutorial', list: false},
                {id: 3, name: 'Bug Bounty Cheat Sheet useful resource', list: false},
                {id: 4, name: 'Online Practical Hacking platform & CTF Challenges', list: false},
                {id: 5, name: 'Another Useful list', list: false}
            ]
        }
    },
    methods: {
        toggleHistory(e) {
            e.target.classList.toggle("panel__active");
            if (e.target.classList.contains("panel__header")) {
                let panel = e.target.nextElementSibling;
                console.log(panel);
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    e.target.children[1].classList.add('fa-plus');
                    e.target.children[1].classList.remove('fa-minus');
                } else {
                    panel.style.display = "block";
                    e.target.children[1].classList.remove('fa-plus');
                    e.target.children[1].classList.add('fa-minus');
                }
            }
        },
    }
}
</script>

<style>
.bg-lightred {
    background: #FBDADD;
}


.color-red{
    color: #E93747;
}

.border__red{
    border: 1px solid #E93747;
}



.panel__header {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 15px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.panel__body {
  padding: 0 18px;
  display: none;
  background-color: white;
  overflow: hidden;
}
</style>