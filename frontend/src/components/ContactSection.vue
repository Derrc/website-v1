<script setup lang="ts">
import { contacts } from "../data/contacts.ts";
import LinkIcon from "./icons/LinkIcon.vue";
import Resume from "../assets/Resume_Derrick_Kim.pdf";
</script>

<template>
  <div>
    <h3 class="font-mn text-2xl mt-8">Contact Me</h3>
    <div class="flex items-center gap-x-4">
      <a
        class="logo p-2 transition hover:scale-110"
        :href="contact.link"
        target="_blank"
        v-for="contact in contacts"
      >
        <component :is="contact.logo" />
      </a>
      <a
        class="logo p-2 flex items-center transition hover:scale-110"
        :href="Resume"
        target="_blank"
      >
        <p class="font-mn">Resume</p>
        <LinkIcon class="w-4 h-4 ml-2" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.logo:hover {
  border-radius: 4px;
  box-shadow: 0px 2px 2px 2px rgb(0 0 0 / 0.4);
  background-color: #333333;
  cursor: pointer;
}
</style>
