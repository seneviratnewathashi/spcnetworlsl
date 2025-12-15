'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CallToAction() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-700 text-white relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Take Action Today
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to make a difference?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join us in creating sustainable futures for communities across Sri Lanka. 
            Whether as a volunteer, partner, or supporter, your contribution matters.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/volunteer"
                className="group bg-white text-primary-700 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                Join as a Volunteer
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/partner"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
              >
                Partner With Us
              </Link>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">Trusted</div>
              <div className="text-sm text-gray-400 mt-1">Global Network</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">Proven</div>
              <div className="text-sm text-gray-400 mt-1">Track Record</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">Sustainable</div>
              <div className="text-sm text-gray-400 mt-1">Approach</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-400">Inclusive</div>
              <div className="text-sm text-gray-400 mt-1">Community</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
