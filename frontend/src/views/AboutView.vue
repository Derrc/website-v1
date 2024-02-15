<script setup lang="ts">
import Typed from "typed.js";
import { onMounted, onUnmounted, ref } from "vue";

const typed = ref<Typed>();

onMounted(() => {
  typed.value = new Typed("#typed", {
    strings: [
      "Hi, I'm Derrick",
      "I'm an aspiring developer",
      "Currently interested in full-stack development",
      "Hi, I'm Derrick",
    ],
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
  });
});

onUnmounted(() => {
  typed.value?.destroy();
});
</script>

<template>
  <div className="p-10">
    <span id="typed" className="text-3xl font-mk" />
  </div>
</template>
