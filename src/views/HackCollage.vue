<template>
  <div>
    <navbar></navbar>
    <image-banner
      title="HACK COLLAGE"
      subtitle="There is a common saying that goes this way - “we see far when we stand on the shoulders of giants”"
      img="hackcollege.png"
      date=""
    ></image-banner>
    <div class="md:px-40 md:py-10">
      <div class="flex items-center bg-lightred px-10 py-3 rounded-md">
        <span
          class="mr-4 rounded-full border__red w-8 h-8 flex items-center justify-center"
        >
          <i class="fa fa-exclamation color-red"></i>
        </span>
        <span class="color-red text-xs"
          >Teklabspace did not create contents on these useful links, kindly use
          them to make the internet more secure and safer for all to use and
          level up your game</span
        >
      </div>

      <div class="pt-3 md:pt-5 px-3 md:px-16">
        <div
          @click="toggleHistory($event)"
          class="mb-3"
          v-for="(item, index) in options"
          :key="index"
        >
          <button class="panel__header rounded-md flex justify-between">
            <span>{{ item.name }}</span>
            <i class="fas fa-plus text-xl"></i>
          </button>
          <div class="panel__body p-3">
            {{ item.content }}
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
  name: "HackCollage",
  components: {
    navbar,
    ImageBanner,
    MainFooter,
  },
  data() {
    return {
      options: [
        {
          id: 1,
          name: "Security Creator YouTube channel list",
          list: true,
          content: `
                        https://securitycreators.video/  

Others not on the list above 

https://www.youtube.com/c/TheCyberMentor/videos 

https://www.youtube.com/user/TomNomNomDotCom/videos 

https://www.youtube.com/c/STOKfredrik/videos 

https://www.youtube.com/c/StephenOgu/videos  

https://www.youtube.com/c/B3nacSec/videos 

https://www.youtube.com/c/CristiVladZ/videos 

https://www.youtube.com/c/Nahamsec/videos 

https://www.youtube.com/channel/UCq9IyPMXiwD8yBFHkxmN8zg 

https://www.youtube.com/channel/UCjQHiY2JeOkBamHSg_6UeFw 

https://www.youtube.com/user/RapidBug `,
        },
        {
          id: 2,
          name: "OSCP Video Tutorial",
          list: false,
          content: `https://www.youtube.com/c/ippsec/videos `,
        },
        {
          id: 3,
          name: "Bug Bounty Cheat Sheet useful resource",
          list: false,
          content: `https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html  

https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/ 

https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters  `,
        },
        {
          id: 4,
          name: "Online Practical Hacking platform & CTF Challenges",
          list: false,
          content: `https://www.vulnhub.com/ 

https://www.hackthebox.eu/login 

https://pentesterlab.com/ 

https://portswigger.net/web-security 

https://tryhackme.com/ 

https://hackersploit.org/ 

https://ctf.hacker101.com/ `,
        },
        {
          id: 5,
          name: "Another Useful list",
          list: false,
          content: `https://pentester.land/list-of-bug-bounty-writeups.html 

 
https://medium.com/@shivamrawat_756/best-websites-for-getting-started-with-ctf-64307f9f8d02 `,
        },
        {
          id: 5,
          name: "Beginners and Advance Corner ",
          list: false,
          content: `Medium to advanced 

    Abusing SSRF on Selenium Grid 

    Abusing Application Layer Gateways (NAT Slipstreaming) & New PoC 

    Machine Learning Attack Series: Overview 

    Building C2 Implants in C++: A Primer 

    Weaponizing Windows Sandbox To Bypass Defender 

Beginners corner 

    Hacking into an AWS Account – Part 2: Jenkins & Hacking into an AWS Account – Part 3: Kubernetes 

    Introducing Monsoon ‒ A Lean And Versatile HTTP Enumerator 

    Simple Recon Methodology 

    CSP bypasses, and how developers can build a strict CSP! 

    State of the art of network pivoting in 2019 `,
        },
        {
          id: 5,
          name: "Hacking Books – Beginner to Advanced ",
          list: false,
          content: `  The Hackers Playbook 2 by Peter Kim https://amzn.to/2ObGqkU  

    The Hackers Playbook 3 by Peter Kim https://amzn.to/2QJ0s7Y  

    Real-World Bug Hunting by Peter Yaworski https://amzn.to/2wjKDwy  

    Rtfm: Red Team Field Manual by Ben Clark https://amzn.to/35wpI5z  

    Hacking: The Art of Exploitation, 2nd Edition by Jon Erickson https://amzn.to/34dvTee  

    The Web Application Hacker’s Handbook: Finding and Exploiting Security Flaws by Dafydd Stuttard & Marcus Pinto   https://amzn.to/34cAE86  

    Penetration Testing: A Hands-On Introduction to Hacking by Georgia Weidman https://amzn.to/2ObXpDu  

    Kali Linux Revealed: Mastering the Penetration Testing Distribution by Raphael Hertzog & Jim O’ Gorman  https://amzn.to/2qFEKaf  

    Ghost in the Wires: My Adventures as the World’s Most Wanted Hacker by The Legend Himself, Kevin Mitnick  https://amzn.to/33f0DKx  

    Advanced Penetration Testing: Hacking the World’s Most Secure Networks by Will Allsopp https://amzn.to/2rgmKmR  

    Honorable Mention: Hacking MIT Metasploit by Michael Messner https://amzn.to/2D6ojWX   `,
        },
        {
          id: 5,
          name: "HACKING Tools and Methodology",
          list: false,
          content: `
https://book.hacktricks.xyz/pentesting-methodology?s=08 

https://book.hacktricks.xyz/external-recon-methodology?s=08 

https://github.com/Z4nzu/hackingtool 

https://github.com/dafthack/CloudPentestCheatsheets 

https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html  `,
        },
        {
          id: 5,
          name: "HACKING TELECOM NETWORK WHRITE UP ",
          list: false,
          content: `https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-1-getting-the-rce-167c2bb320e6 

https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-2-playing-with-tunnels-tcp-tunneling-b4cef2837938 

https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-3-playing-with-tunnels-stealthy-ssh-dynamic-tunnels-5ac26557d0eb 

https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-4-getting-access-to-cdrs-ss7-applications-vlrs-9a8cf95e2648 

https://medium.com/@afolicdaralee/hacking-a-telecommunication-company-mtn-c46696451fed `,
        },
        {
          id: 5,
          name: "Courses and Certifications  ",
          list: false,
          content: `https://www.offensive-security.com/courses-and-certifications/ 

https://elearnsecurity.com/ 

https://www.eccouncil.org/programs/ 

https://www.isc2.org/Certifications `,
        },
        {
          id: 5,
          name: "Mobile hacking writes up and presentation",
          list: false,
          content: `http://www.nuckingfoob.me/android-webview-csp-iframe-sandbox-bypass/index.html 

Insecurity Through Obscurity - w/Nerdwell 

Pedro Umbelino | Joao Morais  - Android Bug Foraging - DEF CON 28SM AppSec Village 

Android Application Exploitation - DEF CON Safe Mode Red Team Village 
 `,
        },
      ],
    };
  },
  methods: {
    toggleHistory(e) {
      e.target.classList.toggle("panel__active");
      if (e.target.classList.contains("panel__header")) {
        let panel = e.target.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
          e.target.children[1].classList.add("fa-plus");
          e.target.children[1].classList.remove("fa-minus");
          e.target.classList.remove("toggletrue");
        } else {
          panel.style.display = "block";
          e.target.children[1].classList.remove("fa-plus");
          e.target.children[1].classList.add("fa-minus");
          e.target.classList.add("toggletrue");
        }
      }
    },
  },
};
</script>

<style>
.bg-lightred {
  background: #fbdadd;
}

.color-red {
  color: #e93747;
}

.border__red {
  border: 1px solid #e93747;
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
.toggletrue{
    border: 4px solid #da04f2;
}
</style>