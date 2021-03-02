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
            <a
              :href="i.link"
              target="_blank"
              class="block text-gray-900"
              rel="noopener noreferrer"
              :key="index"
              v-for="(i, index) in item.content"
            >
              {{ i.name }}</a
            >
            <!-- {{ item.content }} -->
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
          content: [
            {
              name: "https://securitycreators.video/ ",
              link: "https://securitycreators.video/ ",
            },
            {
              name: "https://www.youtube.com/c/TheCyberMentor/videos",
              link: "https://www.youtube.com/c/TheCyberMentor/videos",
            },
            {
              name: "https://www.youtube.com/user/TomNomNomDotCom/videos ",
              link: "https://www.youtube.com/user/TomNomNomDotCom/videos ",
            },
            {
              name: "https://www.youtube.com/c/STOKfredrik/videos ",
              link: "https://www.youtube.com/c/STOKfredrik/videos ",
            },
            {
              name: "https://www.youtube.com/c/StephenOgu/videos ",
              link: "https://www.youtube.com/c/StephenOgu/videos ",
            },
            {
              name: "https://www.youtube.com/c/B3nacSec/videos ",
              link: "https://www.youtube.com/c/B3nacSec/videos ",
            },
            {
              name: "https://www.youtube.com/c/CristiVladZ/videos ",
              link: "https://www.youtube.com/c/CristiVladZ/videos ",
            },
            {
              name: "https://www.youtube.com/c/Nahamsec/videos ",
              link: "https://www.youtube.com/c/Nahamsec/videos ",
            },
            {
              name: "https://www.youtube.com/channel/UCq9IyPMXiwD8yBFHkxmN8zg ",
              link: "https://www.youtube.com/channel/UCq9IyPMXiwD8yBFHkxmN8zg ",
            },
            {
              name: "https://www.youtube.com/channel/UCjQHiY2JeOkBamHSg_6UeFw ",
              link: "https://www.youtube.com/channel/UCjQHiY2JeOkBamHSg_6UeFw ",
            },
            {
              name: "https://www.youtube.com/user/RapidBug ",
              link: "https://www.youtube.com/user/RapidBug ",
            },
          ],
        },
        {
          id: 2,
          name: "OSCP Video Tutorial",
          list: false,
          content: [
            {
              name: `https://www.youtube.com/c/ippsec/videos `,
              link: `https://www.youtube.com/c/ippsec/videos `,
            },
          ],
        },
        {
          id: 3,
          name: "Bug Bounty Cheat Sheet useful resource",
          list: false,
          content: [
            {
              name:
                "https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html  ",
              link:
                "https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html  ",
            },
            {
              name: "https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/ ",
              link: "https://www.infosecmatter.com/bug-bounty-tips-8-oct-14/ ",
            },
            {
              name:
                "https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters ",
              link:
                "https://github.com/nahamsec/Resources-for-Beginner-Bug-Bounty-Hunters ",
            },
          ],
        },
        {
          id: 4,
          name: "Online Practical Hacking platform & CTF Challenges",
          list: false,
          content: [
            {
              name: "https://www.vulnhub.com/",
              link: "https://www.vulnhub.com/",
            },
            {
              name: "https://www.hackthebox.eu/login ",
              link: "https://www.hackthebox.eu/login ",
            },
            {
              name: "https://pentesterlab.com/ ",
              link: "https://pentesterlab.com/ ",
            },
            {
              name: "https://portswigger.net/web-security ",
              link: "https://portswigger.net/web-security ",
            },
            {
              name: "https://tryhackme.com/ ",
              link: "https://tryhackme.com/ ",
            },
            {
              name: "https://hackersploit.org/",
              link: "https://hackersploit.org/",
            },
            {
              name: "https://ctf.hacker101.com/ ",
              link: "https://ctf.hacker101.com/ ",
            },
          ],
        },
        {
          id: 5,
          name: "Another Useful list",
          list: false,
          content: [
            {
              name: "https://pentester.land/list-of-bug-bounty-writeups.html ",
              link: "https://pentester.land/list-of-bug-bounty-writeups.html ",
            },
            {
              name:
                "https://medium.com/@shivamrawat_756/best-websites-for-getting-started-with-ctf-64307f9f8d02",
              link:
                "https://medium.com/@shivamrawat_756/best-websites-for-getting-started-with-ctf-64307f9f8d02",
            },
          ],
        },
        {
          id: 5,
          name: "Beginners and Advance Corner ",
          list: false,
          content: [
            {
              name: "Medium to advanced",
              link: "",
            },
            {
              name: " Abusing SSRF on Selenium Grid ",
              link: "",
            },
            {
              name:
                "Abusing Application Layer Gateways (NAT Slipstreaming) & New PoC ",
              link: "",
            },
            {
              name: "Machine Learning Attack Series: Overview ",
              link: "",
            },
            {
              name: "Building C2 Implants in C++: A Primer",
              link: "",
            },
            {
              name: "Weaponizing Windows Sandbox To Bypass Defender ",
              link: "",
            },
            {
              name: "Beginners corner ",
              link: "",
            },
            {
              name:
                "Hacking into an AWS Account – Part 2: Jenkins & Hacking into an AWS Account – Part 3: Kubernetes ",
              link: "",
            },
            {
              name:
                "Introducing Monsoon ‒ A Lean And Versatile HTTP Enumerator ",
              link: "",
            },
            {
              name: "Simple Recon Methodology",
              link: "",
            },
            {
              name: "CSP bypasses, and how developers can build a strict CSP! ",
              link: "",
            },
            {
              name: " State of the art of network pivoting in 2019",
              link: "",
            },
          ],
        },
        {
          id: 5,
          name: "Hacking Books – Beginner to Advanced ",
          list: false,
          content: [
            {
              name:
                "The Hackers Playbook 2 by Peter Kim https://amzn.to/2ObGqkU",
              link: "https://amzn.to/2ObGqkU",
            },
            {
              name:
                "The Hackers Playbook 3 by Peter Kim https://amzn.to/2QJ0s7Y ",
              link: "https://amzn.to/2QJ0s7Y",
            },
            {
              name:
                "Real-World Bug Hunting by Peter Yaworski https://amzn.to/2wjKDwy",
              link: "https://amzn.to/2wjKDwy",
            },
            {
              name:
                "Rtfm: Red Team Field Manual by Ben Clark https://amzn.to/35wpI5z ",
              link: "https://amzn.to/35wpI5z ",
            },
            {
              name:
                "Hacking: The Art of Exploitation, 2nd Edition by Jon Erickson https://amzn.to/34dvTee",
              link: "https://amzn.to/34dvTee",
            },
            {
              name:
                "The Web Application Hacker’s Handbook: Finding and Exploiting Security Flaws by Dafydd Stuttard & Marcus Pinto   https://amzn.to/34cAE86  ",
              link: "https://amzn.to/34cAE86",
            },
            {
              name:
                "Penetration Testing: A Hands-On Introduction to Hacking by Georgia Weidman https://amzn.to/2ObXpDu ",
              link: "https://amzn.to/2ObXpDu ",
            },
            {
              name:
                "Kali Linux Revealed: Mastering the Penetration Testing Distribution by Raphael Hertzog & Jim O’ Gorman  https://amzn.to/2qFEKaf  ",
              link: "https://amzn.to/2qFEKaf",
            },
            {
              name:
                "Ghost in the Wires: My Adventures as the World’s Most Wanted Hacker by The Legend Himself, Kevin Mitnick  https://amzn.to/33f0DKx ",
              link: "https://amzn.to/33f0DKx",
            },
            {
              name:
                "Advanced Penetration Testing: Hacking the World’s Most Secure Networks by Will Allsopp https://amzn.to/2rgmKmR  ",
              link: "https://amzn.to/2rgmKmR ",
            },
            {
              name:
                "Honorable Mention: Hacking MIT Metasploit by Michael Messner https://amzn.to/2D6ojWX ",
              link: "https://amzn.to/2D6ojWX",
            },
          ],
        },
        {
          id: 5,
          name: "HACKING Tools and Methodology",
          list: false,
          content: [
            {
              name: "https://book.hacktricks.xyz/pentesting-methodology?s=08 ",
              link: "https://book.hacktricks.xyz/pentesting-methodology?s=08 ",
            },
            {
              name:
                "https://book.hacktricks.xyz/external-recon-methodology?s=08 ",
              link:
                "https://book.hacktricks.xyz/external-recon-methodology?s=08 ",
            },
            {
              name: "https://github.com/Z4nzu/hackingtool ",
              link: "https://github.com/Z4nzu/hackingtool ",
            },
            {
              name: "https://github.com/dafthack/CloudPentestCheatsheets",
              link: "https://github.com/dafthack/CloudPentestCheatsheets",
            },
            {
              name:
                "https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html ",
              link:
                "https://m0chan.github.io/2019/12/17/Bug-Bounty-Cheetsheet.html ",
            },
          ],
        },
        {
          id: 5,
          name: "HACKING TELECOM NETWORK WHRITE UP ",
          list: false,
          content: [
            {
              name:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-1-getting-the-rce-167c2bb320e6 ",
              link:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-1-getting-the-rce-167c2bb320e6 ",
            },
            {
              name:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-2-playing-with-tunnels-tcp-tunneling-b4cef2837938 ",
              link:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-2-playing-with-tunnels-tcp-tunneling-b4cef2837938 ",
            },
            {
              name:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-3-playing-with-tunnels-stealthy-ssh-dynamic-tunnels-5ac26557d0eb",
              link:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-3-playing-with-tunnels-stealthy-ssh-dynamic-tunnels-5ac26557d0eb",
            },
            {
              name:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-4-getting-access-to-cdrs-ss7-applications-vlrs-9a8cf95e2648 ",
              link:
                "https://medium.com/bugbountywriteup/how-i-hacked-into-a-telecom-network-part-4-getting-access-to-cdrs-ss7-applications-vlrs-9a8cf95e2648 ",
            },
            {
              name:
                "https://medium.com/@afolicdaralee/hacking-a-telecommunication-company-mtn-c46696451fed ",
              link:
                "https://medium.com/@afolicdaralee/hacking-a-telecommunication-company-mtn-c46696451fed ",
            },
          ],
        },
        {
          id: 5,
          name: "Courses and Certifications  ",
          list: false,
          content: [
            {
              name:
                "https://www.offensive-security.com/courses-and-certifications/ ",
              link:
                "https://www.offensive-security.com/courses-and-certifications/ ",
            },
            {
              name: "https://elearnsecurity.com/ ",
              link: "https://elearnsecurity.com/ ",
            },
            {
              name: "https://www.eccouncil.org/programs/ ",
              link: "https://www.eccouncil.org/programs/ ",
            },
            {
              name: "https://www.isc2.org/Certifications ",
              link: "https://www.isc2.org/Certifications ",
            },
          ],
        },
        {
          id: 5,
          name: "Mobile hacking writes up and presentation",
          list: false,
          content: [
            {
              name:
                "http://www.nuckingfoob.me/android-webview-csp-iframe-sandbox-bypass/index.html ",
              link:
                "http://www.nuckingfoob.me/android-webview-csp-iframe-sandbox-bypass/index.html ",
            },
            {
              name: "Insecurity Through Obscurity - w/Nerdwell ",
              link: "",
            },
            {
              name:
                "Pedro Umbelino | Joao Morais  - Android Bug Foraging - DEF CON 28SM AppSec Village",
              link: "",
            },
            {
              name:
                "Android Application Exploitation - DEF CON Safe Mode Red Team Village",
              link: "",
            },
          ],
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
.toggletrue {
  border: 4px solid #da04f2;
}
</style>