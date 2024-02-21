<script setup lang="ts">
import { positions } from "../data/positions";
import WorkCard from "./WorkCard.vue";
</script>

<template>
  <div>
    <div class="text-4xl font-mk mb-10">Experience</div>
    <div class="flex flex-col gap-y-10 mb-10">
      <WorkCard v-for="position in positions" :position="position" />
    </div>
  </div>
</template>
