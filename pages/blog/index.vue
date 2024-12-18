<script setup>
const contentQuery = await queryContent('blog').sort({ date: 1 }).find()
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
      <li
        v-for="article in contentQuery"
        :key="article.slug"
        class="text-lg font-medium"
      >
        <NuxtLink :to="`/blog/${article.slug}`">{{ article.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
