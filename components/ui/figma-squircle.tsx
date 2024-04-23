"use client"

import { getSvgPath } from "@/utils/figma-squircle";
import { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react"

const useResponsiveDimensions = (ref: RefObject<HTMLElement>, trigger?: any) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

    useEffect(() => {
        console.log("Ref changed");

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
    }, [ref, trigger])

    return dimensions
}


export function FigmaSquircle({ cornerRadius = 30, cornerSmoothing = 1, className = "", trigger, children }: { cornerRadius?: number, cornerSmoothing?: number, className?: string, trigger?: any, children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)
    const dimensions = useResponsiveDimensions(ref, trigger)
    console.log(ref.current?.offsetHeight)

    const svgPath = useMemo(() => {
        return getSvgPath({
            width: dimensions.width,
            height: dimensions.height,
            cornerRadius: cornerRadius,
            cornerSmoothing: cornerSmoothing
        })
    }, [dimensions.width, dimensions.height, cornerRadius, cornerSmoothing, ref, trigger])

    return (
        <div className={className} style={{ clipPath: `path('${svgPath}')` }} ref={ref}>{children}</div>
    )
}