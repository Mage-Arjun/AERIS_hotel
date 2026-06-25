import { type ClassValue, clsx } from 'clsx';

/**
 * Combines class names conditionally
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formats a date to a readable string
 */
export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculates reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generates a url for sanity images
 */
export function urlForImage(source: any): string {
  if (!source?.asset?._ref) return '';
  const [, id, dimensions] = source.asset._ref.split('-');
  const [width, height] = dimensions?.split('x') || ['1000', '750'];
  return `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}-${width}x${height}.webp`;
}

/**
 * Generates blur data URL for placeholder
 */
export function createBlurDataUrl(): string {
  return 'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAQAaJQBOgAAAAA==';
}

/**
 * Sanitizes a string for use as an HTML id
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}