"use client"

import type React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { Mail, MapPin, Phone } from "lucide-react"
import { useState, useRef } from "react"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import * as z from "zod"

// const contactFormSchema = z.object({
//     name: z
//         .string()
//         .trim()
//         .min(1, { message: "Name is required." })
//         .min(2, { message: "Name must be at least 2 characters." }),

//     email: z
//         .string()
//         .trim()
//         .min(1, { message: "Email is required." })
//         .email({ message: "Please enter a valid email address." }),

//     subject: z
//         .string()
//         .trim()
//         .min(1, { message: "Subject is required." })
//         .min(5, { message: "Subject must be at least 5 characters." }),

//     message: z
//         .string()
//         .trim()
//         .min(1, { message: "Message is required." })
//         .min(10, { message: "Message must be at least 10 characters." }),
// });

// type ContactFormValues = z.infer<typeof contactFormSchema>

export default function Contact() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
    const y2 = useTransform(scrollYProgress, [0, 1], [50, -50])

    // const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess,] = useState(false)

    // const form = useForm<ContactFormValues>({
    //     resolver: zodResolver(contactFormSchema),
    //     defaultValues: {
    //         name: "",
    //         email: "",
    //         subject: "",
    //         message: "",
    //     },
    // })

    // const onSubmit = async (data: ContactFormValues) => {
    //     setIsSubmitting(true)

    //     try {
    //         const response = await fetch("/api/contact", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(data),
    //         })

    //         if (!response.ok) {
    //             throw new Error("Failed to send message")
    //         }

    //         form.reset()
    //         setIsSuccess(true)

    //         // Reset success message after 3 seconds
    //         setTimeout(() => setIsSuccess(false), 3000)
    //     } catch (error) {
    //         console.error("Error submitting form:", error)
    //         alert("Failed to send the message. Please try again later.")
    //     } finally {
    //         setIsSubmitting(false)
    //     }
    // }

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

                <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
                    <motion.div style={{ y: y1 }} className="lg:col-span-2 relative px-2 sm:px-6">
                        <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-primary opacity-20 hidden md:block" />
                        <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-primary opacity-20 hidden md:block" />

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
                                    <div className="flex flex-col items-center justify-center py-8 text-center space-y-6">
                                        <h3 className="text-2xl font-bold">Prefer to chat?</h3>
                                        <p className="text-muted-foreground">You can reach out to me directly on WhatsApp.</p>
                                        <Button
                                            size="lg"
                                            className="w-full sm:w-auto relative overflow-hidden group bg-[#25D366] hover:bg-[#128C7E] text-white"
                                            onClick={() => window.open("https://wa.me/201115737646", "_blank")}
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                                </svg>
                                                Message me
                                            </span>
                                            <span className="absolute inset-0 bg-white/20 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                                        </Button>

                                        {/* 
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                <div className="space-y-2 text-left">
                                                    <label htmlFor="name" className="text-sm font-medium">
                                                        Your Name
                                                    </label>
                                                    <Input
                                                        id="name"
                                                        placeholder="Youssef Atef"
                                                        {...form.register("name")}
                                                        className="border-muted-foreground/20 focus:border-primary transition-colors"
                                                    />
                                                    {form.formState.errors.name && (
                                                        <p className="text-xs text-destructive mt-1">{form.formState.errors.name.message}</p>
                                                    )}
                                                </div>
                                                <div className="space-y-2 text-left">
                                                    <label htmlFor="email" className="text-sm font-medium">
                                                        Your Email
                                                    </label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="youssef@example.com"
                                                        {...form.register("email")}
                                                        className="border-muted-foreground/20 focus:border-primary transition-colors"
                                                    />
                                                    {form.formState.errors.email && (
                                                        <p className="text-xs text-destructive mt-1">{form.formState.errors.email.message}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="space-y-2 text-left">
                                                <label htmlFor="subject" className="text-sm font-medium">
                                                    Subject
                                                </label>
                                                <Input
                                                    id="subject"
                                                    placeholder="Project Inquiry"
                                                    {...form.register("subject")}
                                                    className="border-muted-foreground/20 focus:border-primary transition-colors"
                                                />
                                                {form.formState.errors.subject && (
                                                    <p className="text-xs text-destructive mt-1">{form.formState.errors.subject.message}</p>
                                                )}
                                            </div>
                                            <div className="space-y-2 text-left">
                                                <label htmlFor="message" className="text-sm font-medium">
                                                    Message
                                                </label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Your message here..."
                                                    rows={5}
                                                    {...form.register("message")}
                                                    className="border-muted-foreground/20 focus:border-primary transition-colors resize-none"
                                                />
                                                {form.formState.errors.message && (
                                                    <p className="text-xs text-destructive mt-1">{form.formState.errors.message.message}</p>
                                                )}
                                            </div>
                                            <Button
                                                type="submit"
                                                size="lg"
                                                className="w-full sm:w-auto relative overflow-hidden group text-left"
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
                                        */}
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>

                    <motion.div style={{ y: y2 }} className="relative px-6">
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
