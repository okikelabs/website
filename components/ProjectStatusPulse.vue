<script lang="ts" setup>
const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value: string) => {
      return [
        'active',
        'coming-soon',
        'discontinued',
        'acquired',
        'beta',
        'maintenance',
        'deprecated',
      ].includes(value.toLowerCase())
    },
  },
})
</script>

<template>
  <TooltipProvider>
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
  </TooltipProvider>
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
