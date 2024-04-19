import { Compass } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    icon: Compass,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'navId',
            type: 'slug',
            title: "Navigation Id"
        },
        {
            name: "items",
            type: "array",
            title: "Navigation items",
            of: [
                {
                    name: 'navigationItem',
                    title: 'Navigation Item',
                    type: 'object',
                    icon: Compass,
                    fields: [
                        {
                            name: "text",
                            type: "string",
                            title: "Navigation Text"
                        },
                        {
                            name: 'link',
                            type: 'object',
                            title: 'Link',
                            fields: [
                                {
                                    title: 'Internal Link',
                                    name: 'internalLink',
                                    description: 'Select pages for navigation',
                                    type: 'reference',
                                    to: [{ type: 'home' }, { type: "legals"}]
                                },
                                {
                                    name: 'externalUrl',
                                    title: 'External URL',
                                    description: "Use fully qualified URLS for external link",
                                    type: 'url',
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ],
})
