<script setup lang="ts">
import { Project } from "../data/projects";
import LinkIcon from "./icons/LinkIcon.vue";
import { ref } from "vue";

const isOpen = ref<boolean>(false);
const isHover = ref<boolean>(false);

defineProps<{ project: Project }>();
</script>

<template>
  <div
    class="grid grid-cols-12 p-4 cursor-pointer transition ease-linear"
    :class="isOpen || isHover ? 'container-hover' : ''"
    @click="isOpen = !isOpen"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="flex items-center col-span-12 md:col-span-9">
      <h1 class="text-xl font-mn" :class="isHover ? 'text-secondary' : ''">
        {{ project.title }}
      </h1>
      <a class="ml-2" :href="project.link" target="_blank" @click.stop>
        <LinkIcon
          class="h-5 w-5 transition"
          :class="isHover ? 'fill-secondary translate-x-2 -translate-y-2' : ''"
        />
      </a>
    </div>
    <div
      class="col-span-12 md:col-span-8 mt-4 transition-all ease-linear"
      :class="isOpen ? 'max-h-48 lg:h-20' : 'h-0'"
    >
      <p v-if="isOpen" class="text-base leading-loose">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.container-hover {
  border-radius: 12px;
  box-shadow: 0px 4px 2px 4px rgb(0 0 0 / 0.4);
  background-color: #333333;
}
</style>
