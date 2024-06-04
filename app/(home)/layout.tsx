import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
    return (
        <div className="dark bg-background text-foreground h-full w-full">
            {children}
        </div>
    )
}