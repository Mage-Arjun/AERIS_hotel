export default {
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'items', title: 'Navigation Items', type: 'array', of: [{ type: 'object', fields: [
      { name: 'label', title: 'Label', type: 'string' },
      { name: 'href', title: 'Link', type: 'string' },
      { name: 'children', title: 'Sub-items', type: 'array', of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'href', title: 'Link', type: 'string' },
      ]}]},
    ]}]},
  ],
};