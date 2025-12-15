'use client'

import { motion } from 'framer-motion'
import { Users, Leaf, MessageCircle, Target, Zap, Heart } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: 'Environmental Protection & Conservation',
      description: 'Biodiversity conservation, ecosystem restoration, and protection of endangered species across Sri Lanka.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Community & Livelihood Development',
      description: 'Supporting marginalized plantation and rural communities through sustainable livelihood initiatives.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Heart,
      title: 'Human Rights & Social Inclusion',
      description: 'Promoting dignity, equality, and access to opportunities for vulnerable populations.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Youth & Community Empowerment',
      description: 'Capacity-building, leadership development, and volunteer engagement for sustainable impact.',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Zap,
      title: 'Health & Sustainability',
      description: 'HIV prevention initiatives and promotion of organic farming practices for healthier communities.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: MessageCircle,
      title: 'Participatory Approaches',
      description: 'Community-driven solutions that empower people to take ownership of their development.',
      color: 'from-pink-500 to-rose-500',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Key Areas of Work</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through participatory and community-driven approaches, we empower youth, families, 
            and rural communities to achieve long-term social, economic, and environmental well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center cursor-pointer"
            >
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative gradient border on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
