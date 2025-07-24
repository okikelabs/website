<script setup lang="ts">
definePageMeta({
  layout: 'blog-layout',
})

const { data: posts } = await useAsyncData('blog', () => {
  return queryCollection('blog')
    .where('draft', '=', 0)
    .select('slug', 'title', 'description', 'date', 'image', 'category')
    .order('date', 'DESC')
    .all()
})

useSeoMeta({
  titleTemplate: '%s',
  title: 'Okikelabs Blog | Product, Engineering, Design, Culture and many more.',
})
</script>

<template>
  <div class="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8 pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <PostCard v-for="post in posts" :key="post.slug" :post="post" />
    </div>
  </div>
</template>
