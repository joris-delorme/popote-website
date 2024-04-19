import { Home } from 'lucide-react'
import { defineType } from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    icon: Home,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'hero',
            type: 'hero'
        },
        {
            name: 'features',
            type: 'array',
            of: [
                {
                    name: 'blockContent',
                    type: 'blockContent',
                }
            ]
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
