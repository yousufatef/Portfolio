"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CreativeHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Determine active section
      const sections = ["hero", "about", "skills", "projects", "contact"]
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container">
          <div className="book-nav-border relative">
            <div className="absolute top-0 left-0 w-full h-full bg-background/80 backdrop-blur-md -z-10"></div>

            <div className="flex h-16 items-center justify-between px-6">
              <motion.div
                className="font-bold text-xl"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Link href="#hero" className="flex items-center gap-2">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 3L33 18L18 33L3 18L18 3Z" className="fill-primary" />
                    <path d="M18 9L27 18L18 27L9 18L18 9Z" fill="currentColor" />
                    <circle cx="18" cy="18" r="3" className="fill-background" />
                  </svg>
                  <span className="text-primary">Youssef Atef</span>
                </Link>
              </motion.div>

              <nav className="hidden md:flex items-center gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.href.substring(1)
                        ? "text-white bg-primary dark:text-black"
                        : "hover:text-primary hover:bg-primary/10"
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <ModeToggle />
                <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-16 h-6 overflow-hidden">
              <div className="w-16 h-16 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-background md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="book-page-border h-full flex flex-col">
              <div className="flex h-16 items-center justify-between px-6 border-b">
                <div className="font-bold text-xl">
                  <span className="text-primary">Youssef Atef</span>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              <nav className="flex flex-col gap-2 p-6 flex-grow">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center py-3 px-4 text-lg font-medium rounded-md transition-all duration-300 ${activeSection === item.href.substring(1)
                        ? "text-white bg-primary"
                        : "hover:text-primary hover:bg-primary/10"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t text-center text-muted-foreground">
                <p>© {new Date().getFullYear()} Youssef Atef</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
