<script setup>
const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .where('draft', '=', 0)
    .select('slug', 'title', 'description')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  titleTemplate: '%s',
  title:
    'Okikelabs Blog | Product, Engineering, Design, Culture and many more.',
})
</script>

<template>
  <div>
    <h1 class="text-6xl font-bold text-center text-blue-primary">Blog</h1>
    <p class="text-justify text-foreground/70 text-lg mt-4">
      Welcome to the Okikelabs blog where we share our journey of building
      digital products. We share everything from product updates to insights on
      building and growing a bootstrapped business.
    </p>

    <hr class="my-8" />

    <ul class="list-disc space-y-2">
      <li v-for="post in posts" :key="post.slug" class="text-lg font-medium">
        <NuxtLink :to="`/blog/${post.slug}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
