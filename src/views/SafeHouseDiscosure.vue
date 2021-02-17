<template>
    <div>
        <navbar/>
        <image-banner 
            title="SAFE HOUSE DISCLOSURE ASSISTANCE"
            subtitle="To ensure that we server you better, we created our code of conduct. Kindly read through and agree before sign up to our services"
            img="banner_img.jpg"
            date=""
        ></image-banner>
        <div class="flex justify-center mb-5">
            <div class="flex">
                <div class="bg-white shadow-md my-3 p-4 w-72 rounded transform -translate-y-24 mr-4">
                    <div class="flex justify-center">
                        <img class="w-16" src="../assets/img/safe_house_icon.svg" alt="">
                    </div>
                    <div>
                        <h2 class="my-2 font-bold text-3xl text-center">100</h2>
                        <div style="width: 60%;margin: 0 auto;">
                            <p class="text-sm text-center">Reports Received in the past 90 days</p>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow-md my-3 p-4 w-72 rounded transform -translate-y-24">
                    <div class="flex justify-center">
                        <img class="w-16" src="../assets/img/safe_house_icon2.svg" alt="">
                    </div>
                    <div>
                        <h2 class="my-2 font-bold text-3xl text-center">7</h2>
                        <div style="width: 60%;margin: 0 auto;">
                            <p class="text-sm text-center">Days last Report Resolved</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="page__content px-5">
            <div class="mb-3">
                <h1 class="color-pink mb-1 text-lg font-bold">
                    What is Safe House Disclosure Assistance?
                </h1>
                <p class="text-md">When a security vulnerability is found, it needs to get into the right hands quickly. To assist in this process, Teklabspace refer you to the Cabin to report potential vulnerabilities directly to the organizations that can resolve them. 
                As seen in the wild many organizations do not have well structure procedure of receiving security vulnerability reports from external Cybersecurity researchers. In this circumstance, Teklabspace will create an enabling interactive space to work with friendly hackers on a best way to validate the authenticity of a security vulnerability, reach out to the affected company, then share the security vulnerability with the company so it can be fixed. 
                </p>
            </div>

            <div class="mb-3">
                <h1 class="color-pink mb-1 text-lg font-bold">The Need for Teklabspace offering Safe House Disclosure Assistance?</h1>
                <p class="text-md">It's very risky for external security researchers to report vulnerabilities to company that lack formal disclosure policies or program, because they might face law suit for attempting to carry out pen test without approval. With this fear in the mind of external finders, vulnerabilities can end up unreported and when the bad actors exploit this security flaws it might lead to disaster or reputational damage. It's in our collective best interest to help friendly hackers be able to disclose security vulnerabilities to any organization. 
                We are passionate about reducing or if possible, closing the gap between trusted hackers and organizations, so we are encouraging strong intra-relationships with organizations and the hacker community which is the missing piece of the puzzle to creating a safer Internet for all. The Teklabspace Cabin aims to reduce risk for the individual and help close this critical gap.
                </p>
            </div>

            <div class="mb-5">
                <h1 class="color-pink mb-1 text-lg font-bold">How does it work, exactly?</h1>
                <div>
                    <p class="text-md"><span class="color-pink">1.</span> A friendly hacker finds a security vulnerability.</p> 
                    <p class="text-md"><span class="color-pink">2.</span> They search the Teklabspace CABIN for a published security policy procedure and attempt alternative means of contact.</p>                         
                    <p class="text-md"><span class="color-pink">3.</span> If the hacker has exhausted their options in their attempts to contact the organization, they can request Safe House Disclosure Assistance. </p>
                    <p class="text-md"><span class="color-pink">4.</span> At this point, the hacker provides information on their attempts to reach the affected organization along with the relevant vulnerability information. This vulnerability information is received by the Teklabspace Safe House Disclosure Assistance team, who verifies the Authenticity of the bug, as well as determines the potential impact. </p>
                    <p class="text-md"><span class="color-pink">5.</span> Teklabspace prioritizes which bugs to assist with based on impact on the digital assets and may be unable to assist with low impact bugs. It is important to note that Teklabspace cannot guarantee success,  </p>
                    <p class="text-md"><span class="color-pink">6.</span> Teklabspace will attempt to contact the affected organization and verify the identity of an appropriate point of contact to receive the vulnerability information. Once their identity is verified, an email is sent to the point of contact with a secret link to the contents of the bug report and the interactions between the hacker and Teklabspace. At this point, the vulnerability information has been successfully shared with the affected organization. </p>
                    <p class="text-md"><span class="color-pink">7.</span> If they’d like, the point of contact can create an account on Teklabspace to interact with the finder directly or provide updates on the resolution of the vulnerability. Alternatively, the point of contact can contact info@teklabspace.com for assistance on how to proceed. At the end of this process, Teklabspace will inquire about the organization's preferred vulnerability disclosure process to avoid the need for Safe House Disclosure Assistance in the future. </p>
                </div>
            </div>

            <div class="flex justify-end mb-4">
                <span class="font-italic text-sm">Last updated n 16th January, 2021</span>
            </div>
            <div class="flex justify-center mb-8">
                <button class="px-8 py-2 bg-pink text-white rounded">Submit a Report</button>
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
    name: 'SafeHouseDiscosure',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
}
</script>

<style>

</style>