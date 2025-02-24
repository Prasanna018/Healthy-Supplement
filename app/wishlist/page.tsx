"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Wishlist() {
  // In a real application, you would fetch the wishlist items from a database or API
  const wishlistItems = [
    { id: 1, name: "Immune Boost Plus", price: 29.99 },
    { id: 2, name: "Heart Health Formula", price: 34.99 },
  ]

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Wishlist
      </motion.h1>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        {wishlistItems.length > 0 ? (
          <ul className="space-y-4">
            {wishlistItems.map((item) => (
              <li key={item.id} className="flex justify-between items-center border-b pb-4">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
                <Button variant="outline">Remove</Button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xl">Your wishlist is currently empty.</p>
        )}
      </motion.div>
    </div>
  )
}

