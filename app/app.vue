<script lang="ts" setup>
import { usePreferredDark, useFavicon } from '@vueuse/core'

const setFavicon = () => {
  const isDark = usePreferredDark()
  const favicon = computed(() => (isDark.value ? '/favicon.ico' : '/favicon-light.ico'))

  useFavicon(favicon, {
    rel: 'icon',
  })
}
onMounted(() => {
  setFavicon()
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/* @import './assets/css/tailwind.css'; */
@import './assets/css/styles.css';

@font-face {
  font-family: 'Satoshi-Variable';
  src: url('~/assets/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf') format('truetype');
}

html {
  scroll-behavior: smooth;
}

body {
  @apply text-blue-tertiary;
  font-family: 'Satoshi-Variable';
  background-color: #f1f5f9;
}
</style>
