<template>
  <transition
    mode="out-in"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    enter-active-class="transition-opacity duration-100">
    <div
      v-if="isReady"
      class="min-h-screen relative flex items-center justify-center">
      <div
        class="flex flex-col md:flex-row md:space-x-10 z-10 items-center px-2 md:px-0"
        ref="container">
        <div
          class="fixed top-0 left-0 w-full h-full bg-center bg-cover z-0 bg-overlay bg-container"
          :style="`background-image: url('${backgroundImage}') `" />
        <img
          src="./assets/images/vontage-logo.svg"
          class="-mt-20 md:mt-0 w-[160px] md:w-[200px] logo drop-shadow-[0_4px_4px_#000000] opacity-0" />
        <div
          class="flex flex-col space-y-4 md:space-y-6 px-8 md:px-0 items-center text-white relative">
          <div
            class="text-[#ff0000] font-oleoscript text-8xl md:text-9xl drop-shadow-[0_4px_4px_#000000] leading-tight md:leading-none title opacity-0">
            Vontage
          </div>
          <div
            class="text-white/90 font-orbitron tracking-wider text-[18px] md:text-[28px] drop-shadow-[0_4px_4px_#000000] subtitle text-center opacity-0">
            Design, Marketing e Engenharia Digital
          </div>
          <div
            class="absolute bottom-[-60px] md:bottom-[-80px] right-0 font-billiondreams text-[#FBFF48] text-[35px] md:text-[50px] tracking-wide rotate-[-12deg] drop-shadow-[0_4px_4px_#000000] commingsoon opacity-0">
            Brevemente...
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { ref, computed, unref, watch } from 'vue'
import { gsap, Power1, Elastic } from 'gsap'

const fontsLoaded = ref(false)
const backgroundLoaded = ref(false)
const container = ref<null | HTMLElement>(null)

const isReady = computed(() => unref(fontsLoaded) && unref(backgroundLoaded))

watch(
  container,
  (container) => {
    if (container !== null) fadeOut()
  },
  { immediate: true }
)

const images = [
  '/sean-oulashin-KMn4VEeEPR8-unsplash.jpg',
  '/rohit-tandon-9wg5jCEPBsw-unsplash.jpg',
  '/kazuend-19SC2oaVZW0-unsplash.jpg'
]

const getRandomImage = () => images[Math.floor(Math.random() * images.length)]

const backgroundImage = ref(getRandomImage())

const preloadImage = () => {
  const img = new Image()
  img.src = backgroundImage.value
  backgroundLoaded.value = true
}

const timeline = gsap.timeline()

const fadeOut = () => {
  // timeline.play(0)

  timeline.fromTo(
    '.bg-overlay',
    { filter: 'brightness(1)' },
    { filter: 'brightness(0.7)', duration: 0.5, ease: Power1.easeIn },
    '<0.5'
  )

  timeline.fromTo(
    '.title',
    { opacity: 0, x: '90%' },
    { opacity: 1, x: 0, duration: 1, ease: 'elastic.out(0.6, 0.3)' },
    '<0.5'
  )

  timeline.fromTo(
    '.logo',
    { opacity: 0, scale: 0 },
    { opacity: 1, scale: 1, duration: 0.5 },
    '<0.5'
  )

  timeline.fromTo(
    '.subtitle',
    { opacity: 0, y: '100%' },
    { opacity: 1, y: 0 },
    '<0.5'
  )
  timeline.fromTo(
    '.commingsoon',
    { opacity: 0 },
    { opacity: 1, duration: 1 },
    '<0.5'
  )
}

document.fonts.ready.then(() => {
  fontsLoaded.value = true
})

preloadImage()
</script>
