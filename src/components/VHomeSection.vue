<template>
  <div class="mt-[40px] flex flex-col space-y-[25px]">
    <div
      class="text-[36px] font-extralight text-black text-center tracking-wide">
      {{ title }}
    </div>
    <div class="w-full max-w-[1200px] mx-auto grid grid-cols-3">
      <v-card />
      <v-card />
      <v-card />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VCard from './VCard.vue'
defineProps<{
  title: string
}>()
</script>
