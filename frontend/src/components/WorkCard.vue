<script setup lang="ts">
import { type Position } from "../data/positions";
import LinkIcon from "./icons/LinkIcon.vue";
import { ref } from "vue";

const isOpen = ref<boolean>(false);
const isHover = ref<boolean>(false);

defineProps<{ position: Position }>();
</script>

<template>
  <div
    class="grid grid-cols-12 p-4 cursor-pointer transition ease-linear"
    :class="isOpen || isHover ? 'container-hover' : ''"
    @click="isOpen = !isOpen"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="col-span-12 flex items-center">
      <component :is="position.logo" />
      <a class="ml-4" :href="position.link" target="_blank" @click.stop>
        <LinkIcon :class="isHover ? 'fill-secondary' : ''" />
      </a>
    </div>
    <h1
      class="text-xl font-mn col-span-12 md:col-span-9"
      :class="isHover ? 'text-secondary' : ''"
    >
      {{ position.title }} • {{ position.company }}
    </h1>
    <p class="text-sm opacity-70 col-span-12 md:col-span-3">
      {{ position.startDate }} — {{ position.endDate }}
    </p>
    <div
      class="col-span-12 md:col-span-8 mt-4 transition-all ease-linear"
      :class="isOpen ? 'max-h-80 lg:h-32' : 'h-0'"
    >
      <p v-if="isOpen" class="text-base leading-loose">
        {{ position.description }}
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
