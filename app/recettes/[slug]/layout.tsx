import { ReactNode } from "react";
import { BackButton } from "./back-button";

export default function layout({ params, children }: { params: { username: string }, children: ReactNode }) {
    return (
        <main className="h-[100svh] w-full px-4">
            <article className="max-w-xl mx-auto pt-[150px] pb-20" itemScope itemType="https://schema.org/Recipe">
                <BackButton />
                {children}
            </article>
        </main>
    )
}