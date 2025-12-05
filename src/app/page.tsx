import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Projects } from "@/components/Projects"
import { About } from "@/components/About"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 bg-background/50 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Chris Wu. All rights reserved.</p>
      </footer>
    </main>
  )
}
