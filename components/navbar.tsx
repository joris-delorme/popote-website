'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FigmaSquircle } from "@/components/ui/figma-squircle"
import MaxWidthWrapper from "./max-width-wrapper";

const linkCN = "hover:opacity-50 transition-all"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    return (
        <>
            <nav className="py-4 drop-shadow-2xl flex w-full justify-between items-center fixed top-0 left-0 z-[999]">
                <MaxWidthWrapper>
                    <FigmaSquircle cornerRadius={15} className="h-[64px] px-4 md:px-8 flex w-full justify-between items-center bg-background">
                        <Link href='/' className="flex items-center gap-2 md:pl-0 pl-4">
                            <span className="font-black -mt-1 text-2xl font-serif">Popote</span>
                        </Link>
                        <ul className="gap-10 md:flex text-sm hidden items-center">
                            <li className={linkCN}><Link href='/recipes'>Recettes</Link></li>
                            <li className={linkCN}><Link href='/price'>Prix</Link></li>
                        </ul>

                        <button className="relative group md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all ring-opacity-30 duration-200">
                                <div className="flex flex-col justify-between w-[26px] h-[17px] transform transition-all duration-300 origin-center overflow-hidden">
                                    <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left")}></div>
                                    <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 rounded transform transition-all duration-300 delay-75")}></div>
                                    <div className={cn(menuOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left delay-150")}></div>

                                    <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-1/2 -translate-x-10 flex w-0", menuOpen && "translate-x-0 w-12")}>
                                        <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300", menuOpen && "rotate-45")}></div>
                                        <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300", menuOpen && "-rotate-45")}></div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </FigmaSquircle>
                    <ul className={cn("md:hidden transition-all duration-1000 ease-in-out h-screen w-full fixed justify-end pb-40 pl-10 text-3xl font-black flex flex-col gap-10 top-0 left-0 bg-background/80 z-[99] backdrop-blur-xl", menuOpen ? "translate-y-0" : "-translate-y-full")}>
                        <li className={linkCN}><Link href='/questions'>Questions</Link></li>
                        <li className={linkCN}><Link href='/formations'>Formations</Link></li>
                    </ul>
                </MaxWidthWrapper>
            </nav>
        </>
    )
}