<template>
  <div class="h-full px-[15px] flex flex-col group cursor-default select-none">
    <div>
      <img
        :src="`/images/products/${product.images?.[0]}`"
        class="w-full max-h-full cursor-pointer"
        @click="onClick" />
      <div class="mt-[10px] px-[20px] flex flex-col items-center">
        <div class="h-[61px]">
          <span
            class="cursor-pointer text-[14px] font-normal text-center"
            @click="onClick">
            {{ product.label }}
          </span>
        </div>
        <div class="text-center text-[#796e7c]">
          <div class="text-[#4a90e2] font-normal">R$ {{ product.price }}</div>
          <div class="font-extralight text-[13px]">
            ou 3x R$ {{ (product.price / 3).toFixed(2) }}
          </div>
        </div>
        <div
          class="w-full opacity-0 group-hover:opacity-100 transition-opacity mt-[80px]">
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
