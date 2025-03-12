<script setup>
import projects from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div>
    <section class="flex flex-col gap-4 text-foreground/70 text-lg">
      <h1>
        Okikelabs is a startup studio that specializes in building products with
        a global reach. We are not an agency or dev shop, instead we’re focused
        on creating our own products that bring genuine value and stand the test
        of time while being continuously improved through learning and
        iteration.
      </h1>
      <h2>
        We’re a small, bootstrapped team of builders united by our passion for
        turning ideas into products that solve real-world problems. Our approach
        is to focus on creating meaningful solutions rather than being confined
        to any specific niche or trend.
      </h2>
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
  </div>
</template>
