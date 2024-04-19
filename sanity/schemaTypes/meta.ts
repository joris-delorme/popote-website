import {defineType, defineArrayMember, defineField} from 'sanity'

export default defineType({
  title: 'Block Content',
  name: 'blockContent',
  type: 'object',
  fields: [
      {
        name: 'title',
        type: 'string',
      },
      {
        name: 'description',
        type: 'text',
      }
  ]
})
