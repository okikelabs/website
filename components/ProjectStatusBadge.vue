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

interface StatusConfig {
  background: string
  text: string
}

interface StatusConfigMap {
  [key: string]: StatusConfig
}

const statusConfig: StatusConfigMap = {
  active: {
    background: 'bg-green-300 hover:bg-green-300',
    text: 'text-foreground/50',
  },
  'coming-soon': {
    background: 'bg-[#EFC764] hover:bg-[#EFC764]',
    text: 'text-[#937a3d]',
  },
  discontinued: {
    background: 'bg-red-200 hover:bg-red-200',
    text: 'text-red-700',
  },
  acquired: {
    background: 'bg-purple-200 hover:bg-purple-200',
    text: 'text-purple-700',
  },
  beta: {
    background: 'bg-blue-200 hover:bg-blue-200',
    text: 'text-blue-700',
  },
  maintenance: {
    background: 'bg-orange-200 hover:bg-orange-200',
    text: 'text-orange-700',
  },
  deprecated: {
    background: 'bg-gray-200 hover:bg-gray-200',
    text: 'text-gray-700',
  },
}

const badgeClasses = computed(() => {
  const config = statusConfig[props.status.toLowerCase()]
  console.log(config)
  return [config.background, config.text]
})

const displayText = computed((): string => {
  return props.status
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
})
</script>

<template>
  <Badge class="text-[11px] font-bold" :class="badgeClasses">
    {{ displayText }}
  </Badge>
</template>
