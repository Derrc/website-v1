<script setup lang="ts">
import VueLogo from "./icons/VueLogo.vue";
import TypescriptLogo from "./icons/TypescriptLogo.vue";
</script>

<template>
  <div class="border-b-[1px] mb-10">
    <div class="max-w-content mx-auto flex p-4 gap-x-4 items-center">
      <TypescriptLogo />
      <VueLogo />
      <router-link to="/" class="font-mn ml-auto"> About </router-link>
      <router-link to="/work" class="font-mn"> Work </router-link>
    </div>
  </div>
</template>
