<script setup lang="ts">
import { type Position } from "../data/positions";

defineProps<{ position: Position }>();
</script>

<template>
  <div class="grid grid-cols-12">
    <component :is="position.logo" class="col-span-12" />
    <p class="text-xl font-normal col-span-12 md:col-span-9">
      {{ position.title }} • {{ position.company }}
    </p>
    <p class="text-sm opacity-70 col-span-12 md:col-span-3">
      {{ position.startDate }} — {{ position.endDate }}
    </p>
    <p class="col-span-12 md:col-span-8 text-sm mt-4 leading-loose">
      {{ position.description }}
    </p>
  </div>
</template>
