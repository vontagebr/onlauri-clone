<template>
  <div class="relative min-h-screen flex flex-col">
    <v-header class="sticky top-0 z-10" />
    <router-view />
    <v-footer />
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@/components/VHeader.vue'
import VFooter from '@/components/VFooter.vue'
</script>
