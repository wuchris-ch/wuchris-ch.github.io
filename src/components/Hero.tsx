"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />
                <img
                    src="/assets/hero-bg.png"
                    alt="Background"
                    className="w-full h-full object-cover opacity-40 dark:opacity-40 opacity-20 scale-105 animate-slow-zoom"
                />
            </div>

            <div className="container relative z-20 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 font-outfit bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/50 drop-shadow-2xl">
                        Chris Wu
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Fullstack Software and AI Developer. Crafting <span className="text-primary font-medium">intelligent</span>, <span className="text-primary font-medium">scalable</span>, and <span className="text-primary font-medium">efficient</span> digital experiences.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="rounded-full text-lg px-8 h-12 hover:scale-105 transition-transform" asChild>
                        <Link href="#work">
                            View Work <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-full text-lg px-8 h-12 hover:scale-105 transition-transform bg-transparent backdrop-blur-sm" asChild>
                        <Link href="#contact">
                            Contact Me
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    )
}
