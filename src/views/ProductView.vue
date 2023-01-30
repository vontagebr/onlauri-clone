<template>
  <div class="flex-1 relative flex flex-col">
    <vue-breadcrumbs class="default-section-container" />
    <section class="default-section-container flex space-x-8">
      <!-- image box -->
      <div class="flex w-[56.8%] space-x-[20px]">
        <div class="h-[581px] w-[100px] flex flex-col space-y-3 overflow-auto">
          <div
            v-for="image in images"
            :key="image.id"
            class="cursor-pointer thumbnail"
            @click="selectedImage = image">
            <img :src="image.src" />
          </div>
        </div>
        <div class="w-[calc(100%-100px)] h-full">
          <img :src="selectedImage.src" />
        </div>
      </div>

      <!-- detail box-->
      <div class="bg-white flex-1 flex flex-col divide-y [&>*]:py-6">
        <div class="flex flex-col space-y-6 !pt-0">
          <div class="text-[36px] font-medium text-[#786e7d] leading-[44px]">
            Blazer Estruturado Duo Botões Metálicos
          </div>
          <div class="text-[12px] font-extralight">Ref: 90-19395</div>
          <!-- short description -->
          <div class="text-[14px] font-medium text-[#786e7d]">
            TECIDO: CREPE ALFAIATARIA<br />
            FECHAMENTO POR: BOTÕES<br />
            TAMANHOS: P(38) M(40) G(42) GG(44)<br />
            <br />
            <br />
            A modelo está usando:<br />
            Blazer tamanho: P<br />
            <br />
            Altura modelo: 1,67 m.
            <span>
              <a
                class="font-thin cursor-pointer hover:underline"
                onclick="if (!window.__cfRLUnblockHandlers) return false; document.getElementsByClassName('collateral-tabs')[0].scrollIntoView()"
                >Leia mais.</a
              ></span
            >
          </div>
        </div>
        <div class="flex flex-col items-start">
          <div class="text-[36px] font-medium text-[#786e7d]">R$ 149,90</div>
          <div class="text-[14px] font-extralight">
            3 x de R$ 49,97 no cartão de crédito
          </div>
          <div
            class="uppercase mt-8 text-[13px] font-light tracking-wide"
            :class="{
              'text-[#11b400]': productAvailability === 'in-stock',
              'text-black px-[20px] py-[12px] border border-black rounded-[6px]':
                productAvailability === 'out-of-stock'
            }">
            {{
              productAvailability === 'in-stock'
                ? 'em estoque'
                : 'produto fora de estoque'
            }}
          </div>
        </div>
        <div class="flex flex-col items-start space-y-8">
          <div class="flex flex-col space-y-2">
            <div class="text-base font-medium tracking-wide">
              Tamanho:
              <span>{{ hoveredProductSize ?? selectedProductSize }} </span>
            </div>
            <div class="flex space-x-3">
              <div
                v-for="size in productSizes"
                :key="size"
                class="option-box"
                :selected="size === selectedProductSize"
                style="box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2)"
                @mouseenter="hoveredProductSize = size"
                @mouseleave="hoveredProductSize = null"
                @click="selectedProductSize = size">
                {{ size }}
              </div>
            </div>
          </div>
          <div class="flex flex-col space-y-2">
            <div class="text-base font-medium tracking-wide">
              Cor:
              <span
                >{{ hoveredProductColor?.label ?? selectedProductColor?.label }}
              </span>
            </div>
            <div class="flex space-x-3">
              <div
                v-for="color in productColors"
                :key="color.id"
                class="option-box"
                :selected="color.id === selectedProductColor?.id"
                :style="`box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2); background: ${color.color};`"
                @mouseenter="hoveredProductColor = color"
                @mouseleave="hoveredProductColor = null"
                @click="selectedProductColor = color" />
            </div>
          </div>
        </div>
        <div class="flex flex-col space-y-4 font-light">
          <div>
            Compre e ganhe
            <span class="font-medium">544.44 pontos</span>. Conheça nosso
            programa de fidelidade
          </div>
          <div class="flex space-x-8">
            <input
              type="number"
              pattern="\d*(\.\d+)?"
              maxLength="6"
              min="1"
              title="Qtd"
              class="text-[14px] h-[52px] w-[80px] text-[#796e7c] border border-[#c2c2c2] rounded-[3px] focus:outline-none text-center"
              :style="'box-shadow: inset 0 1px 3px 0 rgba(0,0,0,.2);'"
              v-model="selectedQuantity" />
            <button
              class="h-[52px] w-full rounded-[3px] bg-[#3e8c00] hover:bg-[#337300] transition-colors text-white text-[22px] uppercase font-medium tracking-wider">
              Colocar no carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults, ref, unref } from 'vue'
import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'

withDefaults(
  defineProps<{
    theme?: 'horizontal' | 'vertical'
    productAvailability: 'in-stock' | 'out-of-stock'
  }>(),
  { theme: 'vertical', productAvailability: 'in-stock' }
)

interface IProductColor {
  id: number
  label: string
  color: string
}

interface IImage {
  id: string
  alt: string
  src: string
  zoomSrc: string
}
// const carousel = ref<null | InstanceType<typeof VueAgile>>(null)
const images = ref<IImage[]>([
  {
    id: 'image-0',
    alt: 'Shorts Alfaiataria c/ Maxi Cinto',
    src: 'https://www.onlauri.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2770.jpg',
    zoomSrc:
      'https://www.onlauri.com.br/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2770.jpg'
  },
  {
    id: 'image-1',
    alt: 'Shorts Alfaiataria c/ Maxi Cinto',
    src: 'https://www.onlauri.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2773.jpg',
    zoomSrc:
      'https://www.onlauri.com.br/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2773.jpg'
  },
  {
    id: 'image-2',
    alt: 'Shorts Alfaiataria c/ Maxi Cinto',
    src: 'https://www.onlauri.com.br/media/catalog/product/cache/1/image/800x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2769.jpg',
    zoomSrc:
      'https://www.onlauri.com.br/media/catalog/product/cache/1/image/1200x/17f82f742ffe127f42dca9de82fb58b1/i/m/img_2769.jpg'
  }
])

const selectedImage = ref(unref(images)[0])
const productSizes = ['P', 'M', 'G']
const productColors = [
  { id: 1, label: 'Neon Verde', color: '#A9EF06' },
  { id: 2, label: 'Pink', color: '#FF0C78' }
]

const hoveredProductSize = ref<null | string>(null)
const selectedProductSize = ref<null | string>(null)
const hoveredProductColor = ref<null | IProductColor>(null)
const selectedProductColor = ref<null | IProductColor>(null)
const selectedQuantity = ref(1)
</script>

<style scoped>
.option-box {
  @apply w-[56px] h-[56px] border border-[#dfdfdf] rounded-[4px] p-4 flex items-center justify-center font-normal cursor-pointer;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.2);
}
.option-box[selected='true'] {
  @apply !shadow-none border-[#4a90e2];
}

.thumbnail {
  @apply relative after:transition-colors after:absolute after:w-full after:h-[4px] after:content-[''] hover:after:bg-black;
}
</style>
