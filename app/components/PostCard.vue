<script setup lang="ts">
import { formatDate } from '@@/lib/utils'
defineProps<{
  post: {
    slug: string
    title: string
    description: string
    date: string
    image?: { src?: string; alt?: string }
    category?: string
  }
}>()
</script>

<template>
  <NuxtLink :to="`/blog/${post.slug}`" class="group cursor-pointer">
    <div
      class="bg-gray-200 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden relative"
    >
      <NuxtImg
        :src="post.image?.src"
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
    <div class="flex items-baseline gap-2 mb-4 font-medium">
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
</template>
