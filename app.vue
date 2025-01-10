<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import './assets/css/styles.css';

body {
  background-color: #f1f5f9;
}

/* @font-face {
  font-family: 'Satoshi-Variable';
  src: url('~/assets/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf')
    format('truetype');
} */

@font-face {
  font-family: 'Satoshi-Variable';
  src: url('./assets/fonts/travels/Travels-Regular.otf') format('opentype');
}

html {
  scroll-behavior: smooth;
}

body {
  /* font-family: Satoshi-Variable; */
  @apply text-blue-tertiary;
  font-family: 'Satoshi-Variable';
}
</style>
