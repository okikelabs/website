<template>
  <main class="prose mx-auto">
    <!-- <ContentDoc /> -->
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1>{{ doc.title }}</h1>
        <ContentRenderer :value="doc" class="text-[17px]" />
      </article>
    </ContentDoc>
  </main>
</template>
