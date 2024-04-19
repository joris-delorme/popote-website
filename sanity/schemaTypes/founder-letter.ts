import { Mail } from "lucide-react";
import { defineType } from "sanity";

export default defineType({
    name: 'founderLetter',
    title: 'Founder Letter',
    type: 'object',
    icon: Mail,
    fields: [
        {
            name: 'founders',
            type: 'array',
            of: [
                {
                    name: 'founder',
                    type: 'reference',
                    to: { type: 'author' }
                }
            ],
        },
        {
            name: 'tagline',
            type: 'string',
            initialValue: 'Les Co-fondateurs de Ghost Genius'
        },
        {
            name: "content",
            type: "array",
            of: [{
                type: 'block',
                styles: [], // Disallow all styles (headings, block quotes, etc.)
                lists: [], // Disallow lists (ordered, unordered)
                marks: {
                    // Disallow all marks (text styling like bold, italic, etc.)
                    decorators: [],
                    annotations: [],
                }
            }]
        }
    ]
})
