<template>
  <section class="relative">
    <vue-agile
      :autoplay="true"
      :autoplay-speed="4500"
      :nav-buttons="false"
      ref="carousel">
      <div
        v-for="(slide, i) in slides"
        :key="i"
        class="cursor-pointer"
        @click="onSlideClick(slide)">
        <img :src="slide.imgUrl" class="w-full" />
      </div>
    </vue-agile>
    <button
      @click="carousel?.goToPrev()"
      class="w-[20px] h-[30px] tablet:w-[30px] tablet:h-[60px] desktop:w-[50px] desktop:h-[100px] absolute left-0 top-1/2 -translate-y-1/2 rounded-r-[7px] bg-white/70 hover:bg-white transition-colors bg-nav-prev bg-center bg-no-repeat" />
    <button
      @click="carousel?.goToNext()"
      class="w-[20px] h-[30px] tablet:w-[30px] tablet:h-[60px] desktop:w-[50px] desktop:h-[100px] absolute right-0 top-1/2 -translate-y-1/2 rounded-l-[7px] bg-white/70 hover:bg-white transition-colors bg-nav-next bg-center bg-no-repeat" />
  </section>
</template>

<script lang="ts" setup>
import { VueAgile } from 'vue-agile'
import { ref } from 'vue'
import type { ISlide } from '@/types'
const carousel = ref<null | InstanceType<typeof VueAgile>>(null)

const slides = ref<ISlide[]>([
  {
    key: 'esquenta',
    imgUrl: '/images/banners/banner-web-esquenta-1673615921.jpg'
  },
  {
    key: 'verao',
    imgUrl: '/images/banners/banner-web-verao-1673616006.jpg'
  },
  {
    key: 'frete',
    imgUrl: '/images/banners/banner-frete-gratis-set22-desktop-1663069378.jpg'
  },
  {
    key: 'festa',
    imgUrl: '/images/banners/moda-festa-onlauri-desktop-1664290278.jpg'
  },
  {
    key: 'precinho',
    imgUrl: '/images/banners/no-precinho-dez22-desktop-1670400346.jpg'
  },
  {
    key: 'balada',
    imgUrl: '/images/banners/balada-dez22-desktop-1670400364.jpg'
  },
  {
    key: 'beachwear',
    imgUrl: '/images/banners/beachwear-2-desktop-1639124360.jpg'
  }
])

const onSlideClick = (slide: ISlide) => {
  alert(`clicked ${slide.key}`)
}
</script>
