<template>
  <div class="min-h-screen flex justify-center items-center px-3 py-5">
    <div>
      <div class="flex justify-center">
        <img src="../assets/img/Correctedlogo.svg" alt="" />
      </div>
      <div class="text-center mt-5 p-3">
        <p class="text-4xl font-bold">
          Get started on your workspace in Teklabspace
        </p>
        <p>The cybersecurity community is growing, dont be left behind</p>
      </div>
      <div class="grid md:grid-cols-4 gap-10 mt-10">
        <div class="signcard shadow-md b-green md:col-start-2 col-span-1">
          <div>
            <p class="text-2xl font-bold">I am a Security Researcher</p>
            <p>Enjoy the challenge of hunting for vulnerabilities</p>
            <div class="mt-10">
              <div>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Earn
                  Money
                </p>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Earn
                  Level up your skills
                </p>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Earn
                  Join a global community
                </p>
              </div>
            </div>
          </div>
          <b-btn class="mt-3 bg-pink w-full" to="/researcher">
            Create Account
          </b-btn>
        </div>
        <div class="signcard shadow-md b-red col-span-1">
          <div>
            <p class="text-2xl font-bold">I represent a Company</p>
            <p>Be on the leading edge of security by creating your own</p>
            <div class="mt-10">
              <div>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Bug
                  Bounty
                </p>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Premium
                  Pen Test
                </p>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i>Attack
                  Surface Management
                </p>
                <p>
                  <i class="fas fa-check-circle text-green-500 mr-2"></i
                  >Vulnerability Disclosure Program
                </p>
              </div>
            </div>
          </div>
          <b-btn class="mt-3 bg-pink w-full" to="/company-signup">
            Create Account
          </b-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
};
</script>

<style>
.signcard {
  padding: 4rem;
  border-top: 12px solid;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}
.b-green {
  border-color: green;
}
.b-red {
  border-color: #da04f2;
}
</style>