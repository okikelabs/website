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
  <div class="max-w-7xl mx-auto lg:pt-20 pt-8 px-4 min-h-screen w-full flex flex-col">
    <!-- navigation -->
    <header class="w-full">
      <nav class="flex w-full">
        <Logo class="w-full" :show-full="true" />
      </nav>
    </header>

    <main class="flex-1 my-10">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-primary">Okikelabs Blog</h1>
        <!-- <p class="text-foreground/70 text-lg mt-4"> -->
        <p class="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed mt-4">
          Follow us on our journey of building digital products. We share everything from product
          updates to insights on building and growing a bootstrapped business.
        </p>
      </div>

      <hr class="my-12 text-gray-200" />
      <slot />
    </main>

    <Footer />
  </div>
</template>
