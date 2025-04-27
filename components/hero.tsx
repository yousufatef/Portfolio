"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation"

export default function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center text-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="mb-8 relative"
      >
        <div className="relative inline-block">
          <svg
            className="absolute -inset-4 animate-spin-slow"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M75 0L77.3882 71.8941L106.066 21.967L84.1353 67.1078L131.095 43.9055L90.1573 62.1573L147.553 71.8941L94.1942 57.8033L152.451 102.899L95.7725 54.5491L145.312 133.049L94.1942 52.0559L126.924 157.725L90.1573 50.4775L99.8941 173.205L84.1353 50.4775L67.1078 177.553L77.3882 52.0559L32.3009 170.312L71.8941 54.5491L0 152.451L67.1078 57.8033L -27.5531 125.106L62.1573 62.1573L-47.5528 91.0557L58.8427 67.1078L-57.7253 54.5491L57.8033 71.8941L-57.7253 19.4509L58.8427 77.3882L-47.5528 -8.0557L62.1573 82.8427L-27.5531 -0.106601L67.1078 87.1967L0 -27.4508L71.8941 90.4509L32.3009 -45.3119L77.3882 92.9441L67.1078 -52.5528L84.1353 94.5225L99.8941 -48.2051L90.1573 94.5225L126.924 -32.7254L94.1942 92.9441L145.312 -8.04925L95.7725 90.4509L152.451 22.1015L94.1942 87.1967L147.553 53.1059L90.1573 82.8427L131.095 81.0945L84.1353 77.8922L106.066 103.033L77.3882 73.1059L75 150"
              stroke="url(#paint0_linear_3_109)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="paint0_linear_3_109" x1="75" y1="0" x2="75" y2="150" gradientUnits="userSpaceOnUse">
                <stop className="stop-primary" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                <stop offset="1" className="stop-primary" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary to-primary/30 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-primary/20 z-10 relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-background to-background/80">YA</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="relative mb-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          <span className="text-primary">Youssef</span> Atef
        </h1>
        <div className="absolute -right-8 top-0 text-primary/30 text-8xl font-bold -z-10 opacity-50 hidden md:block">
          DEV
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-xl md:text-2xl text-muted-foreground mb-6 h-12"
      >
        <TypeAnimation
          sequence={["Front-End Developer", 2000, "Freelancer", 2000, "Creative Coder", 2000]}
          wrapper="span"
          speed={50}
          repeat={Number.POSITIVE_INFINITY}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="max-w-[600px] text-muted-foreground mb-8"
      >
        I create beautiful, functional, and responsive web applications with modern technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-col sm:flex-row gap-4 mb-12"
      >
        <Button asChild size="lg" className="group relative overflow-hidden">
          <Link href="#contact">
            <span className="relative z-10">Contact Me</span>
            <ArrowRight className="relative z-10 ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="group">
          <Link href="#projects">
            <span className="bg-gradient-to-r from-primary/20 to-primary/40 bg-[length:0%_2px] bg-no-repeat bg-bottom group-hover:bg-[length:100%_2px] transition-all duration-500">
              View Projects
            </span>
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="flex items-center gap-6" // Increased gap
      >
        <Link href="https://github.com/yousufatef" target="_blank" rel="noopener noreferrer" className="bg-primary p-2 rounded-full">
          <Github className="h-6 w-6 text-primary-foreground" />
          <span className="sr-only">GitHub</span>
        </Link>
        <Link href="https://www.linkedin.com/in/youssef-atef-elagamy" target="_blank" rel="noopener noreferrer" className="bg-[#0077B5] p-2 rounded-full">
          <Linkedin className="h-6 w-6 text-white" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="mailto:youssef.atef.business@gmail.com" className="bg-[#C71610] p-2 rounded-full">
          <Mail className="h-6 w-6 text-white" />
          <span className="sr-only">Email</span>
        </Link>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  )
}
