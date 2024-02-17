export default {
  name: 'daily-blog',
  type: 'document',
  title: 'Daily Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Post title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Post slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
