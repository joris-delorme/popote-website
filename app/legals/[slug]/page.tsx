import { sanity } from "@/lib/sanity"
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { PortableText } from '@portabletext/react'
import { TableOfContents } from "./table-of-contents";
import { q } from "groqd";

const portableTextComponents = {
    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }: { children: ReactNode }) => <h1 className="text-2xl">{children}</h1>,
        blockquote: ({ children }: { children: ReactNode }) => <blockquote className="border-l-purple-500">{children}</blockquote>,
        block: ({ children }: { children: ReactNode }) => <div className="border-l-4 border-purple-500">{children}</div>,
        // Ex. 2: rendering custom styles
        h2: ({ ...props }: { children: ReactNode }) => {
            console.log(props.children);

            return <h2 id={typeof (props.children as any[])[0] === "string" ? (props.children as string[])[0].replaceAll(" ", "-").replaceAll(".", "").toLowerCase() : ""} className="font-black text-3xl pt-16">{props.children}</h2>
        },
        h3: ({ ...props }: { children: ReactNode }) => {
            return <h3 className="font-bold text-3xl">{props.children}</h3>
        },
        normal: ({ children }: { children: ReactNode }) => <p className="mt-6 leading-relaxed">{children}</p>,
    },
    list: {
        bullet: ({ children }: { children: ReactNode }) => <ul className="list-inside list-disc">{children}</ul>,
        number: ({ children }: { children: ReactNode }) => <ol className="mt-lg">{children}</ol>
    },
    listItem: {
        bullet: ({ children }: { children: ReactNode }) => <li>{children}</li>
    },
}

export default async function page({ params }: { params: { slug: string } }) {

    const { query, schema } = q("*")
        .filterByType("legals")
        .filter(`slug.current == "${params.slug}"`)
        .grab({
            title: q.string(),
            _updatedAt: q.date(),
            content: ["article.content", q.contentBlocks()],
            description: ["article.description", q.string().nullable()],
        }).nullable()

    const result = schema.safeParse(await sanity.fetch(query))

    if (!result.success || !result.data) {
        //console.error(result?.success)
        return null
    }

    const page = result.data[0]

    return (
        <div className="py-20 sm:py-40 flex px-4 gap-10 relative max-w-6xl mx-auto flex-col">
            <div className="flex flex-col gap-20 w-full">
                <h1 className="font-black text-5xl text-center">{page.title}</h1>
                <div className="relative w-full h-full grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-1 gap-12 items-start">
                    <TableOfContents />
                    <div className="xl:col-span-3 lg:col-span-2 md:col-span-1 flex flex-1 flex-col max-w-2xl mx-auto">
                        <div className="grid gap-6 text-lg">
                            <p className="italic">
                                <em>Mis à jour le {new Date(page._updatedAt).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</em>
                            </p>
                            <p>
                                {page?.description}
                            </p>
                        </div>
                        <PortableText
                            value={page.content}
                            //@ts-ignore
                            components={portableTextComponents}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}