"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const projects = [
    {
        title: "Global Liquidity Tracker",
        description: "Real-time tracking of global liquidity metrics, central bank balance sheets, and credit spreads. Features a comprehensive dashboard for financial analysis.",
        tags: ["Python", "FastAPI", "Next.js", "Tremor"],
        image: "/screenshots/global-liquidity.png",
        github: "https://github.com/wuchris-ch/global-liquidity-credit-tracker",
        demo: "https://global-liquidity-credit-tracker.vercel.app"
    },
    {
        title: "E-commerce MVP",
        description: "Full-featured e-commerce platform with Stripe payments, Supabase auth, and admin dashboard. Designed for scalability and performance.",
        tags: ["Next.js", "Stripe", "Supabase", "Tailwind"],
        image: "/screenshots/ecom-test.png",
        github: "https://github.com/wuchris-ch/ecom-test",
        demo: "https://ecom-test-nu.vercel.app/"
    },
    {
        title: "Fundus DX ML",
        description: "Retina fundus classification using deep learning models to detect glaucoma, cataracts, and diabetic retinopathy with high accuracy.",
        tags: ["PyTorch", "FastAPI", "React", "ML"],
        image: "/screenshots/fundus-dx-ml.png",
        github: "https://github.com/wuchris-ch/fundus-dx-ml",
        demo: "https://fundus-dx-ml.vercel.app"
    },
    {
        title: "DSPy RAG Tutorial",
        description: "Advanced RAG implementation using DSPy for optimizing language model prompts and retrieval. A deep dive into modern AI architectures.",
        tags: ["DSPy", "RAG", "LLM", "Python"],
        image: "",
        github: "https://github.com/wuchris-ch/dspy-rag-tutorial",
        demo: null
    }
]

export function Projects() {
    return (
        <section id="work" className="py-10 bg-secondary/5 relative">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="container px-4 relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 font-outfit">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                        A selection of my recent work in software engineering, machine learning, and web development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 group h-full flex flex-col hover:shadow-2xl hover:shadow-primary/10">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-secondary/10" />
                                    )}
                                </div>
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <CardTitle className="text-2xl font-outfit group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-secondary/50 backdrop-blur-sm">{tag}</Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="gap-3 pt-2">
                                    <Button variant="outline" size="sm" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                                        <Link href={project.github} target="_blank">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Link>
                                    </Button>
                                    {project.demo && (
                                        <Button size="sm" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all" asChild>
                                            <Link href={project.demo} target="_blank">
                                                <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
