<script lang="ts" setup>
const path = useRoute()

const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent()
    .where({ slug: path.path.split('/').pop() })
    .findOne()
)

const { title, description } = data.value ?? ({} as any)

useSeoMeta({
  titleTemplate: '%s | Okikelabs Blog',
  title,
  description,
  ogType: 'article',
})

// useHead({
//   link: [
//     {
//       rel: 'canonical',
//       href: 'https://okikelabs.com/blog',
//     },
//   ],
// })
</script>

<template>
  <main class="prose mx-auto">
    <article>
      <h1 class="text-5xl md:text-center">{{ data?.title }}</h1>
      <ContentRenderer v-if="data" :value="data" class="text-[17px]" />
    </article>
  </main>
</template>
