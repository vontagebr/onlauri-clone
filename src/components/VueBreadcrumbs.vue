<template>
  <div class="flex text-[10px] font-light uppercase select-none">
    <div
      v-for="match in matched"
      :key="match.path"
      class="flex items-center group">
      <component
        v-if="typeof match.meta?.breadcrumb === 'function'"
        :is="match.meta?.breadcrumb?.(route)" />
      <div class="group-last:hidden px-2">></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const matched = computed(() => route.matched)
</script>
