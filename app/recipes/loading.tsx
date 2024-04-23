import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Badge } from "@/components/ui/badge";
import { FigmaSquircle } from "@/components/ui/figma-squircle";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
    return (
        <MaxWidthWrapper className="mt-60 mb-20">
            <div className=""></div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-16">
                {Array(10).map((key) => <div key={key} className="flex flex-col gap-4 group">
                    <div className="gap-2 flex items-center">
                        <Skeleton className="w-[35px] h-[35px] rounded-full" />
                        <div className="">
                            <Skeleton className="h-6 w-[120px] mb-2" />
                            <Skeleton className="w-[160px] h-4" />
                        </div>
                    </div>
                    <Skeleton className="bg-muted rounded-3xl aspect-square w-full" />

                    <div className="flex flex-col gap-3">
                        <Badge variant="secondary" className="w-fit"><span className="opacity-0">{(new Date()).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span></Badge>
                        <Skeleton className="h-10 w-full mb-2" />
                        <Skeleton className="w-full h-4" />
                        <Skeleton className="w-full h-4" />
                    </div>
                </div>)}
            </div>
        </MaxWidthWrapper>
    )
}