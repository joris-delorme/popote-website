import { defineType, defineField } from 'sanity'

export default defineType({
    title: 'Block Content',
    name: 'blockContent',
    type: 'object',
    fields: [
        {
            name: 'tagline',
            type: 'string',
        },
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            type: 'image',
            name: 'image',
            fields: [
                {
                    name: 'alt',
                    type: 'string'
                }
            ]
        },
    ]
})
