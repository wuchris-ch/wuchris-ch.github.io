"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const skills = [
    "JavaScript/TypeScript", "React", "Next.js", "Python", "FastAPI",
    "Machine Learning", "PyTorch", "Tailwind CSS", "Node.js", "PostgreSQL",
    "Docker", "AWS", "Git", "System Design", "DSPy", "RAG"
]

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-4 relative z-10 mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-outfit">About Me</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            I'm a passionate Software Engineer with a focus on building scalable web applications and integrating machine learning solutions.
                            I love bridging the gap between complex backend logic and beautiful, intuitive frontend interfaces.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            With a background in both full-stack development and data science, I bring a unique perspective to every project, ensuring robust architecture and data-driven decisions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl"
                    >
                        <h3 className="text-xl font-bold mb-6 font-outfit">Technical Arsenal</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Badge variant="secondary" className="text-base py-1 px-3 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                                        {skill}
                                    </Badge>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
