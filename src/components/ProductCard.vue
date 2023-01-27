<template>
  <div
    class="px-[15px] flex flex-col group select-none cursor-pointer"
    :class="{
      'cursor-pointer': product !== null,
      'cursor-wait': product === null
    }"
    @click="product !== null ? $emit('click', product) : undefined">
    <div class="relative flex-1 flex flex-col">
      <div
        v-if="product?.discount"
        class="absolute top-2 right-2 bg-black text-white rounded-[3px] text-[12px] py-[3.5px] px-[8px] font-medium">
        - {{ product.discount * 100 }} %
      </div>
      <div v-if="mainImg === null" class="loading h-full min-h-[400px]" />
      <img
        v-else
        :src="`/images/products/${mainImg}`"
        class="w-full max-h-full" />
      <div class="mt-3 flex flex-col items-center">
        <div
          class="h-[45px] mobile-xl:h-[55px] mobile-xl:px-2 tracking-wide leading-snug text-center text-xs mobile-xltext-sm desktop:text-base w-full flex flex-col items-center">
          <span v-if="product !== null" class="line-clamp-2">{{
            product?.label
          }}</span>
          <span v-else class="w-3/4 loading" v-text="'.'" />
        </div>
        <div class="text-center text-[#796e7c] text-xs tablet:text-base">
          <div class="flex space-x-3 justify-center">
            <template v-if="product?.discount">
              <span class="font-thin text-[#796e7c] line-through"
                >R$ {{ product?.price?.toFixed(2) }}</span
              >
              <span class="font-thin">|</span>
            </template>
            <span
              class="font-normal"
              :class="{
                'text-transparent': product === null,
                'text-[#4a90e2]': product !== null
              }"
              >R$
              {{
                product?.discount
                  ? (product?.price * product?.discount).toFixed(2)
                  : product?.price.toFixed(2)
              }}</span
            >
          </div>
          <div
            class="font-extralight text-[13px]"
            :class="{ 'text-transparent': product === null }">
            ou 3x R$ {{ (product?.price ?? 0 / 3).toFixed(2) }}
          </div>
        </div>
        <div
          class="hidden desktop:block w-full opacity-0 group-hover:opacity-100 transition-opacity py-8"
          :class="{
            'pointer-events-none group-hover:opacity-0': product === null
          }">
          <button
            class="h-[50px] rounded-[4px] w-full bg-white px-[7px] py-[15px] text-[#4a90e2] text-[16px] text-center border border-[#4a90e2] uppercase">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, toRefs, unref } from 'vue'
import type { IProduct } from '@/types'
// product = null stands for a loading card...
const props = defineProps<{ product: IProduct | null }>()
defineEmits<{ (eventName: 'click', product: IProduct): void }>()

const { product } = toRefs(props)

const mainImg = computed(() => unref(product)?.images?.[0] ?? null)
</script>

<style scoped>
.loading {
  @apply bg-gray-200 animate-pulse text-transparent;
}
</style>
