<template>
  <div>
    <div class="flex p-10 md:p-20 flex-wrap">
      <div class="flex w-full md:hidden mb-10">
        <select
          class="custom-select"
          v-model="dataindex"
          @change="settab(dataindex)"
        >
          <option :key="index" :value="index" v-for="(item, index) in menuList">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div class="hidden md:block w-1/5">
        <div
          v-for="(item, index) in menuList"
          :key="index"
          class="flex items-center mb-6 cursor-pointer"
          @click="settab(index)"
        >
          <span :class="setBulletBg(item.active)" class="menu__bullet">
            <span>{{ index + 1 }}</span>
          </span>
          <span class="menu__item color-pink">{{ item.name }}</span>
        </div>
      </div>
      <div class="md:w-4/5">
        <div class="mb-4">
          <p v-html="info.maintitle"></p>
          <h1 class="color-pink mb-1 text-lg font-bold">{{ info.title }}</h1>
          <p v-html="info.content"></p>
        </div>

        <!-- <div class="flex justify-between items-center">
            <input type="checkbox" />
            <button class="px-7 py-2 bg-gray-400 text-white">I Accept</button>
          </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sectiondisplay",
  props: ["menuList", "content"],
  data() {
    return {
      info: {},
      dataindex: 0,
    };
  },
  methods: {
    setBulletBg(value) {
      return value ? "bg-pink  text-white" : "bg-light-pink color-pink";
    },
    settab(param) {
      this.info = this.content[param];
      for (const iterator of this.menuList) {
        iterator.active = false;
      }

      this.menuList[param].active = true;
    },
  },
  watch: {
    content(value) {
      this.info = value[0];
    },
  },
};
</script>

<style>
</style>