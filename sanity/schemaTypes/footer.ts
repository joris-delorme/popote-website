import { PanelBottomDashed } from 'lucide-react'
import { defineType } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    icon: PanelBottomDashed,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'marquees',
            type: 'array',
            of: [
                {
                    name: 'marquee',
                    type: 'string',
                }
            ],
        },
        {
            name: 'top',
            type: 'object',
            fields: [
                {
                    name: 'caption',
                    type: 'string',
                },
                {
                    name: 'cta',
                    type: 'string',
                }
            ]
        },
        {
            name: 'links',
            type: 'array',
            of: [
                {
                    name: 'column',
                    type: 'object',
                    fields: [
                        {
                            name: "title",
                            type: "string"
                        },
                        {
                            name: "basePath",
                            type: "string"
                        },
                        {
                            name: "links",
                            type: "array",
                            of: [
                                {
                                    title: 'Internal Link',
                                    name: 'internalLink',
                                    description: 'Select pages for navigation',
                                    type: 'reference',
                                    to: [{ type: "legals" }, { type: "feature" }]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: 'copyright',
            type: 'string',
            initialValue: 'Copyright © 2024 Ghost Genius. All rights reserved.'
        }
    ],
})
