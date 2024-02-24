<script setup lang="ts">
import { positions } from "../data/positions";
import WorkCard from "./WorkCard.vue";
</script>

<template>
  <div>
    <h1 class="text-4xl mb-10 font-mn">Experience</h1>
    <div class="flex flex-col gap-y-10 mb-10">
      <WorkCard v-for="position in positions" :position="position" />
    </div>
  </div>
</template>
