'use client'

import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import Link from 'next/link'

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full mb-6">
              <Eye className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black md:text-gray-900">Our</span> {' '}
              <span className="gradient-text">Vision</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To build inclusive and resilient communities living in harmony with nature, where 
              people are empowered to protect the environment, uphold human rights, and achieve 
              sustainable development.
            </p>

            <Link
              href="/vision"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondary-500 to-primary-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Learn More About Our Vision
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
