"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="flex flex-col items-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Natural Supplements for a Healthier You
        </motion.h1>
        <motion.p
          className="text-xl text-center mb-12 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover our range of natural supplements designed to support your health and well-being.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link
            href="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Shop Now
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

