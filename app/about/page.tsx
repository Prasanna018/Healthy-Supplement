"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About HealthBoost
      </motion.h1>
      <motion.div
        className="prose lg:prose-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <p>
          HealthBoost is dedicated to providing high-quality, natural supplements to support your health and well-being.
          Our team of experts carefully selects and formulates each product to ensure maximum efficacy and safety.
        </p>
        <p>
          With a focus on scientific research and natural ingredients, we strive to offer solutions for various health
          conditions, helping you lead a healthier, more vibrant life.
        </p>
      </motion.div>
    </div>
  )
}

