<template>
  <section class="relative w-full max-w-[1200px] mx-auto">
    <div class="text-center text-black text-[36px] font-extralight mb-[25px]">
      {{ title }}
    </div>
    <virtual-scroll-grid
      :length="products.length"
      :pageSize="100"
      :pageProvider="pageProvider"
      :pageProviderDebounceTime="0"
      class="mx-[50px] grid grid-cols-2 mobile-xl:grid-cols-3 gap-[20px]">
      <!--
      <template v-slot:probe>
        <product-card :product="null" />
      </template>
      -->
      <!-- When the item is not loaded, a placeholder is rendered -->
      <template v-slot:placeholder="{ style }">
        <div>my placeholder....</div>
        <product-card :product="null" :style="style" />
      </template>
      <!-- Render a loaded item -->
      <template v-slot:default="{ item, style }">
        <product-card :product="item" :style="style"/>
      </template>
    </virtual-scroll-grid>
  </section>
</template>

<script lang="ts" setup>
import { ref, unref } from 'vue'
import type { IProduct } from '@/types'
import VirtualScrollGrid from 'vue-virtual-scroll-grid'
import ProductCard from '@/components/ProductCard.vue'

defineProps<{ title: string }>()

const products = ref<IProduct[]>([
  {
    label: 'Shorts Básico Cós Alto',
    images: ['img_2295_2.jpg'],
    price: 49.9,
    discount: 0.32
  },
  {
    label: 'Calça Tela Aplicações Strass',
    images: ['img_0614_1_.jpg'],
    price: 289.9
  },
  {
    label: 'Shorts Básico Cós Alto',
    images: ['img_1419_2.jpg'],
    price: 49.9
  },
  {
    label: 'Vestido Longo Frente Única c/ Tiras Maxi Flores',
    images: ['whatsapp_image_2021-11-16_at_09.01.59_1.jpg'],
    price: 99.9
  },
  {
    label: 'Vestido Midi Plissado Gola Aplicações',
    images: ['img_7115_3_.jpg'],
    price: 69.9
  },
  {
    label: 'Saia Midi Chanfrada Elástico Tropicália Print',
    images: ['img_7792.jpg'],
    price: 159.9
  },
  {
    label: 'Vestido Camisa Decote V Metálico',
    images: ['img_9142.jpg'],
    price: 139.9
  }
])

const pageProvider = async (pageNumber: number, pageSize: number) => {
  const page = await new Promise<IProduct[]>((resolve) =>
    setTimeout(() => {
      const start = pageNumber * pageSize
      const end = start + pageSize
      const page = unref(products).slice(start, end)
      resolve(page)
    }, Math.round(3000 * Math.random()))
  )
  return page
}
</script>
