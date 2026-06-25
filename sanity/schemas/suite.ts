export default {
  name: 'suite',
  title: 'Suite',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'description', title: 'Description', type: 'text' },
    { name: 'excerpt', title: 'Excerpt', type: 'text' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'floorSize', title: 'Floor Size', type: 'string' },
    { name: 'view', title: 'View', type: 'string' },
    { name: 'amenities', title: 'Amenities', type: 'array', of: [{ type: 'string' }] },
    { name: 'architecture', title: 'Architecture', type: 'text' },
    { name: 'availability', title: 'Available', type: 'boolean', initialValue: true },
    { name: 'pricing', title: 'Pricing', type: 'string' },
    { name: 'specifications', title: 'Specifications', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'value', title: 'Value', type: 'string' },
    ]}]},
    { name: 'order', title: 'Order', type: 'number', hidden: true },
  ],
  preview: {
    select: { title: 'title', media: 'images.0' },
  },
};