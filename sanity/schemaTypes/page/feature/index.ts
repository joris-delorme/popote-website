import { Wrench } from 'lucide-react'
import { defineType } from 'sanity'

export default defineType({
    name: 'feature',
    title: 'Features',
    type: 'document',
    icon: Wrench,
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
            name: 'enabled',
            type: 'boolean',
        },
        {
            name: 'navIcon',
            type: 'string',
        },
        {
            name: 'navCaption',
            type: 'string',
        },
        {
            name: 'hero',
            type: 'hero'
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
