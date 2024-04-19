import { defineField } from "sanity";

export default defineField({
    name: "faq",
    title: "FAQ",
    type: "object",
    fields: [
        {
            name: 'tagline',
            type: 'string'
        },
        {
            name: 'heading',
            type: 'string'
        },
        {
            name: 'faq_contents',
            type: 'array',
            of: [
                {
                    name: 'faq_content',
                    type: 'object',
                    fields: [
                        {
                            name: 'question',
                            type: 'string',
                        },
                        {
                            name: 'answer',
                            type: 'text',
                        },
                    ],
                },
            ],
        },
    ],
})