<template>
  <section class="relative w-full max-w-[1200px] mx-auto">
    <div class="text-center text-black text-[36px] font-extralight mb-[25px]">
      {{ title }}
    </div>
    <vue-agile
      :autoplay="false"
      :nav-buttons="false"
      :slides-to-show="cardsPerRow"
      ref="carousel"
      class="mx-[50px]">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :product="product"
        @click="$emit('click', product)">
      </product-card>
    </vue-agile>
    <button
      @click="carousel?.goToPrev()"
      class="w-[50px] h-[100px] absolute left-0 top-1/2 -translate-y-1/2 bg-nav-prev bg-center bg-no-repeat" />
    <button
      @click="carousel?.goToNext()"
      class="w-[50px] h-[100px] absolute right-0 top-1/2 -translate-y-1/2 bg-nav-next bg-center bg-no-repeat" />
  </section>
</template>

<script lang="ts" setup>
import { VueAgile } from 'vue-agile'
import { ref, onMounted, onBeforeUnmount, computed, unref } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import type { IProduct } from '@/types'

defineProps<{ title: string; products: IProduct[] }>()
defineEmits<{ (eventName: 'click', product: IProduct): void }>()

const windowWidth = ref(0)
const carousel = ref<null | InstanceType<typeof VueAgile>>(null)

const cardsPerRow = computed(() => (unref(windowWidth) > 600 ? 3 : 2))
const onResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>
