'use client'

import { motion } from 'framer-motion'
import { Eye, TreePine, Scale, Lightbulb, Sparkles } from 'lucide-react'

export default function VisionPage() {

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-black md:text-gray-900">Our</span>{' '}<span className="gradient-text">Vision</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              To build inclusive and resilient communities living in harmony with nature, where 
              people are empowered to protect the environment, uphold human rights, and achieve 
              sustainable development.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
