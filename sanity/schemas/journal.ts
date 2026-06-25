export default {
  name: 'journal',
  title: 'Journal',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'content', title: 'Content', type: 'blockContent' },
    { name: 'heroImage', title: 'Hero Image', type: 'image', options: { hotspot: true } },
    { name: 'readingTime', title: 'Reading Time (min)', type: 'number' },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['architecture', 'travel', 'food', 'culture', 'design', 'photography'] } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'related', title: 'Related Articles', type: 'array', of: [{ type: 'reference', to: [{ type: 'journal' }] }] },
  ],
  orderings: [{ title: 'Publish Date', name: 'publishedAt', by: [{ field: 'publishedAt', direction: 'desc' }] }],
};