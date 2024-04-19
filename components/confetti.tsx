"use client"

import { confetti } from "@tsparticles/confetti";
import { useEffect, useRef } from "react";

export function Confetti({ className="", success }: { className?: string, success: boolean }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!success || !ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const x = (rect.x + rect.width / 2) / window.innerWidth
        const y = (rect.y + rect.height) / window.innerHeight

        confetti({
            particleCount: 150,
            spread: 60,
            origin: {
                x: x,
                y: y
            },
            zIndex: 10
        })
    }, [success])

    return <div className={className} ref={ref} />
}