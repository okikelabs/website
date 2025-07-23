<script setup lang="ts">
defineProps({
  showFull: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <nuxt-link to="/" class="flex items-center">
    <img
      v-if="!showFull"
      src="/logo.svg"
      alt="okikelabs logo"
      width="64"
      height="64"
    />
    <img
      v-else
      src="/logo-full.svg"
      alt="okikelabs logo"
      width="220"
      height="220"
    />
  </nuxt-link>
</template>
