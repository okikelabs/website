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
  <li class="flex flex-col">
    <a
      :href="url"
      target="_blank"
      class="bg-white flex items-center p-4 rounded-lg shadow-sm hover:shadow-lg transition duration-300 relative flex-1"
    >
      <div
        class="flex items-center justify-center flex-shrink-0 w-16 h-16 bg-black/5 rounded-full"
      >
        <img :src="`/${icon}`" class="w-10 h-10" :alt="title + ' icon'" />
      </div>

      <div class="ml-4 flex">
        <div class="flex-1">
          <div class="flex items-center justify-start space-x-2">
            <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
            <span
              class="px-2 py-1 text-xs font-medium text-gray-800 bg-gray-100 rounded-full"
            >
              {{ year }}
            </span>
          </div>
          <p class="text-[15px] text-gray-500/90 pt-2">
            {{ description }}
          </p>
        </div>

        <div>
          <Badge
            class="flex items-center flexs-shrink-0 text-[11px] whitespace-nowrap font-bold"
            :class="
              status === 'active'
                ? 'bg-green-300 hover:bg-green-300 text-foreground/50 '
                : 'bg-[#EFC764] hover:bg-[#EFC764] text-[#937a3d]'
            "
          >
            {{ status === 'active' ? 'Active' : 'Coming soon' }}
          </Badge>
          <!-- <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <div
                  class="pulse relative w-[16px] h-[16px] flex flex-shrink-0"
                  :class="status === 'active' ? 'bg-green-400' : 'bg-[#EFC764]'"
                >
                  <span style="--i: 0"></span>
                  <span style="--i: 1"></span>
                  <span style="--i: 2"></span>
                  <span style="--i: 3"></span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p class="text-foreground/70">
                  {{ status === 'active' ? 'Active' : 'Coming soon' }}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider> -->
        </div>
      </div>
    </a>
  </li>
</template>

<style scoped>
.pulse {
  border-radius: 50%;
}

.pulse span {
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  opacity: 0.8;
  animation: pulse 4s ease-out infinite;
  animation-delay: calc(1s * var(--i));
  display: flex;
  flex-shrink: 0;
}

@keyframes pulse {
  100% {
    opacity: 0;
    transform: scale(2);
  }
}
</style>
