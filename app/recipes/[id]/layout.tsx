import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <main className="h-[100svh] w-full px-4">
        <article className="max-w-xl mx-auto py-[100px]">
            <Link className={cn(buttonVariants({ variant: "ghost" }), "mb-4 gap-1 flex w-fit")} href="/recipes"><ArrowLeft className="h-4 w-4" /> Retour</Link>
            {children}
            </article>
        </main>
    )
}