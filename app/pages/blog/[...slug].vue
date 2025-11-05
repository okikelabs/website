<script lang="ts" setup>
import { formatDate } from '@@/lib/utils'

const route = useRoute()

// console.log(route.params.slug)

// const slug = route.path.split('/').pop()

const slugParam = computed(() => {
  const s = route.params.slug as string | string[] | undefined
  return Array.isArray(s) ? s[s.length - 1] : s
})

console.log(slugParam)

// const { data: page } = await useAsyncData(`blog-${slug}`, () => {
//   return queryCollection('blog').where('slug', '=', route.path.split('/').pop()).first()
// })

const { data: page } = await useAsyncData(
  () => route.path,
  () => queryCollection('blog').where('slug', '=', route.path.split('/').pop()).first()
)

// const { title, description, author, readingTime, sitemap } = page.value ?? ({} as any)

const { title, description, author, sitemap, readingTime } = page.value ?? ({} as any)

console.log(page.value)

const readingTimeLabel = computed(() => {
  if (!readingTime) return ''
  return `${readingTime} min${readingTime > 1 ? 's' : ''} read`
})

useSeoMeta({
  titleTemplate: '%s | Okike Labs Blog',
  title,
  description,
  ogType: 'article',
})
</script>

<template>
  <main class="prose mx-auto">
    <article>
      <p class="text-gray-600 text-sm text-center mb-1">
        {{ 'Last updated on ' + formatDate(sitemap.lastmod) }}
      </p>

      <h1 class="text-4xl! md:text-center">{{ title }}</h1>

      <div class="flex items-center justify-center gap-x-2 mb-0 font-medium">
        <span class="text-gray-600 text-sm flex items-center gap-2">
          <Avatar class="size-6">
            <AvatarImage src="/raymond.jpg" alt="Emmanuel Raymond" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span>
            {{ '' + author }}
          </span>
        </span>

        <span class="text-gray-500">•</span>

        <span v-if="readingTimeLabel" class="text-gray-600 text-sm flex items-center gap-1">
          <svg
            data-testid="geist-icon"
            height="16"
            stroke-linejoin="round"
            viewBox="0 0 16 16"
            width="16"
            aria-hidden="true"
            style="color: var(--ds-gray-900)"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M5.35066 2.06247C5.96369 1.78847 6.62701 1.60666 7.32351 1.53473L7.16943 0.0426636C6.31208 0.1312 5.49436 0.355227 4.73858 0.693033L5.35066 2.06247ZM8.67651 1.53473C11.9481 1.87258 14.5 4.63876 14.5 8.00001C14.5 11.5899 11.5899 14.5 8.00001 14.5C4.63901 14.5 1.87298 11.9485 1.5348 8.67722L0.0427551 8.83147C0.459163 12.8594 3.86234 16 8.00001 16C12.4183 16 16 12.4183 16 8.00001C16 3.86204 12.8589 0.458666 8.83059 0.0426636L8.67651 1.53473ZM2.73972 4.18084C3.14144 3.62861 3.62803 3.14195 4.18021 2.74018L3.29768 1.52727C2.61875 2.02128 2.02064 2.61945 1.52671 3.29845L2.73972 4.18084ZM1.5348 7.32279C1.60678 6.62656 1.78856 5.96348 2.06247 5.35066L0.693033 4.73858C0.355343 5.4941 0.131354 6.31152 0.0427551 7.16854L1.5348 7.32279ZM8.75001 4.75V4H7.25001V4.75V7.875C7.25001 8.18976 7.3982 8.48615 7.65001 8.675L9.55001 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75001 7.625V4.75Z"
              fill="currentColor"
            ></path>
          </svg>
          <span>
            {{ readingTimeLabel }}
          </span>
        </span>
      </div>

      <ContentRenderer v-if="page" :value="page" class="text-[18px]" />
    </article>
  </main>
</template>
