export default {
  name: 'dining',
  title: 'Dining',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    { name: 'story', title: 'Story', type: 'text' },
    { name: 'chef', title: 'Chef', type: 'string' },
    { name: 'philosophy', title: 'Philosophy', type: 'text' },
    { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] },
    { name: 'reservation', title: 'Reservation Required', type: 'boolean', initialValue: true },
    { name: 'operatingHours', title: 'Operating Hours', type: 'string' },
    { name: 'dressCode', title: 'Dress Code', type: 'string' },
    { name: 'dietaryInfo', title: 'Dietary Information', type: 'text' },
    { name: 'menu', title: 'Menu', type: 'array', of: [{ type: 'object', fields: [
      { name: 'name', title: 'Name', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'price', title: 'Price', type: 'string' },
      { name: 'category', title: 'Category', type: 'string' },
    ]}]},
  ],
};