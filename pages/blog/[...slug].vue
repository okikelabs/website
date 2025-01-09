<script lang="ts" setup></script>

<template>
  <main class="prose mx-auto">
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="text-5xl text-center">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" class="text-[17px]" />
      </article>
    </ContentDoc>
  </main>
</template>
