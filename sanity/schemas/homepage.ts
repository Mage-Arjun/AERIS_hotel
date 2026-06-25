export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string', initialValue: 'Homepage Content' },
    { name: 'hero', title: 'Hero Section', type: 'object', fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'subtitle', title: 'Subtitle', type: 'string' },
      { name: 'backgroundImage', title: 'Background Image', type: 'image', options: { hotspot: true } },
      { name: 'backgroundVideo', title: 'Background Video URL', type: 'url' },
    ]},
    { name: 'philosophyQuote', title: 'Philosophy Quote', type: 'object', fields: [
      { name: 'text', title: 'Quote Text', type: 'text' },
      { name: 'author', title: 'Author', type: 'string' },
    ]},
    { name: 'seo', title: 'SEO', type: 'object', fields: [
      { name: 'title', title: 'Meta Title', type: 'string' },
      { name: 'description', title: 'Meta Description', type: 'text' },
      { name: 'ogImage', title: 'OG Image', type: 'image' },
    ]},
  ],
};