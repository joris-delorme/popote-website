import { defineType } from "sanity";

export default defineType({
    name: 'article',
    title: 'Article',
    type: 'object',
    //icon: Scale,
    fields: [
        {
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'meta_description',
            type: 'text',
        },
        {
            name: 'cover',
            type: 'image'
        },
        {
            title: 'Content',
            name: 'content',
            type: 'array',
            of: [{
                type: 'block',
            }],
            validation: rule => rule.custom((blocks: any[]) => {
                const emptyBlocks = (blocks || []).filter((block: any) =>
                block._type === 'block' && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(block.style) &&
                    block.children.every((span: any) => span.marks.length !== 0)
                )

                console.log("emptyBlocks", emptyBlocks)
                

                const emptyPaths = emptyBlocks.map(
                    (block: any, index: any) => [{ _key: (block as any)._key }] || [index]
                )

                return emptyPaths.length === 0
                    ? true
                    : {
                        message: "Titles musn't be styled, remove bold, italic, underline, etc.",
                        paths: emptyPaths
                    }
            })
        }
    ],
})
