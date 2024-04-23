"use client"

import { getSvgPath } from "@/utils/figma-squircle";
import { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react"

const useResponsiveDimensions = (ref: RefObject<HTMLElement>) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        const updateDimensions = () => {
            if (ref.current) {
                setDimensions({
                    width: ref.current.offsetWidth,
                    height: ref.current.offsetHeight,
                })
            }
        }

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [ref])

    return dimensions
}


export function FigmaSquircle({ cornerRadius=30, cornerSmoothing=1, className="", children }: { cornerRadius?: number, cornerSmoothing?: number, className?: string, children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const dimensions = useResponsiveDimensions(ref)
    const svgPath = useMemo(() => getSvgPath({
        width: dimensions.width,
        height: dimensions.height,
        cornerRadius: cornerRadius,
        cornerSmoothing: cornerSmoothing
    }), [dimensions.width, dimensions.height, cornerRadius, cornerSmoothing])

    return (
        <div className={className} style={{clipPath: `path('${svgPath}')`}} ref={ref}>{children}</div>
    )
}