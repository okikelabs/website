<script setup>
import Footer from '@/components/Footer.vue'
import Logo from '@/components/Logo.vue'

const router = useRoute()

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://okikelabs.com' + router.path,
    },
  ],
})
</script>

<template>
  <div class="max-w-4xl mx-auto lg:pt-20 pt-8 px-4 min-h-screen w-full flex flex-col">
    <!-- <div class="max-w-7xl mx-auto lg:pt-20 pt-8 px-4 min-h-screen w-full flex flex-col"> -->
    <!-- navigation -->
    <header class="w-full">
      <nav class="flex w-full">
        <Logo class="w-full" :show-full="true" />
      </nav>
    </header>

    <main class="flex-1 my-10">
      <slot />
    </main>

    <Footer />
  </div>
</template>
