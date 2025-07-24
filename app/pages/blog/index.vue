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

const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<template>
  <!-- <div> -->
  <!-- Blog posts grid -->
  <div class="max-w-7xl mx-auto container px-4 sm:px-6 lg:px-8 pb-16">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NuxtLink
        v-for="(post, index) in posts"
        :key="index"
        :to="`/blog/${post.slug}`"
        class="group cursor-pointer"
      >
        <div
          class="bg-gray-200 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden relative"
        >
          <NuxtImg
            :src="post.image?.src || '/images/placeholder.jpg'"
            :alt="post.image?.alt || post.title"
            width="350"
            height="200"
            class="w-full h-full object-cover opacity-20"
          />
          <div class="absolute">
            <div class="w-8 h-8 border-2 border-gray-400 rounded flex items-center justify-center">
              <div class="w-3 h-3 bg-gray-400 rounded-sm" />
            </div>
          </div>
        </div>

        <!-- Post metadata -->
        <div class="flex items-center gap-3 mb-4 font-medium">
          <span class="text-gray-600 text-sm">{{ formatDate(post.date) }}</span>
          <span class="text-gray-500">•</span>
          <span class="text-gray-600 text-sm">{{ post.category }}</span>
        </div>

        <!-- Post title -->
        <h3 class="text-xl font-semibold mb-3 group-hover:text-gray-700 transition-colors">
          {{ post.title }}
        </h3>

        <!-- Post description -->
        <p class="text-gray-600 leading-relaxed">{{ post.description }}</p>
      </NuxtLink>
    </div>
  </div>
  <!-- </div> -->
</template>
