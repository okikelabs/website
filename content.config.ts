import { defineContentConfig, defineCollection, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        type: 'page',
        source: 'blog/**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string(),
          draft: z.boolean().default(true),
          date: z.date(),
          author: z.array(z.string()),
          slug: z.string(),
          category: z.string(),
          // readingTime: z.number(),
          image: z.object({
            src: z.string(),
            alt: z.string(),
          }),
        }),
      })
    )
  }
})
