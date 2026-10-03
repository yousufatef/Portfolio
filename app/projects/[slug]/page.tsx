import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ExternalLink, Github } from "lucide-react"
import CreativeHeader from "@/components/creative-header"
import Footer from "@/components/footer"
import JsonLd from "@/components/json-ld"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProjectBySlug, projects } from "@/lib/projects"
import { absoluteUrl, siteConfig } from "@/lib/site"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return {}
  }

  const title = `${project.title} Case Study`
  const description = project.seoDescription
  const url = `/projects/${project.slug}`

  return {
    title,
    description,
    keywords: [
      project.title,
      `${project.shortTitle} project`,
      "Youssef Atef portfolio project",
      "React Next.js Developer",
      ...project.tags,
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: `${project.title} | Youssef Atef Portfolio`,
      description,
      images: [
        {
          url: absoluteUrl(project.image),
          width: 1200,
          height: 675,
          alt: `${project.title} project screenshot by Youssef Atef`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Youssef Atef`,
      description,
      images: [absoluteUrl(project.image)],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  const projectUrl = absoluteUrl(`/projects/${project.slug}`)
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Projects",
          item: absoluteUrl("/#projects"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: projectUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": project.type,
      "@id": `${projectUrl}#software`,
      name: project.title,
      url: projectUrl,
      image: absoluteUrl(project.image),
      description: project.seoDescription,
      applicationCategory: project.category === "Full-Stack" ? "BusinessApplication" : "WebApplication",
      operatingSystem: "Web",
      programmingLanguage: project.tags,
      creator: {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.name,
        url: siteConfig.url,
      },
      sameAs: [project.demoLink, project.githubLink],
    },
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "@id": `${projectUrl}#creative-work`,
      name: project.title,
      url: projectUrl,
      image: absoluteUrl(project.image),
      description: project.seoDescription,
      author: {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteConfig.name,
      },
      keywords: project.tags.join(", "),
    },
  ]

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      <JsonLd data={jsonLd} />
      <CreativeHeader />
      <main className="relative z-10 pt-32 pb-20">
        <article className="container">
          <div className="book-page-border">
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#projects" className="hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {project.shortTitle}
                </li>
              </ol>
            </nav>

            <header className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  {project.category} Project
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.seoDescription}
                </p>
                <div className="flex flex-wrap gap-3 mb-8" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit {project.shortTitle}
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View {project.shortTitle} source
                    </Link>
                  </Button>
                </div>
              </div>

              <figure className="relative overflow-hidden rounded-lg border border-primary/20 bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} web application screenshot`}
                  width={1200}
                  height={675}
                  priority
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="aspect-video w-full object-cover"
                />
              </figure>
            </header>

            <section className="mt-14 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <aside aria-labelledby="project-summary-heading">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h2 id="project-summary-heading" className="text-2xl font-bold">
                      Project Summary
                    </h2>
                    <dl className="space-y-3 text-sm">
                      <div>
                        <dt className="font-medium">Role</dt>
                        <dd className="text-muted-foreground">Youssef Atef, {project.category} Developer</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Main Stack</dt>
                        <dd className="text-muted-foreground">{project.tags.join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="font-medium">Location Focus</dt>
                        <dd className="text-muted-foreground">Egypt and remote web development opportunities</dd>
                      </div>
                    </dl>
                  </CardContent>
                </Card>
              </aside>

              <section aria-labelledby="project-highlights-heading">
                <h2 id="project-highlights-heading" className="text-3xl font-bold mb-4">
                  What This Project Shows
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  This portfolio project demonstrates Youssef Atef's practical software engineering work with
                  modern frontend and full-stack technologies, including the ability to build maintainable,
                  responsive, and user-focused web applications.
                </p>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="rounded-lg border border-primary/10 bg-primary/5 p-4">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </section>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
