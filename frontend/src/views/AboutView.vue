<script setup lang="ts">
import Typed from "typed.js";
import { onMounted, onUnmounted, ref } from "vue";

const typed = ref<Typed>();

onMounted(() => {
  typed.value = new Typed("#typed", {
    strings: ["Hi, I'm Derrick.", "I'm an aspiring developer.", "About Me"],
    typeSpeed: 40,
    backSpeed: 20,
    showCursor: false,
  });
});

onUnmounted(() => {
  typed.value?.destroy();
});
</script>

<template>
  <div class="p-4 max-w-content mx-auto">
    <span id="typed" class="text-4xl font-mk" />
  </div>
</template>
