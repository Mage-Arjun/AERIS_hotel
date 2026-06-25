export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    { name: 'quote', title: 'Quote', type: 'text', validation: (Rule: any) => Rule.required() },
    { name: 'author', title: 'Author', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'order', title: 'Order', type: 'number', hidden: true },
  ],
  preview: {
    select: { title: 'author', subtitle: 'quote' },
  },
};