import { defineType } from "sanity";

export default defineType({
    name: 'author',
    title: 'Author',
    type: 'document',
    //icon: Scale,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
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
            name: 'nom',
            type: 'string'
        },
        {
            name: 'prenom',
            type: 'string'
        },
        {
            name: 'occupation',
            type: 'string'
        },
        {
            name: 'pp',
            title: 'Profile Picture',
            type: 'image'
        },
        {
            name: 'description',
            type: 'text'
        },
    ],
})
