'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Stats() {
  const stats = [
    { 
      label: 'Project Area', 
      value: 20, 
      suffix: ' Acres',
      description: 'Kodigahakanda Conservation Site'
    },
    { 
      label: 'Families Supported', 
      value: 1000, 
      suffix: '+',
      description: 'Across plantation communities'
    },
    { 
      label: 'Years of Impact', 
      value: 20, 
      suffix: '+',
      description: 'Serving communities in Sri Lanka'
    },
    { 
      label: 'Active Programs', 
      value: 10, 
      suffix: '+',
      description: 'Ongoing conservation and development initiatives'
    },
  ]

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Making a Difference That <span className="gradient-text">Counts</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real numbers. Real impact. Real change in communities across Sri Lanka.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between min-h-[250px] cursor-pointer relative overflow-hidden">
                {/* Gradient accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                
                <div className="flex-grow flex items-center justify-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{stat.label}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    if (!isInView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, isInView])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      onViewportEnter={() => setIsInView(true)}
      className="text-4xl md:text-5xl font-bold break-words"
    >
      {count.toLocaleString()}{suffix}
    </motion.div>
  )
}
