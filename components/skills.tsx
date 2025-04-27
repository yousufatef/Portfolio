"use client"

import { motion, useScroll, useTransform, type Variants } from "framer-motion"
import { useRef } from "react"
import {
    Code,
    FileJson,
    Braces,
    FileType,
    Atom,
    Server,
    Layers,
    Database,
    Github,
    GitBranch,
    Wind,
    Scissors,
    Box,
    FramerIcon as FramerLogo,
    Gauge,
    Cpu,
    FigmaIcon,
} from "lucide-react"

export default function Skills() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [100, -100])

    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
            },
        },
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    }

    // Frontend skills with their icons and brand colors
    const skills = [
        // Row 1
        {
            name: "HTML",
            icon: <Code className="w-8 h-8" />,
            color: "#E34F26",
        },
        {
            name: "CSS",
            icon: <FileType className="w-8 h-8" />,
            color: "#1572B6",
        },
        {
            name: "JavaScript",
            icon: <FileJson className="w-8 h-8" />,
            color: "#F7DF1E",
        },
        {
            name: "TypeScript",
            icon: <Braces className="w-8 h-8" />,
            color: "#3178C6",
        },
        {
            name: "React",
            icon: <Atom className="w-8 h-8" />,
            color: "#61DAFB",
        },
        {
            name: "Next.js",
            icon: <Server className="w-8 h-8" />,
            color: "primary",
        },
        {
            name: "Vue",
            icon: <Layers className="w-8 h-8" />,
            color: "#41B883",
        },
        {
            name: "Redux",
            icon: <Cpu className="w-8 h-8" />,
            color: "#764ABC",
        },
        {
            name: "Tailwind CSS",
            icon: <Wind className="w-8 h-8" />,
            color: "#06B6D4",
        },
        {
            name: "Shadcn UI",
            icon: <Box className="w-8 h-8" />,
            color: "primary",
        },
        {
            name: "Sass",
            icon: <Scissors className="w-8 h-8" />,
            color: "#CC6699",
        },

        // Row 2
        {
            name: "Bootstrap",
            icon: <Box className="w-8 h-8" />,
            color: "#7952B3",
        },
        {
            name: "Git",
            icon: <GitBranch className="w-8 h-8" />,
            color: "primary",
        },
        {
            name: "GitHub",
            icon: <Github className="w-8 h-8" />,
            color: "primary",
        },
        {
            name: "Node.js",
            icon: <Server className="w-8 h-8" />,
            color: "#339933",
        },
        {
            name: "Express",
            icon: <Server className="w-8 h-8" />,
            color: "primary",
        },
        {
            name: "MongoDB",
            icon: <Database className="w-8 h-8" />,
            color: "#47A248",
        },
        {
            name: "Firebase",
            icon: <Database className="w-8 h-8" />,
            color: "#FFCA28",
        },
        {
            name: "Figma",
            icon: <FigmaIcon className="w-8 h-8" />,
            color: "#F24E1E",
        },
        {
            name: "Framer Motion",
            icon: <FramerLogo className="w-8 h-8" />,
            color: "#0055FF",
        },
        {
            name: "Performance",
            icon: <Gauge className="w-8 h-8" />,
            color: "#4285F4",
        },
    ]

    return (
        <div className="container relative" ref={sectionRef}>
            <div className="book-page-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 relative"
                >
                    <h2 className="text-4xl font-bold mb-2 relative inline-block">
                        Skills
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </h2>
                    <p className="text-muted-foreground mt-4">Technologies I work with</p>
                </motion.div>

                <motion.div style={{ y }} className="relative">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-8 justify-items-center"
                    >
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={item}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                                className="flex flex-col items-center"
                            >
                                <div
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/5 flex items-center justify-center relative overflow-hidden group"
                                    style={{ backgroundColor: `${skill.color}15` }}
                                >
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full "
                                        style={{ backgroundColor: skill.color }}
                                    ></div>
                                    <div className="relative flex items-center justify-center" style={{ color: skill.color }}>
                                        {skill.icon}
                                    </div>
                                </div>
                                <span className="mt-2 text-sm font-medium text-center">{skill.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
