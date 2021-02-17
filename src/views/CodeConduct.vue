<template>
    <div>
        <navbar/>
        <image-banner 
            img="banner_img.jpg"
            date="Update on 16th January, 2021"
            title="CODE OF CONDUCT"
            subtitle="To ensure that we server you better, we created our code of conduct. Kindly read through and agree before sign up to our services"
        ></image-banner>

        <div class="main__wrapper">
            <div class="wrapper">
                <div class="side__menu">
                    <div v-for="(item, index) in menuList" :key="index" class="flex items-center mb-6">
                        <span :class="setBulletBg(item.active)" class="menu__bullet">
                            <span>{{ index+1 }}</span>
                        </span>
                        <span class="menu__item color-pink">{{ item.name }}</span>
                    </div>
                </div>
                <div class="content">
                    <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">1. About</h1>
                        <p>
                            Behave Professionally - Be Kind, Respectful and Professional in your communications and behavior. Be Helpful and help us all improve ourselves. We do this through honest and insightful discussion with our peers and partners. 
                            No Unsafe Testing - Be prompt in reporting vulnerabilities you have identified. 
                            Be Ethical -  Don’t intentionally mislead customers or Teklabspace. It is your job to try and break both technology and business logic flaws, but when you find a weakness it is also your job to report it to be fixed – not exploit it. 
                        </p>
                    </div>
                    <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">2. What we require</h1>
                        <p>
                            Behave Professionally - Be Kind, Respectful and Professional in your communications and behavior. Be Helpful and help us all improve ourselves. We do this through honest and insightful discussion with our peers and partners. 
                            No Unsafe Testing - Be prompt in reporting vulnerabilities you have identified. 
                            Be Ethical -  Don’t intentionally mislead customers or Teklabspace. It is your job to try and break both technology and business logic flaws, but when you find a weakness it is also your job to report it to be fixed – not exploit it.
                        </p>
                    </div>
                    <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">3. Disclosure Guidelines</h1>
                        <p>
                            Don’t share confidential vulnerability or customer information. Private program customers are private, and no submitted vulnerability (including duplicates, Out of Scope, Not Applicable, etc.) may be disclosed without explicit customer permission. Please read each Bounty Brief for specific program disclosure policies which supersede (overrule) this policy. We expect everyone to use the proper channels to disclose or communicate about vulnerability submissions. Email Teklabspace Support if you have any questions about disclosure. 
                        </p>
                        <p>
                            If a vulnerability provides unintended access to data: Limit the amount of data you access to the minimum required for effectively demonstrating the vulnerability; and cease testing and submit a report immediately if you encounter any user data during testing, such as Personally Identifiable Information (PII), Personal Healthcare Information (PHI), credit card data, or proprietary information. In the event you access PII or other sensitive data, please note that you are required to follow all laws and regulations applicable to the access and processing of such personally identifiable information and/or data, such as the European Union’s General Data Protection Regulation (Regulation (EU) 2016/679), including the European Commission’s Standard Contractual Clauses regarding the transfer of personal data to processors. 
                            Read and abide by Teklabspace’s Standard Disclosure Terms and each program’s Bounty Brief. We expect you to follow any guidelines and rules that a particular crowdsourced security program or company may have regarding scope of testing and disclosure. For more information on disclosure policies at Teklabspace, visit the Researcher Documentation Centre, our Researcher Resources, or FAQ. 
                            Report bad behavior. As a member of this community you have the ability to impact the quality and reputation of the Crowd. If you see something that violates our guidelines, please notify our operations team immediately at Teklabspace Support. 
                        </p>
                        <p>
                            Read and abide by Teklabspace’s Standard Disclosure Terms and each program’s Bounty Brief. We expect you to follow any guidelines and rules that a particular crowdsourced security program or company may have regarding scope of testing and disclosure. For more information on disclosure policies at Teklabspace, visit the Researcher Documentation Centre, our Researcher Resources, or FAQ. 
                            Report bad behavior. As a member of this community you have the ability to impact the quality and reputation of the Crowd. If you see something that violates our guidelines, please notify our operations team immediately at Teklabspace Support. 
                        </p>
                    </div>
                    <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">4. Prohibited Behavior</h1>
                        <p>
                            Unauthorized Disclosure: Disclosing vulnerability information without explicit approval (see individual bounty briefs for expectations) is prohibited. 
                            Program Disclosure: Disclosing any information about private bounties including customer names or dates of programs is strictly forbidden. 
                            Unprofessional Conduct, including but not limited to any of the following, is forbidden: 
                            - Aggressive language aimed at any Teklabspace team member or customer at any time. 
                            - Attempt to abuse or game any reward system in place with Teklabspace or programs run on Teklabspace. 
                            - Disruptive testing which affects other Researcher’s access to the testing environment, or adversely impacts a customer’s systems and/or accounts. 
                            - Engaging in extortion.
                            - Interacting or accessing any accounts and systems without the explicit permission from the account holder.
                            - Out of Scope testing: Intentional testing outside the specified program brief, and/or not following the program bounty brief instructions is forbidden. If you want alert to Teklabspace to an Out of Scope vulnerability, please reach out to Teklabspace Support. 
                            - Creating placeholder submissions that are used to “squat” on findings (e.g. reports that are rapidly submitted a vague title and no detailed replication steps in the initial report, etc); all valid findings must be submitted with a full description, proof of concept, and complete replication steps in the original report. In cases where the initial report is lacking a description, proof of concept, and replication steps, those reports will be closed, and must be re-submitted with the required information to be considered for the program. Please always submit complete, fully populated, and articulate reports. 
                            - This rule is intended to prevent scenarios where researchers rapidly submit reports with a vague titles and/or vague details to “squat” on any potential reward. 
                            - Harassment, including but not limited to the following, is unacceptable and prohibited: 
                            - Offensive user-generated or submitted content (for example, related to gender, sexual orientation, race, religion, disability, etc. (including offensive user names)) 
                            - Use of nudity and/or sexual images (including presentation slides). 
                            - Abusive or threatening language. 
                            - Deliberate intimidation, stalking or following including seeking out uninvited personal contact with Teklabspace employees or customers via personal phone or email, harassing materials, photography or recording.
                            - Inappropriate physical contact (at any Teklabspace or industry events), and/or unwelcome sexual attention. 
                            - Making unjustified accusations against other user(s). 
                            - Personal attacks, including hurtful, insulting or hostile comments.
                        </p>
                    </div>

                   <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">5. Consquences</h1>
                        <p>
                            Violations of this Code of Conduct, the Standard Disclosure Terms, or customer program briefs can result in a warning and/or removal of access to elements of the Teklabspace platform on a temporary or permanent basis depending on the severity of the violation. In some instances, an offender will be removed from Teklabspace bounties or from the Teklabspace community entirely. All policy enforcement and eligibility decisions are made entirely at the discretion of Teklabspace. Decisions are final and considered private matters between Teklabspace’s team members and the individuals(s) involved. If you have any questions about a recent action taken on your account, please contact Teklabspace Support for details. 
                        </p>
                    </div>
                    <div class="mb-4">
                        <h1 class="color-pink mb-1 text-lg font-bold">6. Terms & Condition</h1>
                        <p>
                            We have a Terms and Conditions document describing your (and our) behavior and rights related to content, privacy, and laws. To participate in Teklabspace programs and offerings you must agree to abide by our Terms and Conditions and the Standard Disclosure Terms. 
                        </p>
                    </div>

                    <div class="flex justify-between items-center">
                        <input type="checkbox">
                        <button class="px-7 py-2 bg-gray-400 text-white">
                            I Accept
                        </button>
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
    name: 'codeConduct',
    components:{
        navbar,
        ImageBanner,
        MainFooter
    },
    data(){
        return {
            menuList: [{name:'About', active: true}, {name:'Services',active: false}, {name:'Disclosure Guidelines', active: false}, {name:'Prohibited Behaviour', active: false}, {name:'Consequences', active: false}, {name:'General Restriction',active: false}, {name:'Terms & Condition',active: false}, {name:'Standard Disclosure Policy',active: false}]
        }
    },
    methods: {
        setBulletBg(value){
            return value ? 'bg-pink  text-white' : 'bg-light-pink color-pink'
        }
    }
}
</script>

<style>



.wrapper{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 8%;
    padding: 50px 55px;
}
/* 
.side__menu{
    border: 1px dashed;
}

.content{
    border: 1px dashed;
} */

.menu__bullet{
    width: 30px;
    display: inline-block;
    height: 30px;
    border-radius: 50%;
    position: relative;
    margin-right: 10px;
}

.menu__bullet span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


</style>