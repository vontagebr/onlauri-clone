<template>
  <section class="relative w-full max-w-[1200px] mx-auto">
    <div
      v-if="title"
      class="text-center text-black text-[36px] font-extralight mb-[25px]">
      {{ title }}
    </div>
    <virtual-scroll-grid
      :length="products.length"
      :pageSize="products.length"
      :pageProvider="async () => products"
      :pageProviderDebounceTime="0"
      class="mx-[50px] grid grid-cols-2 mobile-xl:grid-cols-3 gap-[20px]">
      <!--
      <template v-slot:probe>
        <product-card :product="null" />
      </template>
      -->
      <!-- When the item is not loaded, a placeholder is rendered -->
      <template v-slot:placeholder="{ style }">
        <product-card :product="null" :style="style" />
      </template>
      <!-- Render a loaded item -->
      <template v-slot:default="{ item, style }">
        <product-card :product="item" :style="style" />
      </template>
    </virtual-scroll-grid>
  </section>
</template>

<script lang="ts" setup>
import type { IProduct } from '@/types'
import VirtualScrollGrid from 'vue-virtual-scroll-grid'
import ProductCard from '@/components/ProductCard.vue'

defineProps<{ title?: string; products: IProduct[] }>()

/*
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
*/
</script>
