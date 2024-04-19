// https://www.sanity.io/guides/creating-navigation-schema

import { Settings2 } from "lucide-react";

export default {
    name: 'siteConfig',
    type: 'document',
    title: 'Site Settings',
    icon: Settings2,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
        },
        {
            title: 'Main navigation',
            name: 'mainNav',
            description: 'Select menu for main navigation',
            type: 'reference',
            to: { type: 'navigation' },
        },
        {
            title: 'Home page',
            name: 'home',
            type: 'reference',
            to: { type: 'home' },
        },
        {
            name: "features",
            type: "array",
            title: "Features",
            of: [
                {
                    type: "reference",
                    to: { type: "feature" },
                },
            ],
        },
        {
            name: 'price',
            type: 'reference',
            to: { type: 'price' },
        },
        {
            name: 'footer',
            type: 'reference',
            to: { type: 'footer' },
        }
    ]
}