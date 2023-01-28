<template>
  <div class="px-[15px] flex-1 relative">
    <section class="default-section-container py-[10px] px-[15px] bg-white">
      <div class="flex space-x-2">
        <vue-breadcrumbs />
      </div>
    </section>
    <section class="store-container bg-blue-300 flex flex-col">
      <div class="bg-green-200">Hi from crumble pie</div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'
</script>