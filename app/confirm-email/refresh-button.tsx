"use client"

import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useState } from "react";

export function RefreshButton() {
    
    const [isLoading, setIsLoading] = useState(false)

    const handler = async () => {
        setIsLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000))
        window.location.reload()
        //setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <Button disabled={isLoading} className="gap-2" onClick={handler}>
            {isLoading && <Loader />} Réessayer
        </Button>
    )
}