<template>
  <footer
    class="bg-white py-4 mobile-xl:py-[100px] px-[15px] text-[14px] leading-[24px] text-[#786e7d] font-light">
    <div
      class="h-full grid grid-cols-1 mobile-xl:grid-cols-3 [&>*]:py-4 mx-auto w-[1200px] max-w-full">
      <!-- footer logo block -->
      <div class="order-last mobile-xl:order-first">
        <img src="/images/onlauri-logo.png" class="w-[180px] mb-[50px]" />
        <p>CNPJ: 40.734.699/0001-38</p>
        <p>Av. Potirendaba, 2299, Pq. Quinta das Paineiras</p>
        <p>CEP: 15080-480, São José do Rio Preto - SP</p>
      </div>
      <!-- footer menu -->
      <div class="order-first border-b mobile-xl:border-b-0 leading-[33px]">
        <p v-for="(item, i) of menuItems" :key="i">
          <a :href="item.href" v-text="item.label" />
        </p>
      </div>
      <!-- footer info -->
      <div
        class="mobile-xl:order-last flex flex-col mobile-xl:flex-row flex-wrap border-b mobile-xl:border-b-0">
        <!-- selos -->
        <div class="flex flex-col space-y-4 items-center mobile-xl:items-start">
          <div class="font-medium">Sua Compra 100% Segura</div>
          <div class="flex flex-wrap items-center space-x-2">
            <img
              src="https://www.cloudflare.com/img/logo-web-badges/cf-logo-on-white-bg.svg"
              class="max-w-[300px] w-[120px]" />
            <img
              src="https://www.onlauri.com.br/media/wysiwyg/selos_rodape/logo_konduto_1.png"
              class="max-w-[300px] w-[175px]" />
          </div>
          <div>
            <google-ratings-badge />
          </div>
        </div>
        <!-- social-->
        <div class="flex-col space-y-3 mt-5 mx-auto mobile-xl:mx-0">
          <div class="font-medium">Siga os nossos canais</div>
          <div class="flex items-start space-x-3">
            <a
              href="https://www.facebook.com/onlauri"
              title="Facebook"
              target="_blank">
              <img
                src="https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/icon-facebook.svg"
                alt="Facebook"
                class="w-[30px]" />
            </a>
            <a
              href="https://www.instagram.com/onlauri/"
              title="Instagram"
              target="_blank">
              <img
                src="https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/icon-instagram.svg"
                alt="Instagram"
                class="w-[30px]" />
            </a>
            <a
              href="https://www.tiktok.com/@onlauribr?lang=pt-BR"
              target="_blank">
              <img
                src="https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/tiktok.svg"
                class="w-[30px]" />
            </a>
            <a
              href="https://www.pinterest.com/onlauri/"
              title="Pinterest"
              target="_blank"
              ><img
                src="https://www.onlauri.com.br/skin/frontend/cammino/onlauri/images/icon-pinterest.svg"
                alt="Pinterest"
                class="w-[30px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import GoogleRatingsBadge from '@/components/GoogleRatingsBadge.vue'

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
