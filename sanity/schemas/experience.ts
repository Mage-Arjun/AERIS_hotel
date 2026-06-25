export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['nature', 'private-dining', 'photography-tours', 'boat-excursions', 'spa', 'yoga', 'sunrise-walks', 'cooking-classes', 'local-culture'] } },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'duration', title: 'Duration', type: 'string' },
    { name: 'pricing', title: 'Pricing', type: 'string' },
    { name: 'includes', title: 'Includes', type: 'array', of: [{ type: 'string' }] },
    { name: 'maxGuests', title: 'Max Guests', type: 'number' },
  ],
};