<script setup lang="ts">
import ContactSection from "./ContactSection.vue";
import Typed from "typed.js";
import { ref, onMounted, onUnmounted } from "vue";

const typed = ref<Typed>();

onMounted(() => {
  typed.value = new Typed("#typed", {
    strings: [
      "I'm a Student",
      "I'm a Software Developer",
      "I'm a lifelong learner",
    ],
    typeSpeed: 65,
    backSpeed: 65,
    showCursor: false,
    smartBackspace: true,
    loop: true,
  });
});

onUnmounted(() => {
  typed.value?.destroy();
});
</script>

<template>
  <div>
    <h1 class="font-mn mb-2 text-5xl">Derrick Kim</h1>
    <span id="typed" class="font-mn h-8 block text-lg" />
    <div class="about-container p-8 my-6">
      <h1 class="font-mn text-4xl mb-4">About Me</h1>
      <p class="font-inter text-base mb-2 leading-loose">
        Hello! I'm Derrick and I am a student at Northeastern University
        majoring in Computer Science with a minor in Math. I'm an aspiring
        developer with a focus in full-stack development. My current favorite
        languages and frameworks to work with are React, Vue, and Typescript.
      </p>
      <p class="font-inter text-base mb-2 leading-loose">
        I love to constantly learn and pick up new skills! Whether its a new
        language, tool, or concept, I try my best to learn something new
        everyday. There is so much to learn in the software development space
        and that is one of many aspects I love about it. My current goals are to
        dig deeper into cloud technologies, pickup a new programming language,
        and build my own software as a service.
      </p>
    </div>
    <ContactSection />
  </div>
</template>

<style scoped>
.about-container {
  border-radius: 12px;
  box-shadow: 0px 4px 2px 4px rgb(0 0 0 / 0.4);
  background-color: var(--background-color-secondary);
}
</style>
