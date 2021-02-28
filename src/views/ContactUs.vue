<template>
    <div>
        <navbar/>
        <image-banner 
            title="CONTACT US"
            subtitle="Have any questions to ask? Get in touch with us. We love to hear from you"
            img="contact.png"
            date=""
        ></image-banner>
        <div class="flex justify-center">
            <div class="flex flex-wrap justify-center">
                <div class="bg-white shadow-md my-3 p-4 pt-5 w-72 rounded transform -translate-y-24 mr-4">
                    <div class="flex justify-center">
                        <img class="w-16" src="../assets/img/customer_support_icon.svg" alt="">
                    </div>
                    <div>
                        <h2 class="my-2 font-bold text-xl text-center">Customer Support</h2>                        
                        <p class="text-sm text-center color-pink">visit our help center</p>
                    </div>
                </div>
                <div class="bg-white shadow-md my-3 p-4 pt-5 w-72 rounded transform -translate-y-24 mr-4">
                    <div class="flex justify-center">
                        <img class="w-16" src="../assets/img/partner_icon.svg" alt="">
                    </div>
                    <div>
                        <h2 class="my-2 font-bold text-xl text-center">Partner with Us</h2>
                        <p class="text-sm text-center color-pink">partner@teklabspace.com</p>
                    </div>
                </div>
                <div class="bg-white shadow-md my-3 p-4 pt-5 w-72 rounded transform -translate-y-24">
                    <div class="flex justify-center">
                        <img class="w-16" src="../assets/img/call_icon.svg" alt="">
                    </div>
                    <div>
                        <h2 class="my-2 font-bold text-xl text-center">Talk to Us</h2>
                        <p class="text-sm text-center color-pink">+234-(0)8089397019</p>
                    </div>
                </div>                
            </div>
        </div>

        <div class="mb-10 md:mb-24">
            <div class="grid grid-cols-4 px-2">
                <div class="col-span-4 md:col-span-2 md:col-start-2">
<div >
                <div class="mb-3 border w-full px-3 py-2">
                    <i class="fas fa-user mr-3"></i>
                    <input type="text" placeholder="Full Name">
                </div>
                <div class="mb-3 border w-full px-3 py-2">
                    <select class="w-full">
                        <option value="">I am a Researcher</option>
                        <option value="">I represent a Company</option>
                        <option value="">I am an Investor</option>
                    </select>
                </div>
                <div class="mb-3 border w-full px-3 py-2">
                    <i class="fas fa-envelope mr-3"></i>
                    <input type="text" placeholder="Email Address">
                </div>
                <div class="mb-3 border w-full px-3 py-2">
                    <i class="fas fa-envelope mr-3"></i>
                    <input type="text" placeholder="Subject">
                </div>
                <div class="mb-5 border w-full">
                    <textarea class="w-full resize-none p-7" placeholder="Type your message here" rows="10"></textarea>
                </div>

                <div class="border w-full">
                    <button class="px-14 py-3 bg-pink text-white rounded w-full">Submit Message   <i class="fas fa-paper-plane mx-2 "></i
        ></button>
                </div>
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
    name: 'ContactUs',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
}
</script>

<style>
.contact__formbox{
    width: 100%;
    margin: 0 auto;
}



::-webkit-input-placeholder { /* Edge */
  color: #888;
}

:-ms-input-placeholder { /* Internet Explorer */
  color: #888;
}

::placeholder {
  color: #888;
}

option:not(:first-of-type) {
  color: #888;
}
</style>