"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { useState, useRef } from "react"

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        setTimeout(() => {
            console.log("Form submitted:", formData)
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            })
            setIsSubmitting(false)
            setIsSuccess(true)

            // Reset success message after 3 seconds
            setTimeout(() => setIsSuccess(false), 3000)
        }, 1500)
    }

    const contactInfo = [
        {
            icon: <Mail className="h-6 w-6 text-primary" />,
            title: "Email",
            value: "youssef.atef.business@gmail.com",
            link: "mailto:youssef.atef.business@gmail.com",
        },
        {
            icon: <Phone className="h-6 w-6 text-primary" />,
            title: "Phone",
            value: "+201115737646",
            link: "tel:+201115737646",
        },
        {
            icon: <MapPin className="h-6 w-6 text-primary" />,
            title: "Location",
            value: "Giza, EGY",
            link: "https://g.co/kgs/N7Z9voA",
        },
    ]

    return (
        <div className="container" ref={sectionRef}>
            <div className="book-page-border">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-2 relative inline-block">
                        Get In Touch
                        <motion.span
                            className="absolute -bottom-2 left-0 w-full h-1 bg-primary"
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </h2>
                    <p className="text-muted-foreground mt-4">Lets work together</p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 justify-center">
                    <motion.div style={{ y: y1 }} className="lg:col-span-2 relative">
                        <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary opacity-20" />
                        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-primary opacity-20" />

                        <Card className="overflow-hidden">
                            <CardContent className="p-6">
                                {isSuccess ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="flex flex-col items-center justify-center py-12 text-center"
                                    >
                                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M20 6L9 17L4 12"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="text-primary"
                                                />
                                            </svg>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                                        <p className="text-muted-foreground">{"Thank you for your message. I'll get back to you soon."}</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <label htmlFor="name" className="text-sm font-medium">
                                                    Your Name
                                                </label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    placeholder="Youssef Atef"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-muted-foreground/20 focus:border-primary transition-colors"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label htmlFor="email" className="text-sm font-medium">
                                                    Your Email
                                                </label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    placeholder="youssef@example.com"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    className="border-muted-foreground/20 focus:border-primary transition-colors"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="subject" className="text-sm font-medium">
                                                Subject
                                            </label>
                                            <Input
                                                id="subject"
                                                name="subject"
                                                placeholder="Project Inquiry"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="border-muted-foreground/20 focus:border-primary transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium">
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                placeholder="Your message here..."
                                                rows={5}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="border-muted-foreground/20 focus:border-primary transition-colors resize-none"
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full sm:w-auto relative overflow-hidden group"
                                            disabled={isSubmitting}
                                        >
                                            <span className="relative z-10 flex items-center">
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            ></circle>
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            ></path>
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : (
                                                    "Send Message"
                                                )}
                                            </span>
                                            <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                                        </Button>
                                    </form>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="relative">
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="overflow-hidden group hover:border-primary/50 transition-colors">
                                        <CardContent className="p-6 flex items-start space-x-4">
                                            <div className="mt-1 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-medium">{info.title}</h3>
                                                <a
                                                    href={info.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-muted-foreground hover:text-primary transition-colors"
                                                >
                                                    {info.value}
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
