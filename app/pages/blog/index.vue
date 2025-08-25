<script setup lang="ts">
definePageMeta({
  // layout: 'blog-layout',
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
  <div>
    <div class="text-center">
      <h1 class="text-4xl font-bold md:text-5xl lg:text-6xl text-blue-primary">Okikelabs Blog</h1>
      <p class="mt-4 text-lg leading-relaxed text-gray-600">
        Follow us on our journey of building digital products. We share everything from product
        updates to insights on building and growing a bootstrapped business.
      </p>
    </div>

    <hr class="my-12 text-gray-200" />
    <div class="pb-16">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <PostCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </div>
  </div>
</template>
