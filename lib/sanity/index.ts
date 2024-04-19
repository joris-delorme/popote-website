import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { createClient } from 'next-sanity'

export const sanity = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-03-20", // https://www.sanity.io/docs/api-versioning
    useCdn: true // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})


const builder = imageUrlBuilder(sanity)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
