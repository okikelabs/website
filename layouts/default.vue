<script setup>
import Footer from '@/components/Footer.vue'
import Logo from '@/components/Logo.vue'
</script>

<template>
  <div
    class="max-w-4xl mx-auto lg:pt-20 pt-8 px-4 min-h-screen w-full flex flex-col"
  >
    <!-- navigation -->
    <header class="w-full">
      <nav class="flex justify-between items-center">
        <Logo />
      </nav>
    </header>

    <main class="flex-1 my-10">
      <slot />
    </main>

    <Footer />
  </div>
</template>
