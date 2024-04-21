"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Share } from "lucide-react";
import { toast } from "sonner";

export function ShareButton({ className, text }: { className?: string, text?: string }) {

    const haneler = async () => {
        try {
            console.log(document.title);
            console.log(document.querySelector('meta[name="description"]')?.getAttribute("content"));
            console.log(window.location.href);
            
            await navigator.share({
                title: document.title,
                //meta description
                text: document.querySelector('meta[name="description"]')?.getAttribute("content") || "",
                url: window.location.href
            })
        } catch (err) {
            toast.error("Impossible de partager cette page...")
        }
    }

    return (
        <Button onClick={haneler} variant="outline" className={cn(className, "gap-2")}>Partager {text} <Share className="w-4 h-4" /></Button>
    )
}