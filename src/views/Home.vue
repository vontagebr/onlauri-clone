<template>
  <div class="relative">
    <v-header class="sticky top-0 z-10" />
    <v-hero />
    <v-mini-banners />
    <carousel-section :title="'Mais vistos'" />
    <carousel-section :title="'Recomendamos para você'" />
    <carousel-section :title="'Mais vendidos em Vestidos'" />
    <carousel-section :title="'O que outros clientes estão vendo'" />
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VMiniBanners from '@/components/VMiniBanners.vue'
import CarouselSection from '@/components/CarouselSection.vue'
</script>
