"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Navbar() {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
            <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-background/60 backdrop-blur-md border border-border/40 rounded-full shadow-lg transition-all hover:border-border/80 hover:shadow-primary/10">
                <Link href="/" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors font-outfit">
                    Chris Wu
                </Link>

                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 data-[active]:bg-white/10")}>
                                <Link href="#work">
                                    Work
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 data-[active]:bg-white/10")}>
                                <Link href="#about">
                                    About
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/5 data-[active]:bg-white/10")}>
                                <Link href="#contact">
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/10">
                        <Link href="https://github.com/wuchris-ch" target="_blank">
                            <Github className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="rounded-full hover:bg-white/10">
                        <Link href="https://linkedin.com" target="_blank">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
