<template>
  <footer class="bg-white py-[100px] px-[15px] text-[14px] leading-[24px] text-[#786e7d] font-light">
    <div class="h-full flex flex-wrap mx-auto w-[1200px] max-w-full">
      <!-- footer logo block -->
      <div class="w-1/3">
        <img src="/images/onlauri-logo.png" class="w-[180px] mb-[50px]" />
        <p>CNPJ: 40.734.699/0001-38</p>
        <p>Av. Potirendaba, 2299, Pq. Quinta das Paineiras</p>
        <p>CEP: 15080-480, São José do Rio Preto - SP</p>
      </div>
      <!-- footer menu -->
      <div class="leading-[33px] w-1/3">
        <p v-for="(item, i) of menuItems" :key="i">
          <a :href="item.href" v-text="item.label" />
        </p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>

const menuItems = [
  { label: 'Central de Atendimento', href: '' },
  { label: 'Sobre nós', href: '' },
  { label: 'Política de Troca', href: '' },
  { label: 'Programa de Fidelidade', href: '' },
  { label: 'Frete', href: '' },
  { label: 'Política de Privacidade', href: '' },
  { label: 'Política de Segurança', href: '' },
  { label: 'Avaliações do Consumidor', href: '' }
]
</script>