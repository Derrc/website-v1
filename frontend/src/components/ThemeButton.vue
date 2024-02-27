<script setup lang="ts">
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";
import { themeStore } from "../stores/theme";
</script>

<template>
  <button @click="themeStore.toggle">
    <SunIcon
      class="h-4 w-4 fill-black hover:!fill-secondary"
      v-if="themeStore.theme == 'light'"
    />
    <MoonIcon
      class="h-4 w-4 fill-white hover:!fill-secondary"
      v-if="themeStore.theme == 'dark'"
    />
  </button>
</template>

<style scoped></style>
