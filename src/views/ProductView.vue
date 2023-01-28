<template>
  <div class="flex-1 relative flex flex-col">
    <vue-breadcrumbs class="default-section-container" />
    <section class="default-section-container bg-blue-400 flex space-x-8">
      <!-- image box -->
      <div
        class="bg-red-300 flex justify-between w-[56%]"
        :class="{
          'space-x-4': theme === 'vertical'
        }">
        <div
          class="bg-green-200 flex-1"
          :class="{
            'h-[581px]': theme === 'vertical'
          }">
          PREVIEW
        </div>
        <div
          class="bg-blue-200 flex"
          :class="{
            'w-[calc(100%-100px)]': theme === 'vertical'
          }">
          MAIN IMG
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
        <div>tamanho</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { withDefaults } from 'vue'
import VueBreadcrumbs from '@/components/VueBreadcrumbs.vue'

withDefaults(
  defineProps<{
    theme?: 'horizontal' | 'vertical'
    productAvailability: 'in-stock' | 'out-of-stock'
  }>(),
  { theme: 'vertical', productAvailability: 'out-of-stock' }
)
</script>
