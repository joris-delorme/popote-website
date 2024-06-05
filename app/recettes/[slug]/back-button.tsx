"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export function BackButton() {
    const router = useRouter()
    return <Button variant="ghost" onClick={() => router.back()} className="mb-4 gap-1 flex w-fit"><ArrowLeft className="h-4 w-4" /> Retour</Button>
}