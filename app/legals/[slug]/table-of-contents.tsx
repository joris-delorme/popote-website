"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const useScrollSpy = (ids: string[], options: { rootMargin: string }) => {
    const [activeId, setActiveId] = useState('')
    const observer = useRef()

    useEffect(() => {
        const elements = ids.map((id) =>
            document.getElementById(id)
        );

        // @ts-ignore
        observer.current?.disconnect()
        // @ts-ignore
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry?.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, options);
        elements.forEach((el) => {
            if (el) {
                // @ts-ignore
                observer.current?.observe(el)
            }
        });
        // @ts-ignore
        return () => observer.current?.disconnect()
    }, [ids, options]);
    return activeId;
}

export function TableOfContents({ }) {

    const [headings, setHeadings] = useState<{
        id: string;
        text: string;
    }[]>([])

    const activeId = useScrollSpy(
        headings.map(({ id }) => id),
        { rootMargin: "0% 0% -100% 0%" }
    );

    useEffect(() => {        
        const elements = Array.from(document.querySelectorAll("h2"))
            .filter((element) => element.id)
            .map((element) => ({
                id: (element.textContent ?? "").replaceAll(" ", "-").replaceAll(".", "").toLowerCase(),
                text: element.textContent ?? "",
            }));
        setHeadings(elements);
    }, [])

    return (
        <nav className="sticky top-24 xl:col-span-2 lg:col-span-1 lg:flex flex-col hidden lg:flex-none">
            <ScrollArea className="max-h-[90vh] text-sm">
                <h3 className="font-bold text-muted-foreground uppercase mb-4">Content</h3>
                <ul className="grid gap-3">
                    {headings.map(heading => (
                        <li key={heading.id} className={cn(activeId === heading.id && "", "relative w-fit last:mb-4")}>
                            <a href={`#${heading.id}`} className="line-clamp-1">
                                {heading.text}
                            </a>
                            {
                            <div
                                className={cn(activeId === heading.id ? "w-full" : "w-0", "absolute -bottom-1 left-0 transition-all duration-500 z-[-1] h-[2px] bg-primary")}>
                            </div>
                            }
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </nav>
    )
}