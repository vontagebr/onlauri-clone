<template>
  <div
    class="h-full px-[15px] flex flex-col group select-none cursor-pointer"
    @click="onClick">
    <div class="relative">
      <div
        v-if="product.discount"
        class="absolute top-2 right-2 bg-black text-white rounded-[3px] text-[12px] py-[3.5px] px-[8px] font-medium">
        - {{ product.discount * 100 }} %
      </div>
      <img
        :src="`/images/products/${product.images?.[0]}`"
        class="w-full max-h-full" />
      <div class="mt-3 flex flex-col items-center">
        <div
          class="h-[45px] mobile-xl:h-[55px] mobile-xl:px-2 tracking-wide leading-snug text-center text-xs mobile-xltext-sm desktop:text-base">
          <span class="line-clamp-2">{{ product.label }}</span>
        </div>
        <div class="text-center text-[#796e7c] text-xs tablet:text-base">
          <div class="flex space-x-3 justify-center">
            <template v-if="product.discount">
              <span class="font-thin text-[#796e7c] line-through"
                >R$ {{ product.price.toFixed(2) }}</span
              >
              <span class="font-thin">|</span>
            </template>
            <span class="text-[#4a90e2] font-normal"
              >R$
              {{
                product.discount
                  ? (product.price * product.discount).toFixed(2)
                  : product.price.toFixed(2)
              }}</span
            >
          </div>
          <div class="font-extralight text-[13px]">
            ou 3x R$ {{ (product.price / 3).toFixed(2) }}
          </div>
        </div>
        <div
          class="hidden desktop:block w-full opacity-0 group-hover:opacity-100 transition-opacity py-8">
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
import type { IProduct } from '@/types'
defineProps<{ product: IProduct }>()

const onClick = () => {
  alert('clicked')
}
</script>
