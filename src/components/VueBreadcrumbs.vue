<template>
  <div class="flex text-[10px] font-light uppercase select-none">
    <div
      v-for="match in matched"
      :key="match.path"
      class="flex items-center group">
      <component
        v-if="isVNode(match.meta?.breadcrumb?.(route))"
        :is="match.meta?.breadcrumb?.(route)" />
      <span v-else>
        {{
          match.meta?.breadcrumb?.(route) ?? match.meta.breadcrumb ?? match.name
        }}
      </span>
      <div class="group-last:hidden px-2 text-[10px] leading-[18px]">></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, isVNode } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const matched = computed(() => route.matched)
</script>
