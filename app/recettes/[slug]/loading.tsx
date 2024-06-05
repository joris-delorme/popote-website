import { FigmaSquircle } from "@/components/ui/figma-squircle";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <>
        <div className="mb-4 gap-2 flex">
            <Skeleton className="w-[50px] h-[50px] rounded-full" />
            <div className="">
                <Skeleton className="h-6 w-[120px] mb-2" />
                <Skeleton className="w-[160px] h-4" />
            </div>
        </div>
        <FigmaSquircle>
            <Skeleton className="w-full h-[400px] mb-4"></Skeleton>
        </FigmaSquircle>
        <div className="sm:text-lg text-base">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="w-full h-6 mt-2" />
            <Skeleton className="w-1/2 h-6 mt-2 mb-10" />
        </div>
    </>
    )
}