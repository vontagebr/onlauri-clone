<template>
  <v-hero />
  <div class="flex flex-col space-y-4">
    <v-mini-banners :banners="bannersTop" :responsive="true" />
    <product-carousel :title="'Mais vistos'" :products="products" />
    <product-carousel :title="'Recomendamos para você'" :products="products" />
    <product-carousel
      :title="'Mais vendidos em Vestidos'"
      :products="products" />
    <product-carousel
      :title="'O que outros clientes estão vendo'"
      :products="products" />
    <product-grid :title="'Peças em destaque'" :products="products" />
    <v-mini-banners :banners="bannersBottom" />
    <newsletter-section />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import VHero from '@/components/VHero.vue'
import VMiniBanners from '@/components/VMiniBanners.vue'
import ProductCarousel from '@/components/ProductCarousel.vue'
import ProductGrid from '@/components/ProductGrid.vue'
import NewsletterSection from '@/components/NewsletterSection.vue'
import type { IBanner } from '@/types'
import { useStore } from '@/composables/useStore'

const { products } = useStore()

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
