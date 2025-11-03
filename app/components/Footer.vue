<script lang="ts" setup>
import Logo from '@/components/Logo.vue'
import SocialLogo from '@/components/SocialLogo.vue'
import brands from '~/data/brands'

interface CompanyLink {
  label: string
  url: string
  type: 'anchor' | 'nuxt-link'
  external?: boolean
}

const companyLinks: CompanyLink[] = [
  {
    label: 'About',
    url: '#',
    type: 'anchor',
  },
  {
    label: 'Blog',
    url: '/blog',
    type: 'nuxt-link',
  },
  {
    label: 'Contact us',
    url: 'mailto:hello@okikelabs.com',
    type: 'anchor',
  },
  {
    label: 'System Status',
    url: 'https://status.okikelabs.com/',
    type: 'anchor',
    external: true,
  },
]
</script>

<template>
  <footer class="border-t border-t-gray-200/70">
    <div class="grid gap-8 md:gap-4 md:grid-cols-2 py-12">
      <div class="flex flex-col gap-y-4">
        <Logo />
        <p class="text-foreground/60">Proud makers of great software</p>

        <ul class="flex gap-x-2 mt-8">
          <SocialLogo :brands="brands" />
        </ul>
      </div>

      <div class="">
        <h3 class="mb-2 font-semibold">Company</h3>

        <ul class="flex flex-col gap-y-2 text-foreground/60">
          <li v-for="link in companyLinks" :key="link.label" class="hover:text-foreground/80">
            <a
              v-if="link.type === 'anchor'"
              :href="link.url"
              :target="link.external ? '_blank' : undefined"
              class=""
            >
              {{ link.label }}
            </a>
            <nuxt-link v-else-if="link.type === 'nuxt-link'" :to="link.url" class="">
              {{ link.label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="border-t border-t-gray-200/70 pb-4 pt-6 lg:flex justify-center items-center w-full text-foreground/50"
    >
      <small class="block pt-6 lg:pt-0"
        >Copyright &copy; {{ new Date().getFullYear() }}. Okike Labs Technologies Ltd - All rights
        reserved</small
      >
    </div>
  </footer>
</template>
