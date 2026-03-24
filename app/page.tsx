import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CreativeHeader from "@/components/creative-header";
import { ScrollToTop } from "@/components/scroll-to-top";
import BookCorners from "@/components/book-corners";
import Projects from "@/components/projects";
import BackgroundAnimation from "@/components/bacground-animation";
import MouseFollower from "@/components/mouse-followe";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <BackgroundAnimation />
      <MouseFollower />
      <BookCorners />

      <CreativeHeader />

      <main className="relative z-10 pt-24">
        <section id="hero" className="min-h-screen flex items-center">
          <Hero />
        </section>

        <section id="about" className="py-20 md:py-32 relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"
            aria-hidden="true"
          />
          <About />
        </section>

        <section id="skills" className="py-20 md:py-32 relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/0 via-accent/5 to-background/0 pointer-events-none"
            aria-hidden="true"
          />
          <Skills />
        </section>

        <section id="projects" className="py-20 md:py-32 relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/0 via-primary/5 to-background/0 pointer-events-none"
            aria-hidden="true"
          />
          <Projects />
        </section>

        <section id="contact" className="py-20 md:py-32 relative">
          <div
            className="absolute inset-0 bg-gradient-to-b from-background/0 via-accent/5 to-background/0 pointer-events-none"
            aria-hidden="true"
          />
          <Contact />
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}