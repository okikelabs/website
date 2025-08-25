<script setup>
import projects from '~/data/projects'

const { data: posts } = await useAsyncData('home', () => {
  return queryCollection('blog')
    .where('draft', '=', 0)
    .select('slug', 'title', 'description', 'date', 'image', 'category')
    .order('date', 'DESC')
    .limit(2)
    .all()
})
</script>

<template>
  <div>
    <section class="flex flex-col gap-4 text-lg text-foreground/70">
      <h1>
        Okikelabs is a startup studio that specializes in building products with a global reach. We
        are not an agency or dev shop, instead we’re focused on creating our own products that bring
        genuine value and stand the test of time while being continuously improved through learning
        and iteration.
      </h1>
      <h2>
        We’re a small, bootstrapped team of builders united by our passion for turning ideas into
        products that solve real-world problems. Our approach is to focus on creating meaningful
        solutions rather than being confined to any specific niche or trend.
      </h2>
    </section>

    <hr class="my-8 border-gray-200/70" />

    <section class="">
      <h2 class="text-3xl font-semibold text-blue-primary">Portfolio</h2>

      <ul class="grid grid-cols-1 gap-4 mt-8 w-full lg:grid-cols-2">
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

    <section class="mt-16 mb-20">
      <div class="flex justify-between items-center">
        <h2 class="text-3xl font-semibold text-blue-primary">Articles</h2>
        <Button as-child variant="outline">
          <NuxtLink to="/blog">See More</NuxtLink>
        </Button>
      </div>

      <div class="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
        <PostCard v-for="post in posts" :key="post.slug" :post="post" />
      </div>
    </section>
  </div>
</template>
