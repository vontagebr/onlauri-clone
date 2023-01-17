<template>
  <div class="relative">
    <v-header class="sticky top-0 z-10" />
    <v-hero />
    <v-mini-banners />
    <v-home-section :title="'Mais vistos'" />
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VMiniBanners from '@/components/VMiniBanners.vue'
import VHomeSection from '@/components/VHomeSection.vue'
</script>
