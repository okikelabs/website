<script lang="ts" setup>
const props = defineProps({
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <li class="flex" :class="status === 'active' ? '' : 'opacity-50'">
    <a
      :href="url"
      target="_blank"
      class="bg-white flex items-start p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300 relative flex-1"
      rel="nofollow noopener noreferrer"
    >
      <!-- favicon for the project -->
      <div
        class="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-black/5 rounded-full"
      >
        <img :src="`/${icon}`" class="w-10 h-10" :alt="title + ' icon'" />
      </div>

      <div class="ml-4 flex flex-col w-full">
        <div class="flex justify-between items-center w-full">
          <div class="flex items-center justify-start space-x-2 flex-1">
            <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
            <span
              class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full"
            >
              {{ year }}
            </span>
          </div>

          <div class="">
            <ProjectStatusBadge :status="status" />
          </div>
        </div>

        <div>
          <p class="text-[15px] text-gray-500/90 pt-2">
            {{ description }}
          </p>
        </div>
      </div>
    </a>
  </li>
</template>
