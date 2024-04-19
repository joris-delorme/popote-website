import { BadgeDollarSign } from "lucide-react";
import { defineType } from "sanity";

export default defineType({
    name: 'price',
    title: 'Price',
    type: 'document',
    icon: BadgeDollarSign,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200, // will be ignored if slugify is set
                slugify: input => input
                    .toLowerCase()
                    .replace(/\s+/g, '-')
                    .slice(0, 200)
            }
        },
        {
            name: 'table',
            type: 'array',
            of: [{
                name: 'section',
                type: 'object',
                fields: [
                    {
                        name: 'title',
                        type: 'string',
                    },
                    {
                        name: 'tag',
                        type: 'string',
                    },
                    {
                        name: 'features',
                        type: 'array',
                        of: [
                            {
                                type: 'object',
                                fields: [
                                    {
                                        name: 'name',
                                        type: 'string',
                                    },
                                    {
                                        name: 'unlimited',
                                        type: 'boolean',
                                        initialValue: false,
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }]
        },
        {
            name: 'founderLetter',
            title: 'Founder Letter',
            type: 'founderLetter',
        },
        {
            name: 'faq',
            type: 'faq',
            title: 'FAQ'
        },
        {
            title: 'Marketing Banner',
            name: 'marketing_banner',
            type: 'reference',
            to: { type: 'marketing_banner' }
        },
    ],
})
