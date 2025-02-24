"use client"

import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { products } from "@/lib/products"
import { Button } from "@/components/ui/button"

export default function Product({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-6">{product.description}</p>
        <p className="text-lg mb-6">{product.longDescription}</p>
        <p className="text-2xl font-semibold mb-8">${product.price.toFixed(2)}</p>
        <div className="flex space-x-4">
          <Button>Add to Cart</Button>
          <Button variant="outline">Add to Wishlist</Button>
        </div>
      </motion.div>
    </div>
  )
}

