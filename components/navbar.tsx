'use client'

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useEffect, useState } from "react";
import { FigmaSquircle } from "@/components/ui/figma-squircle"
import MaxWidthWrapper from "./max-width-wrapper";
import { buttonVariants } from "./ui/button";
import { MobileNavbar } from "./mobile-navbar";

const linkCN = "hover:opacity-50 transition-all"

const navbarConfig = [
    {
        href: '/recipes',
        label: 'Recettes'
    },
    {
        href: '/application',
        label: 'Application'
    },
    {
        href: '/support',
        label: 'Contact'
    }
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const [squircleTrigger, setSquircleTrigger] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setSquircleTrigger(old => !old)
            }, 700)
        } else {
            setSquircleTrigger(old => !old)
        }
    }, [isOpen])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <>
            <nav className="py-4 drop-shadow-[0_0_20px_rgba(0,0,0,0.15)] flex w-full justify-between items-center fixed top-0 left-0 z-[999]">
                <MaxWidthWrapper>
                    <FigmaSquircle trigger={squircleTrigger} cornerRadius={15} className={cn(isOpen ? "h-[95svh]" : "sm:h-[64px] h-[44px]", "")}>
                        <div className={cn(isOpen ? "h-[95svh]" : "sm:h-[64px] h-[44px]", "px-4 sm:px-8 flex w-full py-[2px] overflow-hidden relative transition-all duration-700 justify-between rounded-2xl sm:items-center items-start bg-background")}>
                            <div className="flex items-center justify-between w-full">
                                <Link href='/' className="flex items-center gap-2 md:pl-0 pl-2 relative z-10">
                                    <span className="font-black sm:-mt-1 sm:text-2xl text-xl font-serif">Popote</span>
                                </Link>
                                <ul className="sm:flex text-sm hidden items-center">
                                    {
                                        navbarConfig.map(({ href, label }, key) => (
                                            <li key={key}>
                                                <Link className={buttonVariants({ variant: "ghost" })} href={href}>{label}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <button className="relative group sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                                    <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ring-opacity-30 duration-200">
                                        <div className="flex flex-col justify-between w-[26px] h-[17px] transform transition-all duration-300 origin-center overflow-hidden">
                                            <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left")}></div>
                                            <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-8 rounded transform transition-all duration-300 delay-75")}></div>
                                            <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left delay-150")}></div>

                                            <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-1/2 -translate-x-10 flex w-0", isOpen && "translate-x-0 w-12")}>
                                                <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300", isOpen && "rotate-45")}></div>
                                                <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300", isOpen && "-rotate-45")}></div>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                            <ul className="absolute top-0 h-[90svh] pl-2 sm:hidden pb-10 flex gap-10 flex-col justify-end">
                                {
                                    navbarConfig.map(({ href, label }, key) => (
                                        <li key={key}>
                                            <Link className="text-3xl font-black" href={href}>{label}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </FigmaSquircle>
                </MaxWidthWrapper>
            </nav>
        </>
    )
}