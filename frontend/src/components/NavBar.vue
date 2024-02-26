<script setup lang="ts">
import VueLogo from "./icons/VueLogo.vue";
import TypescriptLogo from "./icons/TypescriptLogo.vue";
import { watch } from "vue";
import { Section, sections } from "../data/sections";
import { Direction, useScrollDirection } from "../hooks/useScrollDirection";

defineProps<{
  onSectionClick: (name: Section["name"]) => void;
}>();

const scrollDirection = useScrollDirection();

watch(scrollDirection, () => {
  console.log(scrollDirection.value);
});
</script>

<template>
  <div
    class="h-16 border-b-[1px] sticky top-0 z-50 transition bg-almostBlack"
    :class="scrollDirection == Direction.Down ? '-translate-y-16' : ''"
  >
    <div class="max-w-content mx-auto flex p-4 gap-x-4 items-center">
      <TypescriptLogo />
      <VueLogo class="mr-auto" />
      <button
        class="font-mn text-sm hover:text-secondary sm:text-base"
        :aria-label="section.label"
        v-for="section in sections"
        @click="onSectionClick(section.name)"
      >
        {{ section.label }}
      </button>
    </div>
  </div>
</template>
