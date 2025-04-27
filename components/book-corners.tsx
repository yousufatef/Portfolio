"use client"

import { motion } from "framer-motion"

export default function BookCorners() {
  return (
    <>
      {/* Top left corner */}
      <motion.div
        className="fixed top-6 left-6 w-16 h-16 pointer-events-none z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1C1 1 63 1 63 63"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M10 1C10 1 63 1 63 54"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-primary/50"
          />
        </svg>
      </motion.div>

      {/* Top right corner */}
      <motion.div
        className="fixed top-6 right-6 w-16 h-16 pointer-events-none z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M63 1C63 1 1 1 1 63"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M54 1C54 1 1 1 1 54"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-primary/50"
          />
        </svg>
      </motion.div>

      {/* Bottom left corner */}
      <motion.div
        className="fixed bottom-6 left-6 w-16 h-16 pointer-events-none z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 63C1 63 63 63 63 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M10 63C10 63 63 63 63 10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-primary/50"
          />
        </svg>
      </motion.div>

      {/* Bottom right corner */}
      <motion.div
        className="fixed bottom-6 right-6 w-16 h-16 pointer-events-none z-10 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
      >
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M63 63C63 63 1 63 1 1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-primary"
          />
          <path
            d="M54 63C54 63 1 63 1 10"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            className="text-primary/50"
          />
        </svg>
      </motion.div>
    </>
  )
}
