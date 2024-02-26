<script setup lang="ts">
import VueLogo from "./icons/VueLogo.vue";
import TypescriptLogo from "./icons/TypescriptLogo.vue";
import { Section, sections } from "../data/sections";

defineProps<{
  onSectionClick: (name: Section["name"]) => void;
}>();
</script>

<template>
  <div class="h-16 border-b-[1px] sticky top-0 z-50 bg-almostBlack">
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
