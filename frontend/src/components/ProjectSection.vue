<script setup lang="ts">
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <div>
    <h1 class="text-4xl mb-6 font-mn">Projects</h1>
    <div class="flex flex-col gap-y-6 mb-10">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>
