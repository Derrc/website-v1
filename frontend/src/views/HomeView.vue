<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import ProjectSection from "../components/ProjectSection.vue";
import WorkSection from "../components/WorkSection.vue";
import { Section } from "../data/sections";
import { ref } from "vue";

const about = ref<HTMLDivElement | null>(null);
const experience = ref<InstanceType<typeof WorkSection> | null>(null);
const projects = ref<InstanceType<typeof ProjectSection> | null>(null);

const handleProjectClick = (sectionName: Section["name"]) => {
  const scrollOptions: ScrollIntoViewOptions = { behavior: "smooth" };
  switch (sectionName) {
    case "about":
      about.value?.scrollIntoView(scrollOptions);
      break;
    case "experience":
      experience.value?.$el.scrollIntoView(scrollOptions);
      break;
    case "projects":
      projects.value?.$el.scrollIntoView(scrollOptions);
      break;
    default:
      break;
  }
};
</script>

<template>
  <div>
    <NavBar :onSectionClick="handleProjectClick" />
    <div class="p-4 max-w-content mx-auto flex flex-col gap-y-20">
      <div ref="about">
        <h1 class="font-mn text-4xl">About Me</h1>
      </div>
      <WorkSection ref="experience" />
      <ProjectSection ref="projects" />
    </div>
  </div>
</template>
