"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/lib/projects"

type FilterCategory = "All" | "Front-End" | "Full-Stack"

const FILTERS: FilterCategory[] = ["All", "Front-End", "Full-Stack"]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All")

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const filtered =
    activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="container" ref={sectionRef}>
      <div className="book-page-border">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 relative"
        >
          <motion.div
            style={{ x }}
            className="absolute -top-10 right-0 text-8xl font-bold text-primary/5 opacity-50 hidden md:block"
          >
            PROJECTS
          </motion.div>

          <h2 className="text-4xl font-bold mb-2 relative inline-block">
            My Projects
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-muted-foreground mt-4">
            Selected React, Next.js, frontend, and full-stack projects by Youssef Atef
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex justify-center gap-2 mb-10"
        >
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 border ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/30"
                  : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          key={activeFilter}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:border-primary/50 group flex flex-col">
                <div className="relative h-48 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Image
                    src={project.image}
                    alt={`${project.title} web application screenshot by Youssef Atef`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority={project.slug === "itqan-quran-erp"}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 z-20 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-black/50 text-white border-none">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <CardHeader>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors truncate">
                        <Link href={`/projects/${project.slug}`}>
                          {project.shortTitle}
                        </Link>
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </CardContent>
                  </div>

                  <CardFooter className="flex gap-4 mt-2">
                    <Button asChild size="sm" variant="default" className="group/btn relative overflow-hidden">
                      <Link href={`/projects/${project.slug}`}>
                        <span className="relative z-10 flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Case Study
                        </span>
                        <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="group/btn">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          Source
                        </span>
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" variant="outline" className="group relative overflow-hidden">
            <Link href="https://github.com/yousufatef" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center">
                <Github className="h-4 w-4 mr-2" />
                View More on GitHub
              </span>
              <span className="absolute inset-0 bg-primary/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
