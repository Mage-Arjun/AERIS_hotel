import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// GROQ Queries
export const suitesQuery = `*[_type == "suite"] | order(order asc)`;
export const suiteBySlugQuery = `*[_type == "suite" && slug.current == $slug][0]`;
export const experiencesQuery = `*[_type == "experience"]`;
export const diningQuery = `*[_type == "dining"]`;
export const journalQuery = `*[_type == "journal"] | order(publishedAt desc)`;
export const testimonialsQuery = `*[_type == "testimonial"] | order(order asc)`;
export const homepageQuery = `*[_type == "homepage"][0]`;
export const navigationQuery = `*[_type == "navigation"]`;