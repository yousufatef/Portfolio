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
import JsonLd from "@/components/json-ld";
import { projects } from "@/lib/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": absoluteUrl("/#person"),
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    jobTitle: [
      "Software Engineer",
      "Frontend Developer",
      "Full-Stack Developer",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Giza",
      addressCountry: "EG",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin],
    knowsAbout: siteConfig.skills,
    hasOccupation: {
      "@type": "Occupation",
      name: "Software Engineer",
      occupationalCategory: "15-1252.00",
      skills: siteConfig.skills.join(", "),
    },
    mainEntityOfPage: absoluteUrl("/"),
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Open to opportunities",
    },
    workExample: projects.slice(0, 8).map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      url: absoluteUrl(`/projects/${project.slug}`),
      description: project.seoDescription,
      programmingLanguage: project.tags,
      image: absoluteUrl(project.image),
    })),
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: "Youssef Atef Portfolio",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@id": absoluteUrl("/#person"),
    },
  }

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <JsonLd data={[personSchema, websiteSchema]} />
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
