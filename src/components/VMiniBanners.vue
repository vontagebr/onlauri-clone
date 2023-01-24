<template>
  <div
    class="mx-auto max-w-[1200px] flex flex-col mobile-xl:grid mobile-xl:grid-cols-3 py-[15px] md:py-[23px] px-[15px] md:px-[23px] gap-[15px] md:gap-[23px]">
    <div
      v-for="banner in banners"
      :key="banner.key"
      class="cursor-pointer"
      @click="$emit('click', banner)">
      <img :src="banner.imgUrl" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IBanner } from '@/types'

defineProps<{ banners: IBanner[] }>()
defineEmits<{
  (eventName: 'click', banner: IBanner): void
}>()
</script>
