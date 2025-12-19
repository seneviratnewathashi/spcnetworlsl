'use client'

import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import Link from 'next/link'

export default function Mission() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6">
              <Target className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-black md:text-gray-900">Our</span> {' '}
              <span className="gradient-text">Mission</span>
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              To promote environmental conservation, social justice, and sustainable livelihoods 
              through participatory approaches, community engagement, education, and long-term 
              development initiatives.
            </p>

            <Link
              href="/mission"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Learn More About Our Mission
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
