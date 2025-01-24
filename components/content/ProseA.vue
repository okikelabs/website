<template>
  <a
    :href="href"
    :target="isExternalLink ? '_blank' : '_self'"
    rel="nofollow noopener noreferrer"
  >
    <!-- :rel="isExternalLink ? 'nofollow noopener noreferrer' : null" -->
    <!-- :rel="isExternalLink ? 'nofollow noopener noreferrer' : null" -->
    <slot />
  </a>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from '#app' // To get the site URL dynamically
import { computed } from 'vue'
import type { PropType } from 'vue'

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<
      '_blank' | '_parent' | '_self' | '_top' | null | undefined
    >,
    // default: '_blank',
    required: false,
  },
})

// Detect if the link is external
const w = 'okikelabs.com'
const baseUrl = w || 'localhost:3000' // Add your base URL in runtime config if needed

const isExternalLink = computed(() => {
  return (
    props.href.startsWith('http://') ||
    (props.href.startsWith('https://') && !props.href.includes(baseUrl))
  )
})

// console.log(isExternalLink)
</script>
