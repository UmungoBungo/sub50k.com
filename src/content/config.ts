// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const artistCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    forFansOf: z.array(z.string()),
    image: z.string().optional(),
    publishDate: z.coerce.date(),
    monthlyListeners: z.number(),
    banner: z.string(),
    avatar: z.string()
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'artist': artistCollection,
};