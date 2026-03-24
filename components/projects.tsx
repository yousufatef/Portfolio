"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const projects = [
    {
      title: "LucaStay",
      description: "Smart hotel & coworking platform with IoT automation and easy booking.",
      image: "/lucastay.png",
      tags: ["Next.js", "TypeScript", "React Query", "Tailwind CSS", "NextIntl"],
      demoLink: "https://www.lucastay.it/en",
      githubLink: "https://www.lucastay.it/en",
    },
    {
      title: "Pass Residency",
      description: "Residency, citizenship, and corporate solutions for your global journey.",
      image: "/passresidency.png",
      tags: ["Next.js", "TypeScript", "NextIntl", "Tailwind CSS"],
      demoLink: "https://www.passresidency.com/en",
      githubLink: "https://www.passresidency.com/en",
    },
    {
      title: "PASS Wealth Management",
      description: "Grow wealth and unlock global opportunities with tailored solutions.",
      image: "/passWealthManagement.png",
      tags: ["Next.js", "TypeScript", "NextIntl", "Tailwind CSS"],
      demoLink: "https://www.passwealthmanagement.com/en",
      githubLink: "https://www.passwealthmanagement.com/en",
    },
    {
      title: "Satellite Industries",
      description: "Innovative solutions for cleaning, hygiene, water treatment, and related products.",
      image: "/satelliteIndustries.png",
      tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
      demoLink: "https://satelliteindustries.eu/en",
      githubLink: "https://satelliteindustries.eu/en",
    },
    {
      title: "EventHub Platform",
      description: "Event platform with secure login, admin dashboard, and one-click booking.",
      image: "/eventhub.png",
      tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
      demoLink: "https://event-booking-ecru.vercel.app/",
      githubLink: "https://github.com/yousufatef/EventBooking",
    },
    {
      title: "Todo Management App",
      description: "Manage tasks easily with email/social login and dark/light modes.",
      image: "/nextjs-todo.png",
      tags: ["Next.js", "TypeScript", "Clerk", "Tailwind CSS"],
      demoLink: "https://next-js-todo-mu.vercel.app/",
      githubLink: "https://github.com/yousufatef/Next.js-To-Do",
    },
    {
      title: "OureCommerce Platform",
      description: "User-friendly e-commerce platform with secure checkout and wishlist.",
      image: "/ourecom.png",
      tags: ["React.js", "TypeScript", "Stripe", "Bootstrap", "react-hook-form", "redux-persist", "redux-toolkit"],
      demoLink: "https://github.com/yousufatef/oureCommerece",
      githubLink: "https://github.com/yousufatef/oureCommerece",
    },
    {
      title: "Elagamy-Store Platform",
      description: "Full-stack e-commerce platform with search, PayPal payments, and responsive design.",
      image: "/e-commerce.png",
      tags: ["React.js", "TypeScript", "Stripe", "Tailwind CSS", "redux-toolkit", "Node.js", "Express", "Mongodb", "JWT"],
      demoLink: "https://github.com/yousufatef/eStore",
      githubLink: "https://github.com/yousufatef/eStore",
    },
    {
      title: "For Ingredients Platform",
      description: "Search food ingredients easily by name, letter, or type.",
      image: "/forIngredients.png",
      tags: ["Vue.js", "Pinia", "Tailwind CSS"],
      demoLink: "https://for-ingredients.vercel.app/",
      githubLink: "https://github.com/yousufatef/For-Ingredients",
    },
    {
      title: "Roofing Agency Platform",
      description: "Platform offering roofing services for customers.",
      image: "/roofingAgency.png",
      tags: ["React.js", "Tailwind CSS"],
      demoLink: "https://roofing-agency-opal.vercel.app/",
      githubLink: "https://github.com/yousufatef/roofing-agency",
    },
    {
      title: "WYOST App",
      description: "Pharmacy platform providing medical guidance and tips.",
      image: "/wyost.png",
      tags: ["HTML", "CSS", "JS"],
      demoLink: "https://wyost-youssef.netlify.app/",
      githubLink: "https://wyost-youssef.netlify.app/",
    },
    {
      title: "Restaurant Management App",
      description: "Manage menus and restaurants easily in one app.",
      image: "/restaurant-management.png",
      tags: ["Vue.js", "Pinia", "Tailwind CSS"],
      demoLink: "https://github.com/yousufatef/Restaurant-Management",
      githubLink: "https://github.com/yousufatef/Restaurant-Management",
    },
    {
      title: "Weather Forecast",
      description: "View latest weather updates like temperature and rain chances.",
      image: "/weather.png",
      tags: ["React.js", "Typescript", "Tailwind CSS"],
      demoLink: "https://elagamyweatherforecast.netlify.app/",
      githubLink: "https://github.com/yousufatef/Weather",
    },
    {
      title: "fireChat Platform",
      description: "Chat platform to send simple messages easily.",
      image: "/fireChat.png",
      tags: ["Vue.js", "firebase"],
      demoLink: "https://fire-chat-seven.vercel.app/",
      githubLink: "https://github.com/yousufatef/fire-chat",
    },
  ];

  return (
    <div className="container" ref={sectionRef}>
      <div className="book-page-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
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
          <p className="text-muted-foreground mt-4">Some of my recent work</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
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
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
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
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors truncate">{project.title}</h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                    </CardContent>
                  </div>

                  <CardFooter className="flex gap-4 mt-2">
                    <Button asChild size="sm" variant="default" className="group/btn relative overflow-hidden">
                      <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10 flex items-center">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </span>
                        <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </Link>
                    </Button>
                    <Button asChild size="sm" variant="outline" className="group/btn">
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </span>
                      </Link>
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

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

