<script setup lang="ts">
// interface Props {
//   href: string
//   icon: string
//   alt: string
// }

interface Brand {
  name: string
  url: string
  logo: string
  alt: string
}

interface Props {
  brands: Brand[]
}

defineProps<Props>()
</script>

<template>
  <li v-for="brand in brands" :key="brand.name">
    <a :href="brand.url" target="_blank">
      <img
        class="flex"
        :alt="brand.alt"
        :src="`/brands/${brand.logo}`"
        width="32"
        height="32"
      />
    </a>
  </li>
</template>
