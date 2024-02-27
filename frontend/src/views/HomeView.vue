<script setup lang="ts">
import NavBar from "../components/NavBar.vue";
import AboutSection from "../components/AboutSection.vue";
import ProjectSection from "../components/ProjectSection.vue";
import WorkSection from "../components/WorkSection.vue";
import Footer from "../components/Footer.vue";
import { Section } from "../data/sections";
import { ref } from "vue";

const about = ref<InstanceType<typeof AboutSection> | null>(null);
const experience = ref<InstanceType<typeof WorkSection> | null>(null);
const projects = ref<InstanceType<typeof ProjectSection> | null>(null);

const handleProjectClick = (sectionName: Section["name"]) => {
  const scrollOptions: ScrollIntoViewOptions = { behavior: "smooth" };
  switch (sectionName) {
    case "about":
      about.value?.$el.scrollIntoView(scrollOptions);
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
    <div class="p-4 max-w-content mx-auto flex flex-col gap-y-16 mt-10">
      <AboutSection class="nav-scroll-margin" ref="about" />
      <WorkSection class="nav-scroll-margin" ref="experience" />
      <ProjectSection class="nav-scroll-margin" ref="projects" />
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.nav-scroll-margin {
  scroll-margin-top: 4.5rem;
}
</style>
