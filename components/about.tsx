"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { useRef } from "react"

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null)


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

  return (
    <div className="container" ref={sectionRef}>
      <div className="book-page-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-2 relative inline-block">
            About Me
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </h2>
          <p className="text-muted-foreground mt-4">Get to know me better</p>
        </motion.div>

        <div className="flex items-center justify-center">

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative text-center"
          >
            <motion.h3 variants={item} className="text-3xl font-bold mb-6 relative">
              {"I'm Youssef Atef, a Front-End Developer"}
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary" />
            </motion.h3>

            <motion.p variants={item} className="text-muted-foreground mb-6 leading-relaxed">
              {"Aspiring Front-End Developer eager to leverage technical skills, analytical abilities, and problem-solving competencies to contribute to the growth and success of the organization."}
            </motion.p>

            <motion.p variants={item} className="text-muted-foreground mb-8 leading-relaxed">
              {"When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities."}
            </motion.p>

            <motion.div variants={item} className="grid grid-cols-2 gap-4 mb-8">
              <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right" />
                  <p className="text-4xl font-bold text-primary mb-1 relative">1+</p>
                  <p className="text-sm text-muted-foreground relative">Years Experience</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-left" />
                  <p className="text-4xl font-bold text-primary mb-1 relative">10+</p>
                  <p className="text-sm text-muted-foreground relative">Projects Completed</p>
                </CardContent>
              </Card>
            </motion.div>


          </motion.div>
        </div>
      </div>
    </div>
  )
}
