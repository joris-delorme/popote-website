"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function BackButton() {
    const router = useRouter()
    return <Button variant="ghost" onClick={() => router.back()} className="mb-4 gap-1 flex w-fit"><ArrowLeft className="h-4 w-4" /> Retour</Button>
}