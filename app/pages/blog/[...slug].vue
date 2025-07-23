<script lang="ts" setup>
const route = useRoute()

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog')
    .where('slug', '=', route.path.split('/').pop())
    .first()
})

const { title, description } = page.value ?? ({} as any)

useSeoMeta({
  titleTemplate: '%s | Okikelabs Blog',
  title,
  description,
  ogType: 'article',
})
</script>

<template>
  <main class="prose mx-auto">
    <article>
      <h1 class="text-5xl md:text-center">{{ page?.title }}</h1>
      <ContentRenderer v-if="page" :value="page" class="text-[17px]" />
    </article>
  </main>
</template>
