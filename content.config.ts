import { defineCollection, z } from '@nuxt/content'

// Export collections
export const collections = {
  // Define collection using `defineCollection` utility
  blog: defineCollection({
    // Specify the type of content in this collection
    type: 'page',
    // Load every file matching this pattern
    source: 'blog/**/*.md',
    // Define custom schema for this collection
    schema: z.object({
      title: z.string(),
      description: z.string(),
      draft: z.boolean().default(false),
      date: z.date(),
      author: z.array(z.string()),
      slug: z.string(),
      image: z.object({
        src: z.string(),
        alt: z.string(),
      }),
    }),
  }),
}
