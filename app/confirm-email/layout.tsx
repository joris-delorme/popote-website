import { Icons } from "@/components/icons";
import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-[100svh] py-20 w-full flex items-center justify-center px-4">
            <div className=" w-full flex flex-col max-w-md mx-auto py-10 px-6 rounded-2xl drop-shadow-2xl bg-background">
                <Icons.logo className="w-16 h-16 mx-auto mb-6" />
                {children}
            </div>
        </div>
    )
}