<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  background-color: #f1f5f9;
}

@font-face {
  font-family: 'Satoshi-Variable';
  src: url('~/assets/fonts/satoshi/Fonts/Variable/Satoshi-Variable.ttf')
    format('truetype');
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
