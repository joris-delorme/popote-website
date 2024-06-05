"use client"

import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const navbarConfig = [
    {
        href: '/recettes',
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

const navigationMenuTriggerStyle = cva(
    "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground text-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
)

export function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <nav className={cn(pathname === "/" && "dark", 'fixed inset-x-0 top-0 z-30 w-full')}>
            <MaxWidthWrapper className={cn(isOpen ? "h-[100svh]" : "sm:h-[100px] h-[75px]", "flex w-full justify-between transition-all sm:overflow-visible overflow-hidden ease-in-out duration-500 sm:items-center items-start fixed top-0 left-1/2 -translate-x-1/2 bg-background z-[999]")}>
                <div className="flex bg-background relative z-10 sm:h-[100px] h-[75px] justify-between w-full items-center">
                    <Link
                        href='/'
                        className='z-40'
                    >
                        <Icons.logo className="sm:h-[54px] h-[46px] sm:w-[54px] w-[46px]" />
                    </Link>

                    <NavigationMenu className="hidden sm:flex">
                        <NavigationMenuList>
                            {navbarConfig.map(({ href, label }, key) => (
                                <Link href={href} key={key} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {label}
                                    </NavigationMenuLink>
                                </Link>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu >

                    <button className="relative group sm:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[40px] h-[40px] transform transition-all ring-opacity-30 duration-200">
                            <div className="flex flex-col justify-between w-[26px] h-[17px] transform transition-all duration-300 origin-center overflow-hidden">
                                <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-8 transform transition-all duration-300 origin-left")}></div>
                                <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-[18px] ml-auto rounded transform transition-all duration-300 delay-75")}></div>
                                <div className={cn(isOpen && "translate-x-10", "bg-foreground h-[2px] w-[20px] ml-auto transform transition-all duration-300 origin-left delay-150")}></div>

                                <div className={cn("absolute items-center justify-between transform transition-all duration-500 top-1/2 -translate-x-10 flex w-0", isOpen && "translate-x-0 w-12")}>
                                    <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 rotate-0 delay-300", isOpen && "rotate-45")}></div>
                                    <div className={cn("absolute bg-foreground h-[2px] w-6 transform transition-all duration-500 -rotate-0 delay-300", isOpen && "-rotate-45")}></div>
                                </div>
                            </div>
                        </div>
                    </button>

                    <div className={cn(!isOpen && "pointer-events-none", "absolute select-none top-0 h-[100svh] sm:hidden")}>
                        <ul className="h-full pl-2 pb-20 flex gap-6 flex-col justify-end">
                            {navbarConfig.map(({ href, label }, key) => (
                                <li key={key}><Link className="text-4xl font-bold text-foreground" href={href}>{label}</Link></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

