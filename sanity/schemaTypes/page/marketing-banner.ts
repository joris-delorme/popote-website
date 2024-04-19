import { defineType } from "sanity";

export default defineType({
    name: 'marketing_banner',
    title: 'Marketing Banner',
    type: 'document',
    //icon: Scale,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'content',
            type: 'hero'
        }
    ],
})
