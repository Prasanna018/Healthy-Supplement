"use client"

import { motion } from "framer-motion"

export default function Cart() {
  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Cart
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        <p className="text-xl">Your cart is currently empty.</p>
      </motion.div>
    </div>
  )
}

