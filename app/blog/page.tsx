"use client"

import { Client } from "@notionhq/client"
import { motion } from "framer-motion"

const notion = new Client({ auth: process.env.NOTION_API_KEY })

async function getPosts() {
  const databaseId = process.env.NOTION_DATABASE_ID
  const response = await notion.databases.query({
    database_id: databaseId,
  })
  return response.results
}

export default async function Blog() {
  const posts = await getPosts()

  return (
    <div className="container mx-auto px-6 py-16">
      <motion.h1
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {posts.map((post) => (
          <div key={post.id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{post.properties.Name.title[0].plain_text}</h2>
            <p className="text-gray-600">{post.properties.Description.rich_text[0].plain_text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

