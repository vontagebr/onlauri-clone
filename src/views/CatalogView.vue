<template>
  <div class="px-[15px] flex-1 relative flex flex-col" ref="rootEl">
    <section
      class="default-section-container mt-[30px] mb-[50px] flex justify-between items-center flex-wrap space-y-2"
      ref="headerEl">
      <div class="text-4xl font-medium">{{ catalog?.label }}</div>
      <div class="flex shrink-0 justify-end items-center space-x-2">
        <div class="input-box">
          <span>Filtrar por</span>
          <span class="font-extralight hidden mobile-xl:block"
            >Categoria, Preço, Tamanho</span
          >
          <img :src="'/images/icons/arrow-down.svg'" class="h-2 w-3" />
        </div>
        <div class="input-box">
          <span>Ordenar por</span>
          <span class="font-extralight">Data</span>
          <img :src="'/images/icons/arrow-down.svg'" class="h-2 w-3" />
        </div>
      </div>
    </section>
    <div
      v-if="headerOverflow"
      class="left-0 w-full px-[15px] z-10 bg-white fixed"
      :style="`top: ${offsetTop}px; box-shadow: 0 15px 30px 0 rgba(0,0,0,.1);`">
      <section
        class="h-[70px] mx-auto max-w-[1200px] w-full flex items-center justify-between">
        <div class="text-xl font-medium">{{ catalog?.label }}</div>
        <div class="flex shrink-0 justify-end items-center space-x-2">
          <div class="input-box">
            <span>Filtrar por</span>
            <span class="font-extralight hidden mobile-xl:block"
              >Categoria, Preço, Tamanho</span
            >
            <img :src="'/images/icons/arrow-down.svg'" class="h-2 w-3" />
          </div>
          <div class="input-box">
            <span>Ordenar por</span>
            <span class="font-extralight">Data</span>
            <img :src="'/images/icons/arrow-down.svg'" class="h-2 w-3" />
          </div>
        </div>
      </section>
    </div>

    <product-grid
      :products="catalog?.products ?? []"
      @click="
        $router.push({
          name: 'catalogProduct',
          params: { productId: $event.id }
        })
      " />
  </div>
</template>

<script lang="ts" setup>
import { ref, unref, computed, onMounted, onBeforeUnmount } from 'vue'
import throttle from 'lodash.throttle'
import { useRoute } from 'vue-router'
import { useStore } from '@/composables/useStore'
import ProductGrid from '@/components/ProductGrid.vue'

const rootEl = ref<null | HTMLElement>(null)
const headerEl = ref<null | HTMLElement>(null)

const headerOverflow = ref(false)
const offsetTop = ref(0)

const route = useRoute()
const { getCatalogById } = useStore()

const catalog = computed(() => {
  const id = route.params.catalogId ?? null
  if (typeof id !== 'string') return null
  const section = getCatalogById(id)
  return section
})

let headerObserver: IntersectionObserver | null = null

const onResize = async () => {
  headerObserver?.disconnect()
  setTimeout(() => {
    offsetTop.value = unref(headerEl)?.offsetParent?.getBoundingClientRect()
      .top as number
    headerObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        headerOverflow.value = !isIntersecting
      },
      {
        rootMargin: `-${unref(offsetTop)}px 0px 0px 0px`
      }
    )
    headerObserver?.observe(unref(headerEl) as HTMLElement)
  }, 0)
}

onMounted(() => {
  window.addEventListener('resize', throttle(onResize, 1000))
  onResize()
})

onBeforeUnmount(() => {
  headerObserver?.disconnect()
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
.header-shadow {
  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.1);
}

.input-box {
  @apply shrink-0 border border-[#dfdfdf] rounded-[4px] px-[15px] py-[10px] flex items-center space-x-2 cursor-pointer;
}
</style>
