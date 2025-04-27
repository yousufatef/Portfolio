"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="container flex flex-col items-center justify-center gap-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center mb-2"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2L30 16L16 30L2 16L16 2Z" className="fill-primary" />
            <path d="M16 8L24 16L16 24L8 16L16 8Z" fill="currentColor" />
          </svg>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-sm text-muted-foreground"
        >
          &copy; {new Date().getFullYear()} Youssef Atef. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xs text-muted-foreground"
        >
          <div className="flex justify-center items-center gap-2">
            <span>Built with love</span> <Heart />
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
