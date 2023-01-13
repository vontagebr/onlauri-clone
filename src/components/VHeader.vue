<template>
  <section class="flex flex-col">
    <div class="w-full">
      <div
        class="flex justify-between items-center pt-[10px] max-w-[1200px] mx-auto">
        <div class="w-[150px] cursor-pointer">
          <img
            src="https://www.onlauri.com.br/media/email/logo/default/LOGO-SITE-ONLAURI-PNG.png"
            alt="Logo" />
        </div>
        <div class="w-[480px] relative">
          <input
            class="box-search-input"
            placeholder="o que precisa de encontrar?" />
          <button
            class="absolute right-[15px] top-1/2 transform -translate-y-1/2 h-[20px] w-[20px] bg-search-icon bg-center bg-no-repeat" />
        </div>

        <div class="header-links">
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
    </div>
    <div class="w-full border-b border-[#e0e0e0] pb-[5px]">
      <div class="flex justify-around h-[43px] max-w-[1200px] mx-auto">
        <div
          v-for="category in categories"
          :key="category.key"
          class="px-[6px] py-[13px] text-[11.8px] text-black font-semibold uppercase cursor-pointer relative">
          {{ category.label }}
          <img
            v-if="category.highlight"
            class="w-[32px] absolute top-[12px] right-[-26px]"
            src="https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/hot.gif" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
const headerLinks = [
  {
    icon: 'https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/header-atendimento.svg',
    label: 'Atendimento'
  },
  {
    icon: 'https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/header-account.svg',
    label: 'Entrar'
  },
  {
    icon: 'https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/header-cart-default.svg',
    label: 'Carrinho'
  }
]

const categories = [
  { key: 'home', label: 'Home' },
  { key: 'summer2023', label: 'Verao 2023' },
  { key: 'novidades', label: 'Novidades' },
  { key: 'balada', label: 'Balada' },
  { key: 'roupas', label: 'Roupas' },
  { key: 'vestidosDeFesta', label: 'Vestidos de Festa' },
  { key: 'beachwear', label: 'Beachwear' },
  { key: 'acessorios', label: 'Acessorios' },
  { key: 'noprecinho', label: 'No precinho' },
  { key: 'outlet', label: 'Outlet', highlight: true }
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
</style>
