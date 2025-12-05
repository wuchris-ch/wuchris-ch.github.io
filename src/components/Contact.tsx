"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
    return (
        <section id="contact" className="py-24 bg-secondary/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-0" />
            <div className="container px-4 text-center relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Button size="lg" className="rounded-full px-8 text-lg hover:scale-105 transition-transform" asChild>
                            <Link href="mailto:contact@example.com">
                                <Mail className="w-5 h-5 mr-2" /> Email Me
                            </Link>
                        </Button>
                        <div className="flex gap-4">
                            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:scale-110 transition-transform" asChild>
                                <Link href="https://github.com/wuchris-ch" target="_blank">
                                    <Github className="w-6 h-6" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 hover:scale-110 transition-transform" asChild>
                                <Link href="https://linkedin.com" target="_blank">
                                    <Linkedin className="w-6 h-6" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
