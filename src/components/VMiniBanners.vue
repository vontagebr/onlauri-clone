<template>
  <div
    class="mx-auto max-w-[1200px] grid grid-cols-3 py-[15px] md:py-[23px] px-[15px] md:px-[23px] gap-[15px] md:gap-[23px]">
    <div
      v-for="banner in banners"
      :key="banner.key"
      class="cursor-pointer"
      @click="onClick(banner)">
      <img :src="banner.imgUrl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

export interface IBanner {
  key: string
  imgUrl: string
}

const banners = ref<IBanner[]>([
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

const onClick = (banner: IBanner) => {
  alert(`clicked ${banner.key}`)
}
</script>
