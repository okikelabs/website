<script lang="ts" setup>
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="max-w-4xl mx-auto py-20 px-4">
    <!--  -->
    <!-- navigation -->
    <header class="w-full">
      <nav class="flex justify-between items-center">
        <div class="flex items-center">
          <nuxt-img src="/images/icon.svg" width="32" height="32" />
          <span class="text-3xl font-bold">Okikelabs</span>
        </div>

        <!-- <div>
          <nuxt-link class="text-lg underline" to="/blog">Blog</nuxt-link>
        </div> -->
      </nav>
    </header>

    <main class="flex flex-col mt-12">
      <section class="flex flex-col gap-4 text-foreground/70">
        <p>
          Okikelabs is a product studio operating out of Nigeria, committed to
          building purposeful SaaS solutions with a global reach. Our approach
          goes beyond trends — we’re focused on creating products that bring
          genuine value and stand the test of time.
        </p>

        <p>
          We’re a team of two passionate, bootstrapped developers, who turn
          ideas into meaningful SaaS products that solve real-world problems. We
          prioritize innovation over boundaries, focusing on meaningful
          solutions rather than being confined to any specific niche or outcome.
        </p>
      </section>

      <hr class="my-8 border-gray-200/70" />

      <section class="">
        <h2 class="text-4xl font-semibold text-blue-primary">Portfolio</h2>

        <ul class="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full mt-8">
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            :title="project.title"
            :description="project.description"
            :url="project.url"
            :icon="project.icon"
            :year="project.year"
            :status="project.status"
          ></ProjectCard>
        </ul>
      </section>
    </main>
  </div>
</template>
