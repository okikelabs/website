<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import SocialLogo from '@/components/SocialLogo.vue'
import brands from '~/data/brands'
</script>

<template>
  <footer class="border-t border-t-gray-200/70">
    <!-- <footer class="py-12"> -->
    <div class="grid gap-8 md:gap-4 md:grid-cols-3 py-12">
      <div class="">
        <Logo />
        <p class="pt-4">Proud makers of great software</p>
      </div>

      <div class="">
        <h3 class="mb-2 font-semibold">Company</h3>

        <ul class="flex flex-col gap-y-2">
          <li><a href="#">About</a></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>

          <li><a href="mailto:hello@okikelabs.com">Contact us</a></li>
        </ul>
      </div>

      <div class="">
        <h3 class="mb-2 font-semibold">Socials</h3>

        <ul class="flex gap-x-2">
          <!-- <li > -->
          <SocialLogo :brands="brands" />
        </ul>
      </div>
    </div>

    <div
      class="border-t border-t-gray-200/70 pb-4 pt-6 lg:flex justify-between items-center w-full text-foreground/50"
    >
      <small>Built with ❤️ by Okikelabs team</small>
      <!-- <small class="block">Built by Emmanuel Raymond and Tochukwu Alor</small> -->

      <small class="block pt-6 lg:pt-0"
        >Copyright &copy; {{ new Date().getFullYear() }}. Okikelabs Technologies
        Ltd - All rights reserved</small
      >
    </div>
  </footer>
</template>
