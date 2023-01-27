<template>
  <section class="flex flex-col bg-white">
    <div class="w-full">
      <div
        class="flex justify-between items-center space-x-4 pt-[10px] px-2 max-w-[1200px] mx-auto">
        <div
          class="w-[150px] cursor-pointer"
          @click="$router.push({ name: 'home' })">
          <img :src="logoUrl" alt="Logo" />
        </div>
        <div class="flex items-center space-x-5 desktop:hidden">
          <button class="p-2 rounded-full">
            <img src="/images/icons/cart.svg" :alt="'Carrinho'" />
          </button>
          <button class="p-2 rounded-full">
            <img src="/images/icons/hamburger-menu.svg" :alt="'Menu'" />
          </button>
        </div>
        <div
          class="tablet:w-[250px] desktop:w-[480px] relative hidden tablet:block">
          <input
            class="box-search-input"
            placeholder="o que precisa de encontrar?" />
          <button
            class="absolute right-[15px] top-1/2 transform -translate-y-1/2 h-[20px] w-[22px] bg-search-icon bg-center bg-no-repeat" />
        </div>
        <div
          class="flex-1 max-w-[400px] font-medium hidden desktop:flex justify-between">
          <div
            v-for="(headerLink, i) in headerLinks"
            :key="i"
            class="header-link">
            <div>
              <img :src="headerLink.icon" :alt="headerLink.label" />
            </div>
            <div class="cursor-pointer hover:text-black transition-colors">
              {{ headerLink.label }}
            </div>
          </div>
        </div>
      </div>
      <!-- Mobile search input -->
      <div class="shadow-xl z-50 tablet:hidden w-full relative border-b">
        <input
          class="shadow-inner h-[40px] w-full text-[13px] font-normal pl-2 focus:outline-none"
          placeholder="o que precisa de encontrar?" />
        <button
          class="absolute right-[14px] top-1/2 transform -translate-y-1/2 h-[20px] w-[22px] bg-search-icon bg-center bg-no-repeat" />
      </div>
    </div>
    <div class="w-full border-b border-[#e0e0e0] pb-[5px] hidden desktop:block">
      <div
        class="flex justify-around items-center h-[43px] max-w-[1200px] mx-auto">
        <router-link
          v-for="catalog in headerCatalogs"
          :key="catalog.id"
          class="px-[6px] py-[13px] text-[11.8px] font-light hover:text-black transition-colors uppercase cursor-pointer relative"
          :to="
            catalog.to ?? { name: 'catalog', params: { catalogId: catalog.id } }
          ">
          {{ catalog.label }}
          <img
            v-if="catalog.highlight"
            class="w-[32px] absolute top-[12px] right-[-26px]"
            src="/images/hot.gif" />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from '@/composables/useStore'

const { logoUrl, headerCatalogs } = useStore()

const headerLinks = [
  {
    icon: '/images/icons/atendimento.svg',
    label: 'Atendimento'
  },
  {
    icon: '/images/icons/account.svg',
    label: 'Entrar'
  },
  {
    icon: '/images/icons/cart.svg',
    label: 'Carrinho'
  }
]
</script>
<style scoped>
.box-search-input {
  @apply h-[40px] w-full bg-white text-[13px] font-normal rounded-[4px];
  border: 1px solid #c2c2c2;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.2);
  letter-spacing: 0;
  padding: 0 30px 0 15px;
  color: #796e7c;
  outline: none;
}

.header-links {
  @apply w-[460px] font-medium flex justify-between;
}

.header-link {
  @apply flex justify-between items-center space-x-2 text-[12px] relative;
  color: #796e7c;
  line-height: 17px;
}

.router-link-active {
  @apply text-black font-medium;
}
</style>
