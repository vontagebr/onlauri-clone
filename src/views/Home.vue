<template>
  <div class="relative">
    <v-header class="sticky top-0 z-10" />
    <v-hero />
    <v-mini-banners />
    <div class="flex flex-col space-y-8 py-8">
      <product-carousel :title="'Mais vistos'" />
      <product-carousel :title="'Recomendamos para você'" />
      <product-carousel :title="'Mais vendidos em Vestidos'" />
      <product-carousel :title="'O que outros clientes estão vendo'" />
      <product-grid :title="'Recomendado para você'" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VMiniBanners from '@/components/VMiniBanners.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import ProductGrid from '@/components/ProductGrid.vue'
</script>
