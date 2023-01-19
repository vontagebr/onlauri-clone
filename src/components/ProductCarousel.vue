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
      class="mx-[50px] py-4">
      <product-card
        v-for="(product, i) in products"
        :key="i"
        :product="product">
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

defineProps<{ title: string }>()

const windowWidth = ref(0)
const carousel = ref<null | InstanceType<typeof VueAgile>>(null)

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
const onImageClick = (image: string) => {
  alert(`clicked ${image}`)
}
</script>
