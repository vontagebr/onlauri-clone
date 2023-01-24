<template>
  <div class="relative">
    <v-header class="sticky top-0 z-10" />
    <v-hero />
    <div class="flex flex-col space-y-4">
      <v-mini-banners :banners="bannersTop" />
      <product-carousel :title="'Mais vistos'" />
      <product-carousel :title="'Recomendamos para você'" />
      <product-carousel :title="'Mais vendidos em Vestidos'" />
      <product-carousel :title="'O que outros clientes estão vendo'" />
      <product-grid :title="'Peças em destaque'" />
      <v-mini-banners :banners="bannersBottom" />
      <newsletter-section />
    </div>
    <v-footer />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VHeader from '@/components/VHeader.vue'
import VHero from '@/components/VHero.vue'
import VMiniBanners from '@/components/VMiniBanners.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import ProductGrid from '@/components/ProductGrid.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import VFooter from '@/components/VFooter.vue'
import type { IBanner } from '@/types'

const bannersTop = ref<IBanner[]>([
  {
    key: 'comfy',
    imgUrl: '/images/mini-banners/looks-casual-comfy-1588156480.png'
  },
  {
    key: 'google',
    imgUrl: '/images/mini-banners/mini-banner-google-nota-1599240025.jpg'
  },
  {
    key: 'trabalhar',
    imgUrl: '/images/mini-banners/looks-para-trabalhar-1588156531.png'
  }
])

const bannersBottom = ref<IBanner[]>([
  {
    key: 'comfy',
    imgUrl: '/images/mini-banners/quemsomos-1588156426.png'
  },
  {
    key: 'google',
    imgUrl: '/images/mini-banners/amada97-1588156407.png'
  },
  {
    key: 'trabalhar',
    imgUrl: '/images/mini-banners/economize60-1588156349.png'
  }
])
</script>
