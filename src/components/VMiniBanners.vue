<template>
  <div
    class="mx-auto max-w-[1200px] flex py-[15px] md:py-[23px] px-[15px] md:px-[23px] gap-[15px] md:gap-[23px]"
    :class="{
      'mobile-xl:grid mobile-xl:grid-cols-3 flex-col': responsive,
      'flex-row': !responsive
    }">
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

defineProps<{ banners: IBanner[]; responsive?: boolean }>()
defineEmits<{
  (eventName: 'click', banner: IBanner): void
}>()
</script>
