import { defineField } from "sanity";

export default defineField({
    name: 'hero',
    type: 'object',
    fields: [
        {
            name: 'tagline',
            type: 'string'
        },
        {
            name: 'heading',
            type: 'string',
            description: 'Wrap the underline text in *asterisks*.',
            validation: (Rule) => Rule.required().max(60).warning(`A title shouldn't be more than 60 characters.`)
        },
        {
            name: 'caption',
            type: 'text'
        },
        {
            name: 'cta',
            type: 'string'
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
        }
    ]
})