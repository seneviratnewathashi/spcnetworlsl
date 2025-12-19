'use client'

import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const values = [
    'Sustainability and Environmental Responsibility',
    'Community Participation and Empowerment',
    'Integrity and Transparency',
    'Human Rights and Social Justice',
    'Collaboration and Partnership',
  ]

  return (
    <>
      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-black md:text-gray-900">About</span> {' '}
                <span className="gradient-text">SPC Network</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Sustainable Participatory Communicative Network (SPC Network) is a community-based, 
                non-profit network dedicated to advancing environmental protection, inclusive 
                community development, and social justice across Sri Lanka.
              </p>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                SPC Network works with a strong focus on the development of marginalized plantation and 
                rural communities, promoting sustainable livelihoods, protecting human rights, and 
                strengthening community resilience through participatory and people-centered approaches. 
                Our work integrates environmental conservation with social and economic development, 
                recognizing the strong link between healthy ecosystems and thriving communities.
              </p>

              <div className="space-y-3">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* <div className="relative bg-white p-8 shadow-2xl"> */}
                <div className="aspect-video">
                  <Image
                    src="/images/pexels-shvetsa-5029919.jpg"
                    alt="Community in Action"
                    fill
                    className="object-cover"
                  />
                </div>
              {/* </div> */}

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">20+</div>
                  <div className="text-sm text-gray-600 mt-1">Years of Impact</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
